# Bellavista

Bellavista is a small isomorphic toolkit for writing HTML+JS applications. It can be used in place of client-side MVC frameworks, on a Node.js server with express or connect, or with both in one codebase.

**Bellavista is very early in development and currently unusable. API documentation and basic functionality is the first priority and will be done soon. For projects requiring a stable API, you may consider [Sweetroll](http://www.github.com/jsonnull/sweetroll), the tiny, experimental predecessor to Bellavista.**

``` js
// A simple Bellavista client program
var app = bellavista();

app.at("/")
    .data(function(path) {
        return "world";
    })
    .render(function(path, data) {
        return "Hello "+data;
    });

app();
```

## Why Bellavista?

Goals:

1. Expressive: Bellavista gives you the freedom to express your application intuitively, while providing enough structure to streamline development.
2. Don't Repeat Yourself: Craft your app with one codebase--Bellavista will intelligently bundle client code like routes and views to be shared with the client.
3. Automatic Enhancement: Bellavista can share your API and rendering code with the client, so it can query the server for data and then render client-side at no extra development cost.