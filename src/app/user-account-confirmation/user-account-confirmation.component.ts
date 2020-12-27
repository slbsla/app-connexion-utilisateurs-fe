import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-account-confirmation',
  templateUrl: './user-account-confirmation.component.html',
  styleUrls: ['./user-account-confirmation.component.css']
})
export class UserAccountConfirmationComponent implements OnInit {


 form: FormGroup = new FormGroup({
    accountToken: new FormControl(''),
 });

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output()
  public messageEvent = new EventEmitter();

  
  cancel() {
    this.messageEvent.emit('login');
  }
  confirm() {
    this.messageEvent.emit('login');
  }
  
}
