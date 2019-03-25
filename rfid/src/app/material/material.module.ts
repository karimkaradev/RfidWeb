import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatIconModule,
   MatSidenavModule,
  MatListModule, 
  MatToolbarModule,
   MatSnackBarModule,
    MatCheckboxModule,
     MatProgressSpinnerModule,
     MatInputModule,
      MatFormFieldModule, 
      MatMenuModule, 
      MatCardModule, 
      MatGridListModule,
       MatDialogModule
} from '@angular/material';
     @NgModule({
   declarations: [],
   imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatToolbarModule,
     MatProgressSpinnerModule,
     MatSidenavModule,
     MatListModule,
     MatSnackBarModule,
     MatCheckboxModule
    
   ],
   exports:[
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule,
     MatToolbarModule,
     MatProgressSpinnerModule,
     MatSidenavModule,
     MatListModule,
     MatSnackBarModule,
     MatCheckboxModule
   ],
})
export class MaterialModule { }
