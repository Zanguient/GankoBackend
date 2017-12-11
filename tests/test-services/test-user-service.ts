import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as mocha from 'mocha';
import * as chairx from 'chai-rx';

import { DatabaseService } from '../../src/services/database-service';
import { service, Usuario } from '../../src/services/user-service';
import { config } from '../../src/config/global';

describe("User Service", function () {

    let user = new Usuario();
    user.nombre = "test";
    user.apellido = "apellidotest";
    user.email = "test@test.com";
    user.usuario = "test";
    user.password = "test";
    user.identificacion = "123456789";
    user.estado = "activo";
    // let user = {
    //     "nombre" : "test",
    //     "apellido" : "testapellido",
    //     "email" : "test@test",
    //     "usuario" : "test",
    //     "password" : "test",
    //     "identificacion" : "123",
    //     "estado" : "activo"
    // } as Usuario;

    

    before(function (done) {
        chai.should();
        chai.use(chairx);
        done();    
    });

    it("CreateUser",function(){
        return service.addUser(user)
        .should.eventually.property("insertedCount").equal(1);
    });

});