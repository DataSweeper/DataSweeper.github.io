QUnit.module('JSHint | initializers/app-controller.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'initializers/app-controller.js should pass jshint.\ninitializers/app-controller.js: line 4, col 24, \'application\' is defined but never used.\n\n1 error');
});
