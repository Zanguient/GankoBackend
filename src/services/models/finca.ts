export const TYPE_FINCA = "finca";

export class Finca {
    usuarioDni:string;
    type:string; // finca
    nombre: string;
    ubicacion: {
        departamento: string;
        ciudad: string;
        region: string;
        direccion: string;
    }
    hectareas: number;
}