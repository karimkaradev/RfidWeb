import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RoleGuardService as RoleGuard } from '../auth/guards/role-guard.service';

const routes: Routes = [
  {path: '', component:AdminComponent,
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
  },
  children: [
    // {path:"", component: QuestionnairesListComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
