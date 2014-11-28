Meteor.publish("allPosts", function(){
	return Posts.find()
});

Meteor.methods({
  insertNewPost: function (title, description) {
    Posts.insert({userId: Meteor.userId(), title: title, description: description});
  }
});
