define('ember-chosen/components/ember-chosen', ['exports', 'ember', 'ember-chosen/templates/components/ember-chosen'], function (exports, _ember, _emberChosenTemplatesComponentsEmberChosen) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberChosenTemplatesComponentsEmberChosen['default'],

    classNames: ['ember-chosen'],
    classNameBindings: ['isRTL:chosen-rtl'],

    attributeBindings: ['multiple', 'disabled', 'style'],

    ////////////////
    //! Variables //
    ////////////////

    initialized: false,

    isRTL: false,

    multiple: false,

    debug: false,

    disabled: false,

    /*
     * The content path where the group name is located.
     * OPTIONAL
     */
    optionGroupPath: "",

    /*
     * The content path where the value is located.
     * REQUIRED
     */
    optionValuePath: "",

    /*
     * The content path where the label is located. 
     * REQUIRED
     */
    optionLabelPath: "",

    /*
     * Hides the empty option.
     */
    skipEmptyItem: false,

    /*
     * Content that is sent to the ember-chosen.
     * This is used to build the options array.
     */
    content: null,

    /*
     * The action to execute on change.
     */
    action: "",

    ///////////////
    //! Settings //
    ///////////////

    /*
     * Placeholder text for both the multiple version of the chosen
     * and the single version.
     */
    placeholder: "Select an Option",

    /*
     * Chosen default options.
     * Reference: http://harvesthq.github.io/chosen/options.html
     */
    allowSingleDeselect: false,
    disableSearch: false,
    disableSearchThreshold: 0,
    enableSplitWordSearch: true,
    inheritSelectClasses: true,
    maxSelectedOptions: "Infinity",
    noResultsText: "No Results Match",
    searchContains: false,
    singleBackstrokeDelete: true,
    width: "100%",
    displayDisabledOptions: true,
    displaySelectedOptions: true,
    includeGroupLabelInSelected: false,

    /*
     * Aliased properties to the placeholder for easier setting.
     */
    placeholderTextMultiple: _ember['default'].computed.alias('placeholder'),
    placeholderTextSingle: _ember['default'].computed.alias('placeholder'),

    ///////////////
    //! Computed //
    ///////////////

    /*
     * Validates the optionGroupPath in the content array.
     */
    validGroupPath: _ember['default'].computed('optionGroupPath', {
      get: function get() {
        var validGroupPath = undefined,
            lastObject = this.get('content.lastObject');

        if (!this.get('optionGroupPath')) {
          return false;
        }

        if (typeof lastObject.get === 'undefined') {
          lastObject = _ember['default'].Object.create(lastObject);
        }

        if (this.get('debug')) {
          _ember['default'].Logger.log("%c%s#validGroupPath searching for `%s` in Object: %O", "color: purple", // http://www.w3schools.com/html/html_colornames.asp
          this.toString(), this.get('optionGroupPath'), lastObject);
        }

        if (typeof lastObject.get(this.get('optionGroupPath')) !== undefined) {
          validGroupPath = true;
        } else {
          _ember['default'].Logger.log("%c%s#validGroupPath Invalid optionGroupPath `%s` in Object: %O.", "color: red", // http://www.w3schools.com/html/html_colornames.asp
          this.toString(), lastObject, this.get('optionGroupPath'));

          validGroupPath = false;
        }

        return validGroupPath;
      }
    }),

    options: _ember['default'].computed('content', 'optionValuePath', 'optionLabelPath', 'optionGroupPath', {
      get: function get() {
        var _this = this;

        var groupNames = [],
            groups = [],
            options = _ember['default'].A();

        if (!this.get('content')) {
          return options;
        }

        if (this.get('validGroupPath')) {
          groupNames = this.get('content').mapBy(this.get('optionGroupPath'));
          groups = _ember['default'].A(groupNames).uniq();

          if (this.get('debug')) {
            _ember['default'].Logger.log("%c%s#options creating groups: %O from %O", "color: purple", // http://www.w3schools.com/html/html_colornames.asp
            this.toString(), groups, groupNames);
          }

          // Build the options with groups
          groups.forEach(function (group) {
            var groupOptions = [];

            _this.get('content').filterBy(_this.get('optionGroupPath'), group).forEach(function (option) {
              if (typeof option.get !== "function") {
                if (['number', 'string', 'boolean'].indexOf(typeof option) === -1) {
                  option = _ember['default'].Object.create(option);
                }
              }

              groupOptions.push({
                value: _this._lookupOptionValue(option),
                label: _this._lookupOptionLabel(option),
                selected: _this._checkSelected(_this._lookupOptionValue(option))
              });
            });

            options.push({
              label: group,
              options: groupOptions
            });
          });
        } else {
          // Build the options array
          this.get('content').forEach(function (option) {
            if (typeof option.get !== "function") {
              if (['number', 'string', 'boolean'].indexOf(typeof option) === -1) {
                option = _ember['default'].Object.create(option);
              }
            }

            options.push({
              value: _this._lookupOptionValue(option),
              label: _this._lookupOptionLabel(option),
              selected: _this._checkSelected(_this._lookupOptionValue(option))
            });
          });
        }

        if (this.get('debug')) {
          _ember['default'].Logger.log("%c%s#options: %O, value: %O", "color: purple", // http://www.w3schools.com/html/html_colornames.asp
          this.toString(), options, this.get('value'));
        }

        return options;
      }
    }),

    /*
     * Initializes the settings for th chosen select box.
     * Reformatts the camelized properties to underscired settings for chosen.
     */
    settings: _ember['default'].computed('isRtl', 'multiple', 'disabled', 'placeholder', 'allowSingleDeselect', 'disableSearch', 'disableSearchThreshold', 'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'noResultsText', 'placeholderTextMultiple', 'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'width', 'displayDisabledOptions', 'displaySelectedOptions', 'includeGroupLabelInSelected', function () {
      var properties = this.getProperties('prompt', 'isRtl', 'multiple', 'allowSingleDeselect', 'disableSearch', 'disableSearchThreshold', 'enableSplitWordSearch', 'inheritSelectClasses', 'maxSelectedOptions', 'noResultsText', 'placeholderTextMultiple', 'placeholderTextSingle', 'searchContains', 'singleBackstrokeDelete', 'width', 'displayDisabledOptions', 'displaySelectedOptions', 'includeGroupLabelInSelected'),
          settings = {};

      for (var prop in properties) {
        if (!properties.hasOwnProperty(prop)) {
          continue;
        }

        // Convert the camelized properties to underscored for chosen.
        settings[_ember['default'].String.underscore(prop)] = properties[prop];
      }

      this._updateChosen();

      return settings;
    }),

    style: _ember['default'].computed({
      get: function get() {
        var style = String('width: ' + this.get('width'));

        return _ember['default'].String.htmlSafe(style);
      }
    }),

    /////////////
    //! Events //
    /////////////

    didRender: function didRender() {
      this._setup();
    },

    willDestroyElement: function willDestroyElement() {
      this._teardown();
    },

    ////////////////
    //! Functions //
    ////////////////

    /*
     * Updates the chosen select box.
     */
    _updateChosen: function _updateChosen() {
      var _this2 = this;

      if (!this.get('initialized')) {
        return false;
      }

      _ember['default'].run.next(this, function () {
        if (_this2.get('debug')) {
          _ember['default'].Logger.log("%c%s#_updateChosen HIT...", "color: purple", // http://www.w3schools.com/html/html_colornames.asp
          _this2.toString());
        }

        if (_this2.$('#ember-chosen-' + _this2.get('elementId'))) {
          _this2.$('#ember-chosen-' + _this2.get('elementId')).trigger("chosen:updated");
        }
      });
    },

    /*
     * Looks up the option's value
     */
    _lookupOptionValue: function _lookupOptionValue(option) {
      var optionValue = undefined,
          lookupPath = null;

      if (this.get('optionValuePath')) {
        lookupPath = this.get('optionValuePath');
      } else {
        if (this.get('optionLabelPath')) {
          lookupPath = this.get('optionLabelPath');
        }
      }

      optionValue = lookupPath ? typeof option.get !== 'undefined' ? option.get(lookupPath) : option[lookupPath] : option;

      return optionValue;
    },

    /*
     * Looks up the option's label
     */
    _lookupOptionLabel: function _lookupOptionLabel(option) {
      var optionLabel = undefined,
          lookupPath = null;

      if (this.get('optionLabelPath')) {
        lookupPath = this.get('optionLabelPath');
      } else {
        if (this.get('optionValuePath')) {
          lookupPath = this.get('optionValuePath');
        }
      }

      optionLabel = lookupPath ? typeof option.get !== 'undefined' ? option.get(lookupPath) : option[lookupPath] : option;

      return optionLabel;
    },

    /*
     * Checks to see if a value is selected
     */
    _checkSelected: function _checkSelected(optionValue) {
      var value = this.get('value'),
          selected = false;

      if (_ember['default'].$.isArray(value)) {
        var found = value.indexOf(optionValue);

        if (found !== -1) {
          selected = true;
        }
      } else {
        if (String(value) === String(optionValue) && optionValue !== undefined) {
          selected = true;
        } else {
          selected = false;
        }
      }

      return selected;
    },

    /*
     * Initializes the chosen select.
     */
    _setup: function _setup() {
      var _this3 = this;

      // If there is no content assume this we are using block content and attempt to select the appropriate option.
      if (!this.get('content')) {
        // Look for the selection via it's value.
        var foundSelectedOption = this.$('option[value="' + this.get('value') + '"]');

        // If not found, look for selection via it's HTML content.
        if (foundSelectedOption.length === 0) {
          foundSelectedOption = this.$('option').filter(function (_i, $el) {
            return _ember['default'].$($el).html() === _this3.get('value');
          });
        }

        if (foundSelectedOption.length === 0) {
          // If still not found, log notification.
          _ember['default'].Logger.log("%c%s#_setup unable to select option with a value or text of `%s`.", "color: red", // http://www.w3schools.com/html/html_colornames.asp
          this.toString(), this.get('value'));
        } else {
          // If found, select the option.
          foundSelectedOption.attr('selected', true);
        }
      }

      // Initialize the select box.
      this.$('#ember-chosen-' + this.get('elementId')).chosen(this.get('settings'));

      this.set('initialized', true);
    },

    /*
     * Destroys the chosen select.
     */
    _teardown: function _teardown() {
      this.$('#ember-chosen-' + this.get('elementId')).chosen('destroy');
      this.set('initialized', false);
    },

    //////////////
    //! Actions //
    //////////////

    actions: {
      selectValue: function selectValue() {
        var value = this.$('#ember-chosen-' + this.get('elementId')).val();

        if (this.get('debug')) {
          _ember['default'].Logger.log("%c%s#selectValue: %O", "color: purple", // http://www.w3schools.com/html/html_colornames.asp
          this.toString(), value);
        }

        this.set('value', value);

        if (this.get('action')) {
          _ember['default'].run.once(this, 'sendAction');
        }
      }
    }
  });
});