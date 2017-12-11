"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var user_service_1 = require("../../src/services/user-service");
describe("User Service", function () {
    var user;
    user.nombre = "test";
    user.apellido = "apellidotest";
    user.email = "test@test.com";
    user.usuario = "test";
    user.password = "test";
    user.identificacion = "123456789";
    user.estado = "activo";
    before(function (done) {
        chai.should();
        chai.use(chaiAsPromised);
    });
    it("CreateUser", function () {
        return user_service_1.service.addUser(user)
            .should.eventually.property("insertedCount").equal(1);
    });
    after(function (done) {
    });
});
//# sourceMappingURL=user-service-test.js.map