import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import { UnauthorizedError } from 'ember-ajax/errors';
import ENV from 'pyezc-ui/config/environment';

export default AjaxService.extend({

  session: Ember.inject.service(),
  host: ENV.host,

/*  request(url, options) {
    this.get('session').authorize('authorizer:drf-token-authorizer', (headers) => {
      this.set('headers', headers);
    });

    return this._super(url, options).
      catch((error) => {
        if (error instanceof UnauthorizedError) {
          if (this.get('session.isAuthenticated')) {
            this.get('session').invalidate();
          }
        }
        else {
          throw error;
        }
      });
  }*/
});
