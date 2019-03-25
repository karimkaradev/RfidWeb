import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions, JwtHelperService } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { AuthGardService } from './auth/guards/auth-gard.service';
import { MaterialModule } from './material/material.module';
import { ClientComponent } from './client/client.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test/test.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter,
      whitelistedDomains: ['http://192.168.1.174']
  }
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [JwtHelperService, AuthGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
