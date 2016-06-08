Template.character.events({
  'click #playerStatPopUp': function(event) {
    var playerName = Meteor.user().username;
    var playerStamina = Meteor.user().profile.stamina;
    var playerIntelligence = Meteor.user().profile.intelligence;
    var playerBaseStamina = Meteor.user().profile.maxStamina;
    Modal.show('playerStatModal', {
      'title': playerName + " " + 'Stats',
      'stamina': playerStamina + '/' + playerBaseStamina,
      'intelligence': playerIntelligence
    });
  }
});
