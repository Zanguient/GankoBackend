export const TYPE_PRADERA = 'Pradera';
/**
 * @apiDefine Pradera
 * @apiParam {object} Pradera
 * @apiParam {string} Pradera.id id de la pradera
 * @apiParam {string} Pradera.type type de pradera
 * @apiParam {number} Pradera.identificador identificador de la pradera
 * @apiParam {string} Pradera.idFinca identificador de la finca
 * @apiParam {boolean} Pradera.isEmptyMeadow verifica si la pradera esta vacia
 * @apiParam {boolean} Pradera.isUsedMeadow verifica si la rpadera esta usada
 * @apiParam {number} Pradera.tamano tamaño de la pradera
 * @apiParam {boolean} Pradera.tamanoEnHectareas verifica si el tamaño es en hectareas o en metros cuadrados
 * @apiParam {string} Pradera.tipoGraminea tipo de graminea de la pradera
 * @apiParam {Date} Pradera.fechaOcupacion fecha de ocupacion de la pradera
 * @apiParam {Date} Pradera.fechaSalida fecha de liberacion de la pradera
 * @apiParam {Object} Pradera.mantenimiento objeto de mantenimientos a la pradera
 * @apiParam {Object} Pradera.aforo objeto de aforo de la pradera
 * @apiParam {sring} Pradera.group grupo que usa actualmente la pradera
 * @apiParam {boolean} Pradera.available verifica si la rpadera esta disponible para el uso en la finca
 * @apiParam {object} Pradera.bovinos lista de id de bovinos en la pradera
 */
export class Pradera {
    id?: string;
    type: string;
    identificador: number;
    idFinca: string;
    isEmptyMeadow: boolean;
    isUsedMeadow: boolean;
    tamano: number;
    tamanoEnHectareas: boolean;
    tipoGraminea: string;
    fechaOcupacion: Date;
    fechaSalida: Date;
    mantenimiento: Mantenimiento[];
    aforo: Aforo[];
    group: string;
    available: boolean;
    bovinos: string[];

    constructor(idFinca:string){
        this.idFinca = idFinca;
        this.isUsedMeadow = false;
        this.isEmptyMeadow = true;
        this.type = TYPE_PRADERA;
    }

}

/**
 * @apiDefine Mantenimiento
 * @apiParam {object} Mantenimiento
 * @apiParam {string} Mantenimiento.fechaMantenimiento fecha del mantenimiento
 * @apiParam {number} Mantenimiento.producto producto usado en la pradera
 * @apiParam {number} Mantenimiento.cantidad cantidad de producto usado en la pradera
 * @apiParam {number} Mantenimiento.valor valor del producto
 * @apiParam {number} Mantenimiento.total total en pesos colombianos
 */
class Mantenimiento {
    fechaMantenimiento: Date;
    producto: string;
    cantidad: number;
    valor: number;
    total: number;
}
/**
 * @apiDefine Aforo
 * @apiParam {object} Aforo
 * @apiParam {number} Aforo.valores valores del aforo
 * @apiParam {number} Aforo.promedio promedio del aforo
 * @apiParam {Date} Aforo.fechaAforo fecha en que se hace el aforo
 * @apiParam {number} Aforo.total total del aforo
 */
class Aforo {
    valores: number[];
    promedio: number;
    fechaAforo: Date;
    total: number;
}