import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-logout-confirm',
  templateUrl: './user-logout-confirm.component.html',
  styleUrls: ['./user-logout-confirm.component.css']
})
export class UserLogoutConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public messageEvent = new EventEmitter();
}
