export const TYPE_CEBA = 'Ceba';
export class Meet {
    id?: string;
    type: string;
    finca?: string;
    bovino?: string;
    fecha: Date;
    peso: number;
    gananciaPeso: number;
    eliminado: boolean;
}
