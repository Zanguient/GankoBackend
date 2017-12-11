export class Parto{
    constructor(
        public id_bovino:number,
        public fecha:Date,
        public dias_vacios:number,
        public intervalo_partos:number,
        public estado_cria:String,
        public sexo_cria:String
    ){}
}