var video_player = document.getElementById("video_player");
if (video_player != null) {
  links = video_player.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = handler;
  }
}

function handler(e) {
  e.preventDefault();
  videotarget = this.getAttribute("href");
  video = document.querySelector("#video_player video");
  video.removeAttribute("controls");
  video.removeAttribute("poster");
  source = document.querySelectorAll("#video_player video source");
  source[0].src = videotarget;
  video.setAttribute("controls", "true");
  
  video.onloadedmetadata = function() {
    var el = $(document.getElementById("video_player"));
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;

    if (elHeight < windowHeight) {
      offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    } else {
      offset = elOffset;
    }
    var speed = 700;
    $('html, body').animate({
      scrollTop: offset
    }, speed);
  }

  video.load();
  video.play();
}

