QUnit.module('JSHint | controllers/application.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 11, col 30, Missing semicolon.\ncontrollers/application.js: line 28, col 15, \'self\' is defined but never used.\ncontrollers/application.js: line 20, col 14, \'APP_META\' is not defined.\ncontrollers/application.js: line 31, col 11, \'$\' is not defined.\n\n4 errors');
});
