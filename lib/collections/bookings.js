import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

const Bookings = new Mongo.Collection('bookings');
let schema = new SimpleSchema({
  _id: { type: String },
  bookingType: { type: String },
  customer: { type: String },
  details: { type: String },
  status: { type: String },
});
Bookings.attachSchema(schema);

export default Bookings;
