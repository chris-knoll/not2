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

/***************************************************************

chat stuff

*****************************************************************/

function scrollChat(){
  var height = $('#chatMessages')[0].scrollHeight;

  $('#chatMessages').scrollTop(height);
};

Template.addMessageForm.onCreated(function() {
  //save some initial data for our messaging application
  Session.setDefault('messages', []);
});

Template.addMessageForm.events({
  'submit .newMessage': function(event, template) {
    //prevent the form from refreshing the page
    event.preventDefault();

    //get our form value (message text)
    var messageText = $('#messageText').val();

    Meteor.call('newUserMessage', messageText);

    $('#messageText').val("");

    scrollChat();
  }
});

Template.messageList.helpers({
  allMessages: function() {
    return messages.find();
  }
});

// Scroll chat any time it's rendered on screen
Template.messageList.onRendered(function() {
  scrollChat();
});

Template.registerHelper('messagesExist', function() {
  return Session.get('messages').length > 0;
});



/*********************************************************

end of chat stuff

******************************************************/
