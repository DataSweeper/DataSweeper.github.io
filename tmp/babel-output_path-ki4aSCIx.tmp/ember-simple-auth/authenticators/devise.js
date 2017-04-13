define('ember-simple-auth/authenticators/devise', ['exports', 'ember', 'ember-simple-auth/authenticators/base'], function (exports, _ember, _emberSimpleAuthAuthenticatorsBase) {
  'use strict';

  var Promise = _ember['default'].RSVP.Promise;
  var isEmpty = _ember['default'].isEmpty;
  var run = _ember['default'].run;
  var get = _ember['default'].get;
  var $ = _ember['default'].$;

  /**
    Authenticator that works with the Ruby gem
    [devise](https://github.com/plataformatec/devise).
  
    __As token authentication is not actually part of devise anymore, the server
    needs to implement some customizations__ to work with this authenticator -
    see [this gist](https://gist.github.com/josevalim/fb706b1e933ef01e4fb6).
  
    @class DeviseAuthenticator
    @module ember-simple-auth/authenticators/devise
    @extends BaseAuthenticator
    @public
  */
  exports['default'] = _emberSimpleAuthAuthenticatorsBase['default'].extend({
    /**
      The endpoint on the server that the authentication request is sent to.
       @property serverTokenEndpoint
      @type String
      @default '/users/sign_in'
      @public
    */
    serverTokenEndpoint: '/users/sign_in',

    /**
      The devise resource name. __This will be used in the request and also be
      expected in the server's response.__
       @property resourceName
      @type String
      @default 'user'
      @public
    */
    resourceName: 'user',

    /**
      The token attribute name. __This will be used in the request and also be
      expected in the server's response.__
       @property tokenAttributeName
      @type String
      @default 'token'
      @public
    */
    tokenAttributeName: 'token',

    /**
      The identification attribute name. __This will be used in the request and
      also be expected in the server's response.__
       @property identificationAttributeName
      @type String
      @default 'email'
      @public
    */
    identificationAttributeName: 'email',

    /**
      Restores the session from a session data object; __returns a resolving
      promise when there are non-empty
      {{#crossLink "DeviseAuthenticator/tokenAttributeName:property"}}token{{/crossLink}}
      and
      {{#crossLink "DeviseAuthenticator/identificationAttributeName:property"}}identification{{/crossLink}}
      values in `data`__ and a rejecting promise otherwise.
       @method restore
      @param {Object} data The data to restore the session from
      @return {Ember.RSVP.Promise} A promise that when it resolves results in the session becoming or remaining authenticated
      @public
    */
    restore: function restore(data) {
      var _getProperties = this.getProperties('tokenAttributeName', 'identificationAttributeName');

      var tokenAttributeName = _getProperties.tokenAttributeName;
      var identificationAttributeName = _getProperties.identificationAttributeName;

      var tokenAttribute = get(data, tokenAttributeName);
      var identificationAttribute = get(data, identificationAttributeName);

      if (!isEmpty(tokenAttribute) && !isEmpty(identificationAttribute)) {
        return Promise.resolve(data);
      } else {
        return Promise.reject();
      }
    },

    /**
      Authenticates the session with the specified `identification` and
      `password`; the credentials are `POST`ed to the
      {{#crossLink "DeviseAuthenticator/serverTokenEndpoint:property"}}server{{/crossLink}}.
      If the credentials are valid the server will responds with a
      {{#crossLink "DeviseAuthenticator/tokenAttributeName:property"}}token{{/crossLink}}
      and
      {{#crossLink "DeviseAuthenticator/identificationAttributeName:property"}}identification{{/crossLink}}.
      __If the credentials are valid and authentication succeeds, a promise that
      resolves with the server's response is returned__, otherwise a promise that
      rejects with the server error is returned.
       @method authenticate
      @param {String} identification The user's identification
      @param {String} password The user's password
      @return {Ember.RSVP.Promise} A promise that when it resolves results in the session becoming authenticated
      @public
    */
    authenticate: function authenticate(identification, password) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var _getProperties2 = _this.getProperties('resourceName', 'identificationAttributeName');

        var resourceName = _getProperties2.resourceName;
        var identificationAttributeName = _getProperties2.identificationAttributeName;

        var data = {};
        data[resourceName] = { password: password };
        data[resourceName][identificationAttributeName] = identification;

        return _this.makeRequest(data).then(function (response) {
          return run(null, resolve, response);
        }, function (xhr) {
          return run(null, reject, xhr.responseJSON || xhr.responseText);
        });
      });
    },

    /**
      Does nothing
       @method invalidate
      @return {Ember.RSVP.Promise} A resolving promise
      @public
    */
    invalidate: function invalidate() {
      return Promise.resolve();
    },

    /**
      Makes a request to the devise server.
       @method makeRequest
      @param {Object} data The request data
      @param {Object} options Ajax configuration object merged into argument of `$.ajax`
      @return {jQuery.Deferred} A promise like jQuery.Deferred as returned by `$.ajax`
      @protected
    */
    makeRequest: function makeRequest(data, options) {
      var serverTokenEndpoint = this.get('serverTokenEndpoint');
      var requestOptions = $.extend({}, {
        url: serverTokenEndpoint,
        type: 'POST',
        dataType: 'json',
        data: data,
        beforeSend: function beforeSend(xhr, settings) {
          xhr.setRequestHeader('Accept', settings.accepts.json);
        }
      }, options || {});

      return $.ajax(requestOptions);
    }
  });
});