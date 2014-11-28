Posts = new Meteor.Collection("posts");

var Schemas = {};
Schemas.Post = new SimpleSchema({
  userId: {
    type: String,
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    optional: true
  }
});
Posts.attachSchema(Schemas.Post);
