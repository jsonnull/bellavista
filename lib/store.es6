export class Store {

    // Initialize the store
    constructor() {
        // Holds all modules for the app
        this.dict = {};
    }

    // Instantiate each and store
    set(name, obj) {
        this.dict[name] = obj;
    }

    // Return the provider from the store
    get(name) {
        if (this.dict[name] !== undefined) {
            return this.dict[name].get();
        }
    }

    // Get a provider from the store without calling its get method
    retrieve(name) {
        return this.dict[name];
    }

    // Return array of instantiated dependencies for a given provider
    injectDependencies(name) {
        var provider = this.retrieve(name);

        var deps = [];

        provider.deps.forEach( (name, index) => {
            deps[index] = provider.dependencyStore.get(name);
        });

        return deps;
    }

}
