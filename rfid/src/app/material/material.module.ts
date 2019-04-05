import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule,
  MatIconModule, MatSidenavModule, MatListModule,
  MatToolbarModule, MatFormFieldModule, MatSelectModule, 
  MatInputModule, MatCardModule, MatFormFieldControl, 
  MatStepperModule, MatCheckboxModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule
        ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule
  ],
})
export class MaterialModule { }
