import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model() {

	}
});
