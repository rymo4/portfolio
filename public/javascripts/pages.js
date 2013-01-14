$(document).ready(function(){

  var $link = $('[data-page]');
  $link.attr('href', '#')

  var go_to = function(page){
    $('.page').hide();
    $('#' + page).show();
  }

  $link.click(function(){
    var page = $(this).attr('data-page');
    go_to(page);
  });

  $('img.background').imagesLoaded(function($images, $proper, $broken){
    $images.fadeIn(7000);
  });
});

