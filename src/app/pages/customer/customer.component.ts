import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent{

  editCustomer : any = {};
  
  btnEditOnAction(customer: any) {  
    this.editCustomer = customer
  }

    imagePreview: string = '';
  
    selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      
      // Set up the onload event
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string; // Access the result property
        console.log("img url:", this.imagePreview); // Log the encoded file data
      };

      // Start reading the file as a data URL
      console.log(reader.readAsDataURL(this.selectedFile));
      
    } else {
      console.log("No file selected or invalid input element");
    }
  }

  uploadImage(): void {
    if (this.selectedFile && this.imagePreview) {
      
      const uploadUrl = 'https://your-server.com/upload';
      const payload = {
        image: this.imagePreview // This is the base64 string
      };
  
      fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully. Short URL:', data.shortUrl); // Short URL returned from server
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
    } else {
      console.log('No file to upload');
    }
  
  }

  inpImage: any = '';
  getEncEmage: any = '';

  imageEncode(){
    

  
  }

  ngOnInit():void{
    this.loadCustomerInfo();
  }

  public customers:any = [];

  loadCustomerInfo(){
    fetch("http://localhost:8080/customer/all")
    .then(res => res.json())
    .then(data => {
      console.log(data);      
      this.customers = data;
    })
  }
  
  

}
