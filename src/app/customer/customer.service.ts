import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  customers: FirebaseListObservable<Customer[]>;

  constructor(af: AngularFire) {
    this.customers = af.database.list('/customers');
  }

  getCustomers(): Promise<Customer[]> {
    return Promise
      .resolve(this.customers)
      .then(resp => this.customers)
      .catch(err => console.log(err, 'Cannot get customers.'));
  }

  addCustomer(newCustomer: string): Promise<Customer[]> {
    return Promise
      .resolve(this.customers.push({ name: newCustomer }))
      .then(resp => this.customers)
      .catch(err => console.log(err, 'Cannot add customer.'));
  }

  updateCustomer(key: string, newName: string): Promise<Customer[]> {
    return Promise
      .resolve(this.customers.update(key, { name: newName }))
      .then(resp => this.customers)
      .catch(err => console.log(err, 'Cannot update customer.'));
  }

  deleteCustomer(key: string): Promise<Customer[]> {
    return Promise
      .resolve(this.customers.remove(key))
      .then(resp => this.customers)
      .catch(err => console.log(err, 'Cannot delete customer.'));
  }

  deleteAllCustomers(): Promise<Customer[]> {
    return Promise
      .resolve(this.customers.remove())
      .then(resp => this.customers)
      .catch(err => console.log(err, 'Cannot delete all customers.'));
  }
};
