import { DatabaseService } from './database-service';

const table = "pradera";

export class PraderaService extends DatabaseService{

    insertPradera(pradera:Pradera){
        this.query(`INSERT INTO ${table} SET ?`,[pradera]);
    }

    getPraderas(id_finca:number){
        this.query(`SELECT * FROM ${table} WHERE finca = ?`,[id_finca]);
    }

    getPradera(id_pradera:number){
        this.query(`SELECT * FROM ${table} WHERE id = ?`,[id_pradera]);
    }

    deletePradera(id_pradera:number){
        this.query(`DELETE FROM ${table} WHERE id = ?`,[id_pradera]);
    }

    updatePradera(id_pradera:number,pradera:Pradera){
        this.query(`UPDATE ${table} SET ? WHERE id = ?`,[pradera,id_pradera]);
    }
    
}

export class Pradera{
    public posicion:number;
    public nombre:string;
    public tipo:string;
    public fecha_ocupacion:Date;
    public dias:number;
    public fecha_salida:Date;
    public fecha_fertilizacion:Date;
    public producto:string;
    public cantidad:number;
    public finca:number;
    public usuario:number;
    public version:number;
}
