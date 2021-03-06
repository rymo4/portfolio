(function($){
  jQuery.fn.youtubeFiller = function(videoId, options) {

    // Async loading of YT API
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    jQuery('html,body').css('height','100%');
    jQuery('body').prepend('<div id="yt-container" style="overflow: hidden; position: fixed; z-index: 1;"><div id="ytapiplayer">You need Flash player 8+ and JavaScript enabled to view this video.</div></div><div id="video-cover" style="position: fixed; width: 100%; height: 100%; z-index: 2;"></div>');
    
    var videoWidth = 853; // needed a default value -- this is overwritten almost immediately
    var videoRatio = 16/9;
    var videoHeight = videoWidth / videoRatio;
    var duration;

    // iframe embedded yt player
    var iframe = '<iframe id="player" width="' + videoWidth + '" height="' + videoHeight + '" src="http://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&modestbranding=1&showinfo=0&version=3&wmode=transparent&loop=1&start=10&playlist=' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    
    jQuery('#ytapiplayer').html(iframe);
    
    jQuery(window).resize(function() {
      resizePlayer();
    });

    function resizePlayer() {
      var newWidth = jQuery(window).width(); // original page width
      var newHeight = jQuery(window).height(); // original page height
      jQuery('#yt-container, #video-cover').width(newWidth).height(newHeight);
      if (newHeight > newWidth / videoRatio) { // if window ratio becomes taller than video
        newWidth = newHeight * videoRatio; // overflow video to sides instead of bottom
      }
      jQuery('#player').width(newWidth).height(newWidth/videoRatio);
    }
    resizePlayer();
    return this;
  }
})(jQuery);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
        rel: 0
      }
  });
}

function onPlayerReady(event) {
  var yt = event.target;
  yt.setPlaybackQuality('hd720');
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  }
}

$(document).ready(function(){
  $('#videoPause').click(function(){
    $('.icon-pause, .icon-play').toggleClass('icon-pause').toggleClass('icon-play');
    $this = $(this);
    if ($this.hasClass('paused')){
      player.playVideo();
    } else {
      player.pauseVideo();
    }
    $this.toggleClass('paused');
  });
  $('#videoMute').click(function(){
    $('.icon-volume-off, .icon-volume-up').toggleClass('icon-volume-off').toggleClass('icon-volume-up');
    $this = $(this);
    if ($this.hasClass('muted')){
      player.setVolume(100);
    } else {
      player.mute();
    }
    $this.toggleClass('muted');
  });
});
