'use strict';
(function(module) {
  var skiHomeView = {};
  var skiHomeLoad = function (event) {
    $('.page-content').hide()
    $('#homeSki').show()
    Member.getData()
  }
  skiHomeLoad();

  var handleTheForm = function () {
    $('#registerHere').submit(function(event) {
      event.preventDefault();

      var registerData = {
        name: $(this).find('#name').val(),
        email: $(this).find('#email').val(),
        skiresort: $(this).find('#skiresort').val()
      }

      Member.postData(registerData)

    })
  };

  handleTheForm();

  module.skiHomeView = skiHomeView;
})(window);
