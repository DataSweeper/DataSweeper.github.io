'use strict';

define('netconfig/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('netconfig/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('netconfig/tests/components/bs-primary.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/bs-primary.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bs-primary.js should pass jshint.');
  });
});
define('netconfig/tests/components/ember-chosen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/ember-chosen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ember-chosen.js should pass jshint.\ncomponents/ember-chosen.js: line 1, col 8, \'Ember\' is defined but never used.\n\n1 error');
  });
});
define('netconfig/tests/components/inline-filters.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/inline-filters.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/inline-filters.js should pass jshint.\ncomponents/inline-filters.js: line 17, col 34, \'b\' is defined but never used.\ncomponents/inline-filters.js: line 28, col 34, \'b\' is defined but never used.\ncomponents/inline-filters.js: line 88, col 103, \'res\' is defined but never used.\ncomponents/inline-filters.js: line 95, col 37, Missing semicolon.\ncomponents/inline-filters.js: line 107, col 37, Missing semicolon.\ncomponents/inline-filters.js: line 14, col 10, \'$\' is not defined.\ncomponents/inline-filters.js: line 18, col 21, \'$\' is not defined.\ncomponents/inline-filters.js: line 19, col 25, \'$\' is not defined.\ncomponents/inline-filters.js: line 20, col 25, \'$\' is not defined.\ncomponents/inline-filters.js: line 25, col 10, \'$\' is not defined.\ncomponents/inline-filters.js: line 29, col 21, \'$\' is not defined.\ncomponents/inline-filters.js: line 30, col 25, \'$\' is not defined.\ncomponents/inline-filters.js: line 31, col 25, \'$\' is not defined.\ncomponents/inline-filters.js: line 50, col 13, \'$\' is not defined.\ncomponents/inline-filters.js: line 51, col 13, \'$\' is not defined.\ncomponents/inline-filters.js: line 52, col 13, \'$\' is not defined.\ncomponents/inline-filters.js: line 53, col 13, \'$\' is not defined.\ncomponents/inline-filters.js: line 54, col 13, \'$\' is not defined.\ncomponents/inline-filters.js: line 63, col 24, \'$\' is not defined.\ncomponents/inline-filters.js: line 65, col 20, \'$\' is not defined.\ncomponents/inline-filters.js: line 66, col 21, \'$\' is not defined.\ncomponents/inline-filters.js: line 67, col 21, \'$\' is not defined.\ncomponents/inline-filters.js: line 78, col 39, \'$\' is not defined.\ncomponents/inline-filters.js: line 79, col 25, \'$\' is not defined.\ncomponents/inline-filters.js: line 79, col 82, \'$\' is not defined.\ncomponents/inline-filters.js: line 81, col 22, \'$\' is not defined.\ncomponents/inline-filters.js: line 84, col 26, \'$\' is not defined.\ncomponents/inline-filters.js: line 3, col 9, \'formdatatoObj\' is defined but never used.\n\n28 errors');
  });
});
define('netconfig/tests/components/mtr-profiles.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/mtr-profiles.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/mtr-profiles.js should pass jshint.\ncomponents/mtr-profiles.js: line 37, col 71, Missing semicolon.\ncomponents/mtr-profiles.js: line 31, col 59, \'self\' is defined but never used.\ncomponents/mtr-profiles.js: line 73, col 21, \'network\' is already defined.\ncomponents/mtr-profiles.js: line 76, col 41, Missing semicolon.\ncomponents/mtr-profiles.js: line 89, col 101, \'res\' is defined but never used.\ncomponents/mtr-profiles.js: line 96, col 37, Missing semicolon.\ncomponents/mtr-profiles.js: line 108, col 37, Missing semicolon.\ncomponents/mtr-profiles.js: line 76, col 13, \'network\' used out of scope.\ncomponents/mtr-profiles.js: line 76, col 23, \'network\' used out of scope.\ncomponents/mtr-profiles.js: line 80, col 25, \'network\' used out of scope.\ncomponents/mtr-profiles.js: line 22, col 13, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 23, col 13, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 24, col 13, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 25, col 13, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 26, col 13, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 27, col 13, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 31, col 24, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 34, col 17, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 47, col 17, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 55, col 23, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 60, col 25, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 66, col 39, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 69, col 31, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 73, col 31, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 78, col 34, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 79, col 26, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 81, col 21, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 82, col 22, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 83, col 24, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 84, col 21, \'$\' is not defined.\ncomponents/mtr-profiles.js: line 56, col 12, \'self\' is not defined.\ncomponents/mtr-profiles.js: line 58, col 17, \'self\' is not defined.\ncomponents/mtr-profiles.js: line 3, col 9, \'formdatatoObj\' is defined but never used.\n\n33 errors');
  });
});
define('netconfig/tests/components/router-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/router-page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/router-page.js should pass jshint.\ncomponents/router-page.js: line 35, col 97, \'res\' is defined but never used.\ncomponents/router-page.js: line 42, col 37, Missing semicolon.\ncomponents/router-page.js: line 54, col 37, Missing semicolon.\ncomponents/router-page.js: line 22, col 13, \'$\' is not defined.\ncomponents/router-page.js: line 23, col 13, \'$\' is not defined.\ncomponents/router-page.js: line 24, col 13, \'$\' is not defined.\ncomponents/router-page.js: line 25, col 13, \'$\' is not defined.\ncomponents/router-page.js: line 29, col 39, \'$\' is not defined.\ncomponents/router-page.js: line 30, col 25, \'$\' is not defined.\ncomponents/router-page.js: line 3, col 9, \'formdatatoObj\' is defined but never used.\n\n10 errors');
  });
});
define('netconfig/tests/components/routers.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/routers.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/routers.js should pass jshint.');
  });
});
define('netconfig/tests/components/switch-btn.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/switch-btn.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/switch-btn.js should pass jshint.');
  });
});
define('netconfig/tests/components/zohoservice-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/zohoservice-page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/zohoservice-page.js should pass jshint.\ncomponents/zohoservice-page.js: line 35, col 103, \'res\' is defined but never used.\ncomponents/zohoservice-page.js: line 42, col 37, Missing semicolon.\ncomponents/zohoservice-page.js: line 54, col 37, Missing semicolon.\ncomponents/zohoservice-page.js: line 23, col 13, \'$\' is not defined.\ncomponents/zohoservice-page.js: line 24, col 13, \'$\' is not defined.\ncomponents/zohoservice-page.js: line 29, col 39, \'$\' is not defined.\ncomponents/zohoservice-page.js: line 30, col 25, \'$\' is not defined.\ncomponents/zohoservice-page.js: line 3, col 9, \'formdatatoObj\' is defined but never used.\n\n8 errors');
  });
});
define('netconfig/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 11, col 30, Missing semicolon.\ncontrollers/application.js: line 28, col 15, \'self\' is defined but never used.\ncontrollers/application.js: line 20, col 14, \'APP_META\' is not defined.\ncontrollers/application.js: line 31, col 11, \'$\' is not defined.\n\n4 errors');
  });
});
define('netconfig/tests/controllers/bgp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bgp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/bgp.js should pass jshint.\ncontrollers/bgp.js: line 25, col 17, \'data\' is defined but never used.\ncontrollers/bgp.js: line 52, col 11, Missing semicolon.\ncontrollers/bgp.js: line 56, col 52, Missing semicolon.\ncontrollers/bgp.js: line 69, col 15, Missing semicolon.\ncontrollers/bgp.js: line 72, col 52, Missing semicolon.\ncontrollers/bgp.js: line 75, col 3, Missing semicolon.\ncontrollers/bgp.js: line 12, col 9, \'$\' is not defined.\ncontrollers/bgp.js: line 26, col 13, \'$\' is not defined.\ncontrollers/bgp.js: line 35, col 17, \'$\' is not defined.\ncontrollers/bgp.js: line 37, col 25, \'$\' is not defined.\ncontrollers/bgp.js: line 67, col 28, \'$\' is not defined.\ncontrollers/bgp.js: line 68, col 17, \'$\' is not defined.\ncontrollers/bgp.js: line 68, col 111, \'$\' is not defined.\n\n13 errors');
  });
});
define('netconfig/tests/controllers/common/confirmmodal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/common/confirmmodal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/common/confirmmodal.js should pass jshint.');
  });
});
define('netconfig/tests/controllers/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/dashboard.js should pass jshint.\ncontrollers/dashboard.js: line 32, col 19, Missing semicolon.\ncontrollers/dashboard.js: line 42, col 11, Missing semicolon.\ncontrollers/dashboard.js: line 47, col 52, Missing semicolon.\ncontrollers/dashboard.js: line 50, col 52, Missing semicolon.\ncontrollers/dashboard.js: line 12, col 9, \'$\' is not defined.\ncontrollers/dashboard.js: line 13, col 13, \'$\' is not defined.\ncontrollers/dashboard.js: line 26, col 17, \'$\' is not defined.\ncontrollers/dashboard.js: line 28, col 25, \'$\' is not defined.\n\n8 errors');
  });
});
define('netconfig/tests/controllers/inlinefilterview.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/inlinefilterview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/inlinefilterview.js should pass jshint.\ncontrollers/inlinefilterview.js: line 9, col 52, Missing semicolon.\n\n1 error');
  });
});
define('netconfig/tests/controllers/interfaces.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/interfaces.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/interfaces.js should pass jshint.\ncontrollers/interfaces.js: line 21, col 52, Missing semicolon.\ncontrollers/interfaces.js: line 27, col 3, Missing semicolon.\ncontrollers/interfaces.js: line 24, col 32, \'$\' is not defined.\n\n3 errors');
  });
});
define('netconfig/tests/controllers/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass jshint.\ncontrollers/login.js: line 9, col 39, \'$\' is not defined.\ncontrollers/login.js: line 12, col 51, \'$\' is not defined.\n\n2 errors');
  });
});
define('netconfig/tests/controllers/mtrprofileview.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/mtrprofileview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/mtrprofileview.js should pass jshint.\ncontrollers/mtrprofileview.js: line 9, col 52, Missing semicolon.\ncontrollers/mtrprofileview.js: line 25, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/controllers/settings.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/settings.js should pass jshint.');
  });
});
define('netconfig/tests/controllers/settings/inlinefilters/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings/inlinefilters/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/settings/inlinefilters/index.js should pass jshint.\ncontrollers/settings/inlinefilters/index.js: line 12, col 51, Missing semicolon.\ncontrollers/settings/inlinefilters/index.js: line 10, col 78, \'res\' is defined but never used.\n\n2 errors');
  });
});
define('netconfig/tests/controllers/settings/mtrprofiles/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings/mtrprofiles/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/settings/mtrprofiles/add.js should pass jshint.');
  });
});
define('netconfig/tests/controllers/settings/mtrprofiles/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings/mtrprofiles/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/settings/mtrprofiles/index.js should pass jshint.\ncontrollers/settings/mtrprofiles/index.js: line 9, col 30, Missing semicolon.\ncontrollers/settings/mtrprofiles/index.js: line 13, col 51, Missing semicolon.\ncontrollers/settings/mtrprofiles/index.js: line 11, col 76, \'res\' is defined but never used.\n\n3 errors');
  });
});
define('netconfig/tests/controllers/settings/routers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings/routers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/settings/routers/index.js should pass jshint.\ncontrollers/settings/routers/index.js: line 12, col 51, Missing semicolon.\ncontrollers/settings/routers/index.js: line 10, col 72, \'res\' is defined but never used.\ncontrollers/settings/routers/index.js: line 14, col 19, Missing semicolon.\ncontrollers/settings/routers/index.js: line 8, col 13, \'self\' is not defined.\ncontrollers/settings/routers/index.js: line 10, col 17, \'self\' is not defined.\ncontrollers/settings/routers/index.js: line 12, col 32, \'self\' is not defined.\n\n6 errors');
  });
});
define('netconfig/tests/controllers/settings/zohoserviceview/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/settings/zohoserviceview/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/settings/zohoserviceview/index.js should pass jshint.\ncontrollers/settings/zohoserviceview/index.js: line 12, col 51, Missing semicolon.\ncontrollers/settings/zohoserviceview/index.js: line 10, col 78, \'res\' is defined but never used.\ncontrollers/settings/zohoserviceview/index.js: line 14, col 19, Missing semicolon.\ncontrollers/settings/zohoserviceview/index.js: line 8, col 13, \'self\' is not defined.\ncontrollers/settings/zohoserviceview/index.js: line 10, col 17, \'self\' is not defined.\ncontrollers/settings/zohoserviceview/index.js: line 12, col 32, \'self\' is not defined.\n\n6 errors');
  });
});
define('netconfig/tests/controllers/zohoservices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/zohoservices.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/zohoservices.js should pass jshint.\ncontrollers/zohoservices.js: line 50, col 50, Missing semicolon.\ncontrollers/zohoservices.js: line 28, col 7, \'pollFun\' is not defined.\ncontrollers/zohoservices.js: line 34, col 6, \'$\' is not defined.\ncontrollers/zohoservices.js: line 36, col 9, \'$\' is not defined.\n\n4 errors');
  });
});
define('netconfig/tests/ember-onerror.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | ember-onerror.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-onerror.js should pass jshint.');
  });
});
define('netconfig/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('netconfig/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('netconfig/tests/helpers/enable-disable.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/enable-disable.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/enable-disable.js should pass jshint.');
  });
});
define('netconfig/tests/helpers/eq.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass jshint.');
  });
});
define('netconfig/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'netconfig/tests/helpers/start-app', 'netconfig/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _netconfigTestsHelpersStartApp, _netconfigTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _netconfigTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _netconfigTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('netconfig/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('netconfig/tests/helpers/resolver', ['exports', 'netconfig/resolver', 'netconfig/config/environment'], function (exports, _netconfigResolver, _netconfigConfigEnvironment) {

  var resolver = _netconfigResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _netconfigConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _netconfigConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('netconfig/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('netconfig/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('netconfig/tests/helpers/tolowercase.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/tolowercase.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/tolowercase.js should pass jshint.');
  });
});
define('netconfig/tests/initializers/app-controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/app-controller.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/app-controller.js should pass jshint.\ninitializers/app-controller.js: line 4, col 24, \'application\' is defined but never used.\n\n1 error');
  });
});
define('netconfig/tests/initializers/component-router-injector.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/component-router-injector.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/component-router-injector.js should pass jshint.');
  });
});
define('netconfig/tests/initializers/current-user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/current-user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/current-user.js should pass jshint.');
  });
});
define('netconfig/tests/initializers/permission.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/permission.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/permission.js should pass jshint.');
  });
});
define('netconfig/tests/initializers/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/router.js should pass jshint.');
  });
});
define('netconfig/tests/initializers/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/store.js should pass jshint.');
  });
});
define('netconfig/tests/integration/components/zohoservice-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('zohoservice-page', 'Integration | Component | zohoservice page', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'zohoservice-page', ['loc', [null, [1, 0], [1, 20]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'zohoservice-page', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('netconfig/tests/integration/components/zohoservice-page-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/zohoservice-page-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/zohoservice-page-test.js should pass jshint.');
  });
});
define('netconfig/tests/integration/components/zohoservice-view-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('zohoservice-view', 'Integration | Component | zohoservice view', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'zohoservice-view', ['loc', [null, [1, 0], [1, 20]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.9.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.9.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'zohoservice-view', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('netconfig/tests/integration/components/zohoservice-view-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/zohoservice-view-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/zohoservice-view-test.js should pass jshint.');
  });
});
define('netconfig/tests/keymaster-ext.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | keymaster-ext.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'keymaster-ext.js should pass jshint.');
  });
});
define('netconfig/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('netconfig/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('netconfig/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 24, col 21, \'Em\' is not defined.\nroutes/application.js: line 25, col 19, \'Em\' is not defined.\nroutes/application.js: line 54, col 24, \'Em\' is not defined.\nroutes/application.js: line 69, col 24, \'Em\' is not defined.\n\n4 errors');
  });
});
define('netconfig/tests/routes/bgp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bgp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/bgp.js should pass jshint.\nroutes/bgp.js: line 7, col 55, Missing semicolon.\n\n1 error');
  });
});
define('netconfig/tests/routes/dashboard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/dashboard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboard.js should pass jshint.\nroutes/dashboard.js: line 9, col 59, Missing semicolon.\nroutes/dashboard.js: line 15, col 24, \'transition\' is defined but never used.\n\n2 errors');
  });
});
define('netconfig/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 4, col 12, \'APP_META\' is not defined.\n\n1 error');
  });
});
define('netconfig/tests/routes/inlinefilterview.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/inlinefilterview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/inlinefilterview.js should pass jshint.');
  });
});
define('netconfig/tests/routes/interfaces.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/interfaces.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/interfaces.js should pass jshint.');
  });
});
define('netconfig/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass jshint.\nroutes/login.js: line 4, col 12, \'APP_META\' is not defined.\n\n1 error');
  });
});
define('netconfig/tests/routes/mtrprofileview.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/mtrprofileview.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mtrprofileview.js should pass jshint.');
  });
});
define('netconfig/tests/routes/settings/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/index.js should pass jshint.\nroutes/settings/index.js: line 7, col 42, \'model\' is defined but never used.\nroutes/settings/index.js: line 7, col 30, \'controller\' is defined but never used.\nroutes/settings/index.js: line 10, col 3, Missing semicolon.\n\n3 errors');
  });
});
define('netconfig/tests/routes/settings/inlinefilters/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/inlinefilters/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/inlinefilters/add.js should pass jshint.\nroutes/settings/inlinefilters/add.js: line 8, col 46, Missing semicolon.\nroutes/settings/inlinefilters/add.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/inlinefilters/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/inlinefilters/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/inlinefilters/edit.js should pass jshint.\nroutes/settings/inlinefilters/edit.js: line 8, col 46, Missing semicolon.\n\n1 error');
  });
});
define('netconfig/tests/routes/settings/inlinefilters/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/inlinefilters/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/inlinefilters/index.js should pass jshint.\nroutes/settings/inlinefilters/index.js: line 8, col 46, Missing semicolon.\nroutes/settings/inlinefilters/index.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/mtrprofiles/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/mtrprofiles/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/mtrprofiles/add.js should pass jshint.\nroutes/settings/mtrprofiles/add.js: line 8, col 46, Missing semicolon.\nroutes/settings/mtrprofiles/add.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/mtrprofiles/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/mtrprofiles/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/mtrprofiles/edit.js should pass jshint.\nroutes/settings/mtrprofiles/edit.js: line 8, col 46, Missing semicolon.\nroutes/settings/mtrprofiles/edit.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/mtrprofiles/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/mtrprofiles/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/mtrprofiles/index.js should pass jshint.\nroutes/settings/mtrprofiles/index.js: line 8, col 46, Missing semicolon.\nroutes/settings/mtrprofiles/index.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/routers/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/routers/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/routers/add.js should pass jshint.\nroutes/settings/routers/add.js: line 8, col 46, Missing semicolon.\nroutes/settings/routers/add.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/routers/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/routers/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/routers/edit.js should pass jshint.\nroutes/settings/routers/edit.js: line 8, col 46, Missing semicolon.\nroutes/settings/routers/edit.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/routers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/routers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/routers/index.js should pass jshint.\nroutes/settings/routers/index.js: line 9, col 46, Missing semicolon.\nroutes/settings/routers/index.js: line 11, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/zohoserviceview/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/zohoserviceview/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/zohoserviceview/add.js should pass jshint.\nroutes/settings/zohoserviceview/add.js: line 4, col 3, Missing semicolon.\n\n1 error');
  });
});
define('netconfig/tests/routes/settings/zohoserviceview/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/zohoserviceview/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/zohoserviceview/edit.js should pass jshint.\nroutes/settings/zohoserviceview/edit.js: line 8, col 46, Missing semicolon.\nroutes/settings/zohoserviceview/edit.js: line 10, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/settings/zohoserviceview/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/settings/zohoserviceview/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/settings/zohoserviceview/index.js should pass jshint.\nroutes/settings/zohoserviceview/index.js: line 9, col 46, Missing semicolon.\nroutes/settings/zohoserviceview/index.js: line 11, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('netconfig/tests/routes/zohoservices.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/zohoservices.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/zohoservices.js should pass jshint.\nroutes/zohoservices.js: line 10, col 13, \'self\' is defined but never used.\n\n1 error');
  });
});
define('netconfig/tests/services/app-meta.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/app-meta.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/app-meta.js should pass jshint.\nservices/app-meta.js: line 1, col 40, \'Ember\' is not defined.\nservices/app-meta.js: line 3, col 16, \'Em\' is not defined.\nservices/app-meta.js: line 1, col 12, \'computed\' is defined but never used.\nservices/app-meta.js: line 1, col 32, \'and\' is defined but never used.\n\n4 errors');
  });
});
define('netconfig/tests/services/current-plan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/current-plan.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-plan.js should pass jshint.');
  });
});
define('netconfig/tests/services/current-user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/current-user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass jshint.');
  });
});
define('netconfig/tests/services/modal-context.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/modal-context.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/modal-context.js should pass jshint.');
  });
});
define('netconfig/tests/services/notification.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/notification.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/notification.js should pass jshint.\nservices/notification.js: line 1, col 40, \'Ember\' is not defined.\nservices/notification.js: line 3, col 16, \'Em\' is not defined.\nservices/notification.js: line 1, col 8, \'on\' is defined but never used.\nservices/notification.js: line 1, col 12, \'computed\' is defined but never used.\nservices/notification.js: line 1, col 32, \'and\' is defined but never used.\n\n5 errors');
  });
});
define('netconfig/tests/services/permission.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/permission.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/permission.js should pass jshint.');
  });
});
define('netconfig/tests/services/poll.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/poll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/poll.js should pass jshint.\nservices/poll.js: line 17, col 40, Missing semicolon.\n\n1 error');
  });
});
define('netconfig/tests/services/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass jshint.');
  });
});
define('netconfig/tests/test-helper', ['exports', 'netconfig/tests/helpers/resolver', 'ember-qunit'], function (exports, _netconfigTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_netconfigTestsHelpersResolver['default']);
});
define('netconfig/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('netconfig/tests/unit/controllers/zohoservices-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

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
define('netconfig/tests/unit/controllers/zohoservices-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/zohoservices-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/zohoservices-test.js should pass jshint.');
  });
});
define('netconfig/tests/unit/helpers/eq-test', ['exports', 'netconfig/helpers/eq', 'qunit'], function (exports, _netconfigHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _netconfigHelpersEq.eq)([42]);
    assert.ok(result);
  });
});
define('netconfig/tests/unit/helpers/eq-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/eq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/eq-test.js should pass jshint.');
  });
});
define('netconfig/tests/unit/routes/settings/zohoserviceview-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:settings/zohoserviceview', 'Unit | Route | settings/zohoserviceview', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netconfig/tests/unit/routes/settings/zohoserviceview-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/settings/zohoserviceview-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/settings/zohoserviceview-test.js should pass jshint.');
  });
});
define('netconfig/tests/unit/routes/zohoservices-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:zohoservices', 'Unit | Route | zohoservices', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('netconfig/tests/unit/routes/zohoservices-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/zohoservices-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/zohoservices-test.js should pass jshint.');
  });
});
define('netconfig/tests/utils/ajax.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/ajax.js should pass jshint.\nutils/ajax.js: line 11, col 2, Missing semicolon.\nutils/ajax.js: line 17, col 19, Expected \'{\' and instead saw \'$\'.\nutils/ajax.js: line 67, col 40, Missing semicolon.\nutils/ajax.js: line 82, col 40, Missing semicolon.\nutils/ajax.js: line 85, col 34, Expected \'===\' and instead saw \'==\'.\nutils/ajax.js: line 87, col 35, Expected \'===\' and instead saw \'==\'.\nutils/ajax.js: line 94, col 41, Missing semicolon.\nutils/ajax.js: line 96, col 45, Missing semicolon.\nutils/ajax.js: line 53, col 25, \'textStatus\' is defined but never used.\nutils/ajax.js: line 66, col 11, \'APP_META\' is not defined.\nutils/ajax.js: line 78, col 11, \'APP_META\' is not defined.\n\n11 errors');
  });
});
define('netconfig/tests/utils/notify.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/notify.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/notify.js should pass jshint.');
  });
});
define('netconfig/tests/utils/validation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/validation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'utils/validation.js should pass jshint.\nutils/validation.js: line 27, col 25, Missing semicolon.\nutils/validation.js: line 32, col 7, Missing semicolon.\nutils/validation.js: line 34, col 2, Missing semicolon.\nutils/validation.js: line 159, col 52, Missing semicolon.\nutils/validation.js: line 167, col 51, \'lblval\' is already defined.\nutils/validation.js: line 167, col 90, Unnecessary semicolon.\nutils/validation.js: line 173, col 29, \'msg\' is already defined.\nutils/validation.js: line 180, col 26, \'lblval\' is already defined.\n\n8 errors');
  });
});
define('netconfig/tests/views/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | views/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'views/application.js should pass jshint.\nviews/application.js: line 50, col 29, Missing semicolon.\nviews/application.js: line 22, col 7, \'Em\' is not defined.\n\n2 errors');
  });
});
define('netconfig/tests/views/common/modal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | views/common/modal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'views/common/modal.js should pass jshint.\nviews/common/modal.js: line 37, col 10, \'Em\' is not defined.\n\n1 error');
  });
});
define('netconfig/tests/views/common/statusmsg.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | views/common/statusmsg.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'views/common/statusmsg.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('netconfig/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
