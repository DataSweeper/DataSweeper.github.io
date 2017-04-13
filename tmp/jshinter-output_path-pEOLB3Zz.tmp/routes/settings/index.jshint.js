QUnit.module('JSHint | routes/settings/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/settings/index.js should pass jshint.\nroutes/settings/index.js: line 7, col 42, \'model\' is defined but never used.\nroutes/settings/index.js: line 7, col 30, \'controller\' is defined but never used.\nroutes/settings/index.js: line 10, col 3, Missing semicolon.\n\n3 errors');
});
