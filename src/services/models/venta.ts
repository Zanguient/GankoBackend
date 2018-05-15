export const TYPE_VENTA = "venta";

export class SalidaLeche {
    type: string; //venta
    fecha: Date;
    operacion: string; // venta, consumo propio, regalada, perdida
    valorLitro?: number;
}
