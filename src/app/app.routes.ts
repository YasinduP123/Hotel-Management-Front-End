import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BillingComponent } from './pages/billing/billing.component';
import { ReportComponent } from './pages/report/report.component';
import { CommonComponent } from './common/common.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path : "customer",
        component : CustomerComponent
    },
    {
        path : "home",
        component : HomeComponent
    },
    {
        path : "billing",
        component : BillingComponent
    },
    {
        path : "report",
        component : ReportComponent
    },
    {
        path : "booking",
        component : BookingComponent
    },
    {
        path : "dashBoard",
        component : AppComponent
    },
    {   
        path: '',
        redirectTo: '/login',
        pathMatch: 'full' 
    }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}