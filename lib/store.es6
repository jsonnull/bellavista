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

}