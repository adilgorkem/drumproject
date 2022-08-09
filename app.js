
// Selection of html elements
const image = document.getElementById("image");
const section = document.getElementById("section");
const container = document.querySelector("#container");
const audio = document.querySelector('.audio1');
const audio2 = document.querySelector(".audio2");
const playdrums = document.getElementById("play-drums");

//Navbar Play Drums Click Event
playdrums.addEventListener("click", gotoNewPage);
function gotoNewPage() {
    audio2.play();
    setTimeout(function () {
        window.open("play-drums.html", "_self");
    }, 3000)
}

//Image Click Event
image.addEventListener("click", createDivPlayAudio);

function createDivPlayAudio() {
    if (document.getElementById("play-button")) {
        return;
    }// When clicked, function runs only once
    audio.play();

    setTimeout(function () { //Audio plays first, others initialize after 4 seconds
        const div = document.createElement("div");
        const linka = document.createElement("a");
        linka.href = "#";
        div.id = "play-button";
        // div.textContent = "Play Game";
        container.appendChild(div);
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        div.style.display = "inline";
        div.style.position = "absolute";
        div.style.textAlign = "center";
        div.style.justifyContent = "center";
        div.style.border = "rgb(229,234,168) solid 1px";
        div.style.borderRadius = "3px";
        div.appendChild(linka);
        linka.textContent = "Play Game";
        linka.style.textDecoration = "none";
        linka.style.color = "rgb(229,234,168)";
        linka.onmouseover = function hover() {
            linka.style.color = "gray";
        }
        linka.onmouseleave = function returnhover() {
            linka.style.color = "rgb(229,234,168)";
        }
        linka.onclick = function playbutton() {
            audio2.play();
            setTimeout(function () {
                window.open("play-drums.html", "_self")
            }, 3000);
        }
    }, 4000);
}

