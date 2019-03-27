import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { MesCoursComponent } from './mes-cours/mes-cours.component';
import { CalendrierCoursComponent } from './calendrier-cours/calendrier-cours.component';

@NgModule({
  declarations: [ClientComponent, MonCompteComponent, MesCoursComponent, CalendrierCoursComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
