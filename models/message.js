ElectronicMail.Message = DS.Model.extend({
  recipient: DS.attr(),
  title: DS.attr(),
  body: DS.attr()
  // items: DS.hasMany('item', {async: true})
});
