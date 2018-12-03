import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { Bovino, TYPE_BOVINO } from "./models/bovinos";
import { DBConnection, DBHandler } from './database/db-handler';
import { Q } from './database/query-builder';

export class BovinoService {

    private static _instance: BovinoService;
    static get instance(): BovinoService {
        if (BovinoService._instance == undefined) {
            BovinoService._instance = new BovinoService(DBConnection.instance);
        }
        return BovinoService._instance;
    }

    constructor(private db: DBHandler) { }

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    findBovinos(idFinca: string, q: string, leche: boolean, ceba: boolean, ambos: boolean, celo: boolean, servicio: boolean, diagnostico: boolean, destete: boolean, retirados: boolean, sexo: string) {

        const ret = retirados === true ? true : false;
        let where = Q().equalStr("finca", idFinca).and().equalBool("retirado", ret)

        const queries = [];

        if (q && q != "") {
            const qy = q.toLowerCase();
            where = where.andExp(Q().likeEnd("nombre", qy).or().likeEnd("codigo", qy));
        }

        const prop = [];
        if (leche) { prop.push('"Lecheria"'); }
        if (ceba) { prop.push('"Ceba"'); }
        if (ambos) { prop.push('"Ambos"'); }

        if (prop.length > 0) {
            where = where.and().in("proposito", prop);
        }

        if (celo) {
            const date = (new Date()).getTime() - 10800000;
            where = where.and().lteStr("celo[0]", date + "");            
        }
        if (servicio || diagnostico) {
            where = where.and().equalBool("servicio[0].finalizado", false);
            if (diagnostico) {
                where = where.and().equalBool("servicio[0].diagnostico.confirmacion", true);                
            }
        }


        if (destete != undefined) { 
            where = where.and().equalBool("destete", destete);
        }

        if (sexo) { 
            where = where.and().equalStr("genero", sexo);            
        }

        return this.db.listByType<Bovino>(TYPE_BOVINO, where);
    }

    findBovinosByIds(ids: string[]) {
        return this.db.listByType<Bovino>(TYPE_BOVINO, Q().in("META(ganko).id", ids));
    }


    //permite encontrar un bovino por medio de su identificador asignado
    findByIdBovino(idbovino: string) {
        return this.db.typedOne<Bovino>(TYPE_BOVINO, Q().equalStr("codigo", idbovino));
    }
    //permite buscar el bovino por id de BD
    findById(idbovino: string) {
        return this.db.byId(idbovino)
    }
    //permite insertar un nuevo bovino
    addBovino(bovino: Bovino) {
        toDate(bovino, 'fechaNacimiento', 'fechaIngreso', 'fechaDestete');
        return this.db.typedOne(TYPE_BOVINO, Q().equalStr("codigo", bovino.codigo).and().equalStr("finca", bovino.finca))
            .then(x => x ? undefined : this.db.insert(bovino));
    }

    //permite editar un bovino
    updateBovino(idBovino: string, bovino: Bovino) {
        return this.db.replace(idBovino, bovino)
    }

    //permite subir la foto del bovino
    // updateImageBovino(id: number, idImage: number) {
    //     return this.query(`UPDATE ${table} SET imagen = ? WHERE id = ?`, [idImage, id]);
    // }

    //permite eliminar un bovino usando su identificador asignado
    deleteBovino(idbovino) {
        return this.db.remove(idbovino)
    }

    img(id: string): Promise<Buffer> {
        return this.db.byId(id)
            .then((x: any) => x.value);
    }

}