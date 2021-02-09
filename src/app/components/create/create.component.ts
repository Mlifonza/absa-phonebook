import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Output('exit') exit: EventEmitter<boolean> = new EventEmitter(); 
  name: string;
  number: any;
  openSpinner = false;
  message = '';
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  close() {
    this.exit.emit(false)
  }

  async save() {
    this.openSpinner = true;
    const payload = {
      name: this.name,
      number: this.number
    }

    console.log('payload', payload)

    let response = await this.api.AddContact(payload);
    console.log('response', response)
    if (response) {
      this.openSpinner = false;
      this.exit.emit(false);
    } else {
      this.openSpinner = false;
      this.message = 'Oops, try that again.'
    }
  }

}
