import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home_page/home/home.component';
import { NavBarComponent } from './container/nav-bar/nav-bar/nav-bar/nav-bar.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './container/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DriverRegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
