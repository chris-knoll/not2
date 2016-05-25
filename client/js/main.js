Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.leaderboard.onCreated(function() {
  this.subscribe('leaderboard');
});

Template.leaderboard.helpers({
  users: function() {
    // Return users sorted by socialrank
    return Meteor.users.find({}, {sort: {"profile.socialrank": -1}});
  }
});

Template.character.helpers({
  character: function() {
    return Meteor.users.findOne({ _id: Meteor.userId()});
  }
});


// Redirect on logout
Meteor.logout(function(err) {
  // logout logic here
  Router.go('/');
});

Accounts.onLogin(function () {
  if (Meteor.user().profile.avatar === "") {
    Router.go('avatars');
  }

  else {
    Router.go(Meteor.user().profile.room);
  }
});
