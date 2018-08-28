import { Bovino } from '../../shared/models/bovine.model';
import { Produccion } from '../../shared/models/milk-production.model';
import { Meat, TYPE_CEBA } from '../../shared/models/meat.model';

export function bovines(): Bovino[] {
    return [
        makeBovine(1),
        makeBovine(2),
        makeBovine(3),
        makeBovine(4),
        makeBovine(5),
        makeBovine(6),
        makeBovine(7),
        makeBovine(8),
        makeBovine(9),
        makeBovine(10),
        makeBovine(11),
        makeBovine(12),
        makeBovine(13),
        makeBovine(14),
        makeBovine(15),
        makeBovine(16),
        makeBovine(17),
        makeBovine(18),
        makeBovine(19),
        makeBovine(20),
        makeBovine(21),
        makeBovine(22),
        makeBovine(23),
        makeBovine(24),
        makeBovine(25),
        makeBovine(26),
        makeBovine(27),
        makeBovine(28),
        makeBovine(29),
        makeBovine(30),
        makeBovine(31),
        makeBovine(32),
        makeBovine(33),
        makeBovine(34),
        makeBovine(35),
        makeBovine(36),
        makeBovine(37),
        makeBovine(38),
        makeBovine(39),
        makeBovine(40),
        makeBovine(41),
        makeBovine(42),
        makeBovine(43),
        makeBovine(44)
    ];
}

export function bovine(): Bovino {
    return makeBovine(1);
}

function makeBovine(index: number): Bovino {
    return {
        id: '123' + index,
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
        servicios: [{
            fecha: new Date(), finalizado: false, fechaUltimoCelo: new Date(),
            condicionCorporal: 10, empadre: 'Monta Natural', codigoToro: 'Cdo012'
        }],

        retirado: false,
        finca: '123',
        destete: true,
        fechaDestete: new Date(),
        celos: [new Date()]
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

export function meats(): Meat[] {
    return [
        { eliminado: false, gananciaPeso: 0, peso: 100, fecha: new Date(), type: TYPE_CEBA },
        { eliminado: false, gananciaPeso: 0, peso: 240, fecha: new Date(), type: TYPE_CEBA },
        { eliminado: false, gananciaPeso: 0, peso: 230, fecha: new Date(), type: TYPE_CEBA },
        { eliminado: false, gananciaPeso: 0, peso: 180, fecha: new Date(), type: TYPE_CEBA },
    ];
}
