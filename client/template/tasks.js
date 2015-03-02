Template.tasks.events({
    'keyup .task-name':function(evt, tmpl){
        if(evt.which === 13){
            var taskName = tmpl.find('.task-name').value;
            Tasks.insert({taskName:taskName});
        }
    }
});

Template.tasks.tasks = function(){
    return Tasks.find();   
}