const toggleMute = document.getElementsByClassName("toggle-mute");
const toolToggle = document.getElementById("tool-toggle")
let isFirstLoad = true;

var backtracks = [
    "/Backtracks/Peter Pants - original.mp3",
    "/Backtracks/Peter Pants - original - no vox.mp3",
    "/Backtracks/Peter Pants - DNB.mp3"
];

var notesPlayListOne = [
    "/PlaylistOne/Bend1.mp3",
    "/PlaylistOne/Bend2.mp3",
    "/PlaylistOne/Bend3.mp3",
    "/PlaylistOne/Bend4.mp3",
    "/PlaylistOne/Bend5.mp3",
    "/PlaylistOne/Bend6.mp3",
    "/PlaylistOne/Bend7.mp3"
];
var notesPlayListTwo = [
    "/PlaylistTwo/Blues1.mp3",
    "/PlaylistTwo/Blues2.mp3",
    "/PlaylistTwo/Dive.mp3",
    "/PlaylistTwo/Drill.mp3",
    "/PlaylistTwo/Drill2.mp3",
    "/PlaylistTwo/Lick1.mp3",
    "/PlaylistTwo/Waterfall.mp3"
];
var notes = notesPlayListOne;


const backtrack1 = new Howl({src: [backtracks[0]],preload: true, loop:true});
const backtrack2 = new Howl({src: [backtracks[1]],preload: true, loop:true});
const backtrack3 = new Howl({src: [backtracks[2]],preload: true, loop:true});
//const backtrack4 = new Howl({src: [backtracks[3]],preload: true, loop:true});

let n0 = new Howl({src: [notes[0]],preload: true, volume: 0.45});
let n1 = new Howl({src: [notes[1]],preload: true, volume: 0.45});
let n2 = new Howl({src: [notes[2]],preload: true, volume: 0.45});
let n3 = new Howl({src: [notes[3]],preload: true, volume: 0.45});
let n4 = new Howl({src: [notes[4]],preload: true, volume: 0.45});
let n5 = new Howl({src: [notes[5]],preload: true, volume: 0.45});
let n6 = new Howl({src: [notes[6]],preload: true, volume: 0.45});
let n7 = new Howl({src: [notes[7]],preload: true, volume: 0.45});
let n8 = new Howl({src: [notes[8]],preload: true, volume: 0.45});
let n9 = new Howl({src: [notes[9]],preload: true, volume: 0.45});
let n10 = new Howl({src: [notes[10]],preload: true, volume: 0.45});
let n11 = new Howl({src: [notes[11]],preload: true, volume: 0.45});
let n12 = new Howl({src: [notes[12]],preload: true, volume: 0.45});
let n13 = new Howl({src: [notes[13]],preload: true, volume: 0.45});
let n14 = new Howl({src: [notes[14]],preload: true, volume: 0.45});

let notesArray = [];
notesArray.push(n0);
notesArray.push(n1);
notesArray.push(n2);
notesArray.push(n3);
notesArray.push(n4);
notesArray.push(n5);
notesArray.push(n6);
notesArray.push(n7);    
notesArray.push(n8);
notesArray.push(n9);
notesArray.push(n10);
notesArray.push(n11);
notesArray.push(n12);
notesArray.push(n13);
notesArray.push(n14);

function updateNotes(){
    n0 = new Howl({src: [notes[0]],preload: true, volume: 0.45});
    n1 = new Howl({src: [notes[1]],preload: true, volume: 0.45});
    n2 = new Howl({src: [notes[2]],preload: true, volume: 0.45});
    n3 = new Howl({src: [notes[3]],preload: true, volume: 0.45});
    n4 = new Howl({src: [notes[4]],preload: true, volume: 0.45});
    n5 = new Howl({src: [notes[5]],preload: true, volume: 0.45});
    n6 = new Howl({src: [notes[6]],preload: true, volume: 0.45});
    n7 = new Howl({src: [notes[7]],preload: true, volume: 0.45});
    n8 = new Howl({src: [notes[8]],preload: true, volume: 0.45});
    n9 = new Howl({src: [notes[9]],preload: true, volume: 0.45});
    n10 = new Howl({src: [notes[10]],preload: true, volume: 0.45});
    n11 = new Howl({src: [notes[11]],preload: true, volume: 0.45});
    n12 = new Howl({src: [notes[12]],preload: true, volume: 0.45});
    n13 = new Howl({src: [notes[13]],preload: true, volume: 0.45});
    n14 = new Howl({src: [notes[14]],preload: true, volume: 0.45});

    notesArray = [];
    notesArray.push(n0);
    notesArray.push(n1);
    notesArray.push(n2);
    notesArray.push(n3);
    notesArray.push(n4);
    notesArray.push(n5);
    notesArray.push(n6);
    notesArray.push(n7);
    notesArray.push(n8);
    notesArray.push(n9);
    notesArray.push(n10);
    notesArray.push(n11);
    notesArray.push(n12);
    notesArray.push(n13);
    notesArray.push(n14);
}

