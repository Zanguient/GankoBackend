import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q, arrayLength } from './database/query-builder';
import { TYPE_FINCA } from './models/finca';
import { TYPE_BOVINO, Bovino } from './models/bovinos';
import { TYPE_LECHE } from './models/leche';
import { TYPE_PROD_LECHE } from './models/produccion';
import { TYPE_CEBA } from './models/ceba';
import { TYPE_PRADERA } from './models/praderas';
import { TYPE_MOVIMIENTO } from './models/movimientos';
import { TYPE_ALIMENTACION } from './models/alimentacion';
import { TYPE_VACUNA } from './models/vacunas';
import { TYPE_SANIDAD } from './models/sanidad';
import { TYPE_MANEJO } from './models/manejo';
import { TYPE_PAJILLA } from './models/pajilla';


export class ReportesService {

    private static _instance: ReportesService;
    static get instance(): ReportesService {
        if (ReportesService._instance == undefined) {
            ReportesService._instance = new ReportesService(DBConnection.instance);
        }
        return ReportesService._instance;
    }

    constructor(private db: DBHandler) { }

    getReporteFuturosPartos(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca).and().equalBool("servicios[0].finalizado", false)
            .and().isNotMissing("servicios[0].posFechaParto"));
    }



    getReporteSecado(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().equalBool("servicios[0].finalizado", false)
                .and().isNotNull("servicios[0].posFechaParto")
                .or().isMissing("servicios[0].posFechaParto"));
    }
    getReportePreparacion(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().equalBool("servicios[0].finalizado", false)
                .and().isNotNull("servicios[0].posFechaParto")
                .or().isMissing("servicios[0].posFechaParto"));
    }
    getReporteDiasVacios(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().equalStr("genero","Hembra")
                .and().gtInt(arrayLength("servicios"),0)
                .containsStr("servicios", "Monta Natural")
                .and().satisfies("servicio","servicios",Q().isNotNull("servicio.parto")));
    }
    getReportePartosAtendidos(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().equalStr("genero","Hembra")
                .and().satisfies("servicio","servicios",Q().isNotNull("servicio.parto")))
    }
    getReporteAbortos(idFinca: string) { 
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().equalStr("genero","Hembra")
                .and().satisfies("servicio","servicios",Q().equalStr("servicio.novedad.novedad","Aborto")))
    }
    
    getReporteTresServicios(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().equalStr("genero", "Hembra")
                .and().gteInt(arrayLength("servicios"), 3)
        )
    }
    getReporteCelos(idFinca: string) {
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
                .and().gteInt(arrayLength("servicios"),  1)
        )
    }
    getReporteConsolidado(idFinca: string) {
        return this.db.listByType(
            TYPE_LECHE,
            Q().equalStr("finca", idFinca)
        )
    }
    getReporteDeLeche(idFinca:string){
        return this.db.listByType(
            TYPE_PROD_LECHE,
            Q().equalStr("finca", idFinca)
        )
    }
    getReporteDestete(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
        )
    }
    getBovinos(idFinca){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("finca", idFinca)
        )
    }
    getReporteGananciaDePeso(idBovino:string){
        return this.db.listByType(
            TYPE_CEBA,
            Q().equalStr("bovino", idBovino)
        )
    }
    getReportePraderas(idFinca:string){
        return this.db.listByType(
            TYPE_PRADERA,
            Q().equalStr("idFinca", idFinca)
        )
    }
    getReporteOcupacionPraderas(idFinca:string){
        return this.db.listByType(
            TYPE_PRADERA,
            Q().equalStr("idFinca", idFinca)
            .and()
            .equalBool("available",false)
        )
    }
    getReporteMovimientos(idFinca:string){
        return this.db.listByType(
            TYPE_MOVIMIENTO,
            Q().equalStr("idFinca", idFinca)
        )
    }
    getReporteAlimentacion(idFinca:string){
        return this.db.listByType(
            TYPE_ALIMENTACION,
            Q().equalStr("idFinca", idFinca)
        )
    }
    getReporteInventario(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
        )
    }
    getReporteTernerasenEstaca(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
            .and()
            .equalStr("genero","Hembra")
        )
    }
    getReporteTerneraDestetas(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
            .and()
            .equalStr("genero","Hembra")
        )
    }
    getReporteTernerasLevante(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
            .and()
            .equalStr("genero","Hembra")
        )
    }
    getReporteNovillasVientre(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
            .and()
            .equalStr("genero","Hembra")
        )
    }
    getReporteVacas(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
            .and()
            .equalStr("genero","Hembra")
        )
    }
    getReporteSalida(idFinca:string){
        return this.db.listByType(
            TYPE_BOVINO,
            Q().equalStr("idFinca", idFinca)
        )
    }
    getReporteVacunas(idFinca:string){
        return this.db.listByType(
            TYPE_VACUNA,
            Q().equalStr("idFinca", idFinca)
            .orderDesc("fecha")
        )
    }
    getReporteSanidad(idFinca:string){
        return this.db.listByType(
            TYPE_SANIDAD,
            Q().equalStr("idFinca", idFinca)
            .orderDesc("fecha")
        )
    }
    getReporteManejo(idFinca:string){
        return this.db.listByType(
            TYPE_MANEJO,
            Q().equalStr("idFinca", idFinca)
            .orderDesc("fecha")
        )
    }
    getReportePajillas(idFinca:string){
        return this.db.listByType(
            TYPE_PAJILLA,
            Q().equalStr("idFinca", idFinca)
        )
    }
}