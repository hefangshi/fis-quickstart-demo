var TodoModel = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },

    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
});