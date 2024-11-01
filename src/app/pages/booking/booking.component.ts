import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [NgFor],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})

export class BookingComponent implements OnInit {
  
  btnDeleteOnAction(deleteBooking: any) {
      fetch(`http://localhost:8080/booking/delete-by-id/${deleteBooking.bookingId}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(deleteBooking)
      })
      console.log(JSON.stringify(deleteBooking));
  }

  
  getImage(image: any) {
    console.log(image);
    
  }
  
  ngOnInit(): void {
    this.loadBookingInfo();
  }
  
  public bookingInfo: any = [];

  loadBookingInfo() {
    fetch("http://localhost:8080/booking/get-bookings")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.bookingInfo = data;
      })
  }

  public names: String = "";

  addBookingOnAction( inpBookingDate: string, inpCustomerId: string, inpCheckInDate: string, inpCheckOutDate: string) {
    console.log(inpBookingDate);
    console.log(inpCustomerId);
    console.log(inpCheckInDate);
    console.log(inpCheckOutDate);

    const bookingData = {
        bookingDate: inpBookingDate,
        checkInDate: inpCheckInDate,
        checkOutDate: inpCheckOutDate,
        customer: { id: inpCustomerId }
    };

    fetch('http://localhost:8080/booking/set-booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    console.log(JSON.stringify(bookingData));
}

searchedBooking: any = {
  bookingDate: '',
  checkInDate: '',
  checkOutDate: '',
  customer: {
      name: '',
      id: ''
  }
};

searchByIdOnAction(bookingId :String){    
  fetch(`http://localhost:8080/booking/find-by-id/${bookingId}`)
  .then(res => res.json())
  .then(data=>{
      
    this.searchedBooking = data;
    console.log(this.searchedBooking);
    
    const originalText = "Hello";
    const encodedText = encodeURIComponent(originalText); 
    console.log("Encoded:", encodedText);

    const decodedText = decodeURIComponent(encodedText);
    console.log("Decoded:", decodedText);


  })

} 

}
