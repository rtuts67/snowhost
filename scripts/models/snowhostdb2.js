'use strict';

(function(module) {
  var Member = function(obj) {
    this.member_id = obj.member_id;
    this.name = obj.name;
    this.email = obj.email;
    this.skiresort = obj.skiresort;
    Member.allMembers.push(this)
  };

  Member.allMembers = [];

  Member.prototype.toHtml = function() {
    var memberTemplate = $('#template').html();
    var template = Handlebars.compile(memberTemplate)
    return template(this);
  }

  Member.getData = function() {
    $.getJSON('/snowhostdb2')
    //.then(console.log(this))
    .then(function(data) {
      data.rows.forEach(function(ele) {
        new Member(ele);
      });
    })
   .then(function() {
     localStorage.setItem('register_all', JSON.stringify(Member.allMembers));
   });
  };

  Member.postData = function(obj) {
    $.ajax({
      url: '/snowhostdb2',
      method: 'POST',
      data: obj
    });

    Member.allMembers.forEach(function(member) {
      $('#selectASkiHost').append(member.toHtml())
    });
  }
  module.Member = Member
})(window);
