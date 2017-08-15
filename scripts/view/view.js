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
        password: $(this).find('#password').val()
      }

      //console.log(registerData)

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
