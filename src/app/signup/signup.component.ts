import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {
    "username": "",
    "password": "",
    "role": "player"
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  saveUser(){
    this.userService.addUser(this.user).subscribe(res => {
      alert("Unos uspesan");
    });
  }

}
