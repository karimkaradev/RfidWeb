import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './test/test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'client', loadChildren: './client/client.module#ClientModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'home', loadChildren: './public/public.module#PublicModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
