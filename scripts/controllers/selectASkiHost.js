'use strict';

(function(module) {
  var selectASkiHost = {};

  selectASkiHost.reveal = function () {
    $('#becomeASkiHost').hide();
    $('#contactUs').hide();
    $('#homeSki').hide();
    $('#selectASkiHost').fadeIn(500);
  }

  module.selectASkiHost = selectASkiHost;
})(window);
