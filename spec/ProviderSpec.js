describe("Providers", function() {
    var bellavista = require("../dist/bellavista.js");
    var app;

    beforeEach(function() {
        app = bellavista();
    });

    it("should be retrievable", function() {
        app.provider("test", ["my dependency"], {});
        expect( app.components.retrieve("test") ).toBeDefined();
    });

    it("should be constructible with and without dependencies", function() {
        app.provider("some dependencies", ["my dependency"], {});

        expect( app.components.retrieve("some dependencies") ).toBeDefined();

        app.provider("no dependencies", {});

        expect( app.components.retrieve("no dependencies") ).toBeDefined();
    });

    it("should be gettable", function() {

        app.provider("test", {
            get: function() { return "provider 1" }
        });

        expect( app.components.get("test") )
            .toEqual("provider 1");

        app.provider("test with dependencies", ["test"], {
            get: function() { return "provider 2" }
        });

        expect( app.components.get("test with dependencies") )
            .toEqual("provider 2");
    });
});
