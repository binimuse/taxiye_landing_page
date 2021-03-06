import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home_page/home/home.component';
import { NavBarComponent } from './container/nav-bar/nav-bar/nav-bar/nav-bar.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FooterComponent } from './container/footer/footer/footer.component';
import { DriverSingupComponent } from './driver-singup/driver-singup.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
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
import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import { FormWizardModule } from 'angular-wizard-form';
import { Ng2TelInputModule } from 'ng2-tel-input';
// tslint:disable-next-line: quotemark
import { AgmDirectionModule } from 'agm-direction';
import { AddCorporatesComponent } from './admin/corporate/add-corporates/add-corporates.component';
import { ViewCorporatesComponent } from './admin/corporate/view-corporates/view-corporates.component';
import { EditCorporateComponent } from './admin/corporate/edit-corporate/edit-corporate.component';
import { AddOfficesComponent } from './admin/offices/add-offices/add-offices.component';
import { ViewOfficesComponent } from './admin/offices/view-offices/view-offices.component';
import { EditOfficesComponent } from './admin/offices/edit-offices/edit-offices.component';
import { AddDriverFeedbackComponent } from './admin/drivers-feedback/add-driver-feedback/add-driver-feedback.component';
import { ViewDriverFeedbackComponent } from './admin/drivers-feedback/view-driver-feedback/view-driver-feedback.component';
import { EditDriverFeedbackComponent } from './admin/drivers-feedback/edit-driver-feedback/edit-driver-feedback.component';
import { AddSuperDriverComponent } from './admin/super-driver/add-super-driver/add-super-driver.component';
import { ViewSuperDriverComponent } from './admin/super-driver/view-super-driver/view-super-driver.component';
import { EditSuperDriverComponent } from './admin/super-driver/edit-super-driver/edit-super-driver.component';
import { AddPriceComponent } from './admin/price/add-price/add-price.component';
import { EditPriceComponent } from './admin/price/edit-price/edit-price.component';
import { CorporateToSignupComponent } from './admin/corporate/corporate-to-signup/corporate-to-signup.component';
import { AllViewNewsComponent } from './all-view-news/all-view-news.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { TaxiyeNewsComponent } from './taxiye-news/taxiye-news.component';
import { ArticleComponent } from './article/article.component';
import { TestimoniyalComponent } from './testimoniyal/testimoniyal.component';
import { PricingComponent } from './pricing/pricing.component';
import { RentalComponent } from './rental/rental.component';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18nModule } from './i18n/i18n.module';
import { BookcarComponent } from './bookcar/bookcar.component';
import { MenuComponent } from './menu/menu.component';






export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    AddCorporatesComponent,
    ViewCorporatesComponent,
    EditCorporateComponent,
    AddOfficesComponent,
    ViewOfficesComponent,
    EditOfficesComponent,
    AddDriverFeedbackComponent,
    ViewDriverFeedbackComponent,
    EditDriverFeedbackComponent,
    AddSuperDriverComponent,
    ViewSuperDriverComponent,
    EditSuperDriverComponent,
    AddPriceComponent,
    EditPriceComponent,
    CorporateToSignupComponent,
    AllViewNewsComponent,
    OurServiceComponent,
    TaxiyeNewsComponent,
    ArticleComponent,
    TestimoniyalComponent,
    PricingComponent,
    RentalComponent,
    BookcarComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // tslint:disable-next-line: quotemark
      apiKey: "AIzaSyCRNebshVW6XSdv4X2Nxm3FGIt3qbA7UKU",
    }),
    AgmDirectionModule,
    SlickCarouselModule,
    FormWizardModule,
    Ng2TelInputModule,



    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),



    I18nModule
  

  ],
  
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})


export class AppModule {}


