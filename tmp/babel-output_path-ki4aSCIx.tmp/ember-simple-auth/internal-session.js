define('ember-simple-auth/internal-session', ['exports', 'ember', 'ember-getowner-polyfill'], function (exports, _ember, _emberGetownerPolyfill) {
  'use strict';

  var RSVP = _ember['default'].RSVP;
  var isNone = _ember['default'].isNone;
  var isEmpty = _ember['default'].isEmpty;

  var assign = _ember['default'].assign || _ember['default'].merge;

  exports['default'] = _ember['default'].ObjectProxy.extend(_ember['default'].Evented, {
    authenticator: null,
    store: null,
    isAuthenticated: false,
    attemptedTransition: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('content', { authenticated: {} });
      this._busy = false;
      this._bindToStoreEvents();
    },

    authenticate: function authenticate(authenticatorFactory) {
      var _this = this;

      this._busy = true;
      _ember['default'].assert('Session#authenticate requires the authenticator to be specified, was "' + authenticatorFactory + '"!', !isEmpty(authenticatorFactory));
      var authenticator = this._lookupAuthenticator(authenticatorFactory);
      _ember['default'].assert('No authenticator for factory "' + authenticatorFactory + '" could be found!', !isNone(authenticator));

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return authenticator.authenticate.apply(authenticator, args).then(function (content) {
        _this._busy = false;
        return _this._setup(authenticatorFactory, content, true);
      }, function (error) {
        var rejectWithError = function rejectWithError() {
          return RSVP.Promise.reject(error);
        };

        _this._busy = false;
        return _this._clear().then(rejectWithError, rejectWithError);
      });
    },

    invalidate: function invalidate() {
      var _this2 = this;

      this._busy = true;
      _ember['default'].assert('Session#invalidate requires the session to be authenticated!', this.get('isAuthenticated'));

      var authenticator = this._lookupAuthenticator(this.authenticator);
      return authenticator.invalidate(this.content.authenticated).then(function () {
        authenticator.off('sessionDataUpdated');
        _this2._busy = false;
        return _this2._clear(true);
      }, function (error) {
        _this2.trigger('sessionInvalidationFailed', error);
        _this2._busy = false;
        return RSVP.Promise.reject(error);
      });
    },

    restore: function restore() {
      var _this3 = this;

      this._busy = true;
      var reject = function reject() {
        return RSVP.Promise.reject();
      };

      return this._callStoreAsync('restore').then(function (restoredContent) {
        var _ref = restoredContent.authenticated || {};

        var authenticatorFactory = _ref.authenticator;

        if (!!authenticatorFactory) {
          delete restoredContent.authenticated.authenticator;
          var authenticator = _this3._lookupAuthenticator(authenticatorFactory);
          return authenticator.restore(restoredContent.authenticated).then(function (content) {
            _this3.set('content', restoredContent);
            _this3._busy = false;
            return _this3._setup(authenticatorFactory, content);
          }, function (err) {
            _ember['default'].Logger.debug('The authenticator "' + authenticatorFactory + '" rejected to restore the session - invalidating…');
            if (err) {
              _ember['default'].Logger.debug(err);
            }
            _this3._busy = false;
            return _this3._clearWithContent(restoredContent).then(reject, reject);
          });
        } else {
          delete (restoredContent || {}).authenticated;
          _this3._busy = false;
          return _this3._clearWithContent(restoredContent).then(reject, reject);
        }
      }, function () {
        _this3._busy = false;
        return _this3._clear().then(reject, reject);
      });
    },

    _callStoreAsync: function _callStoreAsync(method) {
      var _store;

      for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      var result = (_store = this.store)[method].apply(_store, params);

      if (typeof result === 'undefined' || typeof result.then === 'undefined') {
        _ember['default'].deprecate('Ember Simple Auth: Synchronous stores have been deprecated. Make sure your custom store\'s ' + method + ' method returns a promise.', false, {
          id: 'ember-simple-auth.session-store.synchronous-' + method,
          until: '2.0.0'
        });
        return RSVP.Promise.resolve(result);
      } else {
        return result;
      }
    },

    _setup: function _setup(authenticator, authenticatedContent, trigger) {
      var _this4 = this;

      trigger = !!trigger && !this.get('isAuthenticated');
      this.beginPropertyChanges();
      this.setProperties({
        isAuthenticated: true,
        authenticator: authenticator
      });
      _ember['default'].set(this.content, 'authenticated', authenticatedContent);
      this._bindToAuthenticatorEvents();

      return this._updateStore().then(function () {
        _this4.endPropertyChanges();
        if (trigger) {
          _this4.trigger('authenticationSucceeded');
        }
      }, function () {
        _this4.setProperties({
          isAuthenticated: false,
          authenticator: null
        });
        _ember['default'].set(_this4.content, 'authenticated', {});
        _this4.endPropertyChanges();
      });
    },

    _clear: function _clear(trigger) {
      var _this5 = this;

      trigger = !!trigger && this.get('isAuthenticated');
      this.beginPropertyChanges();
      this.setProperties({
        isAuthenticated: false,
        authenticator: null
      });
      _ember['default'].set(this.content, 'authenticated', {});

      return this._updateStore().then(function () {
        _this5.endPropertyChanges();
        if (trigger) {
          _this5.trigger('invalidationSucceeded');
        }
      }, function () {
        return _this5.endPropertyChanges();
      });
    },

    _clearWithContent: function _clearWithContent(content, trigger) {
      this.set('content', content);
      return this._clear(trigger);
    },

    setUnknownProperty: function setUnknownProperty(key, value) {
      _ember['default'].assert('"authenticated" is a reserved key used by Ember Simple Auth!', key !== 'authenticated');
      var result = this._super(key, value);
      this._updateStore();
      return result;
    },

    _updateStore: function _updateStore() {
      var data = this.content;
      if (!_ember['default'].isEmpty(this.authenticator)) {
        _ember['default'].set(data, 'authenticated', assign({ authenticator: this.authenticator }, data.authenticated || {}));
      }
      return this._callStoreAsync('persist', data);
    },

    _bindToAuthenticatorEvents: function _bindToAuthenticatorEvents() {
      var _this6 = this;

      var authenticator = this._lookupAuthenticator(this.authenticator);
      authenticator.off('sessionDataUpdated');
      authenticator.off('sessionDataInvalidated');
      authenticator.on('sessionDataUpdated', function (content) {
        _this6._setup(_this6.authenticator, content);
      });
      authenticator.on('sessionDataInvalidated', function () {
        _this6._clear(true);
      });
    },

    _bindToStoreEvents: function _bindToStoreEvents() {
      var _this7 = this;

      this.store.on('sessionDataUpdated', function (content) {
        if (!_this7._busy) {
          (function () {
            _this7._busy = true;

            var _ref2 = content.authenticated || {};

            var authenticatorFactory = _ref2.authenticator;

            if (!!authenticatorFactory) {
              delete content.authenticated.authenticator;
              var authenticator = _this7._lookupAuthenticator(authenticatorFactory);
              authenticator.restore(content.authenticated).then(function (authenticatedContent) {
                _this7.set('content', content);
                _this7._busy = false;
                _this7._setup(authenticatorFactory, authenticatedContent, true);
              }, function (err) {
                _ember['default'].Logger.debug('The authenticator "' + authenticatorFactory + '" rejected to restore the session - invalidating…');
                if (err) {
                  _ember['default'].Logger.debug(err);
                }
                _this7._busy = false;
                _this7._clearWithContent(content, true);
              });
            } else {
              _this7._busy = false;
              _this7._clearWithContent(content, true);
            }
          })();
        }
      });
    },

    _lookupAuthenticator: function _lookupAuthenticator(authenticator) {
      return (0, _emberGetownerPolyfill['default'])(this).lookup(authenticator);
    }
  });
});