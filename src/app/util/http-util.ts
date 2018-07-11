import { Doc, Rspn } from '../shared/models/response.model';
import { from, Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

export function validate<T>(rspn: Rspn<T>): T {
    if (rspn.success) {
        return rspn.data;
    } else {
        throw new Error(rspn.error);
    }
}

export function listToDoc<T>(list: Doc<T>[]): Observable<T[]> {
    return from(list)
        .pipe(
            map(x => {
                const doc: any = x.doc;
                doc.id = x.id;
                return doc;
            }),
            toArray<T>()
        );
}

export function toDoc<T>(value: Doc<T>): T {
    const doc: any = value.doc;
    doc.id = value.id;
    return doc;
}

/*export function validate<T>() {
    // notice that we return a function here
    return function validateImplementation(source) {
        return Observable.create(subscriber => {
            const subscription = source.subscribe(value => {
                const rspn: Rspn<T> = value;
                if (rspn.success) {
                    subscriber.next(rspn.data);
                } else {
                    subscriber.error(new Error(rspn.error));
                }
            },
                err => subscriber.error(err),
                () => subscriber.complete());

            return subscription;
        });
    };
}*/
