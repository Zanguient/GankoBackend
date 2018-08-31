export const TYPE_FINCA = 'Finca';
/**
 * @apiDefine Finca
 * @apiParam {object} Finca
 * @apiParam {string} Finca.id id de la finca
 * @apiParam {string} Finca.usuarioId id del usuario al que pertenece la finca
 * @apiParam {string} Finca.nombre nombre de la finca
 * @apiParam {string} Finca.ubicacion ubicacion de la finca
 * @apiParam {number} Finca.hectareas tamaño de la finca
 * @apiParam {string} Finca.type type de finca
 */
export class Finca {
    id?: string;
    usuarioId?: string;
    nombre: string;
    ubicacion: string;
    hectareas: number;
    type?: string;
}
