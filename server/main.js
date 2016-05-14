import { Meteor } from 'meteor/meteor';
import { playersCollection } from '../collections/collections.js';
import { playersDummyData } from '../collections/collections.js';
import { messages } from '../collections/collections.js';
import { messagesDummyData } from '../collections/collections.js';
import { officeActions } from '../collections/collections.js';
import { roomActions } from '../collections/collections.js';
import { barActions } from '../collections/collections.js';
import { officeActionsCollection } from '../collections/collections.js';
import { roomActionsCollection } from '../collections/collections.js';
import { barActionsCollection } from '../collections/collections.js';

Meteor.startup(() => {

  playersCollection.remove({});
  officeActionsCollection.remove({});
  roomActionsCollection.remove({});
  barActionsCollection.remove({});
  messages.remove({});

  // add my dummy values
  for (var i = 0; i < playersDummyData.length; i++) {
    playersCollection.insert(playersDummyData[i]);
  };

  for (var i = 0; i < messagesDummyData.length; i++) {
    messages.insert(messagesDummyData[i]);
  };

  for (var i = 0; i < officeActions.length; i++) {
    officeActionsCollection.insert(officeActions[i]);
  }

  for (var i = 0; i < roomActions.length; i++) {
    roomActionsCollection.insert(officeActions[i]);
  }

  for (var i = 0; i < barActions.length; i++) {
    barActionsCollection.insert(officeActions[i]);
  }

});
