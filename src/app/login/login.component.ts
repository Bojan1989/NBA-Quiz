import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    "username": "",
    "password": ""
  };

  userData: any;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.defStorage();
  }

  login(){
    this.userService.userLogin(this.user).pipe(
      map(res => {
        this.userData = res;
        localStorage.setItem('token', this.userData.token);
        localStorage.setItem('username', this.userData.username);
        localStorage.setItem('role', this.userData.role);
      })
    ).subscribe(res => {
      if (localStorage.getItem('token') != "") {
        this.authService.setUserLoggedIn();
        this.router.navigate(['/dashboard']);
      }
      return res;
    });
  }

  defStorage(){
    localStorage.setItem('token', "none");
    localStorage.setItem('role', "player");
    localStorage.setItem('username', "none");
  }

}
