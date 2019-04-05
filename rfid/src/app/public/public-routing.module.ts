import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { CourslistComponent } from './courslist/courslist.component';
import { CoursdetailComponent } from './coursdetail/coursdetail.component';
import { TarifComponent } from './tarif/tarif.component';

const routes: Routes = [
  {path: "", component:PublicComponent, children: [
    {path:"cours", component: CourslistComponent},
    {path:"abonnements", component: TarifComponent},
    {path:"cours/:id", component: CoursdetailComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
