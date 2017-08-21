'use strict';
(function(module) {
  var renderSkiHosts = {};
  var renderTheSkiHost = function() {
  Member.allMembers.forEach(function(ele) {
    var skiHost = document.getElementById('registeredSkiHost');
    var name = ele.name;
    var email = ele.email;
    var skiResort = ele.skiResort;

    var listHost = document.createElement('li');
    listHost.style.visibility = visible;
    var listForm = 'Name: ' + name + 'Email:' + email + 'Ski Resort:' + skiResort;
    listHost.innerHTML = listForm;
    skiHost.append(listHost);
  })
  module.renderSkiHosts = renderSkiHosts;
  renderTheSkiHost();
})(window);
