QUnit.module('JSHint | routes/bgp.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/bgp.js should pass jshint.\nroutes/bgp.js: line 7, col 55, Missing semicolon.\n\n1 error');
});
