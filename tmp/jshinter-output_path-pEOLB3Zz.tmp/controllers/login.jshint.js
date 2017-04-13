QUnit.module('JSHint | controllers/login.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/login.js should pass jshint.\ncontrollers/login.js: line 9, col 39, \'$\' is not defined.\ncontrollers/login.js: line 12, col 51, \'$\' is not defined.\n\n2 errors');
});
