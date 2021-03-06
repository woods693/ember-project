import DS from 'ember-data'; //ember-data is a library for ember

export default DS.Model.extend({
  title: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  created: DS.attr('string', {
    defaultValue: function() {
      return new Date();
    }
  }),
  comments: DS.hasMany('comment', {async: true})
});
