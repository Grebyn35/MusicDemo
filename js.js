const playBtn = document.getElementsByClassName("play");
const muteBtn = document.getElementsByClassName("mute");
const unmuteBtn = document.getElementsByClassName("unmute");
const sound1 = new Howl({src: ['s1.mp3']});
const sound2 = new Howl({src: ['s2.wav']});
const sound3 = new Howl({src: ['s3.wav']});

let id;


playBtn[0].onclick = function() {
    id = sound1.play();
}
playBtn[1].onclick = function() {
    id = sound2.play();
}
playBtn[2].onclick = function() {
    id = sound3.play();
}
muteBtn[0].onclick = function() {
    sound1.mute(true, id);
}
muteBtn[1].onclick = function() {
    sound2.mute(true, id);
}
muteBtn[2].onclick = function() {
    sound3.mute(true, id);
}
unmuteBtn[0].onclick = function() {
    sound1.mute(false, id);
}
unmuteBtn[1].onclick = function() {
    sound2.mute(false, id);
}
unmuteBtn[2].onclick = function() {
    sound3.mute(false, id);
}

sound1.on('end', function(){ playBtn[0].disabled = false; });
sound1.on('play', function(){ playBtn[0].disabled = true; });

sound2.on('end', function(){ playBtn[1].disabled = false; });
sound2.on('play', function(){ playBtn[1].disabled = true; });

sound3.on('end', function(){ playBtn[2].disabled = false; });
sound3.on('play', function(){ playBtn[2].disabled = true; });