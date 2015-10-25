require('babel/register');
describe("Bellavista", function() {
    var bellavista = require("../lib/bellavista.es6");
    var app;

    beforeEach(function() {
        app = bellavista();
    });

    it("should have stores for components and routes", function() {
        expect(app.components).toBeDefined();
        expect(app.routes).toBeDefined();
    });
});
