"use strict"

init();

function init() {
    pageBind();
    window.addEventListener("scroll", reveal);
}

function pageBind() {
    setTimeout(() => {
        document.getElementById("sectionFirst").classList.add("action-logo")
    }, 1000)

}

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}



