Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.leaderboard.onCreated(function() {
  this.subscribe('leaderboard');
});

Template.leaderboard.helpers({
  users: function() {
    // Return users sorted by socialrank
    return Meteor.users.find({}, {sort: {socialrank: -1}});
  }
});

Template.character.helpers({
  character: function() {
    return Meteor.users.findOne({ _id: Meteor.userId()});
  }
});

Template.bar.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'bar');
  }
});

Template.office.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'office');
  }
});

Template.room.helpers({
  getActions: function() {
    return Meteor.call('getActions', 'room');
  }
});
