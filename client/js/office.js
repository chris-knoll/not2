Template.office.events({
  'click #meteorWork': function(event) {
    alert("You spend 10 hours trying to get your Mongo collections to work on your Meteor project, but make no progress.  Your boss makes you give him all the money in your wallet to pay for your failure.");
    Meteor.call('incMoney', Meteor.userId(), -5);
  },

  'click #stealCode': function(event) {
    alert("You steal your coworkers Meteor code and submit it to your boss as your own.  Your boss loves it and gives you a bonus!  Your coworker finds out, and likes you less than they did before.");
    Meteor.call('incMoney', Meteor.userId(), 40);
    Meteor.call('incRank', Meteor.userId(), -1);
  }
});

/*
Template.office.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'office');
  }
});
*/
