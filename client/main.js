import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';

Template.body.events({
  'click .btn-login'() {
    Meteor.loginWithPassword('jsmith', 'password');
    if (Meteor.loggingIn()) {
      console.log('Logging in ...');
    }
  },
  'click .btn-logout'() {
    Meteor.logout();
    if (Meteor.loggingOut()) {
      console.log('Logging out ...');
    }
  },
})
