var app = bellavista();

// Service
app.data("remoteService", [], function() {
    this.getData = function() {
        return "Hello";
    }
});

// Factory
app.model("folderModel", ["remoteService"], function(remoteService) {
    this.text = remoteService.getData();
});

// Factory
app.view("folderView", ["folderModel"], function(folderModel) {
    this.render = function() {
        return folderModel.text + " world";
    }
});

// Service
app.controller("appController", [], function() {
    this.showFolder = function(folder) {
        $("#folder").html(folder);
    }
});

// Factory
app.route("/", ["appController", "folderView"], function(appController, folderView) {
    appController.showFolder(folderView.render());
});