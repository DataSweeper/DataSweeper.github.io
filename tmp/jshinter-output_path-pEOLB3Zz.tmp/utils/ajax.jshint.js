QUnit.module('JSHint | utils/ajax.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'utils/ajax.js should pass jshint.\nutils/ajax.js: line 11, col 2, Missing semicolon.\nutils/ajax.js: line 17, col 19, Expected \'{\' and instead saw \'$\'.\nutils/ajax.js: line 67, col 40, Missing semicolon.\nutils/ajax.js: line 82, col 40, Missing semicolon.\nutils/ajax.js: line 85, col 34, Expected \'===\' and instead saw \'==\'.\nutils/ajax.js: line 87, col 35, Expected \'===\' and instead saw \'==\'.\nutils/ajax.js: line 94, col 41, Missing semicolon.\nutils/ajax.js: line 96, col 45, Missing semicolon.\nutils/ajax.js: line 53, col 25, \'textStatus\' is defined but never used.\nutils/ajax.js: line 66, col 11, \'APP_META\' is not defined.\nutils/ajax.js: line 78, col 11, \'APP_META\' is not defined.\n\n11 errors');
});
