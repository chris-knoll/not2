Template.office.events({
  'click #meteorWork': function(event) {
    if (Meteor.user().profile.stamina < 2) {
      Modal.show('modal', {
        'title': 'Too tired...',
        'message': 'You are too tired to perform that action.. perhaps you should go rest?',
        'socialRank': '+0',
        'money': '+0',
        'stamina': '+0'
      });
    } else {
      //get user intelligence
      var userIntelligence = Meteor.user().profile.intelligence;
      // Get money
      var earnedMoney = Math.floor((Math.random() * userIntelligence) + 5);
      Modal.show('modal', {
        'title': 'Work...?',
        'message': "You spend several hours trying to code your Meteor project, but make no progress. Your boss is not pleased with your progress and tells you to work hard.",
        'money': '+' + earnedMoney,
        'stamina': '-2',
        'socialRank': '+0'
      });
      Meteor.call('incMoney', Meteor.userId(), earnedMoney);
      Meteor.call('incStamina', Meteor.userId(), -2);
      Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 2);}, 50000);
    }
  },

  'click #stealCode': function(event) {
    if (Meteor.user().profile.stamina < 3) {
      Modal.show('modal', {
        'title': 'Too tired...',
        'message': 'You are too tired to perform that action.. perhaps you should go rest?',
        'socialRank': '+0',
        'money': '+0',
        'stamina': '+0'
      });
    } else {
      //get user intelligence
      var userIntelligence = Meteor.user().profile.intelligence;
      //getting money
      var earnedMoney = Math.floor((Math.random() * userIntelligence) + 20);
      var failedTheft = Meteor.user().profile.money;
      var thiefStatus = Meteor.user().profile.socialRank;
      console.log(thiefStatus);
      //get caught or not
      var stealingChance = Math.floor((Math.random() * userIntelligence) + 1);
      var stealingBeat = Math.floor((Math.random() * userIntelligence) + 3);
      if(stealingChance > stealingBeat){
        Modal.show('modal', {
          'message': "You steal your coworkers Meteor code and submit it to your boss as your own. Your boss loves it and gives you a bonus!",
          'money': '+' + earnedMoney,
          'socialRank': '+0',
          'stamina': '-3'
        });
        Meteor.call('incMoney', Meteor.userId(), earnedMoney);
        Meteor.call('incRank', Meteor.userId(), 0);
        Meteor.call('incStamina', Meteor.userId(), -3);
        Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 3);}, 50000);
      }else {
        Modal.show('modal', {
          'message': "You attempted to steal your coworker's work, but got caught in the process. The police were called and you were made to pay all your money to get out of jail. Naturally your social status in society has gone down the drain.",
          'money': '-' + failedTheft,
          'socialRank': "Your rank is 0",
          'stamina': '-3'
        });
        Meteor.call('setRank', Meteor.userId());
        Meteor.call('incMoney', Meteor.userId(), -failedTheft);
        Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 3);}, 50000);
      }
    }
  }
});
