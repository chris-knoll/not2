import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  AvatarsCollection.remove({});
  for (i = 1; i <= 12; i++) {
    imgUrl = "av" + i;
    AvatarsCollection.insert({"img": imgUrl});
  }
});

//Used to publish the data from the messages database.
  Meteor.publish('theUserMessage', function(){
    return MessagesCollection.find({public: true});
  });

Accounts.onCreateUser(function(options, user) {
  user.profile = {};
  user.profile.socialrank = 1;
  user.profile.stamina = 20;
  user.profile.money = 100;
  user.profile.room = "room";
  user.profile.avatar = "";

  return user;
});

Meteor.publish('leaderboard', function() {
	return Meteor.users.find();
});

Meteor.publish('avatars', function() {
  return AvatarsCollection.find();
});



Meteor.methods({
	updateRoom: function(userId, roomname) {
		Meteor.users.update(userId, {$set: {"profile.room": roomname}});
	},
  incMoney: function(userId, amount) {
    Meteor.users.update(userId, {$inc: {"profile.money": amount}});
  },
  incStamina: function(userId, amount) {
    Meteor.users.update(userId, {$inc: {"profile.stamina": amount}});
  },
  incRank: function(userId, amount) {
    Meteor.users.update(userId, {$inc: {"profile.socialrank": amount}});
  },
  setAvatar: function(userId, avatar)
  {
    Meteor.users.update(userId, {$set: {"profile.avatar": avatar}});
  },
  newUserMessage: function(userMessage){
    var currentPlayer = Meteor.userId();
    var messageDate= new Date();
    //save our message
    MessagesCollection.insert({
      public: true,
      message: userMessage,
      name: Meteor.users.findOne({_id: currentPlayer}).username,
      owner: currentPlayer,
      date: messageDate // the today is temporary until the date function is found and used in its place
    });
  }
});
