export class Vacuna{
    constructor(
        public id_bovino:number,
        public fecha_vacunacion:Date,
        public nombre_vacuna:String,
        public dosis_vacuna:number,
        public via_vacuna:String,
        public valor:number,
        public version:number
    ){}
}