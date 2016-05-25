// Import the Mongo object
import { Mongo } from "meteor/mongo";

MessagesCollection = new Mongo.Collection("messages");
ActionsCollection = new Mongo.Collection("actions");
AvatarsCollection = new Mongo.Collection("avatars");
