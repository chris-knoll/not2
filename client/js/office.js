Template.office.events({
  'click #meteorWork': function(event) {
    // Get current money
    var currentMoney = Meteor.user().profile.money;
    Modal.show('modal', {
      'title': 'Work...?',
      'message': "You spend 10 hours trying to get your Mongo collections to work on your Meteor project, but make no progress.  Your boss makes you give him all the money in your wallet to pay for your failure.",
      'money': '-' + currentMoney
    });
    Meteor.call('incMoney', Meteor.userId(), -currentMoney);
  },

  'click #stealCode': function(event) {
    Modal.show('modal', {
      'message': "You steal your coworkers Meteor code and submit it to your boss as your own.  Your boss loves it and gives you a bonus!  Your coworker finds out, and likes you less than they did before.",
      'money': '+40',
      'socialRank': '-1'
    });
    Meteor.call('incMoney', Meteor.userId(), 40);
    Meteor.call('incRank', Meteor.userId(), -1);
  }
});
