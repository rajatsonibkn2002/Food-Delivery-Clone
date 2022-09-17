var playButton = document.getElementById("play-button");
var video = document.getElementById("food-video");

video.pause();

video.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.style.display="none";
  } else {
    video.pause();
    playButton.style.display="block";
  }
});

playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
      playButton.style.display="none";
    } else {
      video.pause();
      playButton.style.display="block";
    }
});

$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});