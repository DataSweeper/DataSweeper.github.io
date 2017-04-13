QUnit.module('JSHint | helpers/formateprefix.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'helpers/formateprefix.js should pass jshint.\nhelpers/formateprefix.js: line 6, col 38, Missing semicolon.\nhelpers/formateprefix.js: line 17, col 16, \'Ember\' is not defined.\n\n2 errors');
});
