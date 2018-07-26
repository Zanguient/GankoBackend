import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BovineSelectedComponent } from './components/bovine-selected/bovine-selected.component';
import { CardActionsComponent } from './components/card/card-actions/card-actions.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardCornerComponent } from './components/card/card-corner/card-corner.component';
import { CardFieldComponent } from './components/card/card-field/card-field.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardObsComponent } from './components/card/card-obs/card-obs.component';
import { CardComponent } from './components/card/card.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListLoaderComponent } from './components/list-loader/list-loader.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AccentDirective } from './directives/accent.directive';
import { WarnDirective } from './directives/warn.directive';
import { MatModule } from './mat.module';
import { NmBottomDirective } from './directives/nm-bottom.directive';
import { SingleLoaderComponent } from './components/single-loader/single-loader.component';



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
    CardActionsComponent, AccentDirective, WarnDirective, NmBottomDirective, SingleLoaderComponent],

  entryComponents: [DeleteDialogComponent],

  exports: [RouterModule, MatModule, FlexLayoutModule, FormsModule,
    ListLoaderComponent, LoaderComponent, DeleteDialogComponent, FilterComponent, BovineSelectedComponent,
    AccentDirective, WarnDirective, CardComponent, CardCornerComponent,
    CardObsComponent, CardContentComponent, CardFieldComponent, CardFooterComponent,
    CardActionsComponent, NmBottomDirective, SingleLoaderComponent]
})
export class SharedModule { }
