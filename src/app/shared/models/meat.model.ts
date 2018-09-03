export const TYPE_CEBA = 'Ceba';
export class Meat {
    id?: string;
    type: string;
    finca?: string;
    bovino?: string;
    fecha: Date;
    peso: number;
    gananciaPeso: number;
    eliminado: boolean;
    channels?: string[];
}
