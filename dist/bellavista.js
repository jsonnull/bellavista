(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (descriptor.value) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _Module = require('./module.es6');

var _Factory = require('./factory.es6');

var _Data = require('./data.es6');

var _Model = require('./model.es6');

var _View = require('./view.es6');

var _Controller = require('./controller.es6');

var _Router = require('./router.es6');

var Bellavista = (function () {
    function Bellavista() {
        _classCallCheck(this, Bellavista);
    }

    _createClass(Bellavista, null, [{
        key: 'match',

        // This function determines whether a given request matches a route
        value: function match(route, req) {
            return req.url == route;
        }
    }]);

    return Bellavista;
})();

module.exports = global.Bellavista = Bellavista;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controller.es6":2,"./data.es6":3,"./factory.es6":4,"./model.es6":5,"./module.es6":6,"./router.es6":7,"./view.es6":8}],2:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Controller = function Controller(name, cons) {
    _classCallCheck(this, Controller);
};

exports.Controller = Controller;

},{}],3:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Data = function Data(name, cons) {
    _classCallCheck(this, Data);
};

exports.Data = Data;

},{}],4:[function(require,module,exports){
"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Provider is an object with a get method, or a function that instantiates such an object
 */

var Provider = function Provider(name, func) {
    _classCallCheck(this, Provider);
};

exports.Provider = Provider;

/*
 * Factory is a provider with a get method that is set to the factory function
 */

var Factory = (function (_Provider) {
    function Factory() {
        _classCallCheck(this, Factory);

        _get(Object.getPrototypeOf(Factory.prototype), "constructor", this).call(this);
    }

    _inherits(Factory, _Provider);

    return Factory;
})(Provider);

exports.Factory = Factory;

/*
 * Service is a factory with a factory function that is the constructor for the class
 */

var Service = (function (_Factory) {
    function Service() {
        _classCallCheck(this, Service);

        _get(Object.getPrototypeOf(Service.prototype), "constructor", this).call(this);
    }

    _inherits(Service, _Factory);

    return Service;
})(Factory);

exports.Service = Service;

},{}],5:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Model = function Model(name, cons) {
    _classCallCheck(this, Model);
};

exports.Model = Model;

},{}],6:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (descriptor.value) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Module = (function () {
    function Module() {
        _classCallCheck(this, Module);

        // Holds all modules for the app
        this.dict = {};
    }

    _createClass(Module, [{
        key: "set",
        value: function set(name, obj) {
            dict[name] = obj;
        }
    }, {
        key: "get",
        value: function get(name) {
            return dict[name];
        }
    }]);

    return Module;
})();

exports.Module = Module;

},{}],7:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Router = function Router(name, cons) {
    _classCallCheck(this, Router);
};

exports.Router = Router;

},{}],8:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var View = function View(name, cons) {
    _classCallCheck(this, View);
};

exports.View = View;

},{}]},{},[1]);

//# sourceMappingURL=bellavista.js.map