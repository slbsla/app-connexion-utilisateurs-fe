import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-confirm-token',
  templateUrl: './user-confirm-token.component.html',
  styleUrls: ['./user-confirm-token.component.css']
})
export class UserConfirmTokenComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    token: new FormControl(''),
 });

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
