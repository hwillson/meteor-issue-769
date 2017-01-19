import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  const username = 'jsmith';
  if (!Accounts.findUserByUsername(username)) {
    Accounts.createUser({ username, password: 'password' });
  }
});
