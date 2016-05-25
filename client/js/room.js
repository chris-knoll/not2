Template.room.events({
  'click #rest': function(event) {
    alert("You try to rest but you can't stop thinking about things to possibly try to get your Meteor project working.");
    Meteor.call('incStamina', Meteor.userId(), 1);
  },

  'click #sleep': function(event) {
    alert("You try to sleep but you can't stop thinking about Meteor and why you can't get it to work.  You end up going to the store to buy sleeping pills, take them, and sleep for 2 hours.");
    Meteor.call('incStamina', Meteor.userId(), 2);
    Meteor.call('incMoney', Meteor.userId(), -5);
  }
});

/*
Template.room.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'room');
  }
});
*/
