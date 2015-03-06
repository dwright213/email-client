ElectronicMail.MessagesController = Ember.ArrayController.extend({
  // sortProperties: ['name'],
  actions: {
  //   sortByDesc: function(){
  //     this.set('sortProperties', ['description']);
  //   },
  //
  //   sortByName: function(){
  //     this.set('sortProperties', ['name']);
  //   },

    delete: function(message) {
      message.destroyRecord();
    }
  }
});
