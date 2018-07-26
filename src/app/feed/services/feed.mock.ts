import { Alimentacion, TYPE_ALIMENTACION } from '../../shared/models/feed.model';

export function feeds(): Alimentacion[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function feed(): Alimentacion {
    return makeItem(1);
}

function makeItem(item: number): Alimentacion {
    return {
        id: '123',
        fecha: new Date(),
        bovinos: ['567', '321', '456'],
        grupo: item % 2 === 0 ? null : { color: 4921451, nombre: 'Grupo ' + item, id: '123' },
        idFinca: '123',
        peso: 300,
        tipoAlimento: 'Tipo A',
        type: TYPE_ALIMENTACION,
        valorkg: 2000,
        valorTotal: 60000
    };
}
