import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from './user';

@Injectable()
export class UserService {
  users: FirebaseListObservable<User[]>;

  constructor(af: AngularFire) {
    this.users = af.database.list('/users');
  }

  getUsers(): Promise<User[]> {
    return Promise
      .resolve(this.users)
      .then(resp => this.users)
      .catch(err => console.log(err, 'Cannot get users.'));
  }

  addUser(newUser: string, newCompanyKey: string): Promise<User[]> {
    return Promise
      .resolve(this.users.push({ name: newUser, company: newCompanyKey }))
      .then(resp => this.users)
      .catch(err => console.log(err, 'Cannot add user.'));
  }

  updateUser(key: string, newName: string): Promise<User[]> {
    return Promise
      .resolve(this.users.update(key, { name: newName }))
      .then(resp => this.users)
      .catch(err => console.log(err, 'Cannot update user.'));
  }

  deleteUser(key: string): Promise<User[]> {
    return Promise
      .resolve(this.users.remove(key))
      .then(resp => this.users)
      .catch(err => console.log(err, 'Cannot delete user.'));
  }

  deleteAllUsers(): Promise<User[]> {
    return Promise
      .resolve(this.users.remove())
      .then(resp => this.users)
      .catch(err => console.log(err, 'Cannot delete all users.'));
  }
};
