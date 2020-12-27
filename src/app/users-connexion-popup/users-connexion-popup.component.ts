import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter } from 'events';
import { ConnexionServiceService } from '../connexion-service.service';
import { DialogData } from '../my-main-navigator/my-main-navigator.component';


@Component({
  selector: 'app-users-connexion-popup',
  templateUrl: './users-connexion-popup.component.html',
  styleUrls: ['./users-connexion-popup.component.css']
})
export class UsersConnexionPopupComponent implements OnInit {

  screen:string = 'login' ; 

  constructor(
    public dialog: MatDialogRef<UsersConnexionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private service: ConnexionServiceService) {

    }

  ngOnInit(): void {
  }

  closePopup() {
    this.dialog.close();
  }

  recieveMessage($event) {
    this.screen = $event ;
  }

}
