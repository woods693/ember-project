import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTask: function(task) {
            this.get('parentDeleteTaskAction')(task);
        },
        addComment: function(task) {
            this.get('parentAddCommentAction')(task, this.get('commentName'), this.get('commentBody'));
            this.setProperties({
                commentName: '',
                commentBody: ''
            })
        }
    }
});
