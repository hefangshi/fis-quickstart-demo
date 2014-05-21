define('main', function(require, exports, module){

var Backbone, Workspace, app;

Backbone = require('backbone');

Backbone.$ = require('jquery');

app = require('views/app');

Workspace = require('routers/router');

new Workspace();

Backbone.history.start();

new app();


});