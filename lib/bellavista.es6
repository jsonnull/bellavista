import {Store} from './store.es6';
import {Provider,Factory,Service} from './provider.es6';
import {Data} from './data.es6';
import {Model} from './model.es6';
import {View} from './view.es6';
import {Controller} from './controller.es6';
import {Router} from './router.es6';
import {Util} from './util.es6';

class Bellavista {

    constructor() {
        this.components = new Store();
        this.routes = new Store();
    }

    // This function determines whether a given request matches a route
    static match(route, req) {
        return (req.url == route);
    }

    provider(name, deps, obj) {

        if (obj == undefined) {
            obj = deps;
            deps = [];
        }

        new Provider(this.components, name, obj, {deps: deps});
    }

    data(name, deps, func) {
        new Service(this.components, name, func, { deps: deps });
    }

    model(name, deps, func) {
        new Factory(this.components, name, func, { deps: deps });
    }

    view(name, deps, func) {
        new Factory(this.components, name, func, { deps: deps });
    }

    controller(name, deps, func) {
        new Service(this.components, name, func, { deps: deps });
    }

    route(name, deps, func) {
        new Factory(this.routes, name, func,
            { deps: deps, dependencyStore: this.components});
    }
}

function bellavista() {
    return new Bellavista;
}

export default global.bellavista = bellavista;
