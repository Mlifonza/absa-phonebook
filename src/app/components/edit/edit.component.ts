import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Entry } from '../Models/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  @Output('exit') exit: EventEmitter<boolean> = new EventEmitter();
  @Input('contact') contact: Entry;
  nameMessage = '';
  numberMessage = '';
  constructor(private api: ApiService) { }
  
  ngOnInit() {
  }
  
  close() {
    this.exit.emit(false)
  }
  
  save() {
    this.exit.emit(false);
  }
  
  disable() {
    if (this.contact.name !== null || this.contact.number !== null) {
      return false;
    } else {
      return true;
    }
  }
  
  async onNameChange() {
    if (this.contact.name.length > 1) {
      let response = await this.api.UpdateName(this.contact.id, this.contact.name)
      if (!response) {
        this.nameMessage = 'Oops, please try again'
      }
    }
  }
  
  async onNumberChange() {
    if (this.contact.name.length > 1) {
      let response = await this.api.UpdateNumber(this.contact.id, this.contact.number)
      if (!response) {
        this.numberMessage = 'Oops, please try again'
      }
    }
  }
  
}
