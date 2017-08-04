'use strict';

(function(module) {
  var homeView = {};

  homeView.reveal = function () {
    $('#becomeASkiHost').hide();
    $('#selectASkiHost').hide();
    $('#contactUs').hide();
    $('#homeSki').fadeIn(500);
  }

  module.homeView = homeView;
})(window);
