QUnit.module('JSHint | routes/settings/routers/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/settings/routers/index.js should pass jshint.\nroutes/settings/routers/index.js: line 9, col 46, Missing semicolon.\nroutes/settings/routers/index.js: line 11, col 3, Missing semicolon.\n\n2 errors');
});
