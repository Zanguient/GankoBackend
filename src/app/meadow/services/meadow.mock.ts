import { Pradera } from '../../shared/models/meadow.model';


export function meadows(): Pradera[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4),
        makeItem(5)
    ];
}

export function meadow(): Pradera {
    return makeItem(1);
}

function makeItem(item: number): Pradera {
    return {
        id: item.toString(),
        sequence: 12,
        type: 'tipo',
        identificador: item,
        bovinos: [],
        idFinca: '123',
        fechaSalida: new Date(),
        fechaOcupacion: new Date(),
        mantenimiento: [],
        aforo: [],
        group: item % 2 ? '' : 'Grupo ' + item,
        available: item % 2 ? true : false,
        cellId: item % 2 ? item - 1 : item * 3
    };
}
