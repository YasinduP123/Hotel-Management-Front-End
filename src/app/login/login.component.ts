import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Input, Tab, Ripple, initMDB } from 'mdb-ui-kit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Updated to styleUrls
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    initMDB({ Input, Tab, Ripple });
  }
  
  btnLogInOnAction(): void {
    this.router.navigate(['/dashBoard']);
  }
  

}
