var arrow = document.querySelector("#arrow");
window.sr = ScrollReveal();
sr.reveal('.me', {
    reset: true,
});
sr.reveal('.workItem', {
    reset: true,
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
