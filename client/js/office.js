Template.office.events({
  'click #meteorWork': function(event) {
    // Get money
    var earnedMoney = Math.floor((Math.random() * 10) + 1);
    Modal.show('modal', {
      'title': 'Work...?',
      'message': "You spend several hours trying to code your Meteor project, but make no progress. Your boss is not pleased with your progress and tells you to work hard.",
      'money': '+' + earnedMoney,
      'stamina': '-2',
      'socialRank': '+0'
    });
    Meteor.call('incMoney', Meteor.userId(), earnedMoney);
    Meteor.call('incStamina', Meteor.userId(), -2);
    Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 2);}, 1200000);

  },

  'click #stealCode': function(event) {
    //getting money
    var earnedMoney = Math.floor((Math.random() * 100) + 20);
    Modal.show('modal', {
      'message': "You steal your coworkers Meteor code and submit it to your boss as your own.  Your boss loves it and gives you a bonus!  Your coworker finds out, and likes you less than they did before.",
      'money': '+' + earnedMoney,
      'socialRank': '-1',
      'stamina': '-3'
    });
    Meteor.call('incMoney', Meteor.userId(), earnedMoney);
    Meteor.call('incRank', Meteor.userId(), -1);
    Meteor.call('incStamina', Meteor.userId(), -3);
    Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 3);}, 1800000);
  }
});
