QUnit.module('JSHint | utils/validation.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'utils/validation.js should pass jshint.\nutils/validation.js: line 27, col 25, Missing semicolon.\nutils/validation.js: line 32, col 7, Missing semicolon.\nutils/validation.js: line 34, col 2, Missing semicolon.\nutils/validation.js: line 159, col 52, Missing semicolon.\nutils/validation.js: line 167, col 51, \'lblval\' is already defined.\nutils/validation.js: line 167, col 90, Unnecessary semicolon.\nutils/validation.js: line 173, col 29, \'msg\' is already defined.\nutils/validation.js: line 180, col 26, \'lblval\' is already defined.\n\n8 errors');
});
