import { Vacuna } from '../../shared/models/vaccine.model';
import { NOT_APPLIED } from '../../shared/models/common.model';

export function vaccines(): Vacuna[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function vaccine(): Vacuna {
    return makeItem(1);
}

function makeItem(item: number): Vacuna {
    return {
        id: '123',
        idFinca: '123',
        bovinos: ['123', '321', '345'],
        grupo: item % 2 === 0 ? null : { color: 4921451, nombre: 'Grupo ' + item, id: '123' },
        noBovinos: [],
        estadoProximo: NOT_APPLIED,
        fecha: new Date(),
        fechaProxima: new Date(),
        descripcion: 'Descripcion ...',
        frecuencia: 12,
        unidadFrecuencia: 'Dias',
        idAplicacionUno: '123',
        nombre: 'Vacuna ' + item,
        valor: 10000,
        titulo: '123',
        dosisMl: 6
    };
}
