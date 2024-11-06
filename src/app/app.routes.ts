import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BillingComponent } from './pages/billing/billing.component';
import { ReportComponent } from './pages/report/report.component';
import { CommonComponent } from './common/common.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ComplainComponent } from './pages/complain/complain.component';
import { RoomComponent } from './pages/room/room.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path : "customer",
        component : CustomerComponent
    },
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "billing",
        component : BillingComponent
    },
    {
        path : "complain",
        component : ComplainComponent
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
        path : "room",
        component: RoomComponent
    },
    {
        path : "a",
        component: LoginComponent
    },
    {
        path : "report",
        component : ReportComponent
    }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}