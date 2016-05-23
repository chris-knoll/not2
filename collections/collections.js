// Import the Mongo object
import { Mongo } from "meteor/mongo";

// export access to my collections
export const playersCollection = new Mongo.Collection("players");
export const messages = new Mongo.Collection("messages");
export const actionsCollection = new Mongo.Collection("actions");

export const playersDummyData = [
  {
    "userName": "default",
    "name": "Jane",
    "stamina": 20,
    "money": 0,
    "socialRank": 0,
    "room": "room"
  },
  {
    "userName": "bob123",
    "name": "Bob",
    "stamina": 45,
    "money": 2341,
    "socialRank": 5,
    "room": "room"
  },
  {
    "userName": "murky1",
    "name": "Murky",
    "stamina": 45,
    "money": 103,
    "socialRank": 23,
    "room": "room"
  }
];

export const messagesDummyData = [
  {
    "name": "Billy",
    "message": "Hello is there anyone out there?"
  },
  {
    "name": "Billy",
    "message": "Guess not."
  },
  {
    "name": "God",
    "message": "I'm always here, Billy."
  }
];

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
