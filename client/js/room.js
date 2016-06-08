Template.room.events({
  'click #rest': function(event) {
    Modal.show('modal', {
      'title': 'Rest',
      'message': "You try to rest but you can't stop thinking about things to possibly try to get your Meteor project working.",
      'stamina': '+1',
      'money': '+0',
      'intelligence': '+0',
      'socialRank': '+0'
    });
    Meteor.call('incStamina', Meteor.userId(), 1);
  },

  'click #sleep': function(event) {
    if (Meteor.user().profile.money >= 5) {
      Modal.show('modal', {
        'title': 'Sleep',
        'message': "You try to sleep but you can't stop thinking about Meteor and why you can't get it to work.  You end up going to the store to buy sleeping pills, take them, and sleep for 5 hours.",
        'stamina': '+5',
        'money': '-5',
        'intelligence': '+0',
        'socialRank': '+0'
      });
      Meteor.call('incStamina', Meteor.userId(), 5);
      Meteor.call('incMoney', Meteor.userId(), -5);
    } else {
      Modal.show('modal', {
        'title': 'Sleep',
        'message': "You try to sleep but you can't stop thinking about Meteor and why you can't get it to work.  You toss and turn, getting a little rest.",
        'stamina': '+2',
        'money': '+0',
        'intelligence': '+0',
        'socialRank': '+0'
      });
      Meteor.call('incStamina', Meteor.userId(), 2);
    }
  }
});
