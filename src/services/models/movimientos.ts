export const TYPE_MOVIMIENTO = 'Movimiento';

/**
 * @apiDefine Movimiento
 * @apiParam {object} Movimiento
 * @apiParam {string} Movimiento.id id del movimiento
 * @apiParam {string} Movimiento.type type de movimiento
 * @apiParam {string} Movimiento.idPradera id de la pradera 
 * @apiParam {Object} Movimiento.bovinos lista de id de bovinos en la pradera
 * @apiParam {Date} Movimiento.transactionDate fecha de la transaccion
 * @apiParam {string} Movimiento.idFarm id de la finca
 */
export class Movimiento{
    id: string;
    type: string;
    idPradera:string;
    bovinos:string[];
    transactionDate:Date;
    idFarm:string;
}
