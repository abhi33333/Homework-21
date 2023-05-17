
//HW20


//HW 19

console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){

    // Show the form when the page loads
    $('.expandable').addClass('active');

    // Functionality for expanding and collapsing the form

 $('.expandable').on('click', function() {
    if ($('.form-content').is(':visible')) {
      $('.form-content').slideUp(function() {
        $('.form-content label, .form-content input').hide();
      });
      $('.expandable').addClass('active').text('Click here to expand the form');
    } else {
      $('.form-content label, .form-content input').show();
      $('.form-content').slideDown();
      $('.expandable').removeClass('active').text('Click here to collapse the form');
    }
  });

});