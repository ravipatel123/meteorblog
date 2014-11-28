Router.map(function(){
  this.route('users',{
     template: 'users'
  });
});

Template.users.helpers({
  allUsers: function(){
  	return Meteor.users.find();
  }
});