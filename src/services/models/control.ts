export class Control{
    constructor(
        public id_bovino:number,
        public fecha:Date,
        public evento:String,
        public diagnostico:String,
        public tratamiento:String,
        public producto:String,
        public dosis:number,
        public frecuencia:String,
        public observaciones:String,
        public encargado_control:String,
        public version:number
    ){}
}