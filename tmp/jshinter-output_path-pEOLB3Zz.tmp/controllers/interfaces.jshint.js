QUnit.module('JSHint | controllers/interfaces.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/interfaces.js should pass jshint.\ncontrollers/interfaces.js: line 21, col 52, Missing semicolon.\ncontrollers/interfaces.js: line 27, col 3, Missing semicolon.\ncontrollers/interfaces.js: line 24, col 32, \'$\' is not defined.\n\n3 errors');
});
