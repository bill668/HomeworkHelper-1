Template.task.events({
    'click .delete-list':function(evt, tmpl){
        List.remove(this._id);
        Router.go('list');
    },
});

Template.task.helpers({
//    task: function() {
//        return List.find({postId:this._id});
//    }
});