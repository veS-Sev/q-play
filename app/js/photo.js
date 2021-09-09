$(function(){
  var container1 = document.querySelector('.galery__photo');
  var mixerOne = mixitup(container1,{
    controls: {
        scope: 'local'
    },
        load: {
        filter: '.category-e'
    }
  });
  var container3 = document.querySelector('.products');
  
  var mixerThree = mixitup(container3,{
    controls: {
        scope: 'local'
    },
        load: {
        filter: '.category-h'
    }
  });

});