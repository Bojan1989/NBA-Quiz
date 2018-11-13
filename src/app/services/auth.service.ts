import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({

  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  private isUserLoggedIn: boolean;

  constructor() {
    this.isUserLoggedIn = false;
  }

//not working
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

setUserLoggedIn() {
  this.isUserLoggedIn = this.isAuthenticated();
}

setUserLoggedOut() {
  this.isUserLoggedIn = false;
}

getUserLoggedIn() {
  return this.isUserLoggedIn;
}

}
