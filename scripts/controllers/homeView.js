'use strict';

(function(module) {
  var homeView = {};

  homeView.reveal = function () {
    $('#selectASkiHost').hide();
    $('#contactUs').hide();
    $('#homeSki').fadeIn(500);
  }

  module.homeView = homeView;
})(window);
