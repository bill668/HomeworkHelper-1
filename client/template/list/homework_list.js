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
        console.log({name:name, date:date});
        console.log(task);
        task._id = List.insert(task);
    }
});

Template.list.helpers({
    list: function() {
        return List.find();
    }
});

$( document ).ready(function() {
    $('#datepicker').datepicker();
});