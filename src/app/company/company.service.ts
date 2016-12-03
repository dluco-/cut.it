import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Company } from './company';

@Injectable()
export class CompanyService {
  companies: FirebaseListObservable<Company[]>;

  constructor(af: AngularFire) {
    this.companies = af.database.list('/companies');
  }

  getCompanies(): Promise<Company[]> {
    return Promise
      .resolve(this.companies)
      .then(resp => this.companies)
      .catch(err => console.log(err, 'Cannot get companies.'));
  }

  addCompany(newCompany: string): Promise<Company[]> {
    return Promise
      .resolve(this.companies.push({ name: newCompany }))
      .then(resp => this.companies)
      .catch(err => console.log(err, 'Cannot add company.'));
  }

  updateCompany(key: string, newName: string): Promise<Company[]> {
    return Promise
      .resolve(this.companies.update(key, { name: newName }))
      .then(resp => this.companies)
      .catch(err => console.log(err, 'Cannot update company.'));
  }

  deleteCompany(key: string): Promise<Company[]> {
    return Promise
      .resolve(this.companies.remove(key))
      .then(resp => this.companies)
      .catch(err => console.log(err, 'Cannot delete company.'));
  }

  deleteAllCompanies(): Promise<Company[]> {
    return Promise
      .resolve(this.companies.remove())
      .then(resp => this.companies)
      .catch(err => console.log(err, 'Cannot delete all companies.'));
  }
};