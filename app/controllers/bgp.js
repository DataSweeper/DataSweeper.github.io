import Ember from 'ember';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  bgpData:[],

  actions: {

    showadv: function(data){
      console.log('data = ',data);
      if(!data.hasOwnProperty('isShowadv')){
        Ember.set(data, 'isShowadv', true);
      }else if(data.isShowadv){
        Ember.set(data, 'isShowadv', false);
      }else{
        Ember.set(data, 'isShowadv', true);
      }
    },

    getRouterData: function(isPoll){
        var self = this, data = this.get('content');
        console.log(data);
        $(data.data).each(function(i,e){
          self.get('ajax').request(ENV.host +'v1/bgp/', {
            method:'GET',
            data:{
              host: e.attributes.host
            }
          }).then(function(res) {
            let bgp = self.get('bgpData');
            if(isPoll){
              $(bgp).each(function(a,b){
                if(b.host === res.host){
                  $.each(res, function(k,v){
                    Ember.set(b, k, v);
                  });
                }
              });
            }else{
              bgp.addObject(res);
            }
          }, function(err) {
            console.log('Bgp Data error ', err);
          });
        });
      }
  }
});
