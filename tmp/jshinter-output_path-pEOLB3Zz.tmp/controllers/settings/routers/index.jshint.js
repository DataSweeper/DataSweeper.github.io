QUnit.module('JSHint | controllers/settings/routers/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/settings/routers/index.js should pass jshint.\ncontrollers/settings/routers/index.js: line 12, col 51, Missing semicolon.\ncontrollers/settings/routers/index.js: line 10, col 72, \'res\' is defined but never used.\ncontrollers/settings/routers/index.js: line 14, col 19, Missing semicolon.\ncontrollers/settings/routers/index.js: line 8, col 13, \'self\' is not defined.\ncontrollers/settings/routers/index.js: line 10, col 17, \'self\' is not defined.\ncontrollers/settings/routers/index.js: line 12, col 32, \'self\' is not defined.\n\n6 errors');
});
