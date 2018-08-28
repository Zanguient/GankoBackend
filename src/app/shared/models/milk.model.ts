export const TYPE_LECHE = 'SalidaLeche';
export class Leche {
    id?: string;
    type?: string;
    idFarm?: string;
    fecha?: Date;
    operacion: string;
    valorLitro: number;
    numeroLitros: number;
    totalLitros: number;
}
