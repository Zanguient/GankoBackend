import 'rxjs/add/operator/mergeMap';
import { toDate } from "../util/date-util";
import { DBConnection } from './db-connection';
import { Bovino, TYPE_BOVINO } from "./models/bovinos";

export class BovinoService {

    private static _instance: BovinoService;
    static get instance(): BovinoService {
        if (BovinoService._instance == undefined) {
            BovinoService._instance = new BovinoService(DBConnection.instance);
        }
        return BovinoService._instance;
    }

    constructor(private db: DBConnection) { }

    //permite recuperar los bovinos pertenecientes a un usuario o finca
    findBovinos(idFinca: string, q: string, leche: boolean, ceba: boolean, ambos: boolean, celo: boolean, servicio: boolean, diagnostico: boolean, destete: boolean, retirados: boolean, sexo: string) {
        const queries = [];

        if (q && q != "") {
            const qy = q.toLowerCase();
            queries.push('(LOWER(nombre) LIKE "' + qy + '%" OR LOWER(codigo) LIKE "' + qy + '%")');
        }

        const prop = [];
        if (leche) { prop.push('"Lecheria"'); }
        if (ceba) { prop.push('"Ceba"'); }
        if (ambos) { prop.push('"Ambos"'); }

        if (prop.length > 0) { queries.push('proposito IN [' + prop.join(',') + ']'); }

        if (celo) {
            const date = (new Date()).getTime() - 10800000;
            queries.push('celo[0] <= "' + date + '"');
        }
        if (servicio || diagnostico) {
            queries.push('servicio[0].finalizado = false')
            if (diagnostico) {
                queries.push('servicio[0].diagnostico.confirmacion = true')
            }
        }


        if (destete != undefined) { queries.push("destete = " + destete); }

        if (sexo) { queries.push('genero = "' + sexo + '"'); }

        const ret = retirados === true ? true : false;
        let where = "finca = $1 AND retirado = " + ret;
        where = where + (queries.length > 0 ? " AND " + queries.join(" AND ") : '');


        return this.db.ListByType<Bovino>(TYPE_BOVINO, where, [idFinca]);
    }

    findBovinosByIds(ids: string[]) {
        return this.db.ListByType<Bovino>(TYPE_BOVINO, "META(ganko).id IN $1", [ids]);
    }


    //permite encontrar un bovino por medio de su identificador asignado
    findByIdBovino(idbovino: string) {
        return this.db.typedOne<Bovino>(TYPE_BOVINO, "codigo = $1", [idbovino]);
    }
    //permite buscar el bovino por id de BD
    findById(idbovino: string) {
        return this.db.getById(idbovino)
    }
    //permite insertar un nuevo bovino
    addBovino(bovino: Bovino) {
        toDate(bovino, 'fechaNacimiento', 'fechaIngreso', 'fechaDestete');
        return this.db.typedOne(TYPE_BOVINO, "codigo = $1 AND finca = $2", [bovino.codigo, bovino.finca])
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