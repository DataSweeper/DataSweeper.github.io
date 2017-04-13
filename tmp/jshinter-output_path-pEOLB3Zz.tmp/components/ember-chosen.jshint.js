QUnit.module('JSHint | components/ember-chosen.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/ember-chosen.js should pass jshint.\ncomponents/ember-chosen.js: line 1, col 8, \'Ember\' is defined but never used.\n\n1 error');
});
