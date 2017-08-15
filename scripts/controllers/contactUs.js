'use strict';

(function(module) {
  var contactUs = {};

  contactUs.reveal = function () {
    $('#selectASkiHost').hide();
    $('#homeSki').hide();
    $('#contactUs').fadeIn(500);
  }

  module.contactUs = contactUs;
})(window);
