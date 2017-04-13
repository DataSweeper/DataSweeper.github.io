QUnit.module('JSHint | routes/login.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/login.js should pass jshint.\nroutes/login.js: line 4, col 12, \'APP_META\' is not defined.\n\n1 error');
});
