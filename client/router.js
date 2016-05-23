Router.route('/', function() {
  this.render('home');
  $('body').removeClass();
});
Router.route('/bar', function() {
  this.layout('mainLayout');
  this.render('bar');
  $('body').removeClass().addClass('bar');
});
Router.route('/office', function() {
  this.layout('mainLayout');
  this.render('office');
  $('body').removeClass().addClass('office');
});
Router.route('/room', function() {
  this.layout('mainLayout');
  this.render('room');
  $('body').removeClass().addClass('room');
});
