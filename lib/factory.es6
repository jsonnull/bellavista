/*
 * Provider is an object with a get method, or a function that instantiates such an object
 */
export class Provider {
    constructor(name, func) {
        
    }
}

/*
 * Factory is a provider with a get method that is set to the factory function
 */
export class Factory extends Provider {
    constructor() {
        super();
    }
}

/*
 * Service is a factory with a factory function that is the constructor for the class
 */
export class Service extends Factory {
    constructor() {
        super();
    }
}