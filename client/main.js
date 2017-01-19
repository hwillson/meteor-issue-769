import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';

Template.body.events({
  'click .btn-login'() {
    Meteor.loginWithPassword('jsmith', 'password');
  },
  'click .btn-logout'() {
    Meteor.logout();
  },
})
