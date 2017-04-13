define('ember-bootstrap/mixins/component-parent', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
   * Mixin for components that act as a parent component in a parent-child relationship of components
   *
   * @class ComponentParent
   * @namespace Mixins
   * @private
   */
  exports['default'] = _ember['default'].Mixin.create({

    /**
     * Array of registered child components
     *
     * @property children
     * @type array
     * @protected
     */
    children: null,

    _onInit: _ember['default'].on('init', function () {
      this.set('children', _ember['default'].A());
    }),

    /**
     * Register a component as a child of this parent
     *
     * @method registerChild
     * @param child
     * @public
     */
    registerChild: function registerChild(child) {
      _ember['default'].run.schedule('sync', this, function () {
        this.get('children').addObject(child);
      });
    },

    /**
     * Remove the child component from this parent component
     *
     * @method removeChild
     * @param child
     * @public
     */
    removeChild: function removeChild(child) {
      this.get('children').removeObject(child);
    }
  });
});