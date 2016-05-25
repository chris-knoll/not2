var previousSite;

Router.onBeforeAction(function(){
  $('body').removeClass(previousSite);
  this.next();
});

Router.onBeforeAction(function() {
  site = $('body').addClass(this.route.getName());
  previousSite = this.route.getName();
  console.log(previousSite);
  console.log(site);
  this.next();
});

Router.onBeforeAction(function(){
  if (!Meteor.user()){
    Router.go('/');
    this.next();
  } else {
    this.next();
  }
});

Router.route('/', function() {
  this.render('home');
});
Router.route('/bar', function() {
  this.layout('mainLayout');
  this.render('bar');
  Meteor.call('updateRoom', Meteor.userId(), "bar");
});
Router.route('/office', function() {
  this.layout('mainLayout');
  this.render('office');
  Meteor.call('updateRoom', Meteor.userId(), "office");
});
Router.route('/room', function() {
  this.layout('mainLayout');
  this.render('room');
  Meteor.call('updateRoom', Meteor.userId(), "room");
});
Router.route('/class', function() {
  this.layout('mainLayout');
  this.render('class');
  Meteor.call('updateRoom', Meteor.userId(), "class");
});

Router.route('/avatars');
