import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home_page/home/home.component';
import { NavBarComponent } from './container/nav-bar/nav-bar/nav-bar/nav-bar.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
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
