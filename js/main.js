var arrow = document.querySelector("#arrow");
var playButton = document.querySelector(".play_button");
var playArea = document.querySelector(".play");
var forwardArea = document.querySelector(".forward");
var forwardButton = document.querySelector(".forward_button");
var artist = document.querySelector("#artist");
var title = document.querySelector("#title");
var song = document.querySelector("#song");
var genre = "hello";
var genreBox = document.querySelector("#genre");
var aside = document.querySelector("aside");
var sticky = aside.offsetTop;
var oldgenre = "niks";
var i = 0;
var songActive = false;
song.volume = 0.3;
var songPlayed = false;
var arrowStopped = false;

window.sr = ScrollReveal();
sr.reveal('.me');
sr.reveal('.workItem', {
    reset: true
});

document.addEventListener("scroll", function () {

    if (window.pageYOffset > 50) {
        if (arrowStopped == false) {
            arrowStopped = true;
            console.log("Arrow stops");
            arrow.classList.remove("animated");
            arrow.classList.remove("infinite");
            arrow.classList.remove("bounce");
            arrow.style.display = "none";
        }
    }
});

function float() {
    if (window.pageYOffset >= sticky) {
        if (songPlayed == true) {
            aside.classList.add("float");
        }
    } else {
        if (songPlayed == true) {
            aside.classList.remove("float");
        }
    }
}



window.onscroll = function () {
    float()
};
// dance music
var dance = ["./audio/dance/Constellations.mp3", "./audio/dance/IngridHybrid.mp3", "./audio/dance/Beam.mp3"];

var danceTitles = ["Constellations", "Ingrid Is A Hybrid", "Beam"];
var danceArtists = ["by Fred V & Grafix", "by Dusky", "by Mako"];

//rock
var rock = ["./audio/rock/Arabella.mp3", "./audio/rock/BFG.mp3", "./audio/rock/out_of_the_black.mp3"];
var rockTitles = ["Arabella", "BFG Division", "Out of the black"];
var rockArtists = ["by Artic Monkeys", " by Doom", "by Royal Blood"];

//indie
var indie = ["./audio/indie/Disposable.mp3", "./audio/indie/Handclap.mp3", "./audio/indie/hearts.mp3"];
var indieTitles = ["Disposable Friends", "Handclap", "we are the hearts"];
var indieArtists = ["by Humble Braggers", "by Fitz and the Tantrums", "by EXGF"];

function next() {
    console.log("next Song")
    if (i == 2) {
        i = 0;
    } else {
        i++;
    }

    if (genreBox.value == "dancing") {
        song.src = dance[i];
        artist.innerHTML = danceArtists[i];
        title.innerHTML = danceTitles[i];
        play();
    } else if (genreBox.value == "rock") {
        song.src = rock[i];
        console.log(song.src);
        artist.innerHTML = rockArtists[i];
        title.innerHTML = rockTitles[i];
        play();
    } else if (genreBox.value == "indie") {
        song.src = indie[i];
        artist.innerHTML = indieArtists[i];
        title.innerHTML = indieTitles[i];
        play();
    }
}

function changeGenre() {
    if (songPlayed == false) {
        playArea.style.opacity = 1;
        forwardArea.style.opacity = 1;
        songPlayed = true;
    }
    if (oldgenre != genreBox.value) {
        i = 0;
        console.log("genrebox changes");
        console.log("Genrebox value = " + genreBox.value);
        if (genreBox.value == "dancing") {
            song.src = dance[i];
            artist.innerHTML = danceArtists[i];
            title.innerHTML = danceTitles[i];
            play();
        } else if (genreBox.value == "rock") {
            song.src = rock[i];
            console.log(song.src);
            artist.innerHTML = rockArtists[i];
            title.innerHTML = rockTitles[i];
            play();
        } else if (genreBox.value == "indie") {
            song.src = indie[i];
            artist.innerHTML = indieArtists[i];
            title.innerHTML = indieTitles[i];
            play();
        }
    }
}



function playPause() {
    if (songActive == false) {

        playButton.classList.toggle("play_button_clicked");
        playButton.classList.toggle("play_button");
        songActive = true;
        song.play();
    } else {

        songActive = false;
        playButton.classList.toggle("play_button");
        playButton.classList.toggle("play_button_clicked");
        song.pause();
    }
}

function play() {
    song.play();
    playButton.classList.add("play_button_clicked");
    playButton.classList.remove("play_button");
    songActive = true;
}




//select next song


function nextSong() {}
