import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  name: DS.attr('string'),
  task: DS.attr('string')
});
