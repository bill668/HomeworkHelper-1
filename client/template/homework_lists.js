Template.lists.events({
    /*'keyup .list-name':function(evt, tmpl) {
        if(evt.which === 13){
            var listName = tmpl.find('.list-name').value;
            Lists.insert({listName:listName});
        }
    }*/
});

Template.lists.helpers({
    lists: function() {
        return Lists.find();
    }
});

$(document).on("click", "#add-new-list", function(e) {
    bootbox.dialog({
                title: "Create a New List",
                message: '<div class="row">  ' +
                            '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-4 control-label" for="name">List Name</label> ' +
                                        '<div class="col-md-4"> ' +
                                            '<input id="name" name="name" type="text" placeholder="List Name" class="form-control input-md"> ' +
                                        '</div> ' +
                                    '</div> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-4 control-label" for="description">Description</label> ' +
                                        '<div class="col-md-4"> ' +
                                            '<input id="description" name="description" type="text" placeholder="Description" class="form-control input-md"> ' +
                                        '</div> ' +
                                    '</div> ' +
                                    '<div class="form-group"> ' +
                                        '<label class="col-md-4 control-label" for="description">Due Date</label> ' +
                                        '<div class="col-md-4"> ' +
                                            '<input type="text" class="form-control" id="datepicker">' +
                                        '</div> ' +
                                    '</div> ' +
                                '</form>' +
                            '</div>' +
                        '</div>',
                buttons: {
                    success: {
                        label: "Create",
                        className: "btn-success",
                        callback: function () {
                            // name
                            var name = $('#name').val();
                            // date
                            var date = $('#datepicker').val();
                            Lists.insert({name:name, date:date});
                            console.log({name:name, date:date});
                        }
                    }
                }
            }
        );
    $('#datepicker').datepicker();
});