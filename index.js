$(document).ready(function() {

  // navbar
  $("#menu-bar").click(function() {
    $(this).toggleClass("fa-times");
    $('.navbar').toggleClass('nav-toggle');
  });


  //menu
  $(".menu .list .btn").click(function() {
    $(this).addClass("active").siblings().removeClass("active");

    let src = $(this).attr("data-src");
    let target = $(this).attr("data-target");


    $("#menu-img").attr("src", src);
    $(".menu .content.active").removeClass("active");
    $(target).addClass("active");

  })


  // active nav
  $(window).scroll(function() {
    $('section').each(function() {

      let top = $(window).scrollTop();
      let height = $(this).height();
      let id = $(this).attr('id');
      let offset = $(this).offset().top - 200;

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });
  });

});
