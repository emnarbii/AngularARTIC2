import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userList: User[] = [];

  constructor(private userS: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userS.getUserList().subscribe((result) => {
      this.userList = result;
      console.log(result);
    });
  }
}
