export class Movimiento {
    id?: string;
    sequence?: number;
    type?: string;
    idPradera?: string;
    bovinos: string[] = [];
    transactionDate: Date;
    idFarm: string;
}
