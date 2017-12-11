export class Servicio{
    constructor(
        public id_bovino:number,
        public fecha:Date,
        public condicion_corporal:String,
        public fecha_palpacion:Date,
        public empadre:String,
        public id_pajilla:number,
        public procedencia:String
    ){}
}