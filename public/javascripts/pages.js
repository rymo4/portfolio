$(document).ready(function(){
  var track_link = function(type, target){
    if (window.location.href.indexOf('localhost') !== -1){
      console.log("Ignoring track event");
      return;
    }
    if (type === 'internal'){
      mixpanel.track("view", {type: type, target: target});
    } else {
      mixpanel.track_link("view", {type: type, target: target});
    }
  };
  var $link = $('[data-page]');
  $link.attr('href', '#')
  $('a:not([data-page])').click(function(l){
    var href = $(this).attr('href');
    if (href !== '#'){
      track_link("external", href);
    }
  });

  var go_to = function(page){
    track_link("internal", page);
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

