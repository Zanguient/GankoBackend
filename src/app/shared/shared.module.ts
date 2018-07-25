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
import { CardComponent } from './components/card/card.component';
import { CardCornerComponent } from './components/card/card-corner/card-corner.component';
import { CardObsComponent } from './components/card/card-obs/card-obs.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardFieldComponent } from './components/card/card-field/card-field.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardActionsComponent } from './components/card/card-actions/card-actions.component';
import { AccentDirective } from './directives/accent.directive';
import { WarnDirective } from './directives/warn.directive';


@NgModule({
  imports: [
    CommonModule,
    MatModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [ListLoaderComponent, LoaderComponent, DeleteDialogComponent,
    FilterComponent, BovineSelectedComponent, CardComponent, CardCornerComponent,
    CardObsComponent, CardContentComponent, CardFieldComponent, CardFooterComponent,
    CardActionsComponent, AccentDirective, WarnDirective],

  entryComponents: [DeleteDialogComponent],

  exports: [RouterModule, MatModule, FlexLayoutModule, FormsModule,
    ListLoaderComponent, LoaderComponent, DeleteDialogComponent, FilterComponent, BovineSelectedComponent,
    AccentDirective, WarnDirective, CardComponent, CardCornerComponent,
    CardObsComponent, CardContentComponent, CardFieldComponent, CardFooterComponent,
    CardActionsComponent]
})
export class SharedModule { }
