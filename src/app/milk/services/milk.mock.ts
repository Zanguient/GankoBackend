import { Leche } from '../../shared/models/milk.model';

export function milks(): Leche[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function milk(): Leche {
    return makeItem(1);
}

function makeItem(item: number): Leche {
    return {
        id: '123',
        fecha: new Date(),
        idFarm: '123',
        numeroLitros: 10,
        operacion: 'Venta',
        totalLitros: 10000,
        valorLitro: 1000
    };
}
