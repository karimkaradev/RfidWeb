import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { CourslistComponent } from './courslist/courslist.component';

const routes: Routes = [
  {path: "", component:PublicComponent, children: [
    {path:"cours", component: CourslistComponent},
    {path:"abonnement", component: CourslistComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
