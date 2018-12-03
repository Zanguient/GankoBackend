import { ReportesService } from "../../services/reportes-service";
import { Bovino, Servicio } from "../../services/models/bovinos";
import { ResponseBody } from "../util/response-body";
import { ESRCH } from "constants";
import { Response } from "express-serve-static-core";


export function getReportes(req, res: Response, next) {
    let idReporte: number = req.params.idReporte;
    let idFinca: string = req.query.q;
    let month = req.query.month ? req.query.month : 0;
    let year = req.query.year ? req.query.year : 0;
    let initialDate: number = req.query.initialDate ? req.query.initialDate : 0;
    let finalDate: number = req.query.finalDate ? req.query.finalDate : 0;
    switch (idReporte) {
        case 0: reporteFuturosPartos(res, idFinca, month, year, initialDate, finalDate);
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            break;
        case 21:
            break;
        case 22:
            break;
        case 23:
            break;
        case 23:
            break;
        case 23:
            break;
        case 23:
            break;
        case 23:
            break;
    }
}

function reporteFuturosPartos(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {
    let resList: Bovino[];
    ReportesService.instance.getReporteFuturosPartos(idFinca)
        .then(bovineList => {
            let list = bovineList.doc as Bovino[];
            if (month != 0) {
                for (let index = 0; index < list.length; index++) {
                    if (!list[index].servicios[0].finalizado &&
                        list[index].servicios[0].posFechaParto.getMonth == month &&
                        list[index].servicios[0].posFechaParto.getFullYear == year) {
                        resList.push(list[index]);
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            } else {
                for (let index = 0; index < list.length; index++) {
                    if (!list[index].servicios[0].finalizado &&
                        list[index].servicios[0].posFechaParto.getMilliseconds >= initialDate &&
                        list[index].servicios[0].posFechaParto.getMilliseconds <= finalDate) {
                        resList.push(list[index]);
                    }
                }
            }
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reporteSecado(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {
    let resList: Bovino[];
    ReportesService.instance.getReporteSecado(idFinca)
        .then(bovineList => {
            let list = bovineList.doc as Bovino[];
            if (month != 0) {
                for (let index = 0; index < list.length; index++) {
                    let fechaPosParto = list[index].servicios[0].posFechaParto
                    let fechaSecado = new Date(fechaPosParto.getTime() - 5184000000);
                    if (!list[index].servicios[0].finalizado &&
                        fechaSecado.getMonth == month &&
                        fechaSecado.getFullYear == year) {
                        resList.push(list[index]);
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            } else {
                for (let index = 0; index < list.length; index++) {
                    let fechaPosParto = list[index].servicios[0].posFechaParto
                    let fechaSecado = new Date(fechaPosParto.getTime() - 5184000000);
                    if (!list[index].servicios[0].finalizado &&
                        fechaSecado.getMilliseconds >= initialDate &&
                        fechaSecado.getMilliseconds <= finalDate) {
                        resList.push(list[index]);
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            }
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reportePreparacion(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {
    let resList: Bovino[];
    ReportesService.instance.getReportePreparacion(idFinca)
        .then(bovineList => {
            let list = bovineList.doc as Bovino[];
            if (month != 0) {
                for (let index = 0; index < list.length; index++) {
                    let fechaPosParto = list[index].servicios[0].posFechaParto
                    let Preparacion = new Date(fechaPosParto.getTime() - 2592000000);
                    if (!list[index].servicios[0].finalizado &&
                        Preparacion.getMonth == month &&
                        Preparacion.getFullYear == year) {
                        resList.push(list[index]);
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            } else {
                for (let index = 0; index < list.length; index++) {
                    let fechaPosParto = list[index].servicios[0].posFechaParto
                    let Preparacion = new Date(fechaPosParto.getTime() - 2592000000);
                    if (!list[index].servicios[0].finalizado &&
                        Preparacion.getMilliseconds >= initialDate &&
                        Preparacion.getMilliseconds <= finalDate) {
                        resList.push(list[index]);
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            }
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}

function reporteDiasVacios(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {

}

function reportePartosAtentidos(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {
    let resList: Servicio[];
    ReportesService.instance.getReportePartosAtendidos(idFinca)
        .then(bovineList => {
            let list = bovineList.doc as Bovino[];
            if (month != 0) {
                for (let bovino = 0; bovino < list.length; bovino++) {
                    for (let servicio = 0; servicio < list.length; servicio++) {
                        let serv = list[bovino].servicios[servicio];
                        if (serv.parto != null) {
                            let fechaParto = serv.parto.fecha;
                            if (fechaParto.getMonth == month && fechaParto.getFullYear == year && serv.finalizado) {
                                resList.push(serv);
                            }
                        }
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            } else {
                for (let bovino = 0; bovino < list.length; bovino++) {
                    for (let servicio = 0; servicio < list.length; servicio++) {
                        let serv = list[bovino].servicios[servicio];
                        if (serv.parto != null) {
                            let fechaParto = serv.parto.fecha.getTime;
                            if (fechaParto > initialDate && fechaParto < finalDate && serv.finalizado) {
                                resList.push(serv);
                            }
                        }
                    }
                }
                res.send(new ResponseBody(true, resList, null));
            }
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}
// function reporteAbortos(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {
//     let resList: Servicio[];
//     ReportesService.instance.getReporteAbortos(idFinca)
//         .then(bovineList => {
//             let list = bovineList.doc as Bovino[];
//             if (month != 0) {
//                 for (let bovino = 0; bovino < list.length; bovino++) {
//                     for (let servicio = 0; servicio < list.length; servicio++) {
//                         let serv = list[bovino].servicios[servicio];
//                         if (serv.parto != null) {
//                             let fechaParto = serv.parto.fecha;
//                             if (fechaParto.getMonth == month && fechaParto.getFullYear == year && serv.finalizado) {
//                                 resList.push(serv);
//                             }
//                         }
//                     }
//                 }
//                 res.send(new ResponseBody(true, resList, null));
//             } else {
//                 for (let bovino = 0; bovino < list.length; bovino++) {
//                     for (let servicio = 0; servicio < list.length; servicio++) {
//                         let serv = list[bovino].servicios[servicio];
//                         if (serv.parto != null) {
//                             let fechaParto = serv.parto.fecha.getTime;
//                             if (fechaParto > initialDate && fechaParto < finalDate && serv.finalizado) {
//                                 resList.push(serv);
//                             }
//                         }
//                     }
//                 }
//                 res.send(new ResponseBody(true, resList, null));
//             }
//         }, err => res.status(500).send(new ResponseBody(false, null, err)))
// }
function reporteTresServicios(res: Response, idFinca: string, month: any, year: any, initialDate: any, finalDate: any) {
    let resList: Bovino[];
    ReportesService.instance.getReporteTresServicios(idFinca)
        .then(bovineList => {
            let list = bovineList.doc as Bovino[];
            for (let bovino = 0; bovino < list.length; bovino++) {
                let serv1 = list[bovino].servicios[0];
                let serv2 = list[bovino].servicios[1];
                let serv3 = list[bovino].servicios[2];
                if (serv1.diagnostico.confirmacion ? !serv1.diagnostico.confirmacion : false &&
                    serv2.diagnostico.confirmacion ? !serv2.diagnostico.confirmacion : false &&
                        serv3.diagnostico.confirmacion ? !serv3.diagnostico.confirmacion : false) {
                    resList.push(list[bovino])
                }
            }
            res.send(new ResponseBody(true, resList, null));
        }, err => res.status(500).send(new ResponseBody(false, null, err)))
}




