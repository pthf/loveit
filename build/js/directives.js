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
  .directive('nosotrosContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/nosotros-content.html'
    };
  })
  .directive('amenidadesContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/amenidades-content.html',
      controller: function($document){

      }
    };
  })
  .directive('serviciosContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/servicios-content.html',
      controller: function($document){

      }
    };
  })

  .directive('serviciosPremiumContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/servicios-premium-content.html',
      controller: function($document){

      }
    };
  })

  .directive('footerStyle1', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/footer-style-1.html',
      controller: function($document){

      }
    };
  })
  .directive('gridPhotos', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/grid-photos.html'
    }
  })
  .directive('gridPhotosHabitaciones', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/grid-photos-habitaciones.html',
      controller: function($document){
        $('.selectHover').click(function(){
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#sectionHabitaciones').removeClass('fadeIn');
          $('#sectionHabitaciones').addClass('fadeOut');
          $('#sectionHabitaciones').css({'display' : 'none'});
          $('#informationShow').removeClass('fadeOut');
          $('#informationShow').css({'display' : 'flex'});
          $('#informationShow').addClass('fadeIn');

          setTimeout(function(){
            var mySwiper = new Swiper('.swiper-container',{
              pagination: '.swiper-pagination',
              loop:true,
              grabCursor: false,
              paginationClickable: true,
              autoplay:false
            });
          },80);

        });
        $('#informationShow .close').click(function(){
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#informationShow').removeClass('fadeIn');
          $('#informationShow').addClass('fadeOut');
          $('#informationShow').css({'display' : 'none'});
          $('#sectionHabitaciones').removeClass('fadeOut');
          $('#sectionHabitaciones').css({'display' : 'flex'});
          $('#sectionHabitaciones').addClass('fadeIn');
        });
      }
    }
  })
  .directive('roomDescription', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/room-description.html'
    }
  })
  .directive('footerBottomContact', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/footer-bottom-contact.html',
      controller: function($document){
				$('#formContact').submit(function(e){
					var data = $(this).serialize();
					$.ajax({
						type: 'POST',
						url: 'php/sendEmail.php',
						data: data,
						success : function(result){
              console.log("Noice");
							setTimeout(function(){
								$('#formContact')[0].reset();
							}, 1500);
						},
						error: function(){
							console.log('error');
						},
						timeout: 10000
					});
					e.preventDefault();
				});
			}
    }
  })
  .directive('swiperSliderRoom', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/swiper-slider-room.html',
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
  .directive('gridRestaurant', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/grid-restaurant.html'
    }
  })
})();
