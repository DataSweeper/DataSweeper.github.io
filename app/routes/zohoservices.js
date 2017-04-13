import Ember from 'ember';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model(){
			return this.get('ajax').request(ENV.host +'v1/zohoservices/', {
	        	method: 'GET',
	  		});
	},
	setupController:function(controller, model){
		controller.set('content', model);
		var self = controller;
		controller.send('getZohoServiceRoutes');
	}
});