toggleMute[0].onclick = function() {
    firstLoad(backtrack1)
    let toggle = toggleMute[0].getAttribute("status")
    if(toggle=="Mute"){
        backtrack1.mute(true);
        toggleMute[0].setAttribute("status", "Unmute")
    }
    else{
        selectTrack(toggleMute[0], backtrack1)
    }
    console.log("Button 1")
}
toggleMute[1].onclick = function() {
    firstLoad(backtrack2)
    let toggle = toggleMute[1].getAttribute("status")
    if(toggle=="Mute"){
        backtrack2.mute(true);
        toggleMute[1].setAttribute("status", "Unmute")
    }
    else{
        selectTrack(toggleMute[1], backtrack2)
    }
    console.log("Button 2")
}
toggleMute[2].onclick = function() {
    firstLoad(backtrack3)
    let toggle = toggleMute[2].getAttribute("status")
    if(toggle=="Mute"){
        backtrack3.mute(true);
        toggleMute[2].setAttribute("status", "Unmute")
    }
    else{
        selectTrack(toggleMute[2], backtrack3)
    }
    console.log("Button 3")
}
//toggleMute[3].onclick = function() {
//    firstLoad(backtrack4)
//    let toggle = toggleMute[3].getAttribute("status")
//    if(toggle=="Mute"){
//        backtrack4.mute(true);
//        toggleMute[3].setAttribute("status", "Unmute")
//    }
//    else{
//        selectTrack(toggleMute[3], backtrack4)
//    }
//    console.log("Button 4")
//}
function selectTrack(button, track){
    toggleMute[0].setAttribute("status", "Unmute")
    toggleMute[1].setAttribute("status", "Unmute")
    toggleMute[2].setAttribute("status", "Unmute")
    //toggleMute[3].setAttribute("status", "Unmute")
    
    backtrack1.mute(true);
    backtrack2.mute(true);
    backtrack3.mute(true);
    //backtrack4.mute(true);
    
    track.mute(false)
}
function unmuteDisplay(){
    toggleMute[0].setAttribute("status", "Unmute")
    toggleMute[1].setAttribute("status", "Unmute")
    toggleMute[2].setAttribute("status", "Unmute")
    //toggleMute[3].setAttribute("status", "Unmute")
}

toolToggle.onclick = function() {
    let toggle = toolToggle.getAttribute("status")
    if(toggle=="Pause"){
        console.log("Paused!")
        pauseBacktracks()
        toolToggle.setAttribute("status", "Play")
    }
    else{
        console.log("Playing!")
        playBacktracks()
        toolToggle.setAttribute("status", "Pause")
    }
}
function firstLoad(track){
    if(isFirstLoad){
        showToolButtons()
        playBacktracks()
        backtrack1.mute(true);
        backtrack2.mute(true);
        backtrack3.mute(true);
        //backtrack4.mute(true);
        track.mute(false);
        isFirstLoad = false;
    }
}
document.getElementById("stop").onclick = function() {
    console.log("Stopped playing tracks!")
    toolToggle.setAttribute("status", "Pause")
    stopBacktracks()
    unmuteDisplay()
    isFirstLoad = true;
    hideToolButtons()
}

function playNote(index){
    muteNotes()
    notesArray[index].play()
}
function muteNotes(){
    for(let i = 0; i<notesArray.length;i++){
        notesArray[i].stop();
    }
}
function pauseBacktracks(){
    backtrack1.pause()
    backtrack2.pause()
    backtrack3.pause()
    //backtrack4.pause()
}
function playBacktracks(){
    backtrack1.playing() ? backtrack1.mute(false) : backtrack1.play();
    backtrack2.playing() ? backtrack2.mute(false) : backtrack2.play();
    backtrack3.playing() ? backtrack3.mute(false) : backtrack3.play();
    //backtrack4.playing() ? backtrack4.mute(false) : backtrack4.play();
}
function stopBacktracks(){
    backtrack1.stop();
    backtrack2.stop();
    backtrack3.stop();
    //backtrack4.stop();
}
function hideToolButtons(){
    document.getElementById("stop").style.display="none"
    document.getElementById("playDiv").style.display="none"
}
function showToolButtons(){
    document.getElementById("stop").style.display=""
    document.getElementById("playDiv").style.display=""
}
hideToolButtons()

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if(event.key == "a") {
        muteNotes()
        playNote(0)
    }
    else if(event.key == "s") {
        muteNotes()
        playNote(1)
    }
    else if(event.key == "d") {
        muteNotes()
        playNote(2)
    }
    else if(event.key == "f") {
        muteNotes()
        playNote(3)
    }
    else if(event.key == "g") {
        muteNotes()
        playNote(4)
    }
    else if(event.key == "h") {
        muteNotes()
        playNote(5)
    }
    else if(event.key == "j") {
        muteNotes()
        playNote(6)
    }
    else if(event.key == "k") {
        muteNotes()
        playNote(7)
    }
    else if(event.key == "l") {
        muteNotes()
        playNote(8)
    }
    else if(event.key == "??") {
        muteNotes()
        playNote(9)
    }
    else if(event.key == "??") {
        muteNotes()
        playNote(10)
    }
    else if(event.key == "'") {
        muteNotes()
        playNote(11)
    }
});
function changenotesPlaylist(){
    let status = document.getElementById("statusButton").getAttribute("status")
    if(status == "notesPlaylistOne"){
        document.getElementById("statusButton").setAttribute("status", "notesPlaylistTwo")
        document.getElementById("iconStatusButtonOne").style.display = "none"
        document.getElementById("iconStatusButtonTwo").style.display = ""
        notes = notesPlayListTwo;
        updateNotes()
    }
    else if(status == "notesPlaylistTwo"){
        document.getElementById("statusButton").setAttribute("status", "notesPlaylistOne")
        document.getElementById("iconStatusButtonOne").style.display = ""
        document.getElementById("iconStatusButtonTwo").style.display = "none"
        notes = notesPlayListOne;
        updateNotes()
    }
}