import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  users = [];
  searchStr = '';

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(users =>
      this.users = users);
  }

}
