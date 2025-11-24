// Server စာရင်းကို ပိုမိုပြည့်စုံစေရန် Object Array အဖြစ် ပြောင်းလဲထားသည်။
const streams = [
    { url: "https://hoofootay4.spotlightmoment.com/embed/HEIcKcgh1MB8F", quality: "HD" },
    { url: "https://multiembed.eu/embed/12345678", quality: "SD" },
    { url: "https://footybite.to/embed/12345678", quality: "4K" },
    { url: "https://sportsurge.net/embed/12345678", quality: "HD" },
    { url: "https://stream2watch.io/embed/soccer/12345678", quality: "SD" }
];

let current = 0;
const iframe = document.getElementById("stream");
const loading = document.getElementById("loading");
const statusSpan = document.getElementById("status"); // ID ကို statusSpan ဟု ပြောင်းလိုက်သည်။
const matchesContainer = document.getElementById("matches");

/**
 * ⚽ Stream Server ကို စတင်တင်သည်။
 */
function loadStream() {
    const currentStream = streams[current];
    
    // Loading indicator ကို ချက်ချင်းပြသပြီး iframe src ကိုပြောင်းသည်။
    loading.style.opacity = '1';
    loading.style.display = "flex";
    
    // Server Link အသစ်ကို ထည့်သွင်း
    iframe.src = currentStream.url;
    
    // Server Status ကို Update လုပ်သည်။ (e.g., Server 1 (HD))
    statusSpan.textContent = `Server ${current + 1} (${currentStream.quality})`;
}

/**
 * ⏩ နောက်ထပ် Server သို့ ပြောင်းသည်။
 */
function nextStream() {
    // Loading ကို ချက်ချင်းပြပြီး User ကို စောင့်ခိုင်းသည်။
    loading.style.opacity = '1';
    loading.style.display = "flex";
    
    // 1 second စောင့်ပြီးမှ နောက် Server သို့ပြောင်းသည်။
    setTimeout(() => {
        current = (current + 1) % streams.length;
        loadStream();
    }, 1000); // 1 စက္ကန့် စောင့်သည်။
}

/**
 * 🔄 လက်ရှိ Server ကို Reload လုပ်သည်။
 */
function reloadStream() {
    loading.style.opacity = '1';
    loading.style.display = "flex";
    
    // iframe src ကို ပြန်ထည့်ပြီး reload
    iframe.src = iframe.src;
    
    // 3 စက္ကန့်အတွင်း ပြန်မတက်လျှင် Loading ကို ပိတ်သည်။
    setTimeout(() => {
         loading.style.opacity = '0';
    }, 3000);
}

// iframe အောင်မြင်စွာ တက်လာလျှင်
iframe.onload = () => {
    // CSS Transition အတွက် opacity ကို ပြောင်းလဲသည်။
    loading.style.opacity = '0'; 
    
    // Transition ပြီးဆုံးမှ display: none ပြန်လုပ်သည်။
    setTimeout(() => {
        loading.style.display = "none";
    }, 300); // CSS transition delay နှင့် ကိုက်ညီရမည်။
};

// iframe error တက်လျှင် (သို့မဟုတ် တက်မလာလျှင်)
iframe.onerror = () => {
    console.error(`Stream ${current + 1} is broken. Trying next one...`);
    // nextStream() ကို ခေါ်ပြီး နောက်တစ်ခုသို့ အလိုအလျောက်ပြောင်းသည်။
    nextStream();
};


// --- Match Data နှင့် Rendering ---

/**
 * Match data ကို ပိုမို Professional Card Structure နှင့် ကိုက်ညီစေရန် ပြင်ထားသည်။
 * - time: ပွဲစမည့်အချိန်
 * - home: အိမ်ရှင်အသင်း
 * - away: ဧည့်သည်အသင်း
 * - league: ပြိုင်ပွဲအမည်
 */
const todayMatches = [
    { time: "07:30 PM", home: "Man United", away: "Liverpool", league: "Premier League" },
    { time: "10:00 PM", home: "Real Madrid", away: "Barcelona", league: "La Liga" },
    { time: "08:45 PM", home: "Bayern Munich", away: "Dortmund", league: "Bundesliga" },
    { time: "11:00 PM", home: "Juventus", away: "Inter", league: "Serie A" }
];


/**
 * 🏟️ ပွဲစဉ် Data များကို HTML Cards အဖြစ်သို့ ပြောင်းလဲသည်။
 * @param {object} match - ပွဲစဉ် အချက်အလက်
 * @returns {string} - HTML String (Match Card)
 */
function renderMatchCard(match) {
    return `
        <div class="match-card">
            <div class="league">${match.league}</div>
            <div class="teams">
                <span>${match.home}</span>
                <span class="vs">VS</span>
                <span>${match.away}</span>
            </div>
            <div class="match-time">
                <i class="far fa-clock"></i> ${match.time}
            </div>
            <button class="watch-btn" onclick="loadStream()">Watch Live</button>
        </div>
    `;
}

// Match Container ကို HTML များဖြည့်သွင်းသည်။
matchesContainer.innerHTML = todayMatches.map(renderMatchCard).join("");


// --- စတင်ဖွင့်လှစ်ခြင်း ---
document.addEventListener('DOMContentLoaded', loadStream);
