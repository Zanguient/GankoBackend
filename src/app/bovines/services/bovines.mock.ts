import { Bovino } from '../../shared/models/bovine.model';
import { Produccion } from '../../shared/models/milk-production.model';
import { Meet, TYPE_CEBA } from '../../shared/models/meet.model';

export function bovines(): Bovino[] {
    return [
        makeBovine(1),
        makeBovine(2),
        makeBovine(3),
        makeBovine(4)
    ];
}

export function bovine(): Bovino {
    return makeBovine(1);
}

function makeBovine(index: number): Bovino {
    return {
        id: '123',
        nombre: 'Lupita ' + index,
        type: 'Bovino',
        tipo: 'Leche',
        codigo: '000' + index,
        fechaIngreso: new Date(),
        fechaNacimiento: new Date(),
        genero: 'Hembra',
        proposito: 'Leche',
        peso: 100,
        color: 'cafe',
        raza: 'Runa',
        lote: 1,
        partos: 0,
        precioCompra: 30000,
        procedencia: 'Compra',
        fechaSalida: new Date(),

        retirado: false,
        finca: '123',
        destete: true,
        fechaDestete: new Date(),
        celos: []
    };
}


export function productions(): Produccion[] {
    return [
        { fecha: new Date(), jornada: 'Mañana', litros: '20', bovino: '123' },
        { fecha: new Date(), jornada: 'Mañana', litros: '40', bovino: '123' },
        { fecha: new Date(), jornada: 'Tarde', litros: '50', bovino: '123' },
        { fecha: new Date(), jornada: 'Tarde', litros: '10', bovino: '123' }
    ];
}

export function meets(): Meet[] {
    return [
        { eliminado: false, gananciaPeso: 0, peso: 100, fecha: new Date(), type: TYPE_CEBA },
        { eliminado: false, gananciaPeso: 0, peso: 240, fecha: new Date(), type: TYPE_CEBA },
        { eliminado: false, gananciaPeso: 0, peso: 230, fecha: new Date(), type: TYPE_CEBA },
        { eliminado: false, gananciaPeso: 0, peso: 180, fecha: new Date(), type: TYPE_CEBA },
    ]
}
