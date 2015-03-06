ElectronicMail.NewMessageController = Ember.Controller.extend({
  // needs: ['box'],
  actions: {
    save: function() {
      var item = this.store.createRecord('message', {
        recipient: this.get('recipient'),
        title: this.get('title'),
        body: this.get('body')
      });
      item.save();
      this.set('recipient', '');
      this.set('title', '');
      this.set('body', '');
      this.transitionToRoute('messages');

      // var box = this.get('controllers.box.model');
      // box.get('items').pushObject(item);
      // box.save();
    }
  }
});
