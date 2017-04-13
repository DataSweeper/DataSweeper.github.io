QUnit.module('JSHint | views/common/modal.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'views/common/modal.js should pass jshint.\nviews/common/modal.js: line 37, col 10, \'Em\' is not defined.\n\n1 error');
});
