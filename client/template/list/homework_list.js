Template.list.events({
    'click .create-list':function(evt, tmpl){
        var name = $('#name').val();                // name input box value
        var description = $('#description').val();    // description input box value
        var date = $('#datepicker').val();          // date input box value
        var task = {
            url: name,
            title: name,
            description: description,
            date: date
        }
        // make sure user unless enter project name
        if (name === ''){
            console.log('You have to enter a project name!');
        }
        else {
            task._id = List.insert(task);
        }
    },

    // Track when project selected
    'click li.projectElement': function(){
        var ListId = this._id;
        Session.set('selectedProject', ListId);
    },

    'click #removeButton': function(){
        var selectedProject = Session.get('selectedProject');
        List.remove(selectedProject);
    }

});

Template.list.helpers({
    list: function() {
        return List.find();
    }
});

// When project selected, change its background color to yellow
// by add a selected class
Template.listItem.helpers({
    'selectedClass': function() {
        var ListId = this._id;
        var selectedProject = Session.get('selectedProject');
        if (ListId === selectedProject){
            return 'selected'
        }
    }
});

$( document ).ready(function() {
    $('#datepicker').datepicker();
});
