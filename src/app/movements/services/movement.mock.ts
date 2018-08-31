import { Movimiento } from '../../shared/models/movement.model';


export function movements(): Movimiento[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function movement(): Movimiento {
    return makeItem(1);
}

function makeItem(item: number): Movimiento {
    return {
        id: '123',
        sequence: 12,
        type: 'tipo',
        idPradera: '1',
        bovinos: [],
        idFarm: '123',
        transactionDate: new Date()
    };
}
