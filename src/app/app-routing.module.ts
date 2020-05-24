import { CorporateComponent } from './corporate/corporate.component';
import { DriverSingupComponent } from './driver-singup/driver-singup.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home_page/home/home.component';
import { NavBarComponent } from './container/nav-bar/nav-bar/nav-bar/nav-bar.component';
import { LoginComponent } from './admin/login/login.component';
import { NotificationComponent } from './container/notification/notification.component';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewNewsComponent } from './admin/News/view-news/view-news.component';
import { AddNewsComponent } from './admin/News/add-news/add-news.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { VehiclePricingComponent } from './vehicle-pricing/vehicle-pricing.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
},
{
  path : 'admin',
  component : AdminContainerComponent,
  canActivate : [AuthGuard],
  canActivateChild : [AuthGuard],
  canLoad : [AuthGuard],
  children : [
    {
      path : "hompage",
      component : AdminHomePageComponent,
    },
    {
      path : "news",
      component : ViewNewsComponent,
    },
    {
      path : "add_news",
      component : AddNewsComponent
    }
    

  ]
},
{
    path : 'taxiyeadmin',
    component : LoginComponent
},
{
  path:"nav",
  component: NavBarComponent
},
{
  path : 'header',
  component : NavBarComponent
},
{
  path: 'driver', component: DriverRegisterComponent
},
{
  path: 'singup', component: DriverSingupComponent
},
{
 path: 'book-ride', component: BookRideComponent
},
  {
    path: 'pricing', component: VehiclePricingComponent
  },
  {
    path: 'corporate', component: CorporateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
