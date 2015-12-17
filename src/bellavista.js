import { Store } from './store'
import { Provider, Factory, Service } from './provider'
import { Data } from './data'
import { Model } from './model'
import { View } from './view'
import { Controller } from './controller'
import { Router } from './router'
import { Util } from './util'

class Bellavista {

  constructor () {
    this.components = new Store()
    this.routes = new Store()
  }

  // This function determines whether a given request matches a route
  static match (route, req) {
    return (req.url === route)
  }

  provider (name, deps, obj) {
    if (obj === undefined) {
      obj = deps
      deps = []
    }

    new Provider(this.components, name, obj, {deps: deps})
  }

  data (name, deps, func) {
    new Service(this.components, name, func, { deps: deps })
  }

  model (name, deps, func) {
    new Factory(this.components, name, func, { deps: deps })
  }

  view (name, deps, func) {
    new Factory(this.components, name, func, { deps: deps })
  }

  controller (name, deps, func) {
    new Service(this.components, name, func, { deps: deps })
  }

  route (name, deps, func) {
    new Factory(this.routes, name, func, {
      deps: deps, dependencyStore: this.components
    })
  }
}

function bellavista () {
  return new Bellavista()
}

module.exports = bellavista
