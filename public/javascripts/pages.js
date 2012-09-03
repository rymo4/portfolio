$(document).ready(function(){  
  $('.go2').click(function(){
    var id = $(this).attr('id');
    $('.page').hide();
    $('.' + id).show();
  });
});
