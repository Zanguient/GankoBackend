import { ReportesService } from "../../services/reportes-service";
import { Bovino, Servicio } from "../../services/models/bovinos";
import { ResponseBody } from "../util/response-body";
import { Response } from "express-serve-static-core";
import { Produccion } from "../../services/models/produccion";
import { Leche } from "../../services/models/leche";
import { Pradera } from "../../services/models/praderas";
import { Movimiento } from "../../services/models/movimientos";
import { Alimentacion } from "../../services/models/alimentacion";
import { Vacuna } from "../../services/models/vacunas";
import { Sanidad } from "../../services/models/sanidad";
import { Manejo } from "../../services/models/manejo";
import { Straw } from "../../services/models/pajilla";


export function getReportes(req, res: Response, next) {
    let idReporte = req.params.idReporte;
    let idFinca: string = req.query.q;
    let month:number = req.query.month ? parseInt(req.query.month) : 0;
    let year:number = req.query.year ? parseInt(req.query.year) : 0;
    let initialDate: number = req.query.initialDate ? parseInt(req.query.initialDate) : 0;
    let finalDate: number = req.query.finalDate ? parseInt(req.query.finalDate) : 0;
    switch (idReporte) {
        case "0": reporteFuturosPartos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "1": reporteSecado(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "2": reportePreparacion(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "3": reporteDiasVacios(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "4": reportePartosAtentidos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "5": reporteAbortos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "6": reporteTresServicios(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "7": reporteCelos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "8": reporteConsolidado(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "9": reporteLeche(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "10": reporteDestetos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "11": reportePraderas(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "12": reporteOcupacionPraderas(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "13": reporteMovimientos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "14": reporteAlimentacion(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "15": reporteInventario(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "16": reporteTernerasEnEstaca(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "17": reporteTernerasDestetas(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "18": reporteNovillasLevante(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "19": reporteNovillasVientre(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "20": reporteVacas(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "21": reporteSalida(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "22": reporteVacuna(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "23": reporteSanidad(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "24": reporteManejo(res, idFinca, month, year, initialDate, finalDate);
            break;
        case "25": reportePajillas(res, idFinca, month, year, initialDate, finalDate);
            break;
        default: reportePajillas(res, idFinca, month, year, initialDate, finalDate);
            break;
    }
}

function reporteFuturosPartos(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReporteFuturosPartos(idFinca)
        .then(bovineList => {
            // let resList: Bovino[];
            // if (month != 0) {
            //     for (let index = 0; index < list.length; index++) {
            //         if (!list[index].servicios[0].finalizado &&
            //             list[index].servicios[0].posFechaParto.getMonth() == month &&
            //             list[index].servicios[0].posFechaParto.getFullYear() == year) {
            //             resList.push(list[index]);
            //         }
            //     }
            // } else {
            //     for (let index = 0; index < list.length; index++) {
            //         if (!list[index].servicios[0].finalizado &&
            //             list[index].servicios[0].posFechaParto.getMilliseconds() >= initialDate &&
            //             list[index].servicios[0].posFechaParto.getMilliseconds() <= finalDate) {
            //             resList.push(list[index]);
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.send(new ResponseBody(false, null, err)))
        .catch(err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reporteSecado(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReporteSecado(idFinca)
        .then(bovineList => {
            // let resList: Bovino[];
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let index = 0; index < list.length; index++) {
            //         let fechaPosParto = list[index].servicios[0].posFechaParto
            //         let fechaSecado = new Date(fechaPosParto.getTime() - 5184000000);
            //         if (!list[index].servicios[0].finalizado &&
            //             fechaSecado.getMonth() == month &&
            //             fechaSecado.getFullYear() == year) {
            //             resList.push(list[index]);
            //         }
            //     }
            // } else {
            //     for (let index = 0; index < list.length; index++) {
            //         let fechaPosParto = list[index].servicios[0].posFechaParto
            //         let fechaSecado = new Date(fechaPosParto.getTime() - 5184000000);
            //         if (!list[index].servicios[0].finalizado &&
            //             fechaSecado.getMilliseconds() >= initialDate &&
            //             fechaSecado.getMilliseconds() <= finalDate) {
            //             resList.push(list[index]);
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.send(new ResponseBody(false, null, err)))
        .catch(err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reportePreparacion(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReportePreparacion(idFinca)
        .then(bovineList => {
            // let resList: Bovino[];
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let index = 0; index < list.length; index++) {
            //         let fechaPosParto = list[index].servicios[0].posFechaParto
            //         let Preparacion = new Date(fechaPosParto.getTime() - 2592000000);
            //         if (!list[index].servicios[0].finalizado &&
            //             Preparacion.getMonth() == month &&
            //             Preparacion.getFullYear() == year) {
            //             resList.push(list[index]);
            //         }
            //     }
            // } else {
            //     for (let index = 0; index < list.length; index++) {
            //         let fechaPosParto = list[index].servicios[0].posFechaParto
            //         let Preparacion = new Date(fechaPosParto.getTime() - 2592000000);
            //         if (!list[index].servicios[0].finalizado &&
            //             Preparacion.getMilliseconds() >= initialDate &&
            //             Preparacion.getMilliseconds() <= finalDate) {
            //             resList.push(list[index]);
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.send(new ResponseBody(false, null, err)))
        .catch(err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reporteDiasVacios(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReporteDiasVacios(idFinca)
        .then(bovineList => res.send(new ResponseBody(true, bovineList.doc, null))
            , err => res.send(new ResponseBody(false, null, err)))
        .catch(err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reportePartosAtentidos(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReportePartosAtendidos(idFinca)
        .then(servicioList => {
            // let resList: Servicio[];
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         for (let servicio = 0; servicio < list.length; servicio++) {
            //             let serv = list[bovino].servicios[servicio];
            //             if (serv.parto != null) {
            //                 let fechaParto = serv.parto.fecha;
            //                 if (fechaParto.getMonth() == month && fechaParto.getFullYear() == year && serv.finalizado) {
            //                     resList.push(serv);
            //                 }
            //             }
            //         }
            //     }
            // } else {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         for (let servicio = 0; servicio < list.length; servicio++) {
            //             let serv = list[bovino].servicios[servicio];
            //             if (serv.parto != null) {
            //                 let fechaParto = serv.parto.fecha.getTime();
            //                 if (fechaParto > initialDate && fechaParto < finalDate && serv.finalizado) {
            //                     resList.push(serv);
            //                 }
            //             }
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, servicioList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteAbortos(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReporteAbortos(idFinca)
        .then(bovineList => {
            // let resList: Servicio[];
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         for (let servicio = 0; servicio < list.length; servicio++) {
            //             let serv = list[bovino].servicios[servicio];
            //             if (serv.parto != null) {
            //                 let fechaParto = serv.parto.fecha;
            //                 if (fechaParto.getMonth() == month && fechaParto.getFullYear() == year && serv.finalizado) {
            //                     resList.push(serv);
            //                 }
            //             }
            //         }
            //     }
            // } else {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         for (let servicio = 0; servicio < list.length; servicio++) {
            //             let serv = list[bovino].servicios[servicio];
            //             if (serv.parto != null) {
            //                 let fechaParto = serv.parto.fecha.getTime();
            //                 if (fechaParto > initialDate && fechaParto < finalDate && serv.finalizado) {
            //                     resList.push(serv);
            //                 }
            //             }
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteTresServicios(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteTresServicios(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // for (let bovino = 0; bovino < list.length; bovino++) {
            //     let serv1 = list[bovino].servicios[0];
            //     let serv2 = list[bovino].servicios[1];
            //     let serv3 = list[bovino].servicios[2];
            //     if (serv1.diagnostico.confirmacion ? !serv1.diagnostico.confirmacion : false &&
            //         serv2.diagnostico.confirmacion ? !serv2.diagnostico.confirmacion : false &&
            //             serv3.diagnostico.confirmacion ? !serv3.diagnostico.confirmacion : false) {
            //         resList.push(list[bovino])
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reporteCelos(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteCelos(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaCelo = list[bovino].celos[0];
            //         if (fechaCelo.getMonth() == month && fechaCelo.getFullYear() == year) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // } else {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaCelo = list[bovino].celos[0];
            //         if (fechaCelo.getTime() > initialDate && fechaCelo.getTime() < finalDate) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reporteConsolidado(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Leche[];
    ReportesService.instance.getReporteConsolidado(idFinca)
        .then(productionList => {
            // let list = productionList.doc as Leche[];
            // if (month != 0) {
            //     for (let produccion = 0; produccion < list.length; produccion++) {
            //         let fechaProduccion = list[produccion].fecha;
            //         if (fechaProduccion.getMonth() == month && fechaProduccion.getFullYear() == year) {
            //             resList.push(list[produccion])
            //         }
            //     }
            // } else {
            //     for (let produccion = 0; produccion < list.length; produccion++) {
            //         let fechaProduccion = list[produccion].fecha;
            //         if (fechaProduccion.getTime() > initialDate && fechaProduccion.getTime() < finalDate) {
            //             resList.push(list[produccion])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, productionList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteLeche(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Produccion[];
    ReportesService.instance.getReporteDeLeche(idFinca)
        .then(productionList => {
            // let list = productionList.doc as Produccion[];
            // if (month != 0) {
            //     for (let produccion = 0; produccion < list.length; produccion++) {
            //         let fechaProduccion = list[produccion].fecha;
            //         if (fechaProduccion.getMonth() == month && fechaProduccion.getFullYear() == year) {
            //             resList.push(list[produccion])
            //         }
            //     }
            // } else {
            //     for (let produccion = 0; produccion < list.length; produccion++) {
            //         let fechaProduccion = list[produccion].fecha;
            //         if (fechaProduccion.getTime() > initialDate && fechaProduccion.getTime() < finalDate) {
            //             resList.push(list[produccion])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, productionList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteDestetos(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteDestete(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaProduccion = list[bovino].fechaDestete;
            //         if (fechaProduccion.getMonth() == month && fechaProduccion.getFullYear() == year) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // } else {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaProduccion = list[bovino].fechaDestete;
            //         if (fechaProduccion.getTime() > initialDate && fechaProduccion.getTime() < finalDate) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reportePraderas(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Pradera[];
    ReportesService.instance.getReportePraderas(idFinca)
        .then(praderaList => {
            // let list = praderaList.doc as Pradera[];
            // for (let pradera = 0; pradera < list.length; pradera++) {
            //     if (list[pradera].mantenimiento.length != 0) {
            //         resList.push(list[pradera])
            //     }
            // }
            res.send(new ResponseBody(true, praderaList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteOcupacionPraderas(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    ReportesService.instance.getReporteOcupacionPraderas(idFinca)
        .then(praderaList => {
            res.send(new ResponseBody(true, praderaList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteMovimientos(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Movimiento[];
    ReportesService.instance.getReporteMovimientos(idFinca)
        .then(movementList => {
            // let list = movementList.doc as Movimiento[];
            // if (month != 0) {
            //     for (let movimiento = 0; movimiento < list.length; movimiento++) {
            //         let fechaMovimiento = list[movimiento].transactionDate;
            //         if (fechaMovimiento.getMonth() == month && fechaMovimiento.getFullYear() == year) {
            //             resList.push(list[movimiento])
            //         }
            //     }
            // } else {
            //     for (let movimiento = 0; movimiento < list.length; movimiento++) {
            //         let fechaMovimiento = list[movimiento].transactionDate;
            //         if (fechaMovimiento.getTime() > initialDate && fechaMovimiento.getTime() < finalDate) {
            //             resList.push(list[movimiento])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, movementList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteAlimentacion(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Alimentacion[];
    ReportesService.instance.getReporteAlimentacion(idFinca)
        .then(alimentacionList => {
            // let list = alimentacionList.doc as Alimentacion[];
            // if (month != 0) {
            //     for (let alimentacion = 0; alimentacion < list.length; alimentacion++) {
            //         let fechaAlimentacion = list[alimentacion].fecha;
            //         if (fechaAlimentacion.getMonth() == month && fechaAlimentacion.getFullYear() == year) {
            //             resList.push(list[alimentacion])
            //         }
            //     }
            // } else {
            //     for (let alimentacion = 0; alimentacion < list.length; alimentacion++) {
            //         let fechaAlimentacion = list[alimentacion].fecha;
            //         if (fechaAlimentacion.getTime() > initialDate && fechaAlimentacion.getTime() < finalDate) {
            //             resList.push(list[alimentacion])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, alimentacionList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteInventario(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteInventario(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaNacimiento = list[bovino].fechaNacimiento;
            //         if (fechaNacimiento.getMonth() == month && fechaNacimiento.getFullYear() == year) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // } else {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaNacimiento = list[bovino].fechaNacimiento;
            //         if (fechaNacimiento.getTime() > initialDate && fechaNacimiento.getTime() < finalDate) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteTernerasEnEstaca(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteTernerasenEstaca(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // for (let bovino = 0; bovino < list.length; bovino++) {
            //     let fechaNacimiento = list[bovino].fechaNacimiento.getTime();
            //     let tresDias = 259200000;
            //     let cincoMeses = 12960000000;
            //     let edad = new Date().getTime() - fechaNacimiento;
            //     if (edad > tresDias && edad < cincoMeses) {
            //         resList.push(list[bovino])
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteTernerasDestetas(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteTerneraDestetas(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // for (let bovino = 0; bovino < list.length; bovino++) {
            //     let fechaNacimiento = list[bovino].fechaNacimiento.getTime();
            //     let seisMeses = 15552000000;
            //     let doceMeses = 31104000000;
            //     let edad = new Date().getTime() - fechaNacimiento;
            //     if (edad > seisMeses && edad < doceMeses) {
            //         resList.push(list[bovino])
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteNovillasLevante(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteTernerasLevante(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // for (let bovino = 0; bovino < list.length; bovino++) {
            //     let fechaNacimiento = list[bovino].fechaNacimiento.getTime();
            //     let doceMeses = 31104000000;
            //     let dieciochoMeses = 46656000000;
            //     let edad = new Date().getTime() - fechaNacimiento;
            //     if (edad > doceMeses && edad < dieciochoMeses) {
            //         resList.push(list[bovino])
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteNovillasVientre(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteNovillasVientre(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // for (let bovino = 0; bovino < list.length; bovino++) {
            //     let fechaNacimiento = list[bovino].fechaNacimiento.getTime();
            //     let dieciochoMeses = 46656000000;
            //     let veinteMeses = 51840000000;
            //     let edad = new Date().getTime() - fechaNacimiento;
            //     if (edad > dieciochoMeses && edad < veinteMeses) {
            //         resList.push(list[bovino])
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteVacas(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteVacas(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // for (let bovino = 0; bovino < list.length; bovino++) {
            //     let fechaNacimiento = list[bovino].fechaNacimiento.getTime();
            //     let veinteMeses = 51840000000;
            //     let edad = new Date().getTime() - fechaNacimiento;
            //     if (edad > veinteMeses && list[bovino].partos>0) {
            //         resList.push(list[bovino])
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteSalida(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Bovino[];
    ReportesService.instance.getReporteSalida(idFinca)
        .then(bovineList => {
            // let list = bovineList.doc as Bovino[];
            // if (month != 0) {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaSalida = list[bovino].fechaSalida;
            //         if (fechaSalida.getMonth() == month && fechaSalida.getFullYear() == year) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // } else {
            //     for (let bovino = 0; bovino < list.length; bovino++) {
            //         let fechaSalida = list[bovino].fechaSalida;
            //         if (fechaSalida.getTime() > initialDate && fechaSalida.getTime() < finalDate) {
            //             resList.push(list[bovino])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, bovineList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteVacuna(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Vacuna[];
    ReportesService.instance.getReporteVacunas(idFinca)
        .then(vacunaList => {
            // let list = vacunaList.doc as Vacuna[];
            // if (month != 0) {
            //     for (let vacuna = 0; vacuna < list.length; vacuna++) {
            //         let fechaVacuna = list[vacuna].fecha;
            //         if (fechaVacuna.getMonth() == month && fechaVacuna.getFullYear() == year) {
            //             resList.push(list[vacuna])
            //         }
            //     }
            // } else {
            //     for (let vacuna = 0; vacuna < list.length; vacuna++) {
            //         let fechaVacuna = list[vacuna].fecha;
            //         if (fechaVacuna.getTime() > initialDate && fechaVacuna.getTime() < finalDate) {
            //             resList.push(list[vacuna])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, vacunaList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteSanidad(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Sanidad[];
    ReportesService.instance.getReporteSanidad(idFinca)
        .then(sanidadList => {
            // let list = sanidadList.doc as Sanidad[];
            // if (month != 0) {
            //     for (let sanidad = 0; sanidad < list.length; sanidad++) {
            //         let fechaSanidad = list[sanidad].fecha;
            //         if (fechaSanidad.getMonth() == month && fechaSanidad.getFullYear() == year) {
            //             resList.push(list[sanidad])
            //         }
            //     }
            // } else {
            //     for (let sanidad = 0; sanidad < list.length; sanidad++) {
            //         let fechaSanidad = list[sanidad].fecha;
            //         if (fechaSanidad.getTime() > initialDate && fechaSanidad.getTime() < finalDate) {
            //             resList.push(list[sanidad])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, sanidadList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reporteManejo(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Manejo[];
    ReportesService.instance.getReporteManejo(idFinca)
        .then(manejoList => {
            // let list = manejoList.doc as Manejo[];
            // if (month != 0) {
            //     for (let manejo = 0; manejo < list.length; manejo++) {
            //         let fechaManejo = list[manejo].fecha;
            //         if (fechaManejo.getMonth() == month && fechaManejo.getFullYear() == year) {
            //             resList.push(list[manejo])
            //         }
            //     }
            // } else {
            //     for (let manejo = 0; manejo < list.length; manejo++) {
            //         let fechaManejo = list[manejo].fecha;
            //         if (fechaManejo.getTime() > initialDate && fechaManejo.getTime() < finalDate) {
            //             resList.push(list[manejo])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, manejoList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
function reportePajillas(res: Response, idFinca: string, month: number, year: number, initialDate: number, finalDate: number) {
    let resList: Straw[];
    ReportesService.instance.getReportePajillas(idFinca)
        .then(pajillasList => {
            // let list = pajillasList.doc as Straw[];
            // if (month != 0) {
            //     for (let pajilla = 0; pajilla < list.length; pajilla++) {
            //         let fechaPajilla = list[pajilla].fecha;
            //         if (fechaPajilla.getMonth() == month && fechaPajilla.getFullYear() == year) {
            //             resList.push(list[pajilla])
            //         }
            //     }
            // } else {
            //     for (let pajilla = 0; pajilla < list.length; pajilla++) {
            //         let fechaPajilla = list[pajilla].fecha;
            //         if (fechaPajilla.getTime() > initialDate && fechaPajilla.getTime() < finalDate) {
            //             resList.push(list[pajilla])
            //         }
            //     }
            // }
            res.send(new ResponseBody(true, pajillasList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}