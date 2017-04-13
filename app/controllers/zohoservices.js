import Ember from 'ember';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),
	actions : {
		getZohoServiceRoutes: function() {
		console.log("action called.")
        var self = this, data = this.get('content');
        $(data.data).each(function(i,e) {
          console.log("calling service url with pk.");
          self.get('ajax').request(ENV.host +'v1/zohoservices/' + e.id + '/', {
            method:'GET',
          }).then(function(res) {
          	console.log(res);
            let bgp = self.get('content');
	          $(bgp.data).each(function(a,b){
	            if(parseInt(b.id) === res.data.id){
	            	console.log("id matched" + b.id);
	                Ember.set(b, "owner", res.data.owner);
	            }
	          });
          }, function(err) {
            console.log('zohoservices Data error ', err);
          });
        });
      }

	}
});