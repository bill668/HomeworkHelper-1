Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'list'});
Router.route('/task/:_id', {
   name: 'task' 
});