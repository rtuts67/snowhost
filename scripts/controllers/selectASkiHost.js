'use strict';

(function(module) {
  var selectASkiHost = {};

  selectASkiHost.reveal = function () {
    $('#contactUs').hide();
    $('#homeSki').hide();
    $('#registrationConfirmed').hide();
    $('#selectASkiHost').fadeIn(500);
    $('#skiHostList').fadeIn(500);
  }

  module.selectASkiHost = selectASkiHost;
})(window);
