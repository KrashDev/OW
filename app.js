$(document).ready(function() {

  // ------------ modal content -----------------

  // Open the Modal
  function openModal() {
    $('#myModal').style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    $('#myModal').style.display = "none";
  }

  // var slideIndex = 1;
  // showSlides(slideIndex);
  //
  // // Next/previous controls
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  //
  // // Thumbnail image controls
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  //
  // function showSlides(n) {
  //   var i;
  //   var slides = $(".mySlides");
  //   var dots = $(".demo");
  //   if (n > slides.length) {
  //     slideIndex = 1
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // }
  //


  // ------------ mouse content -----------------

  $('.tool-cards div').mouseenter(function() {
    $(this).css('background-color', 'transparent');
  });

  $('img[role="button"]').mouseenter(function() {
    $(this).css('opacity', '.7');
  });

  $('img[role="button"]').mouseleave(function() {
    $(this).css('opacity', '1');
  });

  //-------mouse enter display widgets-----

  $('.first-tool').mouseenter(function() {
    $(this).css('background-color', 'transparent');
    $('.instagram').css('visibility', 'visible');
    $('#hammer').css('visibility', 'hidden');
  });

  $('.second-tool').mouseenter(function() {
    $('.email').css('visibility', 'visible');
    $('#lathe').css('visibility', 'hidden');
  });

  $('.third-tool').mouseenter(function() {
    $('.gallery').css('visibility', 'visible');
    $('#twisty').css('visibility', 'hidden');
  });

  $('.fourth-tool').mouseenter(function() {
    $('.about').css('visibility', 'visible');
    $('#saw').css('visibility', 'hidden');
  });

  $('.fifth-tool').mouseenter(function() {
    $('.reviews').css('visibility', 'visible');
    $('#chisel').css('visibility', 'hidden');
  });

  //---------end code block----------------

  //--------mouse leave code--------------


  $('.first-tool').mouseleave(function() {
    $(this).css('background-color', '#523212');
    $('.instagram').css('visibility', 'hidden');
    $('#hammer').css('visibility', 'visible');
  });

  $('.second-tool').mouseleave(function() {
    $(this).css('background-color', '#40230e');
    $('.email').css('visibility', 'hidden');
    $('#lathe').css('visibility', 'visible');
  });

  $('.third-tool').mouseleave(function() {
    $(this).css('background-color', '#341e0e');
    $('.gallery').css('visibility', 'hidden');
    $('#twisty').css('visibility', 'visible');
  });

  $('.fourth-tool').mouseleave(function() {
    $(this).css('background-color', '#27190d');
    $('.about').css('visibility', 'hidden');
    $('#saw').css('visibility', 'visible');
  });

  $('.fifth-tool').mouseleave(function() {
    $(this).css('background-color', '#180c01');
    $('.reviews').css('visibility', 'hidden');
    $('#chisel').css('visibility', 'visible');
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