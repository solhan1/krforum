import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login_register/login/login.component';
import { RegisterComponent } from './login_register/register/register.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './login_register/main/main.component';
import { AuthGuard } from './login_register/auth/auth.guard';
import { ListComponent } from './login_register/list/list.component';
const routes: Routes = [
  {
    // show header using <router-outlet>
    path: '',
    component: HeaderComponent
  },

  {
    path: 'login-register',
    component: ListComponent, canActivate: [AuthGuard]
  },

  { 
    path: 'login',
    component: LoginComponent
  },

  { 
    path: 'register',
    component: RegisterComponent
  },

  { 
    path: '**',
    redirectTo: 'login-register'
  }




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
