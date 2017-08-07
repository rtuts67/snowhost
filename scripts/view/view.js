'use strict';
(function(module) {
  var skiHomeView = {};
  var skiHomeLoad = function (event) {
    $('.page-content').hide()
    $('#homeSki').show()
  }
  skiHomeLoad();

  var handleTheSubmitButton = function () {
    $('#registerHere').on('click', function(event) {
      event.preventDefault();
      $('#registrationConfirmed').fadeIn(400);
      var el = $(this);
    })
  }
  handleTheSubmitButton();

  var handleTheForm = function () {
    $('#registerHere').submit(function(event) {
      event.preventDefault();

      var registerData = {
        name: $(this).find('#name').val(),
        email: $(this).find('#email').val(),
        password: $(this).find('#password').val()
      }

      Member.postData(registerData)
      // Member.postData(registerData);
      // $('.page-content').hide();
      // $('#registerHere').reset[0];
      // $('#registrationConfirmed').fadeIn(500);

    })
  };

  handleTheForm();

  module.skiHomeView = skiHomeView;
})(window);
