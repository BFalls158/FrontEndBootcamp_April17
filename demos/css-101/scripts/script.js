$(document).ready(function() {

  $('.radio-float').on('click', function(event) {
    $('#img-float').attr('class', $(this).val());
  });

  $('.slider').on('change', function() {
    $('.bluesquare').css('z-index', $(this).val());
    $('#blueindex').text($(this).val());
  });

});
