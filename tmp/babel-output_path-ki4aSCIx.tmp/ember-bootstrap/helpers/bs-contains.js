define('ember-bootstrap/helpers/bs-contains', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.bsContains = bsContains;

  var isArray = _ember['default'].isArray;
  var A = _ember['default'].A;

  function bsContains(params /*, hash*/) {
    return isArray(params[0]) ? A(params[0]).includes(params[1]) : false;
  }

  exports['default'] = _ember['default'].Helper.helper(bsContains);
});