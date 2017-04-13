define('netconfig/tests/unit/helpers/eq-test', ['exports', 'netconfig/helpers/eq', 'qunit'], function (exports, _netconfigHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _netconfigHelpersEq.eq)([42]);
    assert.ok(result);
  });
});