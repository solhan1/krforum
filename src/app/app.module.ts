import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './login_register/helpers/fb';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './login_register/alert/alert.component';
import { ListComponent } from './login_register/list/list.component';
import { LoginComponent } from './login_register/login/login.component';
import { RegisterComponent } from './login_register/register/register.component';
import { MainComponent } from './login_register/main/main.component';
import { AuthGuard } from './login_register/auth/auth.guard';
import { AlertService } from './login_register/alert_service/alert.service';
import { AuthenticationService } from './login_register/auth_service/auth.service';
import { UserService } from './login_register/u_service/u.service';
import { JwtInterceptor } from './login_register/helpers/ji';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  },

  // provider used to create fake backend
  fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
