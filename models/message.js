ElectronicMail.Message = DS.Model.extend({
  recipient: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  sentDate: DS.attr('date')
  // items: DS.hasMany('item', {async: true})
});
