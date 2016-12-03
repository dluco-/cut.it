import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  // moduleId: module.id,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  addUser(newName: string): void {
    this.userService.addUser(newName)
      .then(users => this.users = users);
  }

  updateUser(key: string, newName: string): void {
    this.userService.updateUser(key, newName)
      .then(users => this.users = users);
  }

  deleteUser(key: string): void {
    this.userService.deleteUser(key)
      .then(users => this.users = users);
  }

  deleteAllUsers(): void {
    this.userService.deleteAllUsers()
      .then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
  }
}
