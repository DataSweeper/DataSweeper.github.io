QUnit.module('JSHint | services/poll.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/poll.js should pass jshint.\nservices/poll.js: line 13, col 47, \'ids\' is defined but never used.\nservices/poll.js: line 47, col 43, \'pid\' is defined but never used.\nservices/poll.js: line 47, col 35, \'status\' is defined but never used.\nservices/poll.js: line 47, col 29, \'args\' is defined but never used.\n\n4 errors');
});
