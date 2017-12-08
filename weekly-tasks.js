Tasks= new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.body.helpers({
      tasks:function(){
        return Tasks.find();
      }
  });

  Template.body.events({
      'submit .task-form':function(event){
        var task=event.target.task.value;
        Tasks.insert({
           task:task,
           createdAt:new Date().toUTCString()
        });
        event.target.task.value="";
        return false;
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
