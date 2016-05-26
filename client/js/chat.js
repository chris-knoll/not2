Meteor.subscribe('theUserMessage');
/***************************************************************

chat stuff

*****************************************************************/

Template.chat.onCreated(function() {
  //save some initial data for our messaging application
  Session.setDefault('messages', []);
});

Template.chat.events({
  'submit .newMessage': function(event, template) {
    //prevent the form from refreshing the page
    event.preventDefault();

    //get our form value (message text)
    var messageText = $('#messageText').val();

    Meteor.call('newUserMessage', messageText);

    $('#messageText').val("");

  }
});

Template.playerMessages.helpers({
  allPlayerMessages: function() {
    return MessagesCollection.find().fetch().reverse();
  }
});

Template.registerHelper('messagesExist', function() {
 return Session.get('messages').length > 0;
});

/*********************************************************

end of chat stuff

******************************************************/
