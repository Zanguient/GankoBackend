import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule,
  MatSidenavModule, MatProgressSpinnerModule, MatTabsModule, MatSnackBarModule, MatStepperModule,
  MatListModule, MatDialogModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
  MatDatepickerModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule,
    MatSidenavModule, MatProgressSpinnerModule, MatTabsModule, MatSnackBarModule, MatStepperModule,
    MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatCheckboxModule
  ]
})
export class MatModule { }
