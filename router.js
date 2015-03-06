ElectronicMail.Router.map(function() {
  this.resource('messages', {path: '/'});
  this.resource('new-message');
  this.resource('message', {path: 'messages/:message_id'});
  this.resource('about');
});
