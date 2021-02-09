import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Entry } from '../Models/interfaces';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  entries: Entry[] = [];
  backdropOn = false;
  createForm = false;
  editForm = false;
  alert = false;
  selectedContact: Entry;
  constructor(private api: ApiService) { }

  async ngOnInit() {
    this.entries = await this.api.GetEntries();
    console.log('entries', this.entries)
  }

  create() {
    this.backdropOn = true;
    this.createForm = true;
  }

  exit(param: boolean) {
    this.backdropOn = param;
    this.editForm = param;
    this.createForm = param;
  }

  close() {
    this.backdropOn = false;
    this.createForm = false;
    this.editForm = false;
  }

  selectContact(contact: Entry) {
    this.backdropOn = true;
    this.editForm = true;
    this.selectedContact = contact;
  }

  confirmDelete(contact: Entry) {
    this.backdropOn = true;
    this.alert = true;
    this.selectedContact = contact
  }

  async deleteContact() {
    let response = await this.api.RemoveContact(this.selectedContact.id)
    if (response) {
      this.backdropOn = false;
      this.alert = false
    } else {
      console.log('something went wrong')
    }
  }

  cancel() {
    this.backdropOn = false;
    this.alert = false;
  }

}
