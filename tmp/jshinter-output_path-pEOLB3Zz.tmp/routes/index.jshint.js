QUnit.module('JSHint | routes/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 4, col 12, \'APP_META\' is not defined.\n\n1 error');
});
