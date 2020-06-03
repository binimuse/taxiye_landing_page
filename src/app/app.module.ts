import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home_page/home/home.component';
import { NavBarComponent } from './container/nav-bar/nav-bar/nav-bar/nav-bar.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './container/footer/footer/footer.component';

import { DriverSingupComponent } from './driver-singup/driver-singup.component';
import { BookRideComponent } from './book-ride/book-ride.component';
// import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

// const ngWizardConfig: NgWizardConfig = {
//   theme: THEME.default
// };

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { NotificationComponent } from './container/notification/notification.component';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { AdminSideBarComponent } from './admin/admin-side-bar/admin-side-bar.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewNewsComponent } from './admin/News/view-news/view-news.component';
import { AddNewsComponent } from './admin/News/add-news/add-news.component';
import { EditNewsComponent } from './admin/News/edit-news/edit-news.component';
import { VehiclePricingComponent } from './vehicle-pricing/vehicle-pricing.component';
import { CorporateComponent } from './corporate/corporate.component';
import { CorporateSignupComponent } from './corporate-signup/corporate-signup.component';
import { FqaComponent } from './fqa/fqa.component';
import { OfficesComponent } from './offices/offices.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DriverRegisterComponent,
    FooterComponent,
    LoginComponent,
    NotificationComponent,
    AdminHomePageComponent,
    AdminSideBarComponent,
    AdminContainerComponent,
    ViewNewsComponent,
    AddNewsComponent,
    EditNewsComponent,
    DriverSingupComponent,
    BookRideComponent,
    VehiclePricingComponent,
    CorporateComponent,
    CorporateSignupComponent,
    FqaComponent,
    OfficesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
