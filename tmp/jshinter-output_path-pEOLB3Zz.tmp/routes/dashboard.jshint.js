QUnit.module('JSHint | routes/dashboard.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/dashboard.js should pass jshint.\nroutes/dashboard.js: line 7, col 59, Missing semicolon.\nroutes/dashboard.js: line 12, col 24, \'transition\' is defined but never used.\n\n2 errors');
});
