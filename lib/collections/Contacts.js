@Contacts = new Meteor.Collection('contacts')

Schemas.Contacts = new SimpleSchema({
  name: {
    type: String
    label: "Your name"
    max: 50
    optional: true
    autoform:
      placeholder: "Your Name"
  },
  email: {
    type: String
    regEx: SimpleSchema.RegEx.Email
    label: "E-mail address"
    optional: true
    autoform:
      placeholder: "Your Email Address"
  },
  message: {
    type: String
    label: "Message"
    max: 1000
    optional: true
    autoform:
      placeholder: "Your Message"
      rows: 5
  }
});
Contacts.attachSchema(Schemas.Contacts);