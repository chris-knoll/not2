var previousSite;

Router.onBeforeAction(function(){
  $('body').removeClass(previousSite);
  this.next();
});


Router.onBeforeAction(function() {
$('body').addClass(this.route.getName());
  previousSite = this.route.getName();
  Meteor.call('updateRoom', Meteor.userId(), previousSite);
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
});
Router.route('/office', function() {
  this.layout('mainLayout');
  this.render('office');
});
Router.route('/room', function() {
  this.layout('mainLayout');
  this.render('room');
});
Router.route('/class', function() {
  this.layout('mainLayout');
  this.render('class');
});

Router.route('/avatars');
