define('netconfig/tests/helpers/start-app', ['exports', 'ember', 'netconfig/app', 'netconfig/config/environment'], function (exports, _ember, _netconfigApp, _netconfigConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _netconfigConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _netconfigApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});