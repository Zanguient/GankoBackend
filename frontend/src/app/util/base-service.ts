import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpParams } from '@angular/common/http';

export abstract class BaseService<T> {

    protected _selected: T;

    abstract add(item: T): Observable<string>;

    abstract list(...params: any[]): Observable<T[]>;

    abstract update(item: T): Observable<string>;

    abstract remove(id: string | number): Observable<string>;

    abstract getById(id: string): Observable<T>;

    select(item: T) {
        this._selected = item;
    }

    selected(id: string): Observable<T> {
        return this._selected ? of(this._selected) : this.getById(id);
    }

    makeUrl(...paths: any[]) {
        let url = environment.urlBase;
        paths.forEach(x => url += `/${x}`);
        return url;
    }

    makeAuth(token: string) {
        return {
            headers: {
                'Authorization': token
            }
        };
    }

    makeAuthAndParams(token: string, ...params: [string, string][]) {
        const mParams: {[k: string]: string} = {};
        params.forEach(x => mParams[x[0]] = x[1]);
        console.log(mParams);
        return {
            headers: {
                'Authorization': token
            },
            params: mParams
        };
    }


}
