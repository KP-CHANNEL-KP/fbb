const streams = [
    "https://hoofootay4.spotlightmoment.com/embed/HEIcKcgh1MB8F",
    "https://multiembed.eu/embed/12345678",
    "https://footybite.to/embed/12345678",
    "https://sportsurge.net/embed/12345678",
    "https://stream2watch.io/embed/soccer/12345678",
    "https://ronaldo7.net/embed/12345678"
];

let i = 0;
const player = document.getElementById("player");
const loading = document.getElementById("loading");
const count = document.getElementById("count");

function load() {
    loading.style.display = "flex";
    player.src = streams[i];
    count.textContent = `Line \( {i+1}/ \){streams.length}`;
}
player.onload = () => loading.style.display = "none";
player.onerror = () => setTimeout(nextStream, 4000);

function nextStream() {
    i = (i + 1) % streams.length;
    load();
}
function reloadStream() {
    loading.style.display = "flex";
    player.src = player.src;
}

load();

// ပွဲစဉ်များ
const matches = ["မန်ယူ vs လီဗာပူး","ရီးယ်လ် vs ဘာစီလိုနာ","ဘိုင်ယန် vs ဒေါ့မွန်","ဂျူဗင်တပ် vs အင်တာ"];
document.getElementById("matches").innerHTML = matches.map(m => `<div class="match">⚽ ${m} • တိုက်ရိုက်</div>`).join("");
