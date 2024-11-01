import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent{

  ngOnInit():void{
    this.loadCustomerInfo();
  }

  public customers:any = [];

  loadCustomerInfo(){
    fetch("http://localhost:8080/customer/get-customers")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.customers = data;
    }) 
  }

}
