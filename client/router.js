Router.route('/', function() {
  this.render('home');
  $('body').removeClass('room office class bar');
});
Router.route('/bar', function() {
  this.layout('mainLayout');
  this.render('bar');
  $('body').removeClass('room office class').addClass('bar');
  Meteor.call('updateRoom', Meteor.userId(), "bar");
});
Router.route('/office', function() {
  this.layout('mainLayout');
  this.render('office');
  $('body').removeClass('bar room class').addClass('office');
  Meteor.call('updateRoom', Meteor.userId(), "office");
});
Router.route('/room', function() {
  this.layout('mainLayout');
  this.render('room');
  $('body').removeClass('bar office class').addClass('room');
  Meteor.call('updateRoom', Meteor.userId(), "room");
});
Router.route('/class', function() {
  this.layout('mainLayout');
  this.render('class');
  $('body').removeClass('bar office room').addClass('class');
  Meteor.call('updateRoom', Meteor.userId(), "class");
});

Router.route('/avatars');
