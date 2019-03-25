import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { AuthGardService } from '../auth/guards/auth-gard.service';

const routes: Routes = [
  {path: "", component:ClientComponent, canActivate: [AuthGardService], children: [
   // {path:"", component: QuestionnairesListComponent},
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
