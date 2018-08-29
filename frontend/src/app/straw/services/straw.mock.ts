import { Straw } from '../../shared/models/straw.model';

export const STRAW_USED = 1;
export const STRAW_NO_USED = 0;

export function straws(): Straw[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function straw(): Straw {
    return makeItem(1);
}

function makeItem(item: number): Straw {
    return {
        id: '123',
        breed: 'La raza',
        bull: '123',
        idFarm: '123',
        idStraw: '123',
        layette: 'abc',
        origin: 'Compra',
        purpose: 'abc',
        state: STRAW_NO_USED,
        value: '10000'
    };
}
