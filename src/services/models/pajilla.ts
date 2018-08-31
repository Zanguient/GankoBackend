export const TYPE_PAJILLA = 'Straw';
/**
 * @apiDefine Straw
 * @apiParam {object} Straw
 * @apiParam {} Straw.id id de la pajilla
 * @apiParam {} Straw.type type de pajilla
 * @apiParam {} Straw.idFarm id de la finca a la que pertenece la pajilla
 * @apiParam {} Straw.idStraw id asignado a la pajilla en la finca
 * @apiParam {} Straw.layette canastilla a la que pertenece la pajilla
 * @apiParam {} Straw.breed raza del toro
 * @apiParam {} Straw.purpose proposito de la pajilla
 * @apiParam {} Straw.bull id del toro
 * @apiParam {} Straw.origin origen de la pajilla
 * @apiParam {} Straw.value costo de la pajilla
 * @apiParam {} Straw.state stado de la pajilla
 */
export class Straw {
    id?: string;
    type?: string;
    idFarm?: string;
    idStraw: string;
    layette: string;
    breed: string;
    purpose: string;
    bull: string;
    origin: string;
    value: string;
    state?: number;
}