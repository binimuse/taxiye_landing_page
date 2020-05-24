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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
