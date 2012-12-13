$(document).ready(function(){  

  $('.go2').click(function(){
    var id = $(this).attr('id');
    $('.page').hide();
    $('.' + id).show();
  });

  $('img.background').imagesLoaded(function($images, $proper, $broken){
    $images.fadeIn(7000);
  });
  
});

