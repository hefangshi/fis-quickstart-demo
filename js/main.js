$(document).ready(function () {
    new Workspace();

    Backbone.history.start();

    new AppView();
});