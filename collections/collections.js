// Import the Mongo object
import { Mongo } from "meteor/mongo";

Messages = new Mongo.Collection("messages");

export const actions = [
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
