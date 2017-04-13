define('ember-simple-auth/session-stores/local-storage', ['exports', 'ember', 'ember-simple-auth/session-stores/base', 'ember-simple-auth/utils/objects-are-equal'], function (exports, _ember, _emberSimpleAuthSessionStoresBase, _emberSimpleAuthUtilsObjectsAreEqual) {
  /* global localStorage */
  'use strict';

  var RSVP = _ember['default'].RSVP;

  /**
    Session store that persists data in the browser's `localStorage`.
  
    __`localStorage` is not available in Safari when running in private mode. In
    general it is better to use the
    {{#crossLink "AdaptiveStore"}}{{/crossLink}} that automatically falls back to
    the {{#crossLink "CookieStore"}}{{/crossLink}} when `localStorage` is not
    available.__
  
    @class LocalStorageStore
    @module ember-simple-auth/session-stores/local-storage
    @extends BaseStore
    @public
  */
  exports['default'] = _emberSimpleAuthSessionStoresBase['default'].extend({
    /**
      The `localStorage` key the store persists data in.
       @property key
      @type String
      @default 'ember_simple_auth:session'
      @public
    */
    key: 'ember_simple_auth:session',

    init: function init() {
      this._super.apply(this, arguments);

      this._bindToStorageEvents();
    },

    /**
      Persists the `data` in the `localStorage`.
       @method persist
      @param {Object} data The data to persist
      @return {Ember.RSVP.Promise} A promise that resolves when the data has successfully been persisted and rejects otherwise.
      @public
    */
    persist: function persist(data) {
      this._lastData = data;
      data = JSON.stringify(data || {});
      localStorage.setItem(this.key, data);

      return RSVP.resolve();
    },

    /**
      Returns all data currently stored in the `localStorage` as a plain object.
       @method restore
      @return {Ember.RSVP.Promise} A promise that resolves with the data currently persisted in the store when the data has been restored successfully and rejects otherwise.
      @public
    */
    restore: function restore() {
      var data = localStorage.getItem(this.key);

      return RSVP.resolve(JSON.parse(data) || {});
    },

    /**
      Clears the store by deleting the
      {{#crossLink "LocalStorageStore/key:property"}}{{/crossLink}} from
      `localStorage`.
       @method clear
      @return {Ember.RSVP.Promise} A promise that resolves when the store has been cleared successfully and rejects otherwise.
      @public
    */
    clear: function clear() {
      localStorage.removeItem(this.key);
      this._lastData = {};

      return RSVP.resolve();
    },

    _bindToStorageEvents: function _bindToStorageEvents() {
      var _this = this;

      _ember['default'].$(window).bind('storage', function (e) {
        if (e.originalEvent.key === _this.key) {
          _this.restore().then(function (data) {
            if (!(0, _emberSimpleAuthUtilsObjectsAreEqual['default'])(data, _this._lastData)) {
              _this._lastData = data;
              _this.trigger('sessionDataUpdated', data);
            }
          });
        }
      });
    }
  });
});