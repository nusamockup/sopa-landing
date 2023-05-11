// *** RUN YOUTUBE VIDEO IN CLICK

(function () {
  let video =
      "<iframe class='embed-responsive-item' src='https://user-images.githubusercontent.com/121804038/237766347-5e3a1790-3149-45e6-acf5-d29ecb88bc43.mp4' autoplay frameborder='0' allowfullscreen></iframe>";
  let video_frame = $('.video__video');
  video_frame.on('click', function (e) {
    e.preventDefault();
    let videoId = $(this).attr('data-video');
    video_frame.addClass('video__video--loading');
    $('.video__video .embed-responsive').html(video.replace('{%video%}', videoId));
    video_frame
      .removeClass('video__video--loading')
      .addClass('video__video--loaded')
      .off('click')
  });
})();
