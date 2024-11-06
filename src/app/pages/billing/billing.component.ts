import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  bookingId1: any;

  clearForm() {
    this.checkInDate = ""
    this.checkOutDate = ""
    this.nic = ""
    this.name = ""
    this.bookingId1 = ""

    this.poolBill= ""
    this.dinnerBill=""
    this.breakFastBill=""
    this.lunchBill=""
    this.discount=""
    this.totalBill=""
  }

  checkOut() {
    
  }

  nic: any; 
  name: any;
  checkInDate: any;
  checkOutDate: any;
  spentTime: any;

  poolBill: any;
  totalBill: any;
  discount: any;
  dinnerBill: any;
  lunchBill: any;
  breakFastBill: any;
  duration: any;
  inpPoolBill: any;
  searchQuery: any;

  calculateBill(){
    
    this.duration = 3
    this.poolBill = 4000.00
    this.dinnerBill = 2000.00
    this.breakFastBill = 2000.00
    this.lunchBill = 2000.00
    this.discount = 1500.00
    this.totalBill = (this.poolBill+this.dinnerBill+this.lunchBill+this.breakFastBill)-this.discount

  }


  
  getBookingIdVal(bookingId: string) {
    console.log(bookingId);

    if(bookingId != ""){
      fetch(`http://localhost:8080/booking/find-by-id/${bookingId}`)
      .then(res => {
        if(!res.ok){
          alert("Booking not found");
        }
        return res.json();
      })
      
      .then(data=>{
        console.log("data ",data);
        
        this.nic = data.customer.nic
        this.name = data.customer.name
        this.checkInDate = data.checkInDate
        this.checkOutDate = data.checkOutDate
        this.calculateBill()
      })
      .catch(error=>{
        alert("Booking Not Found :(")
      })

    }

    
  }

}
