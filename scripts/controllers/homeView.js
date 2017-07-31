'use strict';

(function(module) {
  var homeView = {};

  homeView.reveal = function (ele) {
    ele.getElementById('selectASkiHost').hide();
    ele.getElementById('becomeAskiHost').hide();
    ele.getElementById('contactUs').hide();
    ele.getElementById('homeSki').fadein(500);
  }

  module.homeView = homeView;
})(window);
