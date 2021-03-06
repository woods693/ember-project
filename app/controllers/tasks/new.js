import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      var name = this.get('name');
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      //Create new task
      var newTask = this.store.createRecord('task', {
        name: name,
        title: title,
        description: description,
        date: new Date(date)

      });

      //Save to Database
      newTask.save();


      //Clear Form
      this.setProperties({
        name: '',
        title: '',
        description: '',
        date: ''
      });
    },

    deleteTask: function(task) {
      task.get('comments').then(function(comments) {
        comments.forEach(function(c) {
          c.deleteRecord();
          c.save();
        });
      }).then(function() {
        task.deleteRecord();
        task.save();
      });
    },

    addComment: function(task, commentName, commentBody) {
      // Create new comment
      let comment = this.get('store').createRecord('comment', {
        name: commentName,
        comment: commentBody
      });
      task.get('comments').addObject(comment);
      comment.save();
      task.save();
    }
  }
});
