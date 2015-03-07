ElectronicMail.MessageController = Ember.ObjectController.extend({
  sortProperties: ['date'],
  actions: {
    save: function() {
      var newMessage = this.store.createRecord('message', {
        recipient: this.get('recipient'),
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('sentDate')
      });
      newMessage.save();
      this.transitionToRoute('messages');
    },

    delete: function(message) {
      box.destroyRecord();
    }
  }
});
