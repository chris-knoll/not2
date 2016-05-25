/*
Doesn't work... Going to static buttons
Template.bar.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'bar');
  }
});*/

Template.bar.events({
  'click #buyDrink': function(event) {
    alert("You bought a drink");
    Meteor.call('incRank', Meteor.userId(), 1);
    Meteor.call('incMoney', Meteor.userId(), -5);
  },

  'click #buyRound': function(event) {

    alert("You buy a round of drinks for the bar.");
    Meteor.call('incRank', Meteor.userId(), 5);
    Meteor.call('incMoney', Meteor.userId(), -30);
  }
});
