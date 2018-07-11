import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeadowComponent } from './meadow.component';
import { MeadowService } from './services/meadow.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MeadowComponent],
  providers: [MeadowService]
})
export class MeadowModule { }
