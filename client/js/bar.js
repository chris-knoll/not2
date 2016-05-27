Template.bar.events({
  'click #buyDrink': function(event) {
    if (Meteor.user().profile.money >= 5) {
      Modal.show('modal', {
        'title': 'Bought a Drink',
        'message': 'You bought a drink.  Obviously drinking is cool, so your social rank goes up slightly.',
        'socialRank': '+1',
        'money': '-5',
      });
      Meteor.call('incRank', Meteor.userId(), 1);
      Meteor.call('incMoney', Meteor.userId(), -5);
    } else {
      Modal.show('modal', {
        'title': 'Embarrassing...',
        'message': "You order a drink, but realize you don't have enough cash to pay for it.  You have to call your mom to come cover your bill.  Not only does the bartender shake his head in disgust, everyone at the bar thinks you're a little less cool.",
        'socialRank': '-2',
      });
      Meteor.call('incRank', Meteor.userId(), -2);
    }
  },

  'click #buyRound': function(event) {
    if (Meteor.user().profile.money >= 30) {
      Modal.show('modal', {
        'title': 'Bought a Round',
        'message': 'You buy a round of drinks for the bar.  Everyone at the bar likes you!',
        'socialRank': '+5',
        'money': '-30'
      });
      Meteor.call('incRank', Meteor.userId(), 5);
      Meteor.call('incMoney', Meteor.userId(), -30);
    } else {
      Modal.show('modal', {
        'title': 'Embarrassing...',
        'message': "You order a round of drinks for the bar, but realize you don't have enough cash to pay for it.  Everyone has to pay for their 'free' drink.  No one likes you right now.",
        'socialRank': '-5',
      });
      Meteor.call('incRank', Meteor.userId(), -5);
    }
  }
});
