import { Sanidad } from '../../shared/models/health.model';
import { NOT_APPLIED } from '../../shared/models/common.model';

export function healths(): Sanidad[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function health(): Sanidad {
    return makeItem(1);
}

function makeItem(item: number): Sanidad {
    return {
        id: '123',
        idFinca: '123',
        bovinos: ['123', '321', '345'],
        idAplicacionUno: '456',
        grupo: item % 2 === 0 ? null : { color: 4921451, nombre: 'Grupo ' + item, id: '123' },
        noBovinos: [],
        diagnostico: 'Diagnostico ...',
        dosis: '5ml',
        estadoProximo: NOT_APPLIED,
        evento: 'Evento 1',
        fecha: new Date(),
        fechaProxima: new Date(),
        frecuencia: 12,
        numeroAplicaciones: 10,
        aplicacion: 1,
        observaciones: 'Observaciones ...',
        otra: item % 2 === 0 ? 'Otra ' + item : null,
        producto: 'Producto ' + item,
        tratamiento: 'Tratamiento ' + item,
        unidadFrecuencia: 'Dias',
        valorAtencion: 10000,
        valorProducto: 2000,
        titulo: '',
        descripcion: ''

    };
}
