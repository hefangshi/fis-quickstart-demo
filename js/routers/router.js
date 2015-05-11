var Workspace = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        // Set the current filter to be used
        common.TodoFilter = param && param.trim() || '';

        // Trigger a collection filter event, causing hiding/unhiding
        // of Todo view items
        todos.trigger('filter');
    }
});