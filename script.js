"use strict"

let crash = document.getElementById("crash");
let hiHat = document.getElementById("hiHat");

let audioCrash = document.getElementById("audio-crash");
let audioRide = document.getElementById("audio-ride");
let audioFloorTom = document.getElementById("audio-tom-floor");
let audioTomMid = document.getElementById("audio-tom-mid");
let audioTomHigh = document.getElementById("audio-tom-high");
let audioKick = document.getElementById("audio-kick");
let audioSnare = document.getElementById("audio-snare");
let audioHiHatOpen = document.getElementById("audio-hihat-open");
let audioHiHatClose = document.getElementById("audio-hihat-close");

let btnE = document.getElementById("E");
let btnR = document.getElementById("R");
let btnF = document.getElementById("F");
let btnG = document.getElementById("G");
let btnH = document.getElementById("H");
let btnV = document.getElementById("V");
let btnB = document.getElementById("B");
let btnJ = document.getElementById("J");
let btnI = document.getElementById("I");
let btnK = document.getElementById("K");

let controls = {
    "e": [btnE, audioCrash],
    "r": [btnR, audioRide],
    "f": [btnF, audioFloorTom],
    "g": [btnG, audioTomMid],
    "h": [btnH, audioTomHigh],
    "v": [btnV, audioKick],
    "b": [btnB, audioKick],
    "j": [btnJ, audioSnare],
    "i": [btnI, audioHiHatOpen],
    "k": [btnK, audioHiHatClose]
};




document.addEventListener("keydown", function(e) {

    playAudio(controls[e.key][1]);

    growBtn(controls[e.key][0]);

    if (e.key == 'e' || e.key == 'r') crash.style.transform = "rotate(0deg) scale(1.3)";

    if (e.key == 'k') hiHat.style.top = "104px";
});

document.addEventListener("keyup", function(e) {

    shrinkBtn(controls[e.key][0])

    if (e.key == 'e' || e.key == 'r') crash.style.transform = "rotate(-7deg) scale(1.3)";

    if (e.key == 'k') hiHat.style.top = "101px";
});






function playAudio(audio) {

    audio.currentTime = 0;
    audio.play();
}

function growBtn(btn) {

    btn.style.transform = "scale(1.1)";
}

function shrinkBtn(btn) {

    btn.style.transform = "scale(1)";
}