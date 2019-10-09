import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { AuthenticationService } from '../_service/authentication.service';
import { User } from '../_models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  userFromApi: User;
  loading: Boolean = false;

  constructor(private userService: UserService, private authService: AuthenticationService) {
      this.currentUser = this.authService.currentUserValue;
      console.log(this.authService.currentUserValue)
   }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id)
      .pipe(
        first()
      )
      .subscribe(
        user => {
          this.loading = false;
          this.userFromApi = user;          
        },
        err => {
          console.log(err)
        }
      )
  }

}
