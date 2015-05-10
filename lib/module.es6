export class Module {
    
    constructor() {
        // Holds all modules for the app
        this.dict = {};
    }
    
    set(name, obj) {
        dict[name] = obj;
    }

    get(name) {
        return dict[name];
    }

}