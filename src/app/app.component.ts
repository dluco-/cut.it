import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
// import { User } from './User';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    // companies: FirebaseListObservable<Company[]>;
    // items: FirebaseListObservable<any>;
    // users: FirebaseListObservable<User[]>;
    constructor(public af: AngularFire) { }

    // addCompany(newCompany: string) {
    //     this.companies.push({ name: newCompany });
    // }
    // updateCompany(key: string, newName: string) {
    //     this.companies.update(key, { name: newName });
    // }
    // deleteCompany(key: string) {
    //     this.companies.remove(key);
    // }
    // deleteAllCompenies() {
    //     this.companies.remove();
    // }

    // addUser(newUser: string) {
    //     this.users.push({ name: newUser });
    // }
    // updateUser(key: string, newName) {
    //     this.users.update(key, { name: newName });
    // }
    // deleteUser(key: string) {
    //     this.users.remove(key);
    // }
    // deleteAllUsers() {
    //     this.companies.remove();
    // }

    login() {
        this.af.auth.login();
    }

    logout() {
        this.af.auth.logout();
    }
}
