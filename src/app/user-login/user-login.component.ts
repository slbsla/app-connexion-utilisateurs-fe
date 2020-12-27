import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
 });

 @Input() error: string | null;

 @Output() submitEM = new EventEmitter();



 submit() {
      if (this.form.valid) {
          this.submitEM.emit(this.form.value);
      }
  }

  @Output()
  public messageEvent = new EventEmitter();

  gotoSignUp() {
      this.messageEvent.emit('signup');
  }

  gotoForget() {
      this.messageEvent.emit('forget');
  }
}
