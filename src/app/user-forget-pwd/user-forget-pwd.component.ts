import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-forget-pwd',
  templateUrl: './user-forget-pwd.component.html',
  styleUrls: ['./user-forget-pwd.component.css']
})
export class UserForgetPwdComponent implements OnInit {

  
  form: FormGroup = new FormGroup({
    useremail: new FormControl(''),
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
    this.messageEvent.emit('confirm-token');
  }
}
