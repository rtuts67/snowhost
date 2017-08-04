'use strict';

(function(module) {
  var becomeASkiHost = {};

  becomeASkiHost.reveal = function () {
    $('#selectASkiHost').hide();
    $('#contactUs').hide();
    $('#homeSki').hide();
    $('#becomeASkiHost').fadeIn(500);
  }

  module.becomeASkiHost = becomeASkiHost;
})(window);
