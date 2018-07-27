import { BaseService } from './base-service';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize, filter, flatMap, tap } from 'rxjs/operators';
import { snackError, snackOk } from './snackbar-util';
import { DeleteDialogComponent } from '../shared/components/delete-dialog/delete-dialog.component';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class BaseListComponent<T> implements OnInit {

    data: T[] = [];
    loading: boolean;

    constructor(protected service: BaseService<T>, private dialog: MatDialog,
        protected router: Router, protected route: ActivatedRoute, private snackbar: MatSnackBar) { }

    ngOnInit() {
        this.loading = true;
        this.getServiceList()
            .pipe(
                finalize(() => this.loading = false)
            )
            .subscribe(x => this.data = x, err => snackError(this.snackbar, err));
    }

    getServiceList(): Observable<T[]> {
        return this.service.list(this.getListParams());
    }

    getListParams(): any[] {
        return [];
    }

    removeItem(index: number) {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            data: { item: this.data[index] },
            autoFocus: false
        });
        this.removeAction(dialogRef, index);
    }

    removeAction(dialog: MatDialogRef<DeleteDialogComponent, any>, index: number) {
        dialog.afterClosed()
            .pipe(
                filter(x => x !== undefined),
                flatMap(x => this.service.remove(x.item.id)),
                tap(() => this.data.splice(index, 1))
            )
            .subscribe(() => snackOk(this.snackbar, 'Registro Eliminado'), err => snackError(this.snackbar, err));
    }

    goToDetail(index: number) {
        this.service.select(this.data[index]);
        this.router.navigate([(this.data[index] as any).id], { relativeTo: this.route });
    }

    goToAdd() {
        this.router.navigate(['agregar'], { relativeTo: this.route });
    }

}
