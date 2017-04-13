import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model(params) {
		return params.id;
	},
	setupController:function(controller,model) {
		controller.set('host', model);
		controller.getRouterData();
	}
});
