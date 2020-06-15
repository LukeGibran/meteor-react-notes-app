import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check, Match } from 'meteor/check';

if (Meteor.isServer) {
  // This code runs only on server
}

Meteor.methods({
  'user.register'(username, email, password, fullname) {
    check(username, String);
    check(password, String);
    check(email, String);
    check(fullname, String);

    const user = Accounts.createUser({
      username,
      email,
      password,
      profile: { name: fullname },
    });

    //const createUserPromise = new Promise((resolve, reject) => {
    //});
    //
    return user;
  },
});
