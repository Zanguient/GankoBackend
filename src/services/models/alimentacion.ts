export const TYPE_ALIMENTACION = "alimentacion";

export class Alimentacion{
    type:string; //alimentacion
    bovino:string[];
    fecha:Date;
    racion:number;
    tipo:string; //Forraje Verde, Bloque Nutricional, Concentrado Comercial, Sal Mineralizada, Heno, Ensilaje, Otro
    otro:string;
    valorKilo:number;
}

