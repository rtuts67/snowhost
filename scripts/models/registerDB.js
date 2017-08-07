'use strict';

(function(module) {
  var Member = function(mem) {
    this.member_id = mem.member_id;
    this.name = mem.name;
    this.email = mem.email;
    this.password = mem.password;
    Member.allMembers.push(this)
  };

  Member.allMembers = [];

  Member.getData = function() {
    $.getJSON('/registerDB')
   .then(function(data) {
     data.rows.forEach(function(ele) {
       new Member(ele);
     });
   })
   .then(function() {
     localStorage.setItem('register_info', JSON.stringify(Member.allMembers));
   });
  };

  Member.postData = function(obj) {
    $.ajax({
      url: '/registerDB',
      method: 'POST',
      data: obj
    });
  }
})(window);
