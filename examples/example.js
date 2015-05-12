var app = bellavista();

// Service
app.data("remoteService", [], function() {
    this.getData = function() {
        return "Hello";
    }
});

// Factory
app.model("titleModel", ["remoteService"], function(remoteService) {
    this.text = remoteService.getData();
});

// Factory
app.view("titleView", ["titleModel"], function(titleModel) {
    this.render = function() {
        return titleModel.text + " world";
    }
});

// Service
app.controller("appController", [], function() {
    this.showTitle = function(title) {
        $("#title").html(title);
    }
});

// Factory
app.route("/", ["appController", "titleView"], function(appController, titleView) {
    appController.showTitle(titleView.render());
});