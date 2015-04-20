Template.list.events({
    'click .create-list':function(evt, tmpl){
        // create database for List item.
        var task = formHelpers.getTaskData();

        // make sure user unless enter project name
        if (task.name === ''){
            alert('You have to enter a project name!');
        }
        else {
            List.insert(task);
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
    },
    // 4/20/2015 Ming: why briefDescription doesn't need ''?
    briefDescription: function() {
        if (this.description.length > 30) {
            return this.description.substring(0, 30) + '...';
        } else {
            return this.description;
        }
    }
});

$( document ).ready(function() {
    $('#datepicker').datepicker();
});
