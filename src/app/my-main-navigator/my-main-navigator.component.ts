import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionServiceService } from '../connexion-service.service';
import { Router } from '@angular/router';
import { UsersConnexionPopupComponent } from '../users-connexion-popup/users-connexion-popup.component';

export class DialogData  {
}


@Component({
  selector: 'app-my-main-navigator',
  templateUrl: './my-main-navigator.component.html',
  styleUrls: ['./my-main-navigator.component.css']
})
export class MyMainNavigatorComponent  implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, 
              private service: ConnexionServiceService,
              private router:Router,
              public eDialog: MatDialog, public cDialog: MatDialog) {
  }
  ngOnInit(): void {
    this.laodConnexion();
  }



  laodConnexion() {
    const cdd = this.cDialog.open(UsersConnexionPopupComponent, {
      width: '600px' , height : '300px', disableClose : true ,
      data: [{'id': 1 , 'data' : '' }]
    });
    cdd.afterClosed().subscribe(result => {

    });
  } 

}
