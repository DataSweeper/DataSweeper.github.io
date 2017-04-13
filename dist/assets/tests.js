'use strict';

define('pyezc-ui/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('pyezc-ui/tests/authenticators/drf-token-authenticator.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authenticators/drf-token-authenticator.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'authenticators/drf-token-authenticator.js should pass jshint.\nauthenticators/drf-token-authenticator.js: line 33, col 24, \'error\' is defined but never used.\nauthenticators/drf-token-authenticator.js: line 33, col 16, \'status\' is defined but never used.\n\n2 errors');
  });
});
define('pyezc-ui/tests/authorizers/drf-token-authorizer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authorizers/drf-token-authorizer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/drf-token-authorizer.js should pass jshint.');
  });
});
define('pyezc-ui/tests/controllers/add-router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/add-router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/add-router.js should pass jshint.\ncontrollers/add-router.js: line 29, col 24, \'message\' is defined but never used.\ncontrollers/add-router.js: line 20, col 9, \'$\' is not defined.\n\n2 errors');
  });
});
define('pyezc-ui/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('pyezc-ui/tests/controllers/bgp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bgp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/bgp.js should pass jshint.\ncontrollers/bgp.js: line 24, col 9, \'$\' is not defined.\ncontrollers/bgp.js: line 33, col 15, \'$\' is not defined.\ncontrollers/bgp.js: line 35, col 19, \'$\' is not defined.\n\n3 errors');
  });
});
define('pyezc-ui/tests/controllers/bgp/details.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bgp/details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bgp/details.js should pass jshint.');
  });
});
define('pyezc-ui/tests/controllers/inlinefilter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/inlinefilter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/inlinefilter.js should pass jshint.');
  });
});
define('pyezc-ui/tests/controllers/interface.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/interface.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/interface.js should pass jshint.\ncontrollers/interface.js: line 11, col 9, \'$\' is not defined.\ncontrollers/interface.js: line 20, col 15, \'$\' is not defined.\ncontrollers/interface.js: line 22, col 19, \'$\' is not defined.\n\n3 errors');
  });
});
define('pyezc-ui/tests/controllers/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass jshint.');
  });
});
define('pyezc-ui/tests/controllers/zohoservices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/zohoservices.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/zohoservices.js should pass jshint.\ncontrollers/zohoservices.js: line 8, col 38, Missing semicolon.\ncontrollers/zohoservices.js: line 10, col 9, \'$\' is not defined.\ncontrollers/zohoservices.js: line 17, col 15, \'$\' is not defined.\n\n3 errors');
  });
});
define('pyezc-ui/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('pyezc-ui/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('pyezc-ui/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('pyezc-ui/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'pyezc-ui/tests/helpers/start-app', 'pyezc-ui/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _pyezcUiTestsHelpersStartApp, _pyezcUiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _pyezcUiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _pyezcUiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('pyezc-ui/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('pyezc-ui/tests/helpers/resolver', ['exports', 'pyezc-ui/resolver', 'pyezc-ui/config/environment'], function (exports, _pyezcUiResolver, _pyezcUiConfigEnvironment) {

  var resolver = _pyezcUiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _pyezcUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pyezcUiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('pyezc-ui/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('pyezc-ui/tests/helpers/start-app', ['exports', 'ember', 'pyezc-ui/app', 'pyezc-ui/config/environment'], function (exports, _ember, _pyezcUiApp, _pyezcUiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _pyezcUiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _pyezcUiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('pyezc-ui/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('pyezc-ui/tests/helpers/tolowercase.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/tolowercase.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/tolowercase.js should pass jshint.\nhelpers/tolowercase.js: line 7, col 48, Missing semicolon.\n\n1 error');
  });
});
define('pyezc-ui/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('pyezc-ui/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/add-router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/add-router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/add-router.js should pass jshint.\nroutes/add-router.js: line 2, col 8, \'AuthenticatedRouteMixin\' is defined but never used.\nroutes/add-router.js: line 3, col 8, \'ENV\' is defined but never used.\n\n2 errors');
  });
});
define('pyezc-ui/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/bgp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bgp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/bgp.js should pass jshint.\nroutes/bgp.js: line 2, col 8, \'AuthenticatedRouteMixin\' is defined but never used.\nroutes/bgp.js: line 3, col 8, \'ENV\' is defined but never used.\n\n2 errors');
  });
});
define('pyezc-ui/tests/routes/bgp/details.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bgp/details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bgp/details.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 2, col 8, \'AuthenticatedRouteMixin\' is defined but never used.\n\n1 error');
  });
});
define('pyezc-ui/tests/routes/inlinefilter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/inlinefilter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inlinefilter.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/interface.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/interface.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/interface.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/mtrprofile.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/mtrprofile.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mtrprofile.js should pass jshint.');
  });
});
define('pyezc-ui/tests/routes/zohoservices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/zohoservices.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/zohoservices.js should pass jshint.\nroutes/zohoservices.js: line 13, col 13, \'self\' is defined but never used.\n\n1 error');
  });
});
define('pyezc-ui/tests/services/ajax.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/ajax.js should pass jshint.\nservices/ajax.js: line 3, col 10, \'UnauthorizedError\' is defined but never used.\n\n1 error');
  });
});
define('pyezc-ui/tests/test-helper', ['exports', 'pyezc-ui/tests/helpers/resolver', 'ember-qunit'], function (exports, _pyezcUiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_pyezcUiTestsHelpersResolver['default']);
});
define('pyezc-ui/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/controllers/add-router-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:add-router', 'Unit | Controller | add router', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pyezc-ui/tests/unit/controllers/add-router-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/add-router-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/add-router-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pyezc-ui/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/controllers/bgp/details-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:bgp/details', 'Unit | Controller | bgp/details', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pyezc-ui/tests/unit/controllers/bgp/details-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/bgp/details-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bgp/details-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/controllers/inlinefilter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:inlinefilter', 'Unit | Controller | inlinefilter', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pyezc-ui/tests/unit/controllers/inlinefilter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/inlinefilter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/inlinefilter-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/controllers/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pyezc-ui/tests/unit/controllers/login-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/controllers/zohoservices-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:zohoservices', 'Unit | Controller | zohoservices', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pyezc-ui/tests/unit/controllers/zohoservices-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/zohoservices-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/zohoservices-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/models/bgpdetail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('bgpdetail', 'Unit | Model | bgpdetail', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pyezc-ui/tests/unit/models/bgpdetail-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/bgpdetail-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/bgpdetail-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/models/bgptemplate-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('bgptemplate', 'Unit | Model | bgptemplate', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pyezc-ui/tests/unit/models/bgptemplate-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/bgptemplate-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/bgptemplate-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/models/router-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('router', 'Unit | Model | router', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pyezc-ui/tests/unit/models/router-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/router-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/router-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/add-router-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:add-router', 'Unit | Route | add router', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/add-router-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/add-router-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-router-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/bgp-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bgp', 'Unit | Route | bgp', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/bgp-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bgp-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bgp-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/bgp/details-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bgp/details', 'Unit | Route | bgp/details', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/bgp/details-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bgp/details-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bgp/details-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/bgptemplate-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bgptemplate', 'Unit | Route | bgptemplate', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/bgptemplate-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/bgptemplate-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bgptemplate-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/inlinefilter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:inlinefilter', 'Unit | Route | inlinefilter', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/inlinefilter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/inlinefilter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/inlinefilter-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/login-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/mtrprofile-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:mtrprofile', 'Unit | Route | mtrprofile', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/mtrprofile-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/mtrprofile-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mtrprofile-test.js should pass jshint.');
  });
});
define('pyezc-ui/tests/unit/routes/zohoservices-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:zohoservices', 'Unit | Route | zohoservices', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pyezc-ui/tests/unit/routes/zohoservices-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/zohoservices-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/zohoservices-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('pyezc-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
