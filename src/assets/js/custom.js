// function loadD1iframe(code) {
//   var head = '<!DOCTYPE html><html lang="en><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://use.typekit.net/tro4boa.css"><link rel="stylesheet" href="https://www.americanhotel.com/_ui/responsive/theme-americanhotel/css/style.css"></head>';
//   var html = head + '<div class="content"><style type="text/css"> .onethirdcol { 	max-height: 350px; } .c-hero__copy { 	max-width: 100%; } .w-50.square { 	width: 30% !important; } .c-hero__sub-title--size-normal { 	line-height: 24px; } .w-40 { 	width: 40% !important; }     .logo-stacked {     max-height: 80px; }   .logo-stacked {     max-height: 80px; } .btn--default, .btn--square:hover { background-color: rgb(0, 93, 163); border: rgb(0, 93, 163); color: #fff; }  { background-color: transparent; border: 2px solid rgb(0, 93, 163); color: rgb(0, 93, 163); } .btn--alternate:hover { background-color: rgb(0, 93, 163) } .btn--alternate { color: rgb(0, 93, 163);background-color: transparent; border: 2px solid rgb(0, 93, 163); } </style>  <div class="container">   <div class="row mb-1">    <!-- D1 -->     <div class="col-lg-4 col-md-12 mt-4">' + code + '</div>                  <!-- D2 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center"><img class="w-50 pb-2" src="https://images.americanhotel.com/images/banners/hp-registry-logo.png">             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">4,000+ products with the perfect blend of quality and value</h4>             <a class="btn btn--primary c-hero__action" href="/registry?icid=american-hotel-launch_hp_otb_2_20190412_2_registry" title="Learn More">Learn More</a></div>         </div>       </div>     </div>     <!-- D3 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center">             <h2 class="c-hero__title c-hero__title--white c-hero__title--weight-extrabold c-hero__title--size-normal">Pool Towels</h2>             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">Quality pool towels from quality brands</h4>             <a class="btn btn--primary c-hero__action" href="/registrypooltowels?icid=registry-pool-towels-(d3)_hp_otb_4_20190621_1_cta" title="Shop Now">Shop Now</a></div>         </div>       </div>     </div>   </div> </div></div></body></html>';
//   var iframe = document.querySelector('.D1iframe');
//   iframe.src = 'data:text/html,' + encodeURIComponent(html);
// }

var bgImage;

/* D1 iframe insert Output */
function insertD1(code) {
  var D1iframe = $('.D1-iframe');
  D1iframe.contents().find('#D1HTML').html(code);  
}

/* A1 iframe insert Output */
function insertA1(code) {
  var A1iframe = $('.A1-iframe');
  A1iframe.contents().find('#A1HTML').html(code);
  // console.log(A1iframe.contents().find('#A1HTML').html());
}

/* Seasonal iframe insert Output */
function insertSeasonal(code) {
  var Seasonaliframe = $('.Seasonal-iframe');
  Seasonaliframe.contents().find('#SeasonalHTML').html(code);

}

/* Email iframe insert Output */
function insertEmail(code) {
  var emailiframe = $('.email-iframe');
  emailiframe.contents().find('#emailHTML').html(code);
}

function insertGlobalcss(css) {
  $('.D1-iframe').contents().find('#globalcss').html(css);
  $('.A1-iframe').contents().find('#globalcss').html(css);
  $('.Seasonal-iframe').contents().find('#globalcss').html(css);
}

/* Insert background into iframe */
function insertbg(img, ad) {
  switch (ad) {
    case 'D1':
      var defaultbg = 'https://images.americanhotel.com/images/banners/D1-placeholder.jpg';
      img == '' ? bgImage = defaultbg : bgImage = img;
      $('.D1-iframe').contents().find('#D1bg').attr('src', bgImage);
      break;

    case 'A1':
      var A1bg = $('.A1-iframe');
      var defaultbg = 'https://images.americanhotel.com/images/banners/A1-placeholder-widescreen.jpg';
      img == '' ? bgImage = defaultbg : bgImage = img;
      A1bg.contents().find('#A1bg').attr('src', bgImage);

      var img1 = bgImage;
      var str = img1.substring(img1.search('widescreen'), img1.search('widescreen') + 10);
      A1bg.contents().find('#A1Mobile').attr('srcset', img1.replace(str, 'mobile'));
      A1bg.contents().find('#A1Tablet').attr('srcset', img1.replace(str, 'tablet'));
      A1bg.contents().find('#A1Desktop').attr('srcset', img1.replace(str, 'desktop'));   
      A1bg.contents().find('#A1Wide').attr('srcset', img);  
      break; 
      
    case 'email':
      $('.email-iframe').contents().find('#emailbg').attr('src', img);
  }

}

