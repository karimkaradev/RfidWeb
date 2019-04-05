import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule,
  MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule,
  MatFormFieldModule, MatSelectModule,
  MatInputModule, MatCardModule,
  MatFormFieldControl, MatTreeModule,
  MatStepperModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCheckboxModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepperModule } from '@angular/cdk/stepper';
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
    MatStepperModule,
    MatDatepickerModule,
    MatInputModule,
    MatTreeModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule

        ],

  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTreeModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule
  ],
})
export class MaterialModule { }
