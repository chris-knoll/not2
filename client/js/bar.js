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
  },

  'click #buyRound': function(event) {
    alert("You buy a round of drinks for the bar.");
  }
});
