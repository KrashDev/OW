$(document).ready(function() {

  $('.tool-cards div').mouseenter(function() {
    $(this).css('background-color', '#ffffff');
  });

  $('img[role="button"]').mouseenter(function() {
    $(this).css('opacity', '.7');
  });

  $('img[role="button"]').mouseleave(function() {
    $(this).css('opacity', '1');
  });

  //-------mouse enter display widgets-----

  $('.first-tool').mouseenter(function() {
    $('.instagram').css('visibility', 'visible');
  });

  $('.second-tool').mouseenter(function() {
    $('.email').css('visibility', 'visible');
  });

  $('.third-tool').mouseenter(function() {
    $('.gallery').css('visibility', 'visible');
  });

  $('.fourth-tool').mouseenter(function() {
    $('.about').css('visibility', 'visible');
  });

  $('.fifth-tool').mouseenter(function() {
    $('.reviews').css('visibility', 'visible');
  });

  //---------end code block----------------

  //--------mouse leave code--------------


  $('.first-tool').mouseleave(function() {
    $(this).css('background-color', '#523212');
    $('.instagram').css('visibility', 'hidden');
  });

  $('.second-tool').mouseleave(function() {
    $(this).css('background-color', '#40230e');
    $('.email').css('visibility', 'hidden');
  });

  $('.third-tool').mouseleave(function() {
    $(this).css('background-color', '#341e0e');
    $('.gallery').css('visibility', 'hidden');
  });

  $('.fourth-tool').mouseleave(function() {
    $(this).css('background-color', '#27190d');
    $('.about').css('visibility', 'hidden');
  });

  $('.fifth-tool').mouseleave(function() {
    $(this).css('background-color', '#180c01');
    $('.reviews').css('visibility', 'hidden');
  });

  //-----------on click events-----------

  $('.instagram img').click(function() {
    window.open('https://www.instagram.com/arrieoliver/?hl=en');
  });

  $('.email img').click(function() {
    window.open('https://www.google.com/');
  });


  //------close modal--------
  var modal = $('.modal');
  var closeButton = $(".close");

  //------about modal---------
  var leftArrow = $('a.carousel-prev');
  var rightArrow = $('a.carousel-next');

  var aboutModal = $('#about-modal');
  var aboutButton = $(".about img");

  $(aboutButton).click(function() {
    $(aboutModal).css('display', 'block');
  });

  //------review modal---------

  var reviewModal = $('#review-modal');
  var reviewButton = $(".reviews img");

  $(reviewButton).click(function() {
    $(reviewModal).css('display', 'block');
    $('.review-slide').eq(0).css('display', 'block');
  });

  //------gallery modal---------

  var galleryModal = $('#gallery-modal');
  var galleryButton = $(".gallery img");

  $(galleryButton).click(function() {
    $(galleryModal).css('display', 'block');
  });

  $(leftArrow).click(function() {
    var slideCounter = 0;
    $('.review-slide.active').removeClass('active');
    $('.review-slide')
    $('.review-slide').eq(2).toggleClass('active');
  });

  $(rightArrow).click(function() {
    $('.review-slide').eq(0).toggleClass('active');
    $('.review-slide').eq(1).toggleClass('active');
  });

  //-----carousel buttons-----


  $(closeButton).click(function() {
    $(modal).css('display', 'none');
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log('stuff');
    }
  }
});