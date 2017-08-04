'use strict';
(function(module) {
var skiHomeView = {};
var skiHomeLoad = function (event) {
  $('.page-content').hide()
  $('#homeSki').show()
}
skiHomeLoad();

module.skiHomeView = skiHomeView;
})(window);
