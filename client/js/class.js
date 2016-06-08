Template.class.events({
  'click #attendClass': function(event) {
    if (Meteor.user().profile.stamina < 1) {
      Modal.show('modal', {
        'title': 'Too tired...',
        'message': 'You are too tired to perform that action.. perhaps you should go rest?',
        'socialRank': '+0',
        'money': '+0',
        'intelligence': '+0',
        'stamina': '+0'
      });
    } else {
      Modal.show('modal', {
        'title': 'Class',
        'message': "You attend class and are shown an example of how to get Collections working in Mongo.  You are super excited to try it at home.  You try to mimic the code in your own project, but it fails to run.",
        'stamina': '-1',
        'intelligence': '+5',
        'money': '+0',
        'socialRank': '+0'
      });
      Meteor.call('incStamina', Meteor.userId(), -1);
      Meteor.call('incIntelligence', Meteor.userId(), 5);
      Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 1);}, 10000);
    }
  },

  'click #studyAlone': function(event) {
    if (Meteor.user().profile.stamina < 5) {
      Modal.show('modal', {
        'title': 'Too tired...',
        'message': 'You are too tired to perform that action.. perhaps you should go rest?',
        'socialRank': '+0',
        'intelligence': '+0',
        'money': '+0',
        'stamina': '+0'
      });
    } else {
      Modal.show('modal', {
        'title': 'Study',
        'message': "You attempt to study alone, but get stuck within 30 minutes of starting.  You play video games for 5 hours instead.",
        'stamina': '-5',
        'intelligence': '+1',
        'money': '+0',
        'socialRank': '+0'
      });
      Meteor.call('incStamina', Meteor.userId(), -5);
      Meteor.call('incIntelligence', Meteor.userId(), 1);
      Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 5);}, 10000);
    }
  },

  'click #socialize': function(event) {
    if (Meteor.user().profile.stamina < 1) {
      Modal.show('modal', {
        'title': 'Too tired...',
        'message': 'You are too tired to perform that action.. perhaps you should go rest?',
        'socialRank': '+0',
        'money': '+0',
        'intelligence': '+0',
        'stamina': '+0'
      });
    } else {
      Modal.show('modal', {
        'title': 'Socialize',
        'message': "You go to class, but instead of paying attention, you socialize with your friends.  You don't learn anything, but people think you are a little bit cooler.",
        'stamina': '-1',
        'intelligence': '+0',
        'money': '+0',
        'socialRank': '+1'
      });
      Meteor.call('incRank', Meteor.userId(), 1);
      Meteor.call('incStamina', Meteor.userId(), -1);
      Meteor.setTimeout(function(){Meteor.call('incStamina', Meteor.userId(), 1);}, 10000);
    }
  }
});
