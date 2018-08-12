export class Pradera {
    id?: string;
    sequence?: number;
    type?: string;
    identificador?: number;
    idFinca?: string;
    isEmptyMeadow?: boolean;
    isUsedMeadow?: boolean;
    tamano?: number;
    tamanoEnHectareas?: boolean;
    tipoGraminea?: string;
    fechaOcupacion?: Date;
    fechaSalida?: Date;
    mantenimiento?: Mantenimiento[];
    aforo?: Aforo[];
    group?: string;
    available?: boolean;
    bovinos?: string[];
}

export class Mantenimiento {
    fechaMantenimiento?: Date;
    producto?: string;
    cantidad?: number;
    valor?: number;
    total?: number;
}

export class Aforo {
    valores?: number[];
    promedio?: number;
    fechaAforo?: Date;
    total?: number;
}
