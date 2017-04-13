import Ember from 'ember';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),
	interfaceData:[],
	actions : {
		getInterfaceData: function(isPoll){
        var self = this, data = this.get('content');

        $(data.data).each(function(i,e) {
          self.get('ajax').request(ENV.host +'v1/interface/', {
            method:'GET',
            data:{
              host:e.attributes.host
            }
          }).then(function(res){
            let bgp = self.get('interfaceData');
            if(isPoll) {
              $(bgp).each(function(a,b){
                if(b.host === res.host){
                  $.each(res, function(k,v){
                    Ember.set(b, k, v);
                  });
                }
              });
            } else{
                bgp.addObject(res);
            }
          }, function(err) {
            console.log('interface Data error ', err);
          });
        });
      }

	}
});