$(function(){ 
    $('.sales__group-sale').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots:true, 
            variableWidth: true,
            prevArrow:'.switch__left-sale',
            nextArrow:'.switch__right-sale',
            
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 577,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
              ] 
    });

})
$(function(){ 
  $('.sales__group-new').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:true, 
          variableWidth: true,
          prevArrow:'.switch__left-new',
          nextArrow:'.switch__right-new',
          
          responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
            ] 
  });

})
$(function(){ 
  $('.sales__group-recomend').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:true, 
          variableWidth: true,
          prevArrow:'.switch__left-recomend',
          nextArrow:'.switch__right-recomend',
          
          responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
            ] 
  });

})
$(function(){ 
  $('.sales__group-price').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:true, 
          variableWidth: true,
          prevArrow:'.switch__left-price',
          nextArrow:'.switch__right-price',
          
          responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
            ] 
  });

})
$(function(){ 
  $('.review__about').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:true, 
          variableWidth: true,
          prevArrow:'.switch__left-review',
          nextArrow:'.switch__right-review',
          
          responsive: [
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ] 
  });

})