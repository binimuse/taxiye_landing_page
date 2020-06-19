import { AllViewNewsComponent } from './all-view-news/all-view-news.component';
import { SlicksampleComponent } from './slicksample/slicksample.component';

import { OfficesComponent } from './offices/offices.component';
import { FqaComponent } from './fqa/fqa.component';
import { CorporateSignupComponent } from './corporate-signup/corporate-signup.component';
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
import { EditNewsComponent } from './admin/News/edit-news/edit-news.component';
import { AddCorporatesComponent } from './admin/corporate/add-corporates/add-corporates.component';
import { ViewCorporatesComponent } from './admin/corporate/view-corporates/view-corporates.component';
import { EditCorporateComponent } from './admin/corporate/edit-corporate/edit-corporate.component';
import { AddOfficesComponent } from './admin/offices/add-offices/add-offices.component';
import { ViewOfficesComponent } from './admin/offices/view-offices/view-offices.component';
import { EditOfficesComponent } from './admin/offices/edit-offices/edit-offices.component';
import { ViewDriverFeedbackComponent } from './admin/drivers-feedback/view-driver-feedback/view-driver-feedback.component';
import { AddDriverFeedbackComponent } from './admin/drivers-feedback/add-driver-feedback/add-driver-feedback.component';
import { EditDriverFeedbackComponent } from './admin/drivers-feedback/edit-driver-feedback/edit-driver-feedback.component';
import { AddSuperDriverComponent } from './admin/super-driver/add-super-driver/add-super-driver.component';
import { ViewSuperDriverComponent } from './admin/super-driver/view-super-driver/view-super-driver.component';
import { EditSuperDriverComponent } from './admin/super-driver/edit-super-driver/edit-super-driver.component';
import { AddPriceComponent } from './admin/price/add-price/add-price.component';
import { EditPriceComponent } from './admin/price/edit-price/edit-price.component';
import { CorporateSignupService } from './service/corporate-signup.service';
import { CorporateToSignupComponent } from './admin/corporate/corporate-to-signup/corporate-to-signup.component';


const routes: Routes = [
  {

  path: '', component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminContainerComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'homepage',
        component: AdminHomePageComponent,
      },
      {
        path: 'add_news',
        component: AddNewsComponent,
      },
      {
        path: 'edit_news',
        component: EditNewsComponent,
      },
      {
        path: 'add_corporate', component: AddCorporatesComponent,
      },
      {
        path: 'edit_corporate', component: EditCorporateComponent
      },
      {
        path: 'view_signup', component: CorporateToSignupComponent
      },
      {
        path: 'add_office', component: AddOfficesComponent
      },
      {
        path: 'edit_offices', component: EditOfficesComponent
      },
      {
        path: 'add_feedback', component: AddDriverFeedbackComponent
      },
      {
        path: 'edit_feedback', component: EditDriverFeedbackComponent
      },
      {
        path: 'add_superdriver', component: AddSuperDriverComponent
      },
      {
        path: 'edit_superdriver', component: EditSuperDriverComponent
      },
      {
        path: 'add_price', component: AddPriceComponent
      },
      {
        path: 'edit_price', component: EditPriceComponent
      }
    ],
  },
  {
    path: 'taxiyeadmin',
    component: LoginComponent,
  },
  {
    path: 'nav',
    component: NavBarComponent,
  },
  {
    path: 'header',
    component: NavBarComponent,
  },
  {
    path: 'driver',
    component: DriverRegisterComponent,
  },
  {
    path: 'signup',
    component: DriverSingupComponent,
  },
  {
    path: 'book-ride',
    component: BookRideComponent,
  },
  {
    path: 'pricing',
    component: VehiclePricingComponent,
  },
  {
    path: 'corporate',
    component: CorporateComponent,
  },
  {
    path: 'corporate-signup',
    component: CorporateSignupComponent,
  },
  {
    path: 'FAQ',
    component: FqaComponent,
  },
  {
    path: 'offices',
    component: OfficesComponent,

  },
  {
    path: 'taxiyeadmin',
    component: LoginComponent
  },
  {
    path: 'nav',
    component: NavBarComponent
  },
  {
    path: 'header', component: NavBarComponent
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
  },
  {
    path: 'corporate_signup', component: CorporateSignupComponent
  },
 {
   path: 'slick', component: SlicksampleComponent
 },
 {
   path: 'all-view', component: AllViewNewsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
