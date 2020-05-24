import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home_page/home/home.component';
import { NavBarComponent } from './container/nav-bar/nav-bar/nav-bar/nav-bar.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './container/footer/footer/footer.component';
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
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
