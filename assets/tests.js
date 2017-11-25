'use strict';

define('library-app/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nadapters/application.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('library-app/tests/components/abc-buttons.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/abc-buttons.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/abc-buttons.js should pass jshint.\ncomponents/abc-buttons.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/abc-buttons.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/components/author-select.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/author-select.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/author-select.js should pass jshint.\ncomponents/author-select.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/author-select.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/author-select.js: line 10, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/author-select.js: line 11, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/author-select.js: line 12, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/author-select.js: line 12, col 60, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n6 errors');
  });
});
define('library-app/tests/components/fader-label.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/fader-label.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/fader-label.js should pass jshint.\ncomponents/fader-label.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/fader-label.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/fader-label.js: line 12, col 22, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('library-app/tests/components/library-item-form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/library-item-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/library-item-form.js should pass jshint.\ncomponents/library-item-form.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-item-form.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-item-form.js: line 9, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('library-app/tests/components/library-item.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/library-item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/library-item.js should pass jshint.\ncomponents/library-item.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-item.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/components/library-select.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/library-select.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/library-select.js should pass jshint.\ncomponents/library-select.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-select.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/library-select.js: line 10, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/library-select.js: line 11, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/library-select.js: line 12, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/library-select.js: line 12, col 63, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n6 errors');
  });
});
define('library-app/tests/components/nav-link-to.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/nav-link-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/nav-link-to.js should pass jshint.\ncomponents/nav-link-to.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-link-to.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-link-to.js: line 8, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/nav-link-to.js: line 9, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/nav-link-to.js: line 13, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/nav-link-to.js: line 14, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('library-app/tests/components/number-box.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/number-box.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/number-box.js should pass jshint.\ncomponents/number-box.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/number-box.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/components/seeder-block.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/seeder-block.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/seeder-block.js should pass jshint.\ncomponents/seeder-block.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/seeder-block.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/seeder-block.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/seeder-block.js: line 10, col 16, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\ncomponents/seeder-block.js: line 17, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/seeder-block.js: line 25, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('library-app/tests/components/spinner-cube.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/spinner-cube.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/spinner-cube.js should pass jshint.\ncomponents/spinner-cube.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/spinner-cube.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/controllers/admin/seeder.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/admin/seeder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/seeder.js should pass jshint.\ncontrollers/admin/seeder.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/seeder.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/seeder.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/seeder.js: line 13, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 14, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 16, col 12, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 17, col 9, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 29, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 30, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 32, col 12, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 33, col 9, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 34, col 9, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 40, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 51, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 52, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 54, col 32, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/seeder.js: line 63, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 64, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 65, col 28, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/seeder.js: line 76, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 77, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 79, col 10, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 80, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 89, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 90, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 91, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 94, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 94, col 42, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/seeder.js: line 97, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 98, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 103, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/seeder.js: line 105, col 12, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n33 errors');
  });
});
define('library-app/tests/controllers/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/application.js: line 5, col 3, Missing semicolon.\n\n3 errors');
  });
});
define('library-app/tests/controllers/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/controllers/libraries/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/libraries/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/libraries/index.js should pass jshint.\ncontrollers/libraries/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/libraries/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/libraries/index.js: line 14, col 5, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/libraries/index.js: line 15, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/libraries/index.js: line 20, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/libraries/index.js: line 22, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/libraries/index.js: line 24, col 37, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('library-app/tests/controllers/navbar.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/navbar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/navbar.js should pass jshint.\ncontrollers/navbar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/navbar.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/navbar.js: line 19, col 3, Missing semicolon.\n\n3 errors');
  });
});
define('library-app/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;

  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests-2c814.firebaseio.com' : arguments[1];
    var apiKey = arguments.length <= 2 || arguments[2] === undefined ? 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o' : arguments[2];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = undefined;

    try {
      app = _firebase['default'].app();
    } catch (e) {
      app = _firebase['default'].initializeApp(config);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('library-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('library-app/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('library-app/tests/helpers/destroy-firebase-apps', ['exports', 'ember', 'firebase'], function (exports, _ember, _firebase) {
  exports['default'] = destroyFirebaseApps;
  var run = _ember['default'].run;

  /**
   * Destroy all Firebase apps.
   */

  function destroyFirebaseApps() {
    var deletions = _firebase['default'].apps.map(function (app) {
      return app['delete']();
    });
    _ember['default'].RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('library-app/tests/helpers/is-equal.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/is-equal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/is-equal.js should pass jshint.\nhelpers/is-equal.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/is-equal.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nhelpers/is-equal.js: line 7, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('library-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'library-app/tests/helpers/start-app', 'library-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _libraryAppTestsHelpersStartApp, _libraryAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _libraryAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _libraryAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('library-app/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('library-app/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('library-app/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  exports['default'] = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */

  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('library-app/tests/helpers/resolver', ['exports', 'library-app/resolver', 'library-app/config/environment'], function (exports, _libraryAppResolver, _libraryAppConfigEnvironment) {

  var resolver = _libraryAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _libraryAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _libraryAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('library-app/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('library-app/tests/helpers/start-app', ['exports', 'ember', 'library-app/app', 'library-app/config/environment'], function (exports, _ember, _libraryAppApp, _libraryAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _libraryAppConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _libraryAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('library-app/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('library-app/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase['default']._unStub) {
      var originalSet = _firebase['default'].database.Reference.prototype.set;
      var originalUpdate = _firebase['default'].database.Reference.prototype.update;
      var originalRemove = _firebase['default'].database.Reference.prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].database.Reference.prototype.set = originalSet;
        _firebase['default'].database.Reference.prototype.update = originalUpdate;
        _firebase['default'].database.Reference.prototype.remove = originalRemove;
      };

      _firebase['default'].database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('library-app/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('library-app/tests/models/author.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/author.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/author.js should pass jshint.\nmodels/author.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/author.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/author.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/author.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodels/author.js: line 12, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('library-app/tests/models/book.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/book.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/book.js should pass jshint.\nmodels/book.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/book.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/book.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodels/book.js: line 12, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/book.js: line 21, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/book.js: line 22, col 12, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\nmodels/book.js: line 25, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/book.js: line 29, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n8 errors');
  });
});
define('library-app/tests/models/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/contact.js should pass jshint.\nmodels/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/contact.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/contact.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('library-app/tests/models/invitation.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/invitation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/invitation.js should pass jshint.\nmodels/invitation.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/invitation.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/models/library.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/library.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/library.js should pass jshint.\nmodels/library.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/library.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/library.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/library.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nmodels/library.js: line 15, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/library.js: line 24, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nmodels/library.js: line 25, col 12, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('library-app/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 12, col 43, Missing semicolon.\nrouter.js: line 16, col 43, Missing semicolon.\nrouter.js: line 20, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n6 errors');
  });
});
define('library-app/tests/routes/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/about.js should pass jshint.\nroutes/about.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/about.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/routes/admin/contacts.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/contacts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/contacts.js should pass jshint.\nroutes/admin/contacts.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/contacts.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/contacts.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('library-app/tests/routes/admin/invitations.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/invitations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/invitations.js should pass jshint.\nroutes/admin/invitations.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/invitations.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/invitations.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('library-app/tests/routes/admin/seeder.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/seeder.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/seeder.js should pass jshint.\nroutes/admin/seeder.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/seeder.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/seeder.js: line 38, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('library-app/tests/routes/authors.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/authors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/authors.js should pass jshint.\nroutes/authors.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/authors.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/authors.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/authors.js: line 11, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/authors.js: line 15, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/authors.js: line 20, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});
define('library-app/tests/routes/blog/view.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/blog/view.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/blog/view.js should pass jshint.\nroutes/blog/view.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/blog/view.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/blog/view.js: line 6, col 27, Missing semicolon.\n\n3 errors');
  });
});
define('library-app/tests/routes/books.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/books.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/books.js should pass jshint.\nroutes/books.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 13, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 14, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 15, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 16, col 5, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 30, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 35, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 44, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 48, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 53, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 55, col 46, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 56, col 62, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 64, col 25, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 68, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 72, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 77, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/books.js: line 81, col 48, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 82, col 64, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/books.js: line 89, col 25, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\n\n22 errors');
  });
});
define('library-app/tests/routes/contact.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact.js should pass jshint.\nroutes/contact.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/contact.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/contact.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/contact.js: line 11, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/contact.js: line 12, col 38, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/contact.js: line 15, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/contact.js: line 16, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n7 errors');
  });
});
define('library-app/tests/routes/libraries.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries.js should pass jshint.\nroutes/libraries.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('library-app/tests/routes/libraries/edit.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/edit.js should pass jshint.\nroutes/libraries/edit.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 9, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 23, col 31, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/edit.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 27, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/edit.js: line 30, col 9, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n10 errors');
  });
});
define('library-app/tests/routes/libraries/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/index.js should pass jshint.\nroutes/libraries/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/index.js: line 10, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/index.js: line 25, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/index.js: line 26, col 7, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});
define('library-app/tests/routes/libraries/new.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/libraries/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/new.js should pass jshint.\nroutes/libraries/new.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/new.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/new.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 9, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 16, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 22, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/libraries/new.js: line 23, col 31, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nroutes/libraries/new.js: line 26, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n8 errors');
  });
});
define('library-app/tests/routes/tools.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/tools.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/tools.js should pass jshint.\nroutes/tools.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/tools.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/tools.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
define('library-app/tests/routes/tools/view.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/tools/view.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/tools/view.js should pass jshint.\nroutes/tools/view.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/tools/view.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/tools/view.js: line 6, col 32, Missing semicolon.\n\n3 errors');
  });
});
define('library-app/tests/servieces/ajax.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | servieces/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'servieces/ajax.js should pass jshint.\nservieces/ajax.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservieces/ajax.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservieces/ajax.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('library-app/tests/test-helper', ['exports', 'library-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _libraryAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_libraryAppTestsHelpersResolver['default']);
});
define('library-app/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('library-app/tests/unit/controllers/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:index', 'Unit | Controller | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('library-app/tests/unit/controllers/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/helpers/is-equal-test', ['exports', 'library-app/helpers/is-equal', 'qunit'], function (exports, _libraryAppHelpersIsEqual, _qunit) {

  (0, _qunit.module)('Unit | Helper | is equal');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _libraryAppHelpersIsEqual.isEqual)([42]);
    assert.ok(result);
  });
});
define('library-app/tests/unit/helpers/is-equal-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/is-equal-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-equal-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/models/invitation-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('invitation', 'Unit | Model | invitation', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('library-app/tests/unit/models/invitation-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/invitation-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/invitation-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('library-app/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/routes/admin/invitations-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin/invitations', 'Unit | Route | admin/invitations', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('library-app/tests/unit/routes/admin/invitations-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin/invitations-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/invitations-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/routes/authors-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:authors', 'Unit | Route | authors', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('library-app/tests/unit/routes/authors-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/authors-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/authors-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/routes/books-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:books', 'Unit | Route | books', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('library-app/tests/unit/routes/books-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/books-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('library-app/tests/unit/routes/contact-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass jshint.');
  });
});
define('library-app/tests/unit/routes/libraries-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries', 'Unit | Route | libraries', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('library-app/tests/unit/routes/libraries-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/libraries-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries-test.js should pass jshint.');
  });
});
require('library-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
