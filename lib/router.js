Router.configure({
  layoutTemplate: 'layout'
});

// add a not found page 4/20/15
Router.plugin('dataNotFound', {
notFoundTemplate: 'notFound',
});


Router.route('/', {name: 'list'});

Router.route('/task/:_id', {
    name: 'task',
    data: function() { return List.findOne (this.params._id); }
});

Router.route('/task/:_id/edit', {
    name: 'listEdit',
    data: function() { return List.findOne (this.params._id); }
});