$(document).ready(function(){  
  $('.go2').click(function(){
    var id = $(this).attr('id');
    $('.page').hide();
    $('.' + id).show();
  });
  
});
function fadeIn(obj) {
  $(obj).fadeIn(7000);
}
