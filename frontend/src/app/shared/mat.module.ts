import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule,
  MatSidenavModule, MatProgressSpinnerModule, MatTabsModule, MatSnackBarModule, MatTableModule,
  MatListModule, MatDialogModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
  MatDatepickerModule, MatCheckboxModule, MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule,
    MatSidenavModule, MatProgressSpinnerModule, MatTabsModule, MatSnackBarModule, MatTableModule,
    MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
    MatDatepickerModule, MatCheckboxModule, MatGridListModule
  ]
})
export class MatModule { }
