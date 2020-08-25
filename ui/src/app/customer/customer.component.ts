import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../models/customer.model';
import { LookupModel } from '../models/lookup.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public customers: CustomerModel[] = [];
  public customerTypes: LookupModel[] = [];
  public newCustomer: CustomerModel = {
    customerId: null,
    name: null,
    type: null
  };

  constructor(
    private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.GetCustomerTypes().subscribe(types => this.customerTypes = types);
    this.getCustomers();
  }

  public createCustomer(form: NgForm): void {
    if (form.invalid) {
      alert('Form is not valid.');
    } else {
      this.customerService.CreateCustomer(this.newCustomer).then(() => {
        this.getCustomers();
      });
    }}
 

    private getCustomers(): void {
        this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
    }}
