import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  
  customerEmail: any = '';

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
