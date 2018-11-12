import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentsService } from './services/payments.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PaymentsComponent],
  providers: [PaymentsService]
})
export class PaymentsModule { }
