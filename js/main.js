var arrow = document.querySelector("#arrow");
var playButton = document.querySelector(".play_button");
var forwardButton = document.querySelector("#forward_button");
var song = document.querySelector("#song");
var genre = "hello";
var genreBox = document.querySelector("#genre");
var oldgenre = "niks";
var songActive = 0;
var i = 0;

window.sr = ScrollReveal();
sr.reveal('.me');
sr.reveal('.workItem', {
    reset: true
});

document.addEventListener("scroll", function () {

    if (window.pageYOffset > 50) {
        console.log("Arrow stops");
        arrow.classList.remove("animated");
        arrow.classList.remove("infinite");
        arrow.classList.remove("bounce");
        arrow.style.display = "none";
    }

    if (window.pageYOffset < 50) {
        console.log("Arrow go");
        arrow.classList.add("animated");
        arrow.classList.add("infinite");
        arrow.classList.add("bounce");
        arrow.style.display = "block";

    }
});
// dance music
var dance = ["./audio/dance/Beam.mp3", "./audio/dance/IngridHybrid.mp3", "./audio/dance/Constellations.mp3"];

var danceNames = ["Beam", "Ingrid Is A Hybrid", "Constellations"];
var danceArtists = ["Mako", "Dusky", "Fred V & Grafix"];


song.src = dance[1];


genreBox.onchange = function () {
    console.log("ik werk");
    console.log(genreBox.value);
    console.log(oldgenre);


    oldgenre = genreBox.value;
}

function playPause() {
    if (songActive == 0) {
        song.play();
        playButton.classList.add("play_button_clicked");
        playButton.classList.remove("play_button");
        songActive = 1;
    } else {
        song.pause();
        songActive = 0;
        playButton.classList.toggle("play_button");
        playButton.classList.remove("play_button_clicked");
    }


}

//select next song
song.onended = nextSong();

function nextSong() {}
