import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_service/authentication.service';
import { User } from './_models/user';
import { Role } from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car';
  currentUser: User;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser
      .subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
