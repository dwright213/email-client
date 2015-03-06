ElectronicMail.MessageController = Ember.ArrayController.extend({
  // sortProperties: ['name'],
  actions: {
  //   sortByDesc: function(){
  //     this.set('sortProperties', ['description']);
  //   },
  //
  //   sortByName: function(){
  //     this.set('sortProperties', ['name']);
  //   },

    save: function() {
      var newMessage = this.store.createRecord('message', {
        recipient: this.get('recipient'),
        title: this.get('title'),
        body: this.get('body')
      });
      newMessage.save();
      this.transitionToRoute('messages');
    },

    // delete: function(box) {
    //   if (confirm('Are you sure?')) {
    //     box.destroyRecord();
    //   };
    // }
  }
});
