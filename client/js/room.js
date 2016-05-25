Template.room.events({
  'click #rest': function(event) {
    alert("You try to rest but you can't stop thinking about things to possibly try to get your Meteor project working.");
  },

  'click #sleep': function(event) {
    alert("You try to sleep but you can't stop thinking about Meteor and why you can't get it to work.");
  }
});

/*
Template.room.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'room');
  }
});
*/
