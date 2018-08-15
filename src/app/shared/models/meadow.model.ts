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

    constructor(isUsedMeadow?: boolean) {
        this.isUsedMeadow = this.isUsedMeadow;
    }
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

/* export class Cell {
    cellId: number;
    pradera: Pradera;

    constructor(cellId: number, pradera: Pradera) {
        this.cellId = cellId;
        this.pradera = pradera;
    }
}*/
