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
      // Create new comment
      let task = this.get('task');
      let comment = this.store.createRecord('comment', {
        name: "SOS",
        comment: "fesa"
      });
      this.store.findRecord('task', id).then(function(task){
        task.get('comments').addObject(comment);
        task.save();
        // return comment.save().then(()=>{
        //   return task.save();
        // })
      });
    }
  }

});
