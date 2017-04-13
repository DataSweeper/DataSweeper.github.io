define('ember-poll/services/poll', ['exports', 'ember-service', 'ember-runloop', 'ember-array/utils'], function (exports, _emberService, _emberRunloop, _emberArrayUtils) {
  'use strict';

  exports['default'] = _emberService['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      this.set('_polls', (0, _emberArrayUtils.A)([]));
    },
    willDestroy: function willDestroy() {
      this.stopAll();
    },

    addPoll: function addPoll(_ref) {
      var interval = _ref.interval;
      var callback = _ref.callback;
      var label = _ref.label;

      if (interval <= 1) {
        throw new Error('Polling interval must be greater than 1');
      }

      var handle = this._schedule(callback, interval);
      var poll = { handle: handle, callback: callback, interval: interval };
      if (label) {
        poll.label = label;
      }
      this._polls.pushObject(poll);
      return handle;
    },

    startPoll: function startPoll(oldHandle) {
      var newHandle = this._startPoll('handle', oldHandle);
      return newHandle;
    },
    startPollByLabel: function startPollByLabel(label) {
      var newHandle = this._startPoll('label', label);
      return newHandle;
    },

    stopPoll: function stopPoll(handle) {
      clearInterval(handle);
    },
    stopPollByLabel: function stopPollByLabel(label) {
      var poll = this._polls.findBy('label', label);
      if (poll) {
        this.stopPoll(poll.handle);
      }
    },
    stopAll: function stopAll() {
      var handles = this._polls.mapBy('handle');
      handles.forEach(this.stopPoll);
    },

    _schedule: function _schedule(fn, interval) {
      return setInterval((0, _emberRunloop.bind)(this, fn), interval);
    },
    _startPoll: function _startPoll(key, value) {
      var poll = this._polls.findBy(key, value);
      if (poll) {
        var callback = poll.callback;
        var interval = poll.interval;

        var newHandle = this._schedule(callback, interval);
        return newHandle;
      } else {
        console.warn('No poll was found for ' + key + ' {$value}');
      }
    }
  });
});