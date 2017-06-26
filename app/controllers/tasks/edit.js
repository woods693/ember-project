import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask: function(id) {
      var self = this;
      var name = this.get('model.title');
      var title = this.get('model.title');
      var description = this.get('model.description');
      var date = this.get('model.date');
      
      //Update new task
      this.store.findRecord('task', id).then(function (task) {
        task.set('name', name);
        task.set('title', title);
        task.set('description', description);
        task.set('date', new Date(date));
      

      //Save to Database
      task.save();

      self.transitionToRoute('tasks.new');

      });
    }
  }
});
