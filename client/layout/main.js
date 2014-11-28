var base_url = "http://localhost:3000/";
Router.configure({
  layoutTemplate: 'layout'
});

//alert(Meteor.Router.page())
Router.map(function(){
  this.route('/',{
     template: 'posts'
  });
});