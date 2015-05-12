/*
 * Bellavista providers are healivy inspired by the providers in Angular 
 */

/*
 * A provider is an object with a get method
 */
export class Provider {
    constructor(store, name, obj, deps) {
        store.set(name, obj);
    }
}

/*
 * A factory is a provider with a get method that returns the object
 */
export class Factory extends Provider {
    constructor(store, name, cons, deps, depStore = store) {
        super(store, name, {
            get: function() {
                deps.forEach( (name, index) => { deps[index] = depStore.get(name); });
                
                return new cons(...deps);
            }
        }, deps);
    }
}

/*
 * Service is a factory that acquires the constructed singleton upon creation
 */
export class Service extends Factory {
    constructor(store, name, cons, deps) {
        
        // defer creation until the first time the service is retrieved
        var service = null;
        
        // The Factory class will retrieve and insert the dependencies
        super(store, name, function(the_deps) {
            
            // If service hasn't been created yet, do so now
            if (service == null) {
                service = new cons(the_deps);
            }
            
            return service;
        }, deps);
    }
}