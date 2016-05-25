import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  AvatarsCollection.remove({});
  for (i = 1; i <= 12; i++) {
    imgUrl = "av" + i;
    AvatarsCollection.insert({"img": imgUrl});
  }
});

Accounts.onCreateUser(function(options, user) {
  user.profile = {};
   user.profile.socialrank = 1;
   // Assigns first and last names to the newly created user object
   user.profile.stamina = 20;
   user.profile.money = 100;
   user.profile.room = "room";
   user.profile.avatar = "";

   return user;
});

Meteor.publish('leaderboard', function() {
	//Top scores first
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
  }
});
