import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
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
    this.messageEvent.emit('confirm-account');
  }

  
}
