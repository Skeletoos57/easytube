// Variables and id's

let isInCinemaMode = false;
let isTitleHidden = false;
var currentURL = "https://www.youtube.com/embed/eTVfTnKIB8c";

let realVideo = document.getElementById("video");
let video = document.getElementById("principalVideo");
let urlInput = document.getElementById("urlInput");
let loadVideoBtn = document.getElementById("loadVideo");

let pasteButton = document.getElementById("pasteButton");
let cinemaModeBtn = document.getElementById("cinemaModeBtn");
let hideTitleBtn = document.getElementById("hideTitle");
let viewInYT = document.getElementById("viewInYT");

let firstPart = document.getElementById("firstPart");

// Adding events listeners

loadVideoBtn.addEventListener('click', () => {
    loadVideo();
})

urlInput.onfocus = function() {
    window.onkeydown = enterKey;
}

pasteButton.addEventListener('click', async (event) => {
    let data = await navigator.clipboard.readText();
    urlInput.value = data;
})

cinemaModeBtn.addEventListener('click', () => {
    cinemaMode();
})

hideTitleBtn.addEventListener('click', function() {
    changeTitleState();
})

viewInYT.addEventListener('click', () => {
    window.open(currentURL);
})

// Function load video

function enterKey() {

    let enterKey = event.keyCode;
    if (enterKey == 13) { loadVideo(); }
}

function loadVideo() {

    // Get link and code of the video
    let url = urlInput.value;

    if (!url.includes("https://www.youtube.com/watch?v=")) {
        alert("La URL no es valida (ejemplo: https://www.youtube.com/watch?v=codigo)");
    }else{
        currentURL = url;
        url = url.slice(32);

        // Convert the link to embed
        let newurl = "https://www.youtube.com/embed/" + url;
        currentURL = newurl;

        // Place and play the video
        if (!isInCinemaMode) {
            video.innerHTML = `<iframe id="video" width="950" height="500" src="${newurl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }else{
            video.innerHTML = `<iframe id="video" width="1300" height="600" src="${newurl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        urlInput.value = "";
    }
}

function cinemaMode() {

    realVideo = document.getElementById("video");

    if (!isInCinemaMode) {
        realVideo.style.width = "1300px";
        realVideo.style.height = "600px";
        isInCinemaMode = true;
        cinemaModeBtn.value = "Desactivar Modo Cinema";
    }else{
        realVideo.style.width = "950px";
        realVideo.style.height = "500px";
        isInCinemaMode = false;
        cinemaModeBtn.value = "Activar Modo Cinema";
    }

}

function changeTitleState() {

    if (!isTitleHidden) {
        firstPart.style.display = "none";
        hideTitleBtn.value = "Mostrar Titulo"
        isTitleHidden = true;
    }else{
        firstPart.style.display = "flex";
        hideTitleBtn.value = "Ocultar Titulo"
        isTitleHidden = false;
    }

}