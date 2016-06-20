import {Bookings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('bookings', function () {
    return Bookings.find();
  });
}