/* Insert logo into iframe */
function insertLogo(logo, ad) {
  switch (ad) {
    case 'D1':
      $('.D1-iframe').contents().find('#D1logo').attr('src', logo);
      break;
    case 'A1':
      $('.A1-iframe').contents().find('#A1logo').attr('src', logo);
      break;

    case 'Seasonal':
      $('.Seasonal-iframe').contents().find('#Seasonallogo').attr('src', logo);
      break;

    case 'email':
        $('.email-iframe').contents().find('#emaillogo').attr('src', logo);
        $('.email-iframe').contents().find('#emaillogo').attr('height', 51);
        $('.email-iframe').contents().find('#emaillogo').attr('width', 211);
        $('.email-iframe').contents().find('.border-top').css('border-top', '1px solid #CCCCCC');  

      if (logo == '') {
        $('.email-iframe').contents().find('#emaillogo').attr('height', '');
        $('.email-iframe').contents().find('#emaillogo').attr('width', '');
        $('.email-iframe').contents().find('.border-top').css('border-top', 'transparent');
      } 
  }

}

/* Insert logo width into iframe */
function insertWidth(width) {
  $('.D1-iframe').contents().find('#D1logo').attr('width', width);
  $('.Seasonal-iframe').contents().find('#Seasonallogo').attr('width', width);
  // console.log($('.A1-iframe').contents().find('#A1logo').parent().html());
}

/* Insert collout bar into iframe */
function insertCalloutBar(bar) {
  $('.email-iframe').contents().find('#calloutHTML').html(bar);
}

function insertWhiteBGLogo(white, ad) {
  switch (ad) {
    case 'D1':
      if (white) {
        $('.D1-template').find('img.pb-2').addClass('bg-white-transparent');        
        $('.D1-iframe').contents().find('#D1logo').addClass('bg-white-transparent');
      } else {
        $('.D1-template').find('img.pb-2').removeClass('bg-white-transparent');
        $('.D1-iframe').contents().find('#D1logo').removeClass('bg-white-transparent');
      }
      break;
    
    case 'A1':
      if (white) {
        $('.A1-iframe').contents().find('#A1logo').addClass('bg-white-transparent');
        $('.A1-template').find('.a1-supplier-logo').find('img').addClass('bg-white-transparent');
      } else {
        $('.A1-iframe').contents().find('#A1logo').removeClass('bg-white-transparent');
        $('.A1-template').find('div.a1-supplier-logo').find('img').removeClass('bg-white-transparent');
      }
      break;
    
    case 'Seasonal':
      if (white) {
        $('.Seasonal-iframe').contents().find('#Seasonallogo').addClass('bg-white-transparent');
        $('.Seasonal-template').find('.mx-auto').addClass('bg-white-transparent');
      } else {
        $('.Seasonal-iframe').contents().find('#Seasonallogo').removeClass('bg-white-transparent');
        $('.Seasonal-template').find('.mx-auto').removeClass('bg-white-transparent');
      }
      break;
  }

}

/* Inset headline into seasonal iframe */
function insertSeasonalHeadline(headline) {
  $('.Seasonal-iframe').contents().find('.container').find('h4').text(headline);
}
/* Insert products img for seasonal preventing flicker */
function insertProductImages(products) {
  $('.Seasonal-iframe').contents().find('#Seasonal-prod1').find('img').attr('src', products.prod1Img);
  $('.Seasonal-iframe').contents().find('#Seasonal-prod2').find('img').attr('src', products.prod2Img);
  $('.Seasonal-iframe').contents().find('#Seasonal-prod3').find('img').attr('src', products.prod3Img);
  $('.Seasonal-iframe').contents().find('#Seasonal-prod4').find('img').attr('src', products.prod4Img);
}

function insertProductNames(products) {
  $('.Seasonal-iframe').contents().find('#Seasonal-prod1').find('span').text(products.prod1Name);
  $('.Seasonal-iframe').contents().find('#Seasonal-prod2').find('span').text(products.prod2Name);
  $('.Seasonal-iframe').contents().find('#Seasonal-prod3').find('span').text(products.prod3Name);
  $('.Seasonal-iframe').contents().find('#Seasonal-prod4').find('span').text(products.prod4Name);
}

/* ----- SEASONAL COMPONENT ------ */

/* Download files */
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

$(document).ready(function () {
  //mobile
  $('.btn-mobile').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-desktop iframe-tablet').addClass("iframe-mobile");
    $(this).addClass("current");
    $('.btn-tablet,.btn-desktop,.btn-widescreen').removeClass('current');
    e.preventDefault();
  });

  //tablet
  $('.btn-tablet').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-desktop iframe-mobile').addClass("iframe-tablet");
    $(this).addClass("current");
    $('.btn-mobile,.btn-desktop,.btn-widescreen').removeClass('current');
    e.preventDefault();
  });

  //dekstop
  $('.btn-desktop').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-mobile iframe-tablet').addClass("iframe-desktop");
    $(this).addClass("current");
    $('.btn-tablet,.btn-mobile,.btn-widescreen').removeClass('current');
    e.preventDefault();
  });

  //widescreen
  $('.btn-widescreen').on('click', function (e) {
    $('iframe').removeClass('iframe-mobile iframe-desktop iframe-tablet').addClass("iframe-widescreen");
    $(this).addClass("current");
    $('.btn-tablet,.btn-desktop,.btn-mobile').removeClass('current');
    e.preventDefault();
  });

  //gutter smoothness
  $('.as-split-gutter-icon').mousedown(function () {
    $('iframe').css("pointer-events", "none");
  });
  $('.as-split-gutter-icon').mouseup(function () {
    $('iframe').css("pointer-events", "auto");
  });
  
});
