
  $('.slide-full').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    direction: 1,
    nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i> </button>', 
    prevArrow: '<button class="back-arrow"> <i class="fas fa-arrow-left"></i> </button>', 
    responsive: [
    
    {
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 525,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    
    });

  


 
  
    
  
  