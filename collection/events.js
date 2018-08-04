import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

EventSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    description: {
      type: String,
      label: "Description",
      max: 500
    },
    street: {
      type: String,
      label: "Street",
      max: 200
    },
    city: {
      type: String,
      label: "City",
      max: 200
    },
    country: {
      type: String,
      label: "Country",
      max: 200
    },
    postcode: {
      type: Number,
      label: "Postcode",
    },
    from: {
      type: Date,
      label: "From"
    },
    to: {
      type: Date,
      label: "To"
    },
}, {tracker: Tracker});

const DATA = new Mongo.Collection('Events');
DATA.attachSchema(EventSchema);

DATA.allow({
  insert: function() {
    return true;
  }
});

export const Events = DATA;