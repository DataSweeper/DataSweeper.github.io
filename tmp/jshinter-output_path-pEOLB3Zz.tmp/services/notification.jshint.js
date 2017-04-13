QUnit.module('JSHint | services/notification.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/notification.js should pass jshint.\nservices/notification.js: line 1, col 40, \'Ember\' is not defined.\nservices/notification.js: line 3, col 16, \'Em\' is not defined.\nservices/notification.js: line 1, col 8, \'on\' is defined but never used.\nservices/notification.js: line 1, col 12, \'computed\' is defined but never used.\nservices/notification.js: line 1, col 32, \'and\' is defined but never used.\n\n5 errors');
});
