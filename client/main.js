Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.leaderboard.onCreated(function() {
  this.subscribe('leaderboard');
});

Template.leaderboard.helpers({
  users: function() {
    return Meteor.users.find();
  }
});

Template.character.helpers({
  character: function() {
    return Meteor.users.findOne({ _id: Meteor.userId()});
  }
});
