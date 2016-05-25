Template.avatars.onCreated(function() {
  this.subscribe('avatars');
});

Template.avatars.helpers({
  getAvatars: function() {
    return AvatarsCollection.find();
  }
});

Template.avatars.events({
  'click .avatarSelection': function(event) {
    var selectedAvatar = $(event.target).data('id');
    Meteor.call('setAvatar', Meteor.userId(), selectedAvatar);
    Router.go('/room');
  }
});
