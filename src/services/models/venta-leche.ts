export class VentaLeche{
    constructor(
        public fecha:Date,
        public operacion:String,
        public litros_vendidos:number,
        public valor_litro:number,
        public finca:number
    ){}
}