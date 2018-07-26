import { Bovino } from '../../shared/models/bovine.model';

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
