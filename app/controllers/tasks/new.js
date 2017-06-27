import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      //Create new task
      var newTask = this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)

      });

      //Save to Database
      newTask.save();


      //Clear Form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    },

    deleteTask: function(id) {
      this.store.findRecord('task', id).then(function(task){
        task.deleteRecord();

        task.save();
      });
    },

    addComment: function(id) {
      let task = this.store.findRecord('task',id);
      let name = this.get('name');
      let comment = this.get('comment');
      console.log(id);
      // Create new comment
      var newComment = this.store.createRecord('comment', {
        name: name,
        comment: comment,
        task: id
      });
      newComment.save();

      //Clear Form
      this.setProperties({
        name: '',
        comment: ''
      });
    }

  }

});
