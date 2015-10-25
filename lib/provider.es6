import {Util} from './util.es6';

/*
 * Bellavista providers are healivy inspired by the providers in Angular
 */

/*
 * A provider is an object with a get method
 */
export class Provider {
    constructor(store, name, obj, opts) {

        // Set default options and override
        var { dependencyStore = store, deps = [], layer } = opts;

        this.dependencyStore = dependencyStore;
        this.deps = deps;
        this.layer = layer;

        store.set(name, obj);
    }

}

/*
 * A factory is a provider with a get method that returns the object
 */
export class Factory extends Provider {
    constructor(store, name, cons, opts) {

        // Set default options and override
        var { dependencyStore = store, deps = [] } = opts;

        // Create a new object for the provider with a get method
        var obj = {};
        obj.get = function() {

            // Inject dependencies on every new factory object
            let deps = store.injectDependencies(name);

            // Call the constructor and return the new object
            return new cons(...deps);
        }

        // Provider class stores additional information
        super(store, name, obj, opts);
    }
}

/*
 * Service is a factory that acquires the constructed singleton upon creation
 */
export class Service extends Factory {
    constructor(store, name, cons, opts) {

        // Ignore options, they're not needed by the service class

        // Defer creation until the first time the service is retrieved
        var service = null;

        // The factory object will call this constructor function, initializing
        // the service the first time it is injected. Subsequent injections just
        // return the stored service
        var factoryFunction = function(the_deps) {

            // If service hasn't been created yet, do so now
            if (service == null) {
                service = new cons(the_deps);
            }

            return service;
        }

        // The factory class will call the constructor
        super(store, name, cons, opts);
    }
}
