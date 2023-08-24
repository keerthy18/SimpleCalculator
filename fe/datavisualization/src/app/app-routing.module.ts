import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegistrationComponent},
{path: '', component: RegistrationComponent},
{path: 'home', component: HomeComponent},
{ path: '', component: HomeComponent },
// { path: 'about', component: AboutComponent },
// { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
