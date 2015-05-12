# Bellavista

Bellavista is a small isomorphic toolkit for writing HTML+JS applications. It can be used in place of client-side MVC frameworks, on a Node.js server with express or connect, or with both in one codebase.

**Bellavista is very early in development and is not yet fully functional.** API documentation and basic functionality is the first priority and will be done soon. For projects requiring a stable API, you may consider [Sweetroll](http://www.github.com/jsonnull/sweetroll), the tiny, experimental predecessor to Bellavista.

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

## Why Bellavista?

**Goals:**

1. Expressive: Bellavista gives you the freedom to express your application intuitively, while providing enough structure to streamline development.
2. Don't Repeat Yourself: Craft your app with one codebase--Bellavista will intelligently bundle client code like routes and views to be shared with the client.
3. Automatic Enhancement: Bellavista can share your API and rendering code with the client, so it can query the server for data and then render client-side at no extra development cost.