define('netconfig/tests/test-helper', ['exports', 'netconfig/tests/helpers/resolver', 'ember-qunit'], function (exports, _netconfigTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_netconfigTestsHelpersResolver['default']);
});