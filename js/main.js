var arrow = document.querySelector("#arrow");
var playButton = document.querySelector(".play_button");
var forwardButton = document.querySelector("#forward_button");
var artist = document.querySelector("#artist");
var title = document.querySelector("#title");
var song = document.querySelector("#song");
var genre = "hello";
var genreBox = document.querySelector("#genre");
var oldgenre = "niks";
var i = 0;
var songActive = false;
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
var dance = ["./audio/dance/Constellations.mp3", "./audio/dance/IngridHybrid.mp3", "./audio/dance/Beam.mp3"];

var danceTitles = ["Constellations", "Ingrid Is A Hybrid", "Beam"];
var danceArtists = ["Fred V & Grafix", "Dusky", "Mako"];


function changeGenre() {
    if (oldgenre != genreBox.value) {
        i = 0;
        console.log("ik trigger");
        console.log(genreBox.value);

        if (genreBox.value == "dancing") {

            console.log("ik dans");
            song.src = dance[i];
            playPause();
        }
    }
}



function playPause() {
    if (songActive == false) {
        song.play();
        playButton.classList.add("play_button_clicked");
        playButton.classList.remove("play_button");
        songActive = true;
    } else {
        song.pause();
        songActive = false;
        playButton.classList.toggle("play_button");
        playButton.classList.remove("play_button_clicked");
    }


}

//select next song
song.onended = nextSong();

function nextSong() {}
