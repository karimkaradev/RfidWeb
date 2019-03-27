import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CourslistComponent } from './courslist/courslist.component';
import { CoursdetailComponent } from './coursdetail/coursdetail.component';
import { TarifComponent } from './tarif/tarif.component';

@NgModule({
  declarations: [CourslistComponent, CoursdetailComponent, TarifComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
