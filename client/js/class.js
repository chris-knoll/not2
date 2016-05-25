Template.class.events({
  'click #attendClass': function(event) {
    alert("You attend class and are shown an example of how to get Collections working in Mongo.  You are super excited to try it at home.  You try to mimic the code in your own project, but it fails to run.");
    Meteor.call('incStamina', Meteor.userId(), -1);
  },

  'click #studyAlone': function(event) {
    alert("You attempt to study alone, but get stuck within 30 minutes of starting.  You play video games for 5 hours instead.");
    Meteor.call('incStamina', Meteor.userId(), -1);
  },

  'click #socialize': function(event) {
    alert("You go to class, but instead of paying attention, you socialize with your friends.  You don't learn anything, but people think you are a little bit cooler.");
    Meteor.call('incRank', Meteor.userId(), 1);
    Meteor.call('incStamina', Meteor.userId(), -1);
  }
});
