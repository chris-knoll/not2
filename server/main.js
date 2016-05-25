import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ActionsCollection.remove({}); // delete all records (this will only work on the server)
  var actionsArray = [
    {
      "room": "office",
      "name": "work",
      "buttonDisplay": "Perform Honest Work",
      "execute": function(workLevel) {
        // Award a consistent amount of money at the expense of stamina
      }
    },
    {
      "room": "office",
      "name": "stealWork",
      "buttonDisplay": "Steal Coworkers Work",
      "execute": function() {
        // Award a random amount of money (more than normal work), but chance
        // to get caught and lower social rank
      }
    },
    {
      "room": "room",
      "name": "rest",
      "buttonDisplay": "Rest",
      "execute": function() {
        // Rest up and gain stamina back so you can go work more
      }
    },
    {
      "room": "bar",
      "name": "buyBeer",
      "buttonDisplay": "Buy a Beer",
      "execute": function() {
        // Buy a beer - increase your social rank
      }
    }
  ];
  // add my dummy values
  for (var i = 0; i < 4; i++) {
    ActionsCollection.insert(actionsArray[i]);
  }
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
	//Top scores first
	return Meteor.users.find();
});

Meteor.methods({
	updateRoom: function(userId, roomname) {
		Meteor.users.update(userId, {$set: {"profile.room": roomname}});
	},
  getActions: function(room) {
    return ActionsCollection.find({"profile.room": room});
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
