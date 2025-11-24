// မင်း လက်ရှိ အသုံးပြုနေတဲ့ အကောင်းဆုံး link တွေ အကုန်ထည့်ထား
const streams = [
    "https://hoofootay4.spotlightmoment.com/embed/HEIcKcgh1MB8F",
    "https://multiembed.eu/embed/12345678",
    "https://footybite.to/embed/12345678",
    "https://sportsurge.net/embed/12345678",
    "https://stream2watch.io/embed/soccer/12345678"
];

let current = 0;
const iframe = document.getElementById("stream");
const loading = document.getElementById("loading");
const status = document.getElementById("status");

function load() {
    loading.style.display = "block";
    iframe.src = streams[current];
    status.textContent = `Stream \( {current + 1}/ \){streams.length}`;
}

iframe.onload = () => {
    loading.style.display = "none";
};

iframe.onerror = () => {
    nextStream();
};

function nextStream() {
    current = (current + 1) % streams.length;
    load();
}

function reloadStream() {
    loading.style.display = "block";
    iframe.src = iframe.src; // reload current
    setTimeout(() => loading.style.display = "none", 3000);
}

// ပထမ တစ်ခု ဖွင့်
load();

// ပွဲစဉ်များ (နေ့စဉ် ပြောင်းပါ)
const todayMatches = [
    "19:30 • Manchester United vs Liverpool • Premier League",
    "22:00 • Real Madrid vs Barcelona • La Liga",
    "20:45 • Bayern Munich vs Dortmund • Bundesliga",
    "21:00 • Juventus vs Inter • Serie A"
];

document.getElementById("matches").innerHTML = todayMatches.map(m => 
    `<div class="match"><span>⚽ ${m}</span><span>Live</span></div>`
).join("");
