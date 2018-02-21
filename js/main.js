//select beam by Mako as standard song

var arrow = document.querySelector("#arrow");
var playButton = document.querySelector(".play_button");
var forwardButton = document.querySelector("#forward_button");
var artist = document.querySelector("#artistName");
var title = document.querySelector("#songName");
var song = document.querySelector("#song");
var genre = "hello";
var genreBox = document.querySelector("#genre");
var oldgenre = "niks";
var songActive = false;
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
var dancing = ["./audio/dance/Beam.mp3", "./audio/dance/IngridHybrid.mp3", "./audio/dance/Constellations.mp3"];
var danceTitles = ["Beam", "Ingrid Is A Hybrid", "Constellations"];
var danceArtists = ["Mako", "Dusky", "Fred V & Grafix"];



song.src = dancing[0];

genreBox.onchange = function () {
    if (genreBox.value != oldgenre) {
        oldgenre = genreBox.value;

        i = 0;
        console.log("genreboxvalue = " + genreBox.value);
        if (genreBox.value == "dancing") {
            console.log("hi");
            song.src = dancing[0];
            title.innerHTML = danceTitles[i];
            artist.innerHTML = danceArtists[i];
            playPause();
            song.play();
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
