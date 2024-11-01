import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'] // Corrected "styleUrls"
})
export class CommonComponent {
  
  
  isHomeActive: any;
  isBillingActive: any;
  isReportActive: any;
  isBookingActive: any;
  isCustomerActive: any;
  isCollapse: any;
  collapse: any;
  isRoomActive: any;
  
  navRoomBtnActive() {

    this.isBillingActive = ""
    this.isReportActive = ""
    this.isBookingActive = ""
    this.isCustomerActive = ""
    this.isHomeActive = ""
    this.isRoomActive = "active"

  }

  navCustomerBtnActive() {

    this.isBillingActive = ""
    this.isReportActive = ""
    this.isBookingActive = ""
    this.isCustomerActive = "active"
    this.isHomeActive = ""
    this.isRoomActive = ""

  }

  navBookingBtnActive() {

    this.isBillingActive = ""
    this.isReportActive = ""
    this.isBookingActive = "active"
    this.isCustomerActive = ""
    this.isHomeActive = ""
    this.isRoomActive = ""

  }

  navReportBtnActive() {

    this.isBillingActive = ""
    this.isReportActive = "active"
    this.isBookingActive = ""
    this.isCustomerActive = ""
    this.isHomeActive = ""
    this.isRoomActive = ""

  }

  navBillingBtnActive() {

    this.isBillingActive = "active"
    this.isReportActive = ""
    this.isBookingActive = ""
    this.isCustomerActive = ""
    this.isHomeActive = ""
    this.isRoomActive = ""

  }

  navHomeBtnActive() {

    this.isBillingActive = ""
    this.isReportActive = ""
    this.isBookingActive = ""
    this.isCustomerActive = ""
    this.isHomeActive = "active"
    this.isRoomActive = ""

  }

  
  isCollapsed: boolean = false;
  active: any;
  isActive: any;

  toggleHover(isToggeled:boolean):void {
    this.toggleCollapse
  }

  myFunction(x: HTMLElement): void {
    x.classList.toggle("change");
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  

}