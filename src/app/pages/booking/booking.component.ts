import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})

export class BookingComponent implements OnInit {
  
  searchQuery: string = '';

  performSearch(searchedId:any) {
    if (this.searchQuery.trim()) {
      this.searchByIdOnAction(searchedId)
    }
  }

  
  inpBookingDateVal: any = '';
  inpCheckInDateVal: any = '';
  inpCheckOutDateVal: any = '';
  inpCustomerIdVal: any = '';

  btnUpdateOnAction(searchedBooking:any, inpBookingDateVal: any,inpCheckInDateVal: any,inpCheckOutDateVal: any,inpCustomerIdVal: any) {

    let updateBooking = {
        bookingId : searchedBooking,
        bookingDate: inpBookingDateVal,
        checkInDate: inpCheckInDateVal,
      checkOutDate: inpCheckOutDateVal,
      customer: {
            id: inpCustomerIdVal
        }
      }

      console.log("update",searchedBooking,inpBookingDateVal,inpCheckInDateVal,inpCheckOutDateVal,inpCustomerIdVal);
      

      
      fetch(`http://localhost:8080/booking/update-booking`,{
        method:'PUT',
        headers : {
            'content-type':'application/json'
          },
        body : JSON.stringify(updateBooking)
        
        })
        // .then( res => {
        //         if(res.ok){
        //             alert("Booking Succussfully Updated :)" )
        //           }
        //           return res;
        //     })
        // .catch(error=>{alert("Bookind NOT Updated...")})
            
        console.log("body :", JSON.stringify(updateBooking));
        
  }
  
  btnEditOnAction(editBooking: any) {

    this.inpBookingDateVal = editBooking.bookingDate
    this.inpCheckInDateVal = editBooking.checkInDate
    this.inpCheckOutDateVal = editBooking.checkOutDate
    this.inpCustomerIdVal = editBooking.customer.id
    console.log("edit",editBooking);
    
    console.log(this.inpBookingDateVal);
    console.log(this.inpCheckInDateVal);
    console.log(this.inpCheckOutDateVal);
    console.log(this.inpCustomerIdVal);
    

  }
  
  bookingCount: any = '';
  room: any = '';
  remRooms: any = '';

  
  
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
    fetch("http://localhost:8080/booking/all")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.bookingInfo = data;
       
        this.bookingCount = data.length;        

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
  fetch(`http://localhost:8080/booking/all?id=${bookingId}`)
  .then(res =>{
    
    if(!res.ok){
      alert("Booking is NOT found...!")
    }

    return res.json()
  })
  
  .then(data=>{
      
    this.searchedBooking = data;
    console.log(this.searchedBooking);
    
    const originalText = "Hello";
    const encodedText = encodeURIComponent(originalText); 
    console.log("Encoded:", encodedText);

    const decodedText = decodeURIComponent(encodedText);
    console.log("Decoded:", decodedText);


  })
  .catch(error=>{
    alert("check and try again...!")
  })

} 

}
