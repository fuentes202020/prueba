var video_player = document.getElementById("video_player");
var video = video_player.getElementsByTagName("video")[0],
video_links = video_player.getElementsByTagName("figcaption")[0],
source = video.getElementsByTagName("source"),
link_list = [],
// You will use path= <--- to set the correct path to your videos here
path = '',
currentVid = 0,
// allLnks holds all info on referenced vids in figcaption
allLnks = video_links.children,
lnkNum = allLnks.length;
video.removeAttribute("controls");
video.removeAttribute("poster");

// in this script, I went through and corrected playVid and classList references
// starting with I removed :
/* (function() { <-- as this didn't really seem to serve a purpose
function playVid(index) {
video_links.children[index].classList.add("currentvid");
source[0].src = path + link_list[index] + ".mp4";
/* Commented out source[1] to keep things less confusing. Could use webm or mp4 as preferred item to laod if each has the same name */
// source[1].src = path + link_list[index] + ".webm";
currentVid = index;
video.load();
video.play();
}