"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chairx = require("chai-rx");
var user_service_1 = require("../../src/services/user-service");
describe("User Service", function () {
    var user = new user_service_1.Usuario();
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
    it("CreateUser", function () {
        return user_service_1.service.addUser(user)
            .should.eventually.property("insertedCount").equal(1);
    });
});
//# sourceMappingURL=test-user-service.js.map