ElectronicMail.NewMessagesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('new-message');
  }
})
