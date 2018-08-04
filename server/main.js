import { Meteor } from 'meteor/meteor';
import {Events} from '../collection/events';

Meteor.publish('events', () => {
  return Events.find({'from': {"$gte": new Date()}}, {sort:  {from: 1}});
});

let eventSeeds = [
  {
    "name" : "City Event 1", 
    "description" : "City Event 1! Lets have some fun!", 
    "street" : "Kärntnerstraße 2", 
    "city" : "Vienna", 
    "country" : "Austria", 
    "postcode" : 1010,
    "from" : new Date("2018-08-03T00:00:00Z"), 
    "to" : new Date("2018-08-03T00:00:00Z") 
  },
  {
    "name" : "City Event 2", 
    "description" : "City Event 2! Lets have some more fun!", 
    "street" : "Am Graben 2", 
    "city" : "Vienna", 
    "country" : "Austria", 
    "postcode" : 1010,
    "from" : new Date("2018-08-10T00:00:00Z"), 
    "to" : new Date("2018-08-10T00:00:00Z") 
  },
  {
    "name" : "Landstaße Event", 
    "description" : "Come and chill!", 
    "street" : "Landstraße Hauptstraße 2", 
    "city" : "Vienna", 
    "country" : "Austria", 
    "postcode" : 1030,
    "from" : new Date("2018-08-05T00:00:00Z"), 
    "to" : new Date("2018-08-06T00:00:00Z") 
  },
  {
    "name" : "Beer Party", 
    "description" : "Come and chill!", 
    "street" : "Simmeringer Hauptstraße 13", 
    "city" : "Vienna", 
    "country" : "Austria", 
    "postcode" : 1110,
    "from" : new Date("2018-08-22T00:00:00Z"), 
    "to" : new Date("2018-08-25T00:00:00Z") 
  },
  {
    "name" : "Emperor Party", 
    "description" : "Party like an emperor!", 
    "street" : "Schönbrunner Schloßstraße 47", 
    "city" : "Vienna", 
    "country" : "Austria", 
    "postcode" : 1130,
    "from" : new Date("2018-09-01T00:00:00Z"), 
    "to" : new Date("2018-09-06T00:00:00Z")
  },
];

Meteor.startup(() => {
  if(Events.find().count() === 0)  {
    for(let key in eventSeeds) {
      Events.insert(eventSeeds[key]);
    }
  }
});
