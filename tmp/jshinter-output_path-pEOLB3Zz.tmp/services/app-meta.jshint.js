QUnit.module('JSHint | services/app-meta.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/app-meta.js should pass jshint.\nservices/app-meta.js: line 1, col 40, \'Ember\' is not defined.\nservices/app-meta.js: line 3, col 16, \'Em\' is not defined.\nservices/app-meta.js: line 1, col 12, \'computed\' is defined but never used.\nservices/app-meta.js: line 1, col 32, \'and\' is defined but never used.\n\n4 errors');
});
