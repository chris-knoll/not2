import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

Accounts.onCreateUser(function(options, user) {
  user.profile = {};
   user.profile.socialrank = 1;
   // Assigns first and last names to the newly created user object
   user.profile.stamina = 20;
   user.profile.money = 100;
   user.profile.room = "room";

   return user;
});

Meteor.publish('leaderboard', function() {
	//sort by most recent changes
	return Meteor.users.find({}, { username: 1});
});

Meteor.methods({
	updateRoom: function(userId, roomname) {
		Meteor.users.update(userId, {$set: {"profile.room": roomname}});
	},
	activityDelete: function(_id) {
		activityCollection.remove({"_id": _id});
	},
	activityUpdate: function(updatedActivity) {
		activityCollection.update({"_id": updatedActivity._id}, {"$set": {
			"type": updatedActivity.type,
			"description": updatedActivity.description,
			"hours": updatedActivity.hours,
			"updatedOn": new Date()
		}});
	},
	getSingleActivity: function(_id) {
		return activityCollection.findOne({"_id": _id});
	}
});
