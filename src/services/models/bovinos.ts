export const TYPE_BOVINO = "bovino";
export class Bovino {
    type: string; //bovino
    codigo: string;
    imagenRemota: string;
    imagenLocal: string;
    nombre: string;
    fechaNacimiento?: Date;
    fechaIngreso: Date;
    genero: string; //macho|hembra
    proposito: string; //leche|cebas|ambos
    peso: number;
    color: string;
    raza: string;
    codigoMadre?: string;
    codigoPadre?: string;
    lote: number;
    partos?: number;
    precioCompra?: number;

    retirado: boolean;
    fechaSalida?: Date;
    motivoSalida?: string;
    precioVenta?: number;

    finca: string;

    destete: boolean;
    fechaDestete?: Date;
    celos: Date[];
    servicios: Servicio[];
    vacunas: Vacuna[];
    sanidad: Sanidad[];
    manejo: Manejo[];
}

class Servicio {
    fecha: Date;
    fechaUltimoCelo: Date; // Revisar con Edwin
    condicionCorporal: number;
    empadre: string; //monta, inseminacion
    codigoToro?: string;
    pajilla?: string;
    diagnosticos: Diagnostico[];
    parto?: Parto;
    confirmacion: boolean;
}

class Diagnostico {
    fecha: Date;
    novedad: String; // Muerte | Aborto
}

class Parto {
    fecha: Date;
    intervalo: number; // Dias entre partos
    diasVacios: number; // Dias desde el ultimo parto hasta el servicio
    sexoCria: string;
    estadoCria: string; //vivo | muerto
}

export class Vacuna {
    nombre: string;
    dosis: number;
    aplicaciones: Aplicacion[];
}

export class Sanidad {
    fecha: Date;
    evento: string; //enfermedad|endoparasitos|ectoparasistos|otra
    otra?: string;
    diagnostico: string;
    tratamiento: string;
    producto: string;
    dosis: string;
    via: string;
    numeroAplicaciones: number;
    frecuencia: number;
    observaciones: string;
    aplicaciones: Aplicacion[];
}

export class Manejo {
    fecha: Date;
    numeroAplicaciones: number;
    frecuencia: number;
    tipo:string; // corte de ombligo, identificación, descorné, arreglo de cascos, castración, secado, otro
    otro?:string;
    tratamiento:string;
    producto:string;
    observaciones:string;
    aplicaciones:Aplicacion[];
}

class Aplicacion {
    fecha: Date;
    aplicado: boolean;
    valorProducto:number;
    valorAsistencia?:number
}