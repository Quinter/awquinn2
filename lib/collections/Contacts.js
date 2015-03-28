Contacts = new Mongo.Collection('contacts');

//Set Permissions
Contacts.allow({
  insert: function (userId, doc, fields) {
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  },
});

var contactSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Your name",
    max: 50,
    optional: true,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail address",
    optional: true,
  },
  message: {
    type: String,
    label: "Message",
    max: 1000,
    optional: true,
  }
});
Contacts.attachSchema(contactSchema);