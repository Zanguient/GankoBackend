import { Manejo, TYPE_MANEJO } from '../../shared/models/manage.model';
import { NOT_APPLIED } from '../../shared/models/common.model';

export function manages(): Manejo[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function manage(): Manejo {
    return makeItem(1);
}

function makeItem(item: number): Manejo {
    return {
        id: '123',
        type: TYPE_MANEJO,
        idFinca: '123',
        bovinos: ['123', '321', '345'],
        idAplicacionUno: '456',
        grupo: item % 2 === 0 ? null : { color: 4921451, nombre: 'Grupo ' + item, id: '123' },
        noBovinos: [],
        fecha: new Date(),
        fechaProxima: new Date(),
        frecuencia: 12,
        estadoProximo: NOT_APPLIED,
        unidadFrecuencia: 'Dias',
        aplicacion: 1,
        numeroAplicaciones: 10,
        observaciones: 'Observaciones ...',
        otro: '',
        producto: 'Producto ' + item,
        tipo: 'Tipo ' + item,
        tratamiento: 'Tratamiento ' + item,
        valorAsistencia: 10000,
        valorProducto: 10000,
        titulo: '',
        descripcion: ''
    };
}
