Router.map(function(){
  this.route('/posts',{
     template: 'posts'
  });
  this.route('/post/create',{
     template: 'createPost'
  });
});
Template.posts.helpers({
  allPosts: function(){
    return Posts.find();
  },
});

Template.createPost.events({
  'click #addPost': function(event, template){
  	var title = template.$('#title').val();
  	var description = template.$('#description').val();
  	Meteor.call('insertNewPost', title, description);
  },
});

