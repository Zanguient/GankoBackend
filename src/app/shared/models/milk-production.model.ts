export const TYPE_PROD_LECHE = 'Produccion';

export class Produccion {
    id?: string;
    type?: string;
    bovino: string;
    jornada: string;
    litros: string;
    fecha: Date;
}
