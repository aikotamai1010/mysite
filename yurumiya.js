// carousel interval

$('.carousel').carousel({
  interval: 3000
})

// メニュースクロール

$("#menu-link").on('click', function(){
  const menuArea = $("#menu-area").offset().top;
  $(window).scrollTop(menuArea);
});
$("#prof-link").on('click', function(){
  const profArea = $("#prof-area").offset().top;
  $(window).scrollTop(profArea);
});
$("#contact-link").on('click', function(){
  const contactArea = $("#contact-area").offset().top;
  $(window).scrollTop(contactArea);
});
$("#sns-link").on('click', function(){
  const snsArea = $("#sns-area").offset().top;
  $(window).scrollTop(snsArea);
});
$("#access-link").on('click', function(){
  const accessArea = $("#access-area").offset().top;
  $(window).scrollTop(accessArea);
});

