const streams = [
    "https://hoofootay4.spotlightmoment.com/embed/HEIcKcgh1MB8F",
    "https://multiembed.eu/embed/12345678",
    "https://footybite.to/embed/12345678",
    "https://sportsurge.net/embed/12345678",
    "https://stream2watch.io/embed/soccer/12345678"
];

let current = 0;
const iframe = document.getElementById("stream");
const overlay = document.getElementById("overlay");
const status = document.getElementById("status");

function load() {
    overlay.style.display = "flex";
    iframe.src = streams[current];
    status.textContent = `Stream \( {current + 1}/ \){streams.length}`;
}

iframe.onload = () => overlay.style.display = "none";
iframe.onerror = () => setTimeout(nextStream, 4000);

function nextStream() {
    current = (current + 1) % streams.length;
    load();
}

function reloadStream() {
    overlay.style.display = "flex";
    iframe.src = iframe.src;
}

// Start
load();

// Today Matches
const matches = [
    "19:30 • Manchester United vs Liverpool • Premier League",
    "22:00 • Real Madrid vs Barcelona • La Liga",
    "20:45 • Bayern Munich vs Dortmund • Bundesliga",
    "21:00 • Juventus vs Inter • Serie A"
];

document.getElementById("matches").innerHTML = matches.map(m => 
    `<div class="match">⚽ ${m}</div>`
).join("");
