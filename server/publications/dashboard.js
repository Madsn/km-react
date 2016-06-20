import {Bookings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('dashboard', function () {
    return Bookings.find();
  });
}
