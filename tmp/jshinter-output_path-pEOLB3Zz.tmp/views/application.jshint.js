QUnit.module('JSHint | views/application.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'views/application.js should pass jshint.\nviews/application.js: line 50, col 29, Missing semicolon.\nviews/application.js: line 22, col 7, \'Em\' is not defined.\n\n2 errors');
});
