$().ready(function() {
  $('body').tubular('wDmsCJTfTqs','wrapper');
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia
	
	// Play/Pause
	$('#videoPause').click(function() {
		if ($(this).hasClass('videoPaused')) {
			ytplayer.playVideo();
			$(this).removeClass('videoPaused');
		} else {
			ytplayer.pauseVideo();
			$(this).addClass('videoPaused');
		}
		return false;
	});
	
	// Mute/Unmute
	$('#videoMute').click(function() {
		if ($(this).hasClass('videoMute')) {
			ytplayer.mute();
			$(this).removeClass('videoMute');
		} else {
			ytplayer.unMute();
			$(this).addClass('videoMute');
		}
		return false;
	});
	
	// Nuke video (for slow connections -- stops loading entirely)
	$('#videoStop').click(function() {
		ytplayer.stopVideo();
		ytplayer.clearVideo();
		$('#yt-container').hide();
		return false;
	});
});
