define('ember-bootstrap/components/bs-tooltip-element', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-tooltip-element'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsTooltipElement) {
  'use strict';

  /**
   Internal component for tooltip's markup. Should not be used directly.
  
   @class TooltipElement
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsTooltipElement['default'],

    classNames: ['tooltip'],
    classNameBindings: ['placement', 'in', 'fade'],
    ariaRole: 'tooltip',

    /**
     * @property placement
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    /**
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * @property in
     * @type boolean
     * @default false
     * @public
     */
    'in': false
  });
});