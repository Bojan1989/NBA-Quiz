import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuard } from '../guards/route.guard';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  role = localStorage.getItem('role');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.setUserLoggedOut();
    this.defStorage;
  //  this.router.navigate(['/login']);
  }

  defStorage(){
    localStorage.setItem('token', "nema");
    localStorage.setItem('role', "player");
    localStorage.setItem('username', "none");
  }

}
