(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bellavista = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
// istanbul ignore next

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _storeEs6 = require('./store.es6');

var _providerEs6 = require('./provider.es6');

var _dataEs6 = require('./data.es6');

var _modelEs6 = require('./model.es6');

var _viewEs6 = require('./view.es6');

var _controllerEs6 = require('./controller.es6');

var _routerEs6 = require('./router.es6');

var _utilEs6 = require('./util.es6');

var Bellavista = (function () {
    function Bellavista() {
        _classCallCheck(this, Bellavista);

        this.components = new _storeEs6.Store();
        this.routes = new _storeEs6.Store();
    }

    // This function determines whether a given request matches a route

    _createClass(Bellavista, [{
        key: 'provider',
        value: function provider(name, deps, obj) {

            if (obj == undefined) {
                obj = deps;
                deps = [];
            }

            new _providerEs6.Provider(this.components, name, obj, { deps: deps });
        }
    }, {
        key: 'data',
        value: function data(name, deps, func) {
            new _providerEs6.Service(this.components, name, func, { deps: deps });
        }
    }, {
        key: 'model',
        value: function model(name, deps, func) {
            new _providerEs6.Factory(this.components, name, func, { deps: deps });
        }
    }, {
        key: 'view',
        value: function view(name, deps, func) {
            new _providerEs6.Factory(this.components, name, func, { deps: deps });
        }
    }, {
        key: 'controller',
        value: function controller(name, deps, func) {
            new _providerEs6.Service(this.components, name, func, { deps: deps });
        }
    }, {
        key: 'route',
        value: function route(name, deps, func) {
            new _providerEs6.Factory(this.routes, name, func, { deps: deps, dependencyStore: this.components });
        }
    }], [{
        key: 'match',
        value: function match(route, req) {
            return req.url == route;
        }
    }]);

    return Bellavista;
})();

function bellavista() {
    return new Bellavista();
}

exports['default'] = global.bellavista = bellavista;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./controller.es6":2,"./data.es6":3,"./model.es6":4,"./provider.es6":5,"./router.es6":6,"./store.es6":7,"./util.es6":8,"./view.es6":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(store, name, cons, deps) {
    _classCallCheck(this, Controller);
};

exports.Controller = Controller;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Data = function Data(store, name, cons, deps) {
    _classCallCheck(this, Data);
};

exports.Data = Data;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function Model(store, name, cons, deps) {
    _classCallCheck(this, Model);
};

exports.Model = Model;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
// istanbul ignore next
var _bind = Function.prototype.bind;
// istanbul ignore next

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

// istanbul ignore next

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

// istanbul ignore next

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilEs6 = require('./util.es6');

/*
 * Bellavista providers are healivy inspired by the providers in Angular
 */

/*
 * A provider is an object with a get method
 */

var Provider = function Provider(store, name, obj, opts) {
    _classCallCheck(this, Provider);

    // Set default options and override
    var _opts$dependencyStore = opts.dependencyStore;
    var dependencyStore = _opts$dependencyStore === undefined ? store : _opts$dependencyStore;
    var _opts$deps = opts.deps;
    var deps = _opts$deps === undefined ? [] : _opts$deps;
    var layer = opts.layer;

    this.dependencyStore = dependencyStore;
    this.deps = deps;
    this.layer = layer;

    store.set(name, obj);
}

/*
 * A factory is a provider with a get method that returns the object
 */
;

exports.Provider = Provider;

var Factory = (function (_Provider) {
    _inherits(Factory, _Provider);

    function Factory(store, name, cons, opts) {
        _classCallCheck(this, Factory);

        // Set default options and override
        var _opts$dependencyStore2 = opts.dependencyStore;
        var dependencyStore = _opts$dependencyStore2 === undefined ? store : _opts$dependencyStore2;
        var _opts$deps2 = opts.deps;
        var deps = _opts$deps2 === undefined ? [] : _opts$deps2;

        // Create a new object for the provider with a get method
        var obj = {};
        obj.get = function () {

            // Inject dependencies on every new factory object
            var deps = store.injectDependencies(name);

            // Call the constructor and return the new object
            return new (_bind.apply(cons, [null].concat(_toConsumableArray(deps))))();
        };

        // Provider class stores additional information
        _get(Object.getPrototypeOf(Factory.prototype), 'constructor', this).call(this, store, name, obj, opts);
    }

    /*
     * Service is a factory that acquires the constructed singleton upon creation
     */
    return Factory;
})(Provider);

exports.Factory = Factory;

var Service = (function (_Factory) {
    _inherits(Service, _Factory);

    function Service(store, name, cons, opts) {
        _classCallCheck(this, Service);

        // Ignore options, they're not needed by the service class

        // Defer creation until the first time the service is retrieved
        var service = null;

        // The factory object will call this constructor function, initializing
        // the service the first time it is injected. Subsequent injections just
        // return the stored service
        var factoryFunction = function factoryFunction(the_deps) {

            // If service hasn't been created yet, do so now
            if (service == null) {
                service = new cons(the_deps);
            }

            return service;
        };

        // The factory class will call the constructor
        _get(Object.getPrototypeOf(Service.prototype), 'constructor', this).call(this, store, name, cons, opts);
    }

    return Service;
})(Factory);

exports.Service = Service;

},{"./util.es6":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function Router(store, name, cons, deps) {
    _classCallCheck(this, Router);
};

exports.Router = Router;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// istanbul ignore next

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = (function () {

    // Initialize the store

    function Store() {
        _classCallCheck(this, Store);

        // Holds all modules for the app
        this.dict = {};
    }

    // Instantiate each and store

    _createClass(Store, [{
        key: "set",
        value: function set(name, obj) {
            this.dict[name] = obj;
        }

        // Return the provider from the store
    }, {
        key: "get",
        value: function get(name) {
            if (this.dict[name] !== undefined) {
                return this.dict[name].get();
            }
        }

        // Get a provider from the store without calling its get method
    }, {
        key: "retrieve",
        value: function retrieve(name) {
            return this.dict[name];
        }

        // Return array of instantiated dependencies for a given provider
    }, {
        key: "injectDependencies",
        value: function injectDependencies(name) {
            var provider = this.retrieve(name);

            var deps = [];

            provider.deps.forEach(function (name, index) {
                deps[index] = provider.dependencyStore.get(name);
            });

            return deps;
        }
    }]);

    return Store;
})();

exports.Store = Store;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
// istanbul ignore next

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Util = (function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'isArray',
        value: function isArray(arr) {
            return Object.prototype.toString.call(someVar) === '[object Array]';
        }
    }]);

    return Util;
})();

exports.Util = Util;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// istanbul ignore next

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View(store, name, cons, deps) {
    _classCallCheck(this, View);
};

exports.View = View;

},{}]},{},[1])(1)
});


//# sourceMappingURL=bellavista.js.map
