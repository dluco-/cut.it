import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  getCompanies(): void {
    this.companyService.getCompanies()
      .then(companies => this.companies = companies);
  }

  addCompany(newName: string): void {
    this.companyService.addCompany(newName)
      .then(companies => this.companies = companies);
  }

  updateCompany(key: string, newName: string): void {
    this.companyService.updateCompany(key, newName)
      .then(companies => this.companies = companies);
  }

  deleteCompany(key: string): void {
    this.companyService.deleteCompany(key)
      .then(companies => this.companies = companies);
  }

  deleteAllCompanies(): void {
    this.companyService.deleteAllCompanies()
      .then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
  }
}
