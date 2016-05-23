import { Meteor } from 'meteor/meteor';
import { playersCollection } from '../collections/collections.js';
import { playersDummyData } from '../collections/collections.js';
import { messages } from '../collections/collections.js';
import { messagesDummyData } from '../collections/collections.js';
import { actionsCollection } from '../collections/collections.js';
import { actions } from '../collections/collections.js';
//Import any collections we will be using in the methods below

Meteor.startup(() => {

  playersCollection.remove({});
  actionsCollection.remove({});
  messages.remove({});

  // Add default / dummy player data
  for (var i = 0; i < playersDummyData.length; i++) {
    playersCollection.insert(playersDummyData[i]);
  };

  // Add dummy messages
  for (var i = 0; i < messagesDummyData.length; i++) {
    messages.insert(messagesDummyData[i]);
  };

  // Add actions to collection
  for (var i = 0; i < actions.length; i++) {
    actionsCollection.insert(actions[i]);
  };
});

Meteor.methods({
	activityInsert: function(activity) {
		activity.updatedOn = new Date();
		activityCollection.insert(activity);
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

Meteor.publish('leaderboard', function() {
	//sort by most recent changes
	return playersCollection.find({socialRank: { $gt: 0 }}).sort({"socialRank":-1});
});

Meteor.publish('characterStats', function() {
  return playersCollection.find();
});
