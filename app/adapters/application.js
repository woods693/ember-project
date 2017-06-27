import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
	namespace: 'api',
	session: Ember.inject.service(),
	headers: Ember.computed('session.token', function(){
		return{
			'Authorization': `Bearer ${this.get('session.token')}`
		};
	})
});
