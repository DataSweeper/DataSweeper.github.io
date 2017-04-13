import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(sessionData, block) {
    const headers = {
      "Authorization": 'Token ' + Ember.get(sessionData, 'token')
    };
    block(headers);
  }
});