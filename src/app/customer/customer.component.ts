import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
    selector: 'app-customer',
    // moduleId: module.id,
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
    providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
    customers: Customer[];

    constructor(private customerService: CustomerService) { }

    getCustomers(): void {
        this.customerService.getCustomers()
            .then(customers => this.customers = customers);
    }

    addCustomer(newName: string): void {
        this.customerService.addCustomer(newName)
            .then(customers => this.customers = customers);
    }

    updateCustomer(key: string, newName: string): void {
        this.customerService.updateCustomer(key, newName)
            .then(customers => this.customers = customers);
    }

    deleteCustomer(key: string): void {
        this.customerService.deleteCustomer(key)
            .then(customers => this.customers = customers);
    }

    deleteAllCustomers(): void {
        this.customerService.deleteAllCustomers()
            .then(customers => this.customers = customers);
    }

    ngOnInit() {
        this.getCustomers();
    }
}
