import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMainNavigatorComponent } from './my-main-navigator/my-main-navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserForgetPwdComponent } from './user-forget-pwd/user-forget-pwd.component';
import { UserConfirmTokenComponent } from './user-confirm-token/user-confirm-token.component';
import { UserUpdateForgPwdComponent } from './user-update-forg-pwd/user-update-forg-pwd.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserAccountConfirmationComponent } from './user-account-confirmation/user-account-confirmation.component';
import { ConnectedUserPanelComponent } from './connected-user-panel/connected-user-panel.component';
import { UserLogoutConfirmComponent } from './user-logout-confirm/user-logout-confirm.component';
import { UsersConnexionPopupComponent } from './users-connexion-popup/users-connexion-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MyMainNavigatorComponent,
    Component1Component,
    Component2Component,
    UserLoginComponent,
    UserForgetPwdComponent,
    UserConfirmTokenComponent,
    UserUpdateForgPwdComponent,
    UserSignUpComponent,
    UserAccountConfirmationComponent,
    ConnectedUserPanelComponent,
    UserLogoutConfirmComponent,
    UsersConnexionPopupComponent
  ],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    HttpClientModule,
    OverlayModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
