import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/user.service';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loading: Boolean = false;
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll()
      .pipe(
        first()
      )
      .subscribe(
        users => {
          this.loading = false;
          this.users = users;
        }
      )
  }

}
