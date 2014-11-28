Meteor.publish("allPosts", function(){
	return Posts.find()
});

Meteor.publish("allUsers", function(){
	console.log("coming here");
	if(this.userId){
		console.log(Meteor.users.find().fetch());
		return Meteor.users.find({}, {fields: {email: 1, profile: 1}});
	}
	else {
		console.log("Meteor.users.find().fetch()");
		return null
	}
});