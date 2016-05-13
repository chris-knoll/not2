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
    "room": "room"
  },
  {
    "userName": "bob123",
    "name": "Bob",
    "stamina": 45,
    "money": 2341,
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
    "actions": [
      {
        "name": "work",
        "buttonDisplay": "Perform Honest Work",
        "execute": function(workLevel) {
          // Award a consistent amount of money at the expense of stamina
        }
      },
      {
        "name": "stealWork",
        "buttonDisplay": "Steal Coworkers Work",
        "execute": function() {
          // Award a random amount of money (more than normal work), but chance
          // to get caught and lower social rank
        }
      }
    ]
  },
  {
    "room": "room",
    "actions": [
      {
        "name": "rest",
        "buttonDisplay": "Rest",
        "execute": function() {
          // Rest up and gain stamina back so you can go work more
        }
      }
    ]
  },
  {
    "room": "bar",
    "actions": [
      {
        "name": "buy",
        "buttonDisplay": "Buy a Beer",
        "execute": function() {
          // Buy a beer - increase your social rank
        }
      }
    ]
  }
];
