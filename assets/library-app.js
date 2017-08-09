"use strict";



define('library-app/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('library-app/app', ['exports', 'ember', 'library-app/resolver', 'ember-load-initializers', 'library-app/config/environment'], function (exports, _ember, _libraryAppResolver, _emberLoadInitializers, _libraryAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _libraryAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _libraryAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _libraryAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _libraryAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('library-app/components/abc-buttons', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    atoz: _ember['default'].computed(function () {
      // Source: http://stackoverflow.com/questions/12376870/create-an-array-of-characters-from-specified-range
      return Array.apply(null, { length: 26 }).map(function (x, i) {
        return String.fromCharCode(97 + i).toUpperCase();
      });
    })

  });
});
define('library-app/components/author-select', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'select',
    classNames: ['form-control'],
    authors: [],
    book: null,

    change: function change(event) {
      var selectedAuthorId = event.target.value;
      var selectedAuthor = this.get('authors').find(function (record) {
        return record.id === selectedAuthorId;
      });

      this.sendAction('action', selectedAuthor, this.get('book'));
    }
  });
});
define('library-app/components/fader-label', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',

    classNames: ['label label-success label-fade'],
    classNameBindings: ['isShowing:label-show'],

    isShowing: false,

    isShowingChanged: _ember['default'].observer('isShowing', function () {
      var _this = this;

      _ember['default'].run.later(function () {
        return _this.set('isShowing', false);
      }, 3000);
    })
  });
});
define('library-app/components/library-item-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    buttonLabel: 'Save',

    actions: {

      buttonClicked: function buttonClicked(param) {
        this.sendAction('action', param);
      }

    }
  });
});
define('library-app/components/library-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('library-app/components/library-select', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'select',
    classNames: ['form-control'],
    libraries: [],
    book: null,

    change: function change(event) {
      var selectedLibraryId = event.target.value;
      var selectedLibrary = this.get('libraries').find(function (record) {
        return record.id === selectedLibraryId;
      });

      this.sendAction('action', selectedLibrary, this.get('book'));
    }
  });
});
define('library-app/components/nav-link-to', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].LinkComponent.extend({

        tagName: 'li',

        hrefForA: _ember['default'].computed('models', 'qualifiedRouteName', function computeLinkToComponentHref() {
            var qualifiedRouteName = this.get('qualifiedRouteName');
            var models = this.get('models');
            if (this.get('loading')) {
                return this.get('loadingHref');
            }
            var routing = this.get('_routing');
            var queryParams = this.get('queryParams.values');
            return routing.generateURL(qualifiedRouteName, models, queryParams);
        })
    });
});
define('library-app/components/number-box', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['panel', 'panel-warning']

  });
});
define('library-app/components/seeder-block', ['exports', 'ember'], function (exports, _ember) {

  var MAX_VALUE = 100;

  exports['default'] = _ember['default'].Component.extend({

    counter: null,

    isCounterValid: _ember['default'].computed.lte('counter', MAX_VALUE),
    placeholder: 'Max ' + MAX_VALUE,

    createReady: false,
    deleteReady: false,

    actions: {

      generateAction: function generateAction() {
        if (this.get('isCounterValid')) {

          // Action up to Seeder Controller with the requested amount
          this.sendAction('generateAction', this.get('counter'));
        }
      },

      deleteAction: function deleteAction() {
        this.sendAction('deleteAction');
      }

    }
  });
});
define('library-app/components/spinner-cube', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('library-app/controllers/admin/seeder', ['exports', 'ember', 'faker'], function (exports, _ember, _faker) {
  exports['default'] = _ember['default'].Controller.extend({

    // If you haven't mapped this properties in setupController, you can alias them here
    libraries: _ember['default'].computed.alias('model.libraries'),
    books: _ember['default'].computed.alias('model.books'),
    authors: _ember['default'].computed.alias('model.authors'),

    actions: {

      generateLibraries: function generateLibraries(volume) {
        var counter = parseInt(volume);

        for (var i = 0; i < counter; i++) {
          var isTheLast = i === counter - 1;
          this._saveRandomLibrary(isTheLast);
        }
      },

      deleteLibraries: function deleteLibraries() {
        this._destroyAll(this.get('libraries'));

        // Data down via seeder-block to fader-label that we ready to show the label
        this.set('libDelDone', true);
      },

      generateBooksAndAuthors: function generateBooksAndAuthors(volume) {
        var counter = parseInt(volume);

        for (var i = 0; i < counter; i++) {
          var isTheLast = i === counter - 1;
          var newAuthor = this._saveRandomAuthor(isTheLast);

          this._generateSomeBooks(newAuthor);
        }
      },

      deleteBooksAndAuthors: function deleteBooksAndAuthors() {
        this._destroyAll(this.get('books'));
        this._destroyAll(this.get('authors'));

        // Data down via seeder-block to fader-label that we ready to show the label
        this.set('authDelDone', true);
      }
    },

    // Private methods

    _saveRandomLibrary: function _saveRandomLibrary(isLast) {
      var _this = this;

      var randomLibrary = this.store.createRecord('library').randomize();

      randomLibrary.save().then(function () {
        if (isLast) {

          // Data down via seeder-block to fader-label that we ready to show the label
          _this.set('libDone', true);
        }
      });
    },

    _saveRandomAuthor: function _saveRandomAuthor(isLast) {
      var _this2 = this;

      var newAuthor = this.store.createRecord('author').randomize();
      newAuthor.save().then(function () {
        if (isLast) {

          // Data down via seeder-block to fader-label that we ready to show the label
          _this2.set('authDone', true);
        }
      });
      return newAuthor;
    },

    _generateSomeBooks: function _generateSomeBooks(author) {
      var bookCounter = _faker['default'].random.number(10);

      for (var j = 0; j < bookCounter; j++) {
        var library = this._selectRandomLibrary();
        this.store.createRecord('book').randomize(author, library).save();
        author.save();
        library.save();
      }
    },

    _selectRandomLibrary: function _selectRandomLibrary() {
      var libraries = this.get('libraries');
      var librariesCounter = libraries.get('length');

      // Create a new array from ids
      var libraryIds = libraries.map(function (lib) {
        return lib.get('id');
      });

      // Randomly pick one id from the libraryIds array and return the library
      var randomNumber = _faker['default'].random.number(librariesCounter - 1);
      var randomLibrary = libraries.findBy('id', libraryIds[randomNumber]);

      return randomLibrary;
    },

    _destroyAll: function _destroyAll(records) {
      records.forEach(function (item) {
        return item.destroyRecord();
      });
    }

  });
});
define('library-app/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('library-app/controllers/libraries/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    queryParams: ['filter', 'limit', 'letter'],
    filter: '',
    letter: '',
    limit: 'all',

    limitAll: _ember['default'].computed.equal('limit', 'all'),

    filteredList: _ember['default'].computed('model.@each.name', 'filter', function () {

      var results = this.get('model');
      var query = this.get('filter');

      if (!!query) {
        (function () {
          // One of the best regular expression website: http://www.regexr.com/
          // Split the query at spaces and join them to get like this: /(word1)+.*(word2)+.*(word3)+.*/ig
          var regexString = '(' + query.split(' ').join(')+.*(') + ')+.*';
          // i: case insensitive, g: global
          var regex = new RegExp(regexString, 'ig');

          results = results.filter(function (item) {
            return item.get('name').match(regex);
          });
        })();
      }

      return results.sortBy('name');
    })

  });
});
define('library-app/helpers/app-version', ['exports', 'ember', 'library-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _libraryAppConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _libraryAppConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('library-app/helpers/is-equal', ['exports', 'ember'], function (exports, _ember) {
  exports.isEqual = isEqual;

  function isEqual(params /*, hash*/) {
    return params[0] === params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(isEqual);
});
define('library-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('library-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('library-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'library-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _libraryAppConfigEnvironment) {
  var _config$APP = _libraryAppConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('library-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('library-app/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('library-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('library-app/initializers/ember-faker', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    // application.inject('route', 'foo', 'service:foo');
  }

  ;

  exports['default'] = {
    name: 'ember-faker',
    initialize: initialize
  };
});
define('library-app/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('library-app/initializers/export-application-global', ['exports', 'ember', 'library-app/config/environment'], function (exports, _ember, _libraryAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_libraryAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _libraryAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_libraryAppConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('library-app/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('library-app/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('library-app/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("library-app/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('library-app/models/author', ['exports', 'ember-data', 'ember', 'faker'], function (exports, _emberData, _ember, _faker) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    books: _emberData['default'].hasMany('book', { inverse: 'author', async: true }),

    isNotValid: _ember['default'].computed.empty('name'),

    randomize: function randomize() {
      this.set('name', _faker['default'].name.findName());
      return this;
    }
  });
});
define('library-app/models/book', ['exports', 'ember-data', 'faker'], function (exports, _emberData, _faker) {
  exports['default'] = _emberData['default'].Model.extend({

    title: _emberData['default'].attr('string'),
    releaseYear: _emberData['default'].attr('date'),

    author: _emberData['default'].belongsTo('author', { inverse: 'books', async: true }),
    library: _emberData['default'].belongsTo('library', { inverse: 'books', async: true }),

    randomize: function randomize(author, library) {
      this.set('title', this._bookTitle());
      this.set('author', author);
      this.set('releaseYear', this._randomYear());
      this.set('library', library);

      return this;
    },

    _bookTitle: function _bookTitle() {
      return _faker['default'].commerce.productName() + ' Cookbook';
    },

    _randomYear: function _randomYear() {
      return new Date(this._getRandomArbitrary(1900, 2015).toPrecision(4));
    },

    _getRandomArbitrary: function _getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  });
});
define('library-app/models/contact', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({

    email: _emberData['default'].attr('string'),
    message: _emberData['default'].attr('string'),

    isValidEmail: _ember['default'].computed.match('email', /^.+@.+\..+$/),
    isMessageEnoughLong: _ember['default'].computed.gte('message.length', 5),

    isValid: _ember['default'].computed.and('isValidEmail', 'isMessageEnoughLong'),
    isNotValid: _ember['default'].computed.not('isValid')
  });
});
define('library-app/models/invitation', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({

    email: _emberData['default'].attr('string')

  });
});
define('library-app/models/library', ['exports', 'ember-data', 'ember', 'faker'], function (exports, _emberData, _ember, _faker) {
  exports['default'] = _emberData['default'].Model.extend({

    name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    phone: _emberData['default'].attr('string'),

    books: _emberData['default'].hasMany('book', { inverse: 'library', async: true }),

    isValid: _ember['default'].computed.notEmpty('name'),

    randomize: function randomize() {
      this.set('name', _faker['default'].company.companyName() + ' Library');
      this.set('address', this._fullAddress());
      this.set('phone', _faker['default'].phone.phoneNumber());

      // If you would like to use in chain.
      return this;
    },

    _fullAddress: function _fullAddress() {
      return _faker['default'].address.streetAddress() + ', ' + _faker['default'].address.city();
    }
  });
});
define('library-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('library-app/router', ['exports', 'ember', 'library-app/config/environment'], function (exports, _ember, _libraryAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _libraryAppConfigEnvironment['default'].locationType,
    rootURL: _libraryAppConfigEnvironment['default'].rootURL
  });

  Router.map(function () {

    this.route("tools", function () {
      this.route("view", { path: "view/:id" });
    });

    this.route("blog", function () {
      this.route("view", { path: "view/:id" });
    });
  });

  exports['default'] = Router;
});
define('library-app/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('library-app/routes/admin/contacts', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('contact');
    }
  });
});
define('library-app/routes/admin/invitations', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('invitation');
    }

  });
});
define('library-app/routes/admin/seeder', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    // You can use these lines to experiment with route hooks.
    // Uncomment these and comment out the real implementation below.
    // Open inspection console in your browser and check how Ember call
    // each hook automatically.
    //
    //init() {
    //  debugger;
    //},
    //
    //beforeModel() {
    //  debugger;
    //},
    //
    //model() {
    //  debugger;
    //},
    //
    //afterModel() {
    //  debugger;
    //},
    //
    //setupController() {
    //  debugger;
    //},
    //
    //renderTemplate() {
    //  debugger;
    //},
    //
    //activate() {
    //  debugger;
    //}

    model: function model() {
      return _ember['default'].RSVP.hash({
        libraries: this.store.findAll('library'),
        books: this.store.findAll('book'),
        authors: this.store.findAll('author')
      });
    }

  });
});
// Finally, I just created aliases in the Seeder Controller, so we can comment this out now.
// setupController(controller, model) {
//   controller.set('libraries', model.libraries);
//   controller.set('books', model.books);
//   controller.set('authors', model.authors);
// }
define('library-app/routes/authors', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.findAll('author');
    },

    actions: {

      editAuthor: function editAuthor(author) {
        author.set('isEditing', true);
      },

      cancelAuthorEdit: function cancelAuthorEdit(author) {
        author.set('isEditing', false);
        author.rollbackAttributes();
      },

      saveAuthor: function saveAuthor(author) {
        if (author.get('isNotValid')) {
          return;
        }

        author.set('isEditing', false);
        author.save();
      }
    }
  });
});
define('library-app/routes/blog/view', ['exports', 'library-app/config/environment'], function (exports, _libraryAppConfigEnvironment) {
    exports['default'] = Ember.Route.extend({
        ajax: Ember.inject.service(),
        model: function model(param) {
            console.log(param);
            return this.get('ajax').raw(_libraryAppConfigEnvironment['default'].apiURL + param.id + '.html', {
                dataType: 'html'
            });
        }
    });
});
define('library-app/routes/books', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return _ember['default'].RSVP.hash({
        books: this.store.findAll('book'),
        authors: this.store.findAll('author'),
        libraries: this.store.findAll('library')
      });
    },

    setupController: function setupController(controller, model) {
      var books = model.books;
      var authors = model.authors;
      var libraries = model.libraries;

      this._super(controller, books);

      controller.set('authors', authors);
      controller.set('libraries', libraries);
    },

    actions: {

      editBook: function editBook(book) {
        book.set('isEditing', true);
      },

      cancelBookEdit: function cancelBookEdit(book) {
        book.set('isEditing', false);
        book.rollbackAttributes();
      },

      saveBook: function saveBook(book) {
        if (book.get('isNotValid')) {
          return;
        }

        book.set('isEditing', false);
        book.save();
      },

      editAuthor: function editAuthor(book) {
        book.set('isAuthorEditing', true);
      },

      cancelAuthorEdit: function cancelAuthorEdit(book) {
        book.set('isAuthorEditing', false);
        book.rollbackAttributes();
      },

      saveAuthor: function saveAuthor(author, book) {
        // Firebase adapter is buggy, we have to manually remove the previous relation
        book.get('author').then(function (previousAuthor) {
          previousAuthor.get('books').then(function (previousAuthorBooks) {
            previousAuthorBooks.removeObject(book);
            previousAuthor.save();
          });
        });

        // Setup the new relation
        book.set('author', author);
        book.save().then(function () {
          return author.save();
        });
        book.set('isAuthorEditing', false);
      },

      editLibrary: function editLibrary(book) {
        book.set('isLibraryEditing', true);
      },

      cancelLibraryEdit: function cancelLibraryEdit(book) {
        book.set('isLibraryEditing', false);
        book.rollbackAttributes();
      },

      saveLibrary: function saveLibrary(library, book) {
        // Firebase adapter is buggy, we have to manually remove the previous relation.
        // You don't need this callback mess when your adapter properly manages relations.
        // If Firebase fix this bug, we can remove this part.
        book.get('library').then(function (previousLibrary) {
          previousLibrary.get('books').then(function (previousLibraryBooks) {
            previousLibraryBooks.removeObject(book);
            previousLibrary.save();
          });
        });

        book.set('library', library);
        book.save().then(function () {
          return library.save();
        });
        book.set('isLibraryEditing', false);
      }
    }
  });
});
define('library-app/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('contact');
    },

    actions: {

      sendMessage: function sendMessage(newContactMessage) {
        var _this = this;

        newContactMessage.save().then(function () {
          return _this.controller.set('responseMessage', true);
        });
      },

      willTransition: function willTransition() {
        var model = this.controller.get('model');

        if (model.get('isNew')) {
          model.destroyRecord();
        }

        this.controller.set('responseMessage', false);
      }
    }
  });
});
define('library-app/routes/libraries', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('library-app/routes/libraries/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {
      return this.store.findRecord('library', params.library_id);
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      controller.set('title', 'Edit library');
      controller.set('buttonLabel', 'Save changes');
    },

    renderTemplate: function renderTemplate() {
      this.render('libraries/form');
    },

    actions: {

      saveLibrary: function saveLibrary(newLibrary) {
        var _this = this;

        newLibrary.save().then(function () {
          return _this.transitionTo('libraries');
        });
      },

      willTransition: function willTransition(transition) {
        var model = this.controller.get('model');

        if (model.get('hasDirtyAttributes')) {
          var confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

          if (confirmation) {
            model.rollbackAttributes();
          } else {
            transition.abort();
          }
        }
      }
    }
  });
});
define('library-app/routes/libraries/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    queryParams: {
      limit: { refreshModel: true },
      letter: { refreshModel: true }
    },

    model: function model(params) {

      if (params.limit === 'all') {
        return this.store.findAll('library');
      }

      return this.store.query('library', {
        orderBy: 'name',
        startAt: params.letter,
        endAt: params.letter + ''
      });
    },

    actions: {

      deleteLibrary: function deleteLibrary(library) {
        var confirmation = confirm('Are you sure?');

        if (confirmation) {
          library.destroyRecord();
        }
      }
    }

  });
});
define('library-app/routes/libraries/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.createRecord('library');
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);

      controller.set('title', 'Create a new library');
      controller.set('buttonLabel', 'Create');
    },

    renderTemplate: function renderTemplate() {
      this.render('libraries/form');
    },

    actions: {

      saveLibrary: function saveLibrary(newLibrary) {
        var _this = this;

        newLibrary.save().then(function () {
          return _this.transitionTo('libraries');
        });
      },

      willTransition: function willTransition() {
        // rollbackAttributes() removes the record from the store
        // if the model 'isNew'
        this.controller.get('model').rollbackAttributes();
      }
    }
  });
});
define('library-app/routes/tools', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {}
  });
});
define('library-app/routes/tools/view', ['exports', 'library-app/config/environment'], function (exports, _libraryAppConfigEnvironment) {
    exports['default'] = Ember.Route.extend({
        ajax: Ember.inject.service(),
        model: function model(param) {
            console.log(_libraryAppConfigEnvironment['default'].apiURL);
            return this.get('ajax').raw(_libraryAppConfigEnvironment['default'].apiURL + param.id + '.html', {
                dataType: 'html'
            });
        }
    });
});
define('library-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('library-app/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('library-app/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define('library-app/servieces/ajax', ['exports', 'ember', 'ember-ajax/services/ajax'], function (exports, _ember, _emberAjaxServicesAjax) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: 'http://datasweeper.org'
  });
});
define("library-app/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uKxvKbzg", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"About Page\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/about.hbs" } });
});
define("library-app/templates/admin/contacts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8UVChUOq", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Contacts\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-bordered table-striped\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"ID\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"E-mail\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Message\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"id\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"message\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"contact\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/admin/contacts.hbs" } });
});
define("library-app/templates/admin/invitations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6Y5uPCUX", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Invitations\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-bordered table-striped\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"ID\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"E-mail\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"invitation\",\"id\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"invitation\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"invitation\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/admin/invitations.hbs" } });
});
define("library-app/templates/admin/seeder", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QgN3ssCB", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Seeder, our Data Center\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"append\",[\"helper\",[\"number-box\"],null,[[\"title\",\"number\"],[\"Libraries\",[\"get\",[\"libraries\",\"length\"]]]]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"append\",[\"helper\",[\"number-box\"],null,[[\"title\",\"number\"],[\"Authors\",[\"get\",[\"authors\",\"length\"]]]]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"append\",[\"helper\",[\"number-box\"],null,[[\"title\",\"number\"],[\"Books\",[\"get\",[\"books\",\"length\"]]]]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"seeder-block\"],null,[[\"sectionTitle\",\"generateAction\",\"deleteAction\",\"createReady\",\"deleteReady\"],[\"Libraries\",\"generateLibraries\",\"deleteLibraries\",[\"get\",[\"libDone\"]],[\"get\",[\"libDelDone\"]]]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"seeder-block\"],null,[[\"sectionTitle\",\"generateAction\",\"deleteAction\",\"createReady\",\"deleteReady\"],[\"Authors with Books\",\"generateBooksAndAuthors\",\"deleteBooksAndAuthors\",[\"get\",[\"authDone\"]],[\"get\",[\"authDelDone\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/admin/seeder.hbs" } });
});
define("library-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IhN3Na7F", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"application\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"partial\",\"navbar\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "library-app/templates/application.hbs" } });
});
define("library-app/templates/authors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "A+5IRfwx", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Authors\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-bordered table-striped\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"\\n      Name\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"small not-bold\"],[\"flush-element\"],[\"text\",\"(Click on name for editing)\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"vtop\"],[\"flush-element\"],[\"text\",\"Books\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"book\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"book\"]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"span\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editAuthor\",[\"get\",[\"author\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"author\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-inline\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveAuthor\",[\"get\",[\"author\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\"],[[\"get\",[\"author\",\"name\"]],\"form-control\"]]],false],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group-btn\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-success\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"author\",\"isNotValid\"]],null],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancelAuthorEdit\",[\"get\",[\"author\"]]]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"author\",\"isEditing\"]]],null,2,1],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"author\",\"books\"]]],null,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"author\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/authors.hbs" } });
});
define("library-app/templates/blog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xpxEV4Wg", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"container2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/blog.hbs" } });
});
define("library-app/templates/blog/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Oc/S9ckN", "block": "{\"statements\":[[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"blog.view\",\"blog/hello-world\"],null,1],[\"close-element\"],[\"text\",\"\\n     \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"blog.view\",\"blog/bgp\"],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Border Gateway Protocol.\"]],\"locals\":[]},{\"statements\":[[\"text\",\"hello world.\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/blog/index.hbs" } });
});
define("library-app/templates/blog/view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UgUGS44Y", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"model\",\"response\"]],true],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/blog/view.hbs" } });
});
define("library-app/templates/books", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hwXZnAte", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Books\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-bordered table-striped\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"vtop wider\"],[\"flush-element\"],[\"text\",\"\\n      Author\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"small not-bold\"],[\"flush-element\"],[\"text\",\"(Click on the name for editing)\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"\\n      Title\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"small not-bold\"],[\"flush-element\"],[\"text\",\"(Click on the title for editing)\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"vtop\"],[\"flush-element\"],[\"text\",\"Release Year\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"vtop\"],[\"flush-element\"],[\"text\",\"\\n      Library\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"small\",[]],[\"static-attr\",\"class\",\"small not-bold\"],[\"flush-element\"],[\"text\",\"(Click on the name for editing)\"],[\"close-element\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,6],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"span\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editLibrary\",[\"get\",[\"book\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"book\",\"library\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"library-select\"],null,[[\"book\",\"libraries\",\"default\",\"action\"],[[\"get\",[\"book\"]],[\"get\",[\"libraries\"]],[\"get\",[\"book\",\"library\"]],\"saveLibrary\"]]],false],[\"text\",\"\\n\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancelLibraryEdit\",[\"get\",[\"book\"]]]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"span\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editBook\",[\"get\",[\"book\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"book\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-inline\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveBook\",[\"get\",[\"book\"]]],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\"],[[\"get\",[\"book\",\"title\"]],\"form-control\"]]],false],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"input-group-btn\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-success\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"book\",\"isNotValid\"]],null],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancelBookEdit\",[\"get\",[\"book\"]]]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"span\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"editAuthor\",[\"get\",[\"book\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"book\",\"author\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"author-select\"],null,[[\"book\",\"authors\",\"default\",\"action\"],[[\"get\",[\"book\"]],[\"get\",[\"authors\"]],[\"get\",[\"book\",\"author\"]],\"saveAuthor\"]]],false],[\"text\",\"\\n\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancelAuthorEdit\",[\"get\",[\"book\"]]]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"book\",\"isAuthorEditing\"]]],null,5,4],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"book\",\"isEditing\"]]],null,3,2],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"book\",\"releaseYear\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"book\",\"isLibraryEditing\"]]],null,1,0],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"book\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/books.hbs" } });
});
define("library-app/templates/components/abc-buttons", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "K51brPlJ", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"btn-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"atoz\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"get\",[\"letter\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"limit\",\"letter\"],[\"abc\",[\"get\",[\"letter\"]]]]]],[[\"class\"],[\"btn btn-lg btn-narrow btn-default\"]],0],[\"text\",\"\\n\"]],\"locals\":[\"letter\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/abc-buttons.hbs" } });
});
define("library-app/templates/components/author-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5jl59jUQ", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"authors\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"author\",\"id\"]],null],[\"dynamic-attr\",\"selected\",[\"helper\",[\"is-equal\"],[[\"get\",[\"author\",\"id\"]],[\"get\",[\"default\",\"id\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"author\",\"name\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"author\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/author-select.hbs" } });
});
define("library-app/templates/components/fader-label", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "t3B3d12j", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/fader-label.hbs" } });
});
define("library-app/templates/components/library-item-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tzNHnr7y", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-group has-feedback \",[\"helper\",[\"if\"],[[\"get\",[\"item\",\"isValid\"]],\"has-success\"],null]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-2 control-label\"],[\"flush-element\"],[\"text\",\"Name*\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"item\",\"name\"]],\"form-control\",\"The name of the Library\"]]],false],[\"text\",\"\\n          \"],[\"block\",[\"if\"],[[\"get\",[\"item\",\"isValid\"]]],null,0],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-2 control-label\"],[\"flush-element\"],[\"text\",\"Address\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"item\",\"address\"]],\"form-control\",\"The address of the Library\"]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"col-sm-2 control-label\"],[\"flush-element\"],[\"text\",\"Phone\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"item\",\"phone\"]],\"form-control\",\"The phone number of the Library\"]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-offset-2 col-sm-10\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-default\"],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"unless\"],[[\"get\",[\"item\",\"isValid\"]],true],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"buttonClicked\",[\"get\",[\"item\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"buttonLabel\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-ok form-control-feedback\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/library-item-form.hbs" } });
});
define("library-app/templates/components/library-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7jp2YZ7S", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default library-item\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Address: \"],[\"append\",[\"unknown\",[\"item\",\"address\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Phone: \"],[\"append\",[\"unknown\",[\"item\",\"phone\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-footer\"],[\"flush-element\"],[\"text\",\"\\n      Number of books:\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"text-left badge\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"unknown\",[\"badge\"]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pull-right\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"yield\",\"default\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/library-item.hbs" } });
});
define("library-app/templates/components/library-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "acv5F48h", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"libraries\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"option\",[]],[\"dynamic-attr\",\"value\",[\"unknown\",[\"library\",\"id\"]],null],[\"dynamic-attr\",\"selected\",[\"helper\",[\"is-equal\"],[[\"get\",[\"library\",\"id\"]],[\"get\",[\"default\",\"id\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"library\",\"name\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"library\"]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/library-select.hbs" } });
});
define("library-app/templates/components/nav-link-to", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FJxBIjY0", "block": "{\"statements\":[[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"hrefForA\"]]]]],[\"flush-element\"],[\"yield\",\"default\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/nav-link-to.hbs" } });
});
define("library-app/templates/components/number-box", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZzVou2Ql", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"append\",[\"helper\",[\"if\"],[[\"get\",[\"number\"]],[\"get\",[\"number\"]],\"...\"],null],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/number-box.hbs" } });
});
define("library-app/templates/components/seeder-block", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8ddDbUw8", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well well-sm extra-padding-bottom\"],[\"flush-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"sectionTitle\"]],false],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-inline\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-group has-feedback \",[\"helper\",[\"unless\"],[[\"get\",[\"isCounterValid\"]],\"has-error\"],null]]]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"control-label\"],[\"flush-element\"],[\"text\",\"Number of new records:\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[\"get\",[\"counter\"]],\"form-control\",[\"get\",[\"placeholder\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"dynamic-attr\",\"disabled\",[\"helper\",[\"if\"],[[\"get\",[\"isCounterValid\"]],false,true],null],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"generateAction\"]],[\"flush-element\"],[\"text\",\"Generate \"],[\"append\",[\"unknown\",[\"sectionTitle\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"block\",[\"fader-label\"],null,[[\"isShowing\"],[[\"get\",[\"createReady\"]]]],1],[\"text\",\"\\n\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteAction\"]],[\"flush-element\"],[\"text\",\"Delete All \"],[\"append\",[\"unknown\",[\"sectionTitle\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"block\",[\"fader-label\"],null,[[\"isShowing\"],[[\"get\",[\"deleteReady\"]]]],0],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Deleted!\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Created!\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/seeder-block.hbs" } });
});
define("library-app/templates/components/spinner-cube", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0N9sp5ut", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube-grid\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube1\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube2\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube3\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube4\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube5\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube6\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube7\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube8\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sk-cube sk-cube9\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/components/spinner-cube.hbs" } });
});
define("library-app/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5wPvVs3m", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Contact Page\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"well well-sm\"],[\"flush-element\"],[\"text\",\"If you have any question or feedback please leave a message with your email address.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,3,2],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-ok form-control-feedback\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-ok form-control-feedback\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-group has-feedback \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"isValidEmail\"]],\"has-success\"],null]]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Your email address*:\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"placeholder\",\"value\",\"autofocus\"],[\"email\",\"form-control\",\"Your email address\",[\"get\",[\"model\",\"email\"]],\"autofocus\"]]],false],[\"text\",\"\\n          \"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"isValidEmail\"]]],null,1],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-group has-feedback \",[\"helper\",[\"if\"],[[\"get\",[\"model\",\"isMessageEnoughLong\"]],\"has-success\"],null]]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Your message*:\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"placeholder\",\"rows\",\"value\"],[\"form-control\",\"Your message. (At least 5 characters.)\",\"5\",[\"get\",[\"model\",\"message\"]]]]],false],[\"text\",\"\\n          \"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"isMessageEnoughLong\"]]],null,0],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-success\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"model\",\"isNotValid\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"sendMessage\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Send\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-success\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Thank you! Your message is sent.\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"To: \"],[\"append\",[\"unknown\",[\"model\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Message: \"],[\"append\",[\"unknown\",[\"model\",\"message\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Reference ID: \"],[\"append\",[\"unknown\",[\"model\",\"id\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/contact.hbs" } });
});
define("library-app/templates/footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+FemSepE", "block": "{\"statements\":[[\"open-element\",\"footer\",[]],[\"static-attr\",\"class\",\"page-footer\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/footer.hbs" } });
});
define("library-app/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BzGZ+D6r", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"container2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"info\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Intro\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I am sivagnanam, My interest are Linux, Programing Languages and Data.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I am being a software developer for around 3.5 years. I have worked in software development and testing and maintenance areas. I always wish to improve the software that I am being written in both performance and scale and range of problem it solves. I spend most of my time to read and think about current and future of technology and how it going to affect humans. I like politics especially interesting leaders in politics anywhere.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"social\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://twitter.com/DataSweeper\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"TwitterLogo.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/DataSweeper\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"GitHub-Mark.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:datasweeper@outlook.com\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"mail.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"home-bg\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/index.hbs" } });
});
define("library-app/templates/libraries", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "++BHBrK1", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Libraries\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well well-sm\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav nav-pills\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"libraries.index\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"libraries.new\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"Add new\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"text\",\"List all\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/libraries.hbs" } });
});
define("library-app/templates/libraries/form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IUCafmR4", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"library-item-form\"],null,[[\"item\",\"buttonLabel\",\"action\"],[[\"get\",[\"model\"]],[\"get\",[\"buttonLabel\"]],\"saveLibrary\"]]],false],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"library-item\"],null,[[\"item\"],[[\"get\",[\"model\"]]]],0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/libraries/form.hbs" } });
});
define("library-app/templates/libraries/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qgXbpIUA", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"List\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-1\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"limit\",\"letter\"],[\"all\",\"\"]]]],[[\"class\"],[\"btn btn-default btn-lg btn-block\"]],9],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-1\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[[\"helper\",[\"query-params\"],null,[[\"limit\"],[\"abc\"]]]],[[\"class\"],[\"btn btn-default btn-lg btn-block\"]],8],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-10\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"limitAll\"]]],null,7,6],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"filteredList\"]]],null,5,2],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-12 text-center\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-info\"],[\"flush-element\"],[\"text\",\"\\n          Sorry, no result.\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"unknown\",[\"spinner-cube\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"model\",\"isUpdating\"]]],null,1,0]],\"locals\":[]},{\"statements\":[[\"text\",\"Edit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"link-to\"],[\"libraries.edit\",[\"get\",[\"library\",\"id\"]]],[[\"class\"],[\"btn btn-success btn-xs\"]],3],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger btn-xs\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteLibrary\",[\"get\",[\"library\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"library-item\"],null,[[\"item\",\"badge\"],[[\"get\",[\"library\"]],[\"get\",[\"library\",\"books\",\"length\"]]]],4],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"library\"]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"unknown\",[\"abc-buttons\"]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[\"get\",[\"filter\"]],\"form-control input-lg\",\"Filter by library name\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Abc\"]],\"locals\":[]},{\"statements\":[[\"text\",\"All\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/libraries/index.hbs" } });
});
define("library-app/templates/libraries/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pkYffd5S", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"spinner-cube\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/libraries/loading.hbs" } });
});
define("library-app/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "gc14t7gN", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"spinner-cube\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/loading.hbs" } });
});
define("library-app/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "l87o79M+", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"nav-link-to\"],[\"index\"],null,2],[\"text\",\"\\n        \"],[\"block\",[\"nav-link-to\"],[\"blog\"],null,1],[\"text\",\"\\n        \"],[\"block\",[\"nav-link-to\"],[\"tools\"],null,0],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Tools\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Blog\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/navbar.hbs" } });
});
define("library-app/templates/tools", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KllU03ai", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"container2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/tools.hbs" } });
});
define("library-app/templates/tools/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0nTR2A6X", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"tools.view\",\"listy\"],[[\"class\"],[\"navbar-brand\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"tools-block\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"tools-list/listy.jpg\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Listy\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/tools/index.hbs" } });
});
define("library-app/templates/tools/view", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kxUVjGHu", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"model\",\"response\"]],true]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "library-app/templates/tools/view.hbs" } });
});
define('library-app/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});


define('library-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'library-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("library-app/app")["default"].create({"name":"library-app","version":"2.10.0+62f71fbb"});
}
//# sourceMappingURL=library-app.map
