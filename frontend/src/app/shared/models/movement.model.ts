export class Movimiento {
    id?: string;
    sequence?: number;
    type?: string;
    idPradera?: string;
    bovinos: string[] = [];
    transactionDate: Date;
    idFarm: string;

    channels?: string[];
    constructor(id?: string, sequence?: number, type?: string, idPradera?: string, bovinos?: string[],
        transactionDate?: Date, idFarm?: string) {
        this.id = id;
        this.sequence = sequence;
        this.type = type;
        this.idPradera = idPradera;
        this.bovinos = bovinos;
        this.transactionDate = transactionDate;
        this.idFarm = idFarm;
    }
}
