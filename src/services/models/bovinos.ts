export const TYPE_BOVINO = 'Bovino';
/**
 * @apiDefine Bovino
 * @apiParam {Object} Bovino JSON Object
 * @apiParam {string} Bovino.id id de couchbase
 * @apiParam {string} Bovino.type Parametro usado para buscar en couchbase
 * @apiParam {string} Bovino.tipo tipo de bovino
 * @apiParam {string} Bovino.codigo Codigo asigando al bovino por parte del dueño
 * @apiParam {string} Bovino.imagen imagen del bovino
 * @apiParam {string} Bovino.nombre nombre dle bovino
 * @apiParam {date} Bovino.fechaNacimiento fecha de nacimiento del bovino
 * @apiParam {date} Bovino.fechaIngreso fecha de ingreso a la finca
 * @apiParam {string} Bovino.genero genero del bovino
 * @apiParam {string} Bovino.proposito proposito del bovino, como ceba, leche o ambos
 * @apiParam {number} Bovino.peso peso del bovino
 * @apiParam {string} Bovino.color color del bovino
 * @apiParam {string} Bovino.raza raza del bovino
 * @apiParam {string} Bovino.codigoMadre codigo de la madre si se conoce
 * @apiParam {string} Bovino.codigoPadre codigo del padre si se conoce
 * @apiParam {number} Bovino.lote lote en el q se encuentra el bovino
 * @apiParam {number} Bovino.partos numero de partos del bovino si es hembra
 * @apiParam {number} Bovino.precioCompra precio de compra del bovino si fue comprado
 * @apiParam {string} Bovino.procedencia procedencia del bovino
 * @apiParam {boolean} Bovino.retirado estado del bovino
 * @apiParam {date} Bovino.fechaSalida fecha de retiro del bovino
 * @apiParam {string} Bovino.motivoSalida motivo del retiro del bovino
 * @apiParam {number} Bovino.precioVenta precio de venta del bovino si fue vendido
 * @apiParam {string} Bovino.finca finca a la que pertenece el bovino
 * @apiParam {boolean} Bovino.destete verifica si el bovino fue destetado
 * @apiParam {date} Bovino.fechaDestete fecha del destete si aplica
 * @apiParam {object} Bovino.celos fechas de los celos si el bovino es hembra
 * @apiParam {date} Bovino.fechaProximoCelo fecha calculada del proximo celo
 * @apiParam {boolean} Bovino.seleccionado bandera para verificar si fue seleccionado
 * @apiParam {object} Bovino.servicios array de servicios aplicados al bovino
 */
export class Bovino {
    id?: string;
    type?: string;
    tipo: string;
    codigo: string;
    imagen?: string;
    nombre: string;
    fechaNacimiento?: Date;
    fechaIngreso?: Date;
    genero: string;
    proposito: string;
    peso: number;
    color: string;
    raza: string;
    codigoMadre?: string;
    codigoPadre?: string;
    lote?: number;
    partos?: number;
    precioCompra?: number;
    procedencia: string;

    retirado: boolean;
    fechaSalida?: Date;
    motivoSalida?: string;
    precioVenta?: number;

    finca: string;

    destete: boolean;
    fechaDestete?: Date;
    celos: Date[];

    fechaProximoCelo?: Date;

    seleccionado?: boolean;

    servicios?: Servicio[];
}

/**
 * @apiDefine Servicio
 * @apiParam {object} Servicio
 * @apiParam {date} Servicio.fecha fecha del servicio
 * @apiParam {date} Servicio.fechaUltimoCelo fecha del ultimo celo
 * @apiParam {number} Servicio.condicionCorporal condicion corporal del bovino
 * @apiParam {string} Servicio.empadre empadre 
 * @apiParam {string} Servicio.codigoToro codigo del toro
 * @apiParam {string} Servicio.pajilla pajilla usada
 * @apiParam {object} Servicio.diagnostico diagnostico del bovino
 * @apiParam {object} Servicio.parto informacion del parto
 * @apiParam {object} Servicio.novedad novedad del bovino
 * @apiParam {date} Servicio.posFechaParto posfecha de parto
 * @apiParam {boolean} Servicio.finalizado estado del servicio
 */
export class Servicio {
    fecha: Date;
    fechaUltimoCelo: Date;
    condicionCorporal: number;
    empadre: string;
    codigoToro?: string;
    pajilla?: string;
    diagnostico?: Diagnostico;
    parto?: Parto;
    novedad?: Novedad;
    posFechaParto?: Date;
    finalizado: boolean;
}

/**
 * @apiDefine Diagnostico
 * @apiParam {object} Diagnostico
 * @apiParam {date} Diagnostico.fecha fecha del diagnostico
 * @apiParam {boolean} Diagnostico.confirmacion confirmacion del servicio
 */

export class Diagnostico {
    fecha: Date;
    confirmacion: boolean;
}

/**
 * @apiDefine Parto
 * @apiParam {object} Parto
 * @apiParam {date} Parto.fecha fecha del parto
 * @apiParam {number} Parto.intervalo intervalo entre partos
 * @apiParam {number} Parto.diasVacios dias vacios entre partos
 * @apiParam {string} Parto.sexoCria sexo de la cria nacida
 * @apiParam {number} Parto.numero numero de parto
 * @apiParam {string} Parto.estadoCria estado de cria
 */
export class Parto {
    fecha: Date;
    intervalo: number;
    diasVacios: number;
    sexoCria: string;
    numero: number;
    estadoCria: string;
}
/**
 * @apiDefine Novedad
 * @apiParam {object} Novedad
 * @apiParam {date} Novedad.fecha fecha de la novedad
 * @apiParam {string} novedad  
 */
export class Novedad {
    fecha: Date;
    novedad: string;
}