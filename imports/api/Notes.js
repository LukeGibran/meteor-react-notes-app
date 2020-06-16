import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const NotesCollection = new Mongo.Collection('notes');

if (Meteor.isServer) {
  Meteor.publish('notes', function notesPublication() {
    return NotesCollection.find({ owner: this.userId });
  });
}

Meteor.methods({
  'notes.insert'(details) {
    if (!this.userId) {
      throw new Meteor.Error('not Authorized!');
    }

    const { name, description } = details;

    NotesCollection.insert({
      name,
      description,
      createdAt: new Date(),
      owner: this.userId,
    });
  },
});
