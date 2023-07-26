const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop:true,
    spaceBetween: 35,
    effect: 'slide',

breakpoints: {
  310:{
    slidesPerView: 1,
  },
  556:{
    slidesPerView: 1,
  },
  765:{
    slidesPerView: 2,
  },
  998:{
    slidesPerView: 2,
  },
  1240:{
    slidesPerView: 3,
  },
  1440:{
    slidesPerView: 3,
  },
},
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  const swiperTest = new Swiper('.test__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop:true,
    spaceBetween: 39,
    effect: 'slide',
    
    breakpoints: {
      310:{
        slidesPerView: 1,
      },
      556:{
        slidesPerView: 1,
      },
      765:{
        slidesPerView: 2,
      },
      998:{
        slidesPerView: 2,
      },
      1240:{
        slidesPerView: 3,
      },
      1440:{
        slidesPerView: 3,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });

  