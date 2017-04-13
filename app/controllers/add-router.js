import Ember from 'ember';
import ENV from 'pyezc-ui/config/environment';

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),
  actions: {
    handleaddrouter: function() {
      var self = this;
      this.get('ajax').request(ENV.host + 'v1/router/', {
            method: 'POST',
            data: {
              host: this.get('host'),
              port: this.get('port'),
              username: this.get('username'),
              password: this.get('password')
            }
      }).then(function(message) {
        let router = self.get('model');
        router.data.addObject(message.data);
        $('.addrouter form button[type="reset"]').trigger('click');
      }, function(errmsg) {
        alert(errmsg);
      });
    },
    handledelete: function(args) {
      var self = this;
      this.get('ajax').request(ENV.host + 'v1/router/' + args.attributes.host + '/', {
            method: 'DELETE'
      }).then(function(message) {
        let router = self.get('model');
        router.data.removeObject(args);
      }, function(errmsg) {
        alert(errmsg);
      });
    }
  }
});
