require('babel/register');
var bellavista = require("../lib/bellavista.js");

describe("Bellavista", function() {
    var app;

    beforeEach(function() {
        app = bellavista();
    });

    it("should have stores for components and routes", function() {
        expect(app.components).toBeDefined();
        expect(app.routes).toBeDefined();
    });
});
