'use strict';

(function(module) {

  var SkiResort = function(obj) {
    this.name = obj.name;
    SkiResort.allSkiResorts.push(this);
  };


  SkiResort.allSkiResorts = [];
  SkiResort.getTheSKiResorts = function() {
    $.ajax({
      url:'https://skimap.org/SkiAreas/index.xml',
      method:'GET',
      dataType: 'xml',
      success: function(data) {
        console.log(data)
        //How do I parse this xml data to javascript then to json?
      }
    })
  }
  //   .then(function(data) {
  //       JSON.stringify(data)
  //   //    //JSON.parse(data)
  //     console.log(data)
  //  })
    // localStorage.setItem('ski_resort', JSON.stringify(SkiResort.allSkiResorts))

      // .then(function() {
      //   localStorage.setItem('ski_resorts', JSON.stringify(SkiResort.allSkiResorts));
      //});
  SkiResort.getTheSKiResorts();
  module.SkiResort = SkiResort;
})(window);
