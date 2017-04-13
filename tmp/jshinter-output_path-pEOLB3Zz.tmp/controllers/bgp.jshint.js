QUnit.module('JSHint | controllers/bgp.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/bgp.js should pass jshint.\ncontrollers/bgp.js: line 24, col 17, \'data\' is defined but never used.\ncontrollers/bgp.js: line 53, col 11, Missing semicolon.\ncontrollers/bgp.js: line 57, col 52, Missing semicolon.\ncontrollers/bgp.js: line 70, col 15, Missing semicolon.\ncontrollers/bgp.js: line 73, col 52, Missing semicolon.\ncontrollers/bgp.js: line 76, col 3, Missing semicolon.\ncontrollers/bgp.js: line 12, col 9, \'$\' is not defined.\ncontrollers/bgp.js: line 26, col 13, \'$\' is not defined.\ncontrollers/bgp.js: line 36, col 17, \'$\' is not defined.\ncontrollers/bgp.js: line 38, col 25, \'$\' is not defined.\ncontrollers/bgp.js: line 68, col 28, \'$\' is not defined.\ncontrollers/bgp.js: line 69, col 17, \'$\' is not defined.\ncontrollers/bgp.js: line 69, col 111, \'$\' is not defined.\n\n13 errors');
});
