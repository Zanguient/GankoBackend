export class Manejo{
    constructor(
        public id_bovino:number,
        public fecha:Date,
        public evento:String,
        public tratamiento:String,
        public producto:String,
        public observaciones:String,
        public encargado_manejo:String,
        public version:number
    ){}
}