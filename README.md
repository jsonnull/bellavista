# Bellavista [![Build Status](https://travis-ci.org/jsonnull/bellavista.svg?branch=master)](https://travis-ci.org/jsonnull/bellavista)

**Bellavista is a small isomorphic framework for writing modular, expressive JavaScript applications.** It may be used in the browser, on the server, standalone, alongside another MVC framework, and with connect or express.

It is built on a few core principles:

1. **Expressive**. Have the freedom to express your application intuitively, while providing enough structure to streamline development.
2. **Don't Repeat Yourself**. A Bellavista server can intelligently bundle code such as routes and views to be shared with the client.
3. **Automatic Enhancement**. Bellavista can share your API and rendering code with the client, so it can query the server for data and then render client-side at no extra development cost.

**Note**: Bellavista is very early in development and is not yet fully functional. API documentation and basic functionality is the first priority and will be done soon. For projects requiring a stable API, you may consider [Sweetroll](http://www.github.com/jsonnull/sweetroll), the tiny, experimental predecessor to Bellavista.

``` js
// A simple Bellavista client program
var app = bellavista();

app.controller("appController", [], function() {
    this.showTitle = function(title) {
        $("#title").html(title);
    }
});

app.route("/", ["appController"], function(appController) {
    appController.showTitle("Hello world!");
});
```

For a full example, see [here](https://github.com/jsonnull/bellavista/blob/master/examples/example.js).
