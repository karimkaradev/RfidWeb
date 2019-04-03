import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions, JwtHelperService } from '@auth0/angular-jwt';
import { AuthGardService } from './auth/guards/auth-gard.service';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test/test.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ShowIfLoggedInDirective } from './show-if-logged-in.directive';
import { environment } from 'src/environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { IfRoleDirective } from './auth/if-role.directive';



export function tokenGetter() {
  return localStorage.getItem('access_token');
}

const JwtModuleOptions: JwtModuleOptions = {
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
    TestComponent,
    FooterComponent,
    ShowIfLoggedInDirective,
    IfRoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    MaterialModule,
    SlideshowModule,
    JwtModule.forRoot(JwtModuleOptions),
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],

  providers: [JwtHelperService, AuthGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
