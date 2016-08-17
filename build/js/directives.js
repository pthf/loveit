(function(){
  angular.module('loveitSite.directives', [])
  .directive('headerTop', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/header-top.html',
      controller: function($document){
        var status = false;
        var tam = 0;
        function verifySize(){
          tam = $(window).width();
          if(tam<767){
            $('.headerNav').slideUp();
            status = false;
          }else{
            $('.headerNav').slideDown();
          }
        }
        $(window).resize(function(){
          verifySize();
        });
        verifySize();
        $(document).on('click', '.menu label#hamburger input', function(){
          if(status){
            $('.headerNav').slideUp();
          }else{
            $('.headerNav').slideDown();
          }
          status = !status;
        });
      }
    }
  })
  .directive('swiperSlider', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/swiper-slider.html',
      controller: function($document){
        setTimeout(function(){
          var mySwiper = new Swiper('.swiper-container',{
            pagination: '.swiper-pagination',
            loop:true,
            grabCursor: false,
            paginationClickable: true,
            autoplay:false
          });
        },80);
      }
    };
  })
})();
