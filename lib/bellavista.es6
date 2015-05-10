import {Module} from './module.es6';
import {Factory} from './factory.es6';
import {Data} from './data.es6';
import {Model} from './model.es6';
import {View} from './view.es6';
import {Controller} from './controller.es6';
import {Router} from './router.es6';

class Bellavista {

    constructor() {
        
    }
    
    // This function determines whether a given request matches a route
    static match(route, req) {
        return (req.url == route);
    }

}

export default global.Bellavista = Bellavista;