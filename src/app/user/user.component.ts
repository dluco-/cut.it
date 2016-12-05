import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CompanyService } from '../company/company.service';
import { User } from './user';
import { Company } from '../company/company';

@Component({
  selector: 'app-user',
  // moduleId: module.id,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, CompanyService]
})
export class UserComponent implements OnInit {

  users: User[];
  companies: Company[];
  selectedCompany: any = null;

  constructor(private userService: UserService, private companyService: CompanyService) { }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users);
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .then(companies => {
        this.companies = companies;
        this.selectedCompany = companies[0];
      });
  }

  addUser(newName: string, newCompanyKey: string): void {
    this.userService.addUser(newName, newCompanyKey)
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
    this.getCompanies();
  }
}
