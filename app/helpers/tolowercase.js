import Ember from 'ember';

export function tolowercase(params){
	return params[0].toLowerCase();
}

export default Ember.Helper.helper(tolowercase)