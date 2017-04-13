QUnit.module('JSHint | routes/application.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 18, col 30, Missing semicolon.\nroutes/application.js: line 25, col 21, \'Em\' is not defined.\nroutes/application.js: line 26, col 19, \'Em\' is not defined.\nroutes/application.js: line 55, col 24, \'Em\' is not defined.\nroutes/application.js: line 70, col 24, \'Em\' is not defined.\n\n5 errors');
});
