import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-update-forg-pwd',
  templateUrl: './user-update-forg-pwd.component.html',
  styleUrls: ['./user-update-forg-pwd.component.css']
})
export class UserUpdateForgPwdComponent implements OnInit {


    
  form: FormGroup = new FormGroup({
    password : new FormControl(''),
    passwordConfirm : new FormControl('')
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
