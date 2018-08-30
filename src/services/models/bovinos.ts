export const TYPE_BOVINO = 'Bovino';
export class Bovino {
    id?: string;
    type?: string;
    tipo: string;
    codigo: string;
    imagen?: string;
    nombre: string;
    fechaNacimiento?: Date;
    fechaIngreso?: Date;
    genero: string;
    proposito: string;
    peso: number;
    color: string;
    raza: string;
    codigoMadre?: string;
    codigoPadre?: string;
    lote?: number;
    partos?: number;
    precioCompra?: number;
    procedencia: string;

    retirado: boolean;
    fechaSalida?: Date;
    motivoSalida?: string;
    precioVenta?: number;

    finca: string;

    destete: boolean;
    fechaDestete?: Date;
    celos: Date[];

    fechaProximoCelo?: Date;

    seleccionado?: boolean;

    servicios?: Servicio[];
}

export class Servicio {
    fecha: Date;
    fechaUltimoCelo: Date;
    condicionCorporal: number;
    empadre: string;
    codigoToro?: string;
    pajilla?: string;
    diagnostico?: Diagnostico;
    parto?: Parto;
    novedad?: Novedad;
    posFechaParto?: Date;
    finalizado: boolean;
}

export class Diagnostico {
    fecha: Date;
    confirmacion: boolean;
}

export class Parto {
    fecha: Date;
    intervalo: number;
    diasVacios: number;
    sexoCria: string;
    numero: number;
    estadoCria: string;
}

export class Novedad {
    fecha: Date;
    novedad: string;
}