import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListLoaderComponent } from './components/list-loader/list-loader.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BovineSelectedComponent } from './components/bovine-selected/bovine-selected.component';
import { MatModule } from './mat.module';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [ListLoaderComponent, LoaderComponent, DeleteDialogComponent,
    FilterComponent, BovineSelectedComponent],
  exports: [RouterModule, MatModule, FlexLayoutModule, FormsModule,
  ListLoaderComponent, LoaderComponent, DeleteDialogComponent, FilterComponent, BovineSelectedComponent]
})
export class SharedModule { }
