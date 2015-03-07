ElectronicMail.MessagesController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  actions: {

    delete: function(message) {
      message.destroyRecord();
    }
  }
});
