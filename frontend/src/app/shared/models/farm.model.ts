export const TYPE_FINCA = 'Finca';

export class Finca {
    id?: string;
    usuarioId?: string;
    nombre: string;
    ubicacion: string;
    hectareas: number;
    type?: string;
}
