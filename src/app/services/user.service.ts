import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from "../model/user";

 // const signupUrl = "https://nba-quiz-api.herokuapp.com/user/signup";
 // const loginUrl = "https://nba-quiz-api.herokuapp.com/user/login";

// http://localhost:3000/
const signupUrl = "http://localhost:3000/user/signup";
const loginUrl = "http://localhost:3000/user/login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userLogin(user) {
    return this.http.post(loginUrl, user).pipe(map(res => {
      return res;
    }));
  }

  addUser(user: User) {
    return this.http.post(signupUrl, user).pipe(map(res => {
      return new User(res);
    }));
  }

}
