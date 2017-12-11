export class Alimentacion{
    constructor(
        public id_bovino:number,
        public proposito:String,
        public fecha:Date,
        public racion:String,
        public producto:String,
        public valor_kilo:number,
        public total:number,
        public version:number
    ){}
}