'use strict';

function(module) {

var SkiResort = funtction(ski) {
  this.id = ski.id;
  SkiResorts.allSkiResorts.push(this);
}

SkiResorts.allSkiResorts = []

var getTheSKiResorts = function () {
$.getJSON('https://skimap.org/SkiAreas/view/${id}.json')
  .then(function(obj){
    obj.forEach(function(el) {
      new SkiResort(el);
    });
  })
  .then(function() {
    localStorage.setItem('ski_resorts', JSON.stringify(SkiResorts.allSkiResorts));
  });

module.SkiResorts = SkiResorts;
};
