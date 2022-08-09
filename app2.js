

// Selection of Buttons
function a(selectbutton) {
    const button = document.querySelector(`.${selectbutton}`);
    const audio = document.querySelector(`#${selectbutton}`);
    button.style.opacity = "1";
    function endstyle() {
        button.style.opacity = "0"
    };
    setTimeout(endstyle, 500);
    audio.load();
    audio.play();
}


// Key Event
document.addEventListener("keydown", keyFunction);


// Switch-Case Statement
function keyFunction(e) {
    switch (e.which) {
        case 86:
            a(`crash1`);
            break;

        case 66:
            a(`crash2`)
            break;

        case 78:
            a(`crash3`)
            break;

        case 77:
            a(`ride`)
            break;

        case 67:
            a(`hihatclosed`)
            break;

        case 88:
            a(`hihatopen`)
            break;

        case 190:
            a(`china`)
            break;

        case 37:
            a(`tom1`)
            break;

        case 38:
            a(`tom2`)
            break;

        case 39:
            a(`tom3`)
            break;

            case 83:
            a(`snare`)
            break;

            case 32:
            a(`kick`)
            break;

    }






// Version 1

     // const buttoN = document.getElementsByClassName(`buttonname`);
    // buttoN.style.opacity = "1";
    // setTimeout(endstyle(),500);
    // function endstyle(){
    //     buttoN.style.opacity = "0";
    // }

    //Selection of sounds
    // const crash1audio = document.querySelector("#crash1");
    // const crash2audio = document.querySelector("#crash2");
    // const crash3audio = document.querySelector("#crash3");
    // const rideaudio = document.querySelector("#ride");
    // const closedhihataudio = document.querySelector("#hihatclosed");
    // const openhihataudio = document.querySelector("#hihatopen");
    // const chinaaudio = document.querySelector("#china");
    // const tom1audio = document.querySelector("#tom1");
    // const tom2audio = document.querySelector("#tom2");
    // const tom3audio = document.querySelector("#tom3");
    // const snareaudio = document.querySelector("#snare");
    // const kickaudio = document.querySelector("#kick");

    // // Key Events
    // if (e.which === 86) { //V
    //     const crash1 = document.querySelector(".crash1");
    //     crash1.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         crash1.style.opacity = "0";
    //     }
    //     crash1audio.play();
    // }
    // if (e.which === 66) { //B
    //     const crash2 = document.querySelector(".crash2");
    //     crash2.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         crash2.style.opacity = "0";
    //     }
    //     crash2audio.play();
    // }
    // if (e.which === 78) { //N
    //     const crash3 = document.querySelector(".crash3");
    //     crash3.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         crash3.style.opacity = "0";
    //     }
    //     crash3audio.play();
    // }
    // if (e.which === 77) { //M
    //     const ride = document.querySelector(".ride");
    //     ride.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         ride.style.opacity = "0";
    //     }
    //     rideaudio.play();
    // }
    // if (e.which === 67) { //C
    //     const hihatclosed = document.querySelector(".hihatclosed");
    //     hihatclosed.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         hihatclosed.style.opacity = "0";
    //     }
    //     closedhihataudio.play();
    // }
    // if (e.which === 88) { //X
    //     const hihatopen = document.querySelector(".hihatopen");
    //     hihatopen.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         hihatopen.style.opacity = "0";
    //     }
    //     openhihataudio.play();
    // }
    // if (e.which === 190) { //Ç
    //     const china = document.querySelector(".china");
    //     china.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         china.style.opacity = "0";
    //     }
    //     chinaaudio.play();
    // }
    // if (e.which === 37) { //ArrowLeft
    //     const tom1 = document.querySelector(".tom1");
    //     tom1.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         tom1.style.opacity = "0";
    //     }
    //     tom1audio.play();
    // }
    // if (e.which === 38) { //ArrowUp
    //     const tom2 = document.querySelector(".tom2");
    //     tom2.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         tom2.style.opacity = "0";
    //     }
    //     tom2audio.play();
    // }
    // if (e.which === 39) { //ArrowRight
    //     const tom3 = document.querySelector(".tom3");
    //     tom3.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         tom3.style.opacity = "0";
    //     }
    //     tom3audio.play();
    // }
    // if (e.which === 83) { //S
    //     const snare = document.querySelector(".snare");
    //     snare.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         snare.style.opacity = "0";
    //     }
    //     snareaudio.play();
    // }
    // if (e.which === 32) { //Space
    //     const kick = document.querySelector(".kick");
    //     kick.style.opacity = "1";
    //     setTimeout(endstyle, 500);
    //     function endstyle() {
    //         kick.style.opacity = "0";
    //     }
    //     kickaudio.play();
    // }
}
