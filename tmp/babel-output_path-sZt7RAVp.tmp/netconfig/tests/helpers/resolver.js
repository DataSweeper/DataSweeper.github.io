define('netconfig/tests/helpers/resolver', ['exports', 'netconfig/resolver', 'netconfig/config/environment'], function (exports, _netconfigResolver, _netconfigConfigEnvironment) {

  var resolver = _netconfigResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _netconfigConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _netconfigConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});