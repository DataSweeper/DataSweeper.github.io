import Ember from 'ember';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    handlenmap: function(args) {
      this.get('ajax').request(ENV.host + 'v1/traceroute/', {
            method: 'GET',
            data:{
              pk: args
            }
      }).then(function(message) {
        alert(message);
      }, function(errmsg) {
        alert(errmsg);
      });
    }
  }
});