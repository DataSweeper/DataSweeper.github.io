import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	poll: Ember.inject.service(),

	model(){
		 /* return this.get('ajax').request(ENV.host +'v1/router/', {
        	method: 'GET',
  		  });*/
	},

	setupController:function(controller, model) {
		controller.set('content', model);
		var self = controller;
		controller.send('getRouterData');
		let pollId = this.get('poll').addPoll({ interval:(60 * 1000), callback:function(){
	        self.send('getRouterData', true);
	      },
	      label: 'bgplive'
	    });
	    this.set('pollId', pollId);
	},

	actions:{
		willTransition() {
		    this.set('controller.bgpData', []);
		    let pollId = this.get('pollId');
		    this.get('poll').stopPoll(pollId);
		}
	}


});
