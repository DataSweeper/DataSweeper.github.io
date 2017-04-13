QUnit.module('JSHint | controllers/dashboard.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/dashboard.js should pass jshint.\ncontrollers/dashboard.js: line 29, col 19, Missing semicolon.\ncontrollers/dashboard.js: line 39, col 11, Missing semicolon.\ncontrollers/dashboard.js: line 43, col 52, Missing semicolon.\ncontrollers/dashboard.js: line 46, col 52, Missing semicolon.\ncontrollers/dashboard.js: line 10, col 9, \'$\' is not defined.\ncontrollers/dashboard.js: line 11, col 13, \'$\' is not defined.\ncontrollers/dashboard.js: line 23, col 17, \'$\' is not defined.\ncontrollers/dashboard.js: line 25, col 25, \'$\' is not defined.\n\n8 errors');
});
