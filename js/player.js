// မင်းပွဲရဲ့ တကယ့် ID တွေ ထည့်ပြီး သုံးပါ
const streams = [
    "https://multiembed.eu/embed/12345678",           // အဓိက
    "https://footybite.to/embed/12345678",            // backup 1
    "https://sportsurge.net/embed/12345678",          // backup 2
    "https://stream2watch.io/embed/soccer/12345678",  // backup 3
    "https://ronaldo7.net/embed/12345678"             // backup 4
];

let currentStream = 0;
const frame = document.getElementById("stream-frame");

function loadStream() {
    frame.src = streams[currentStream];
}

frame.onload = frame.onreadystatechange = () => { console.log("Loaded:", streams[currentStream]); };
frame.onerror = () => {
    currentStream++;
    if (currentStream < streams.length) {
        console.log("Stream failed, switching to backup...");
        setTimeout(loadStream, 4000);
    } else {
        frame.src = "about:blank";
        alert("All streams are currently down. Please try again later.");
    }
};

function changeQuality(q) {
    alert(q + " selected - လိုချင်ရင် multi-quality links ထည့်ပေးမယ်");
}

// စတက်တဲ့အခါ ပထမ stream ကို ဖွင့်
loadStream();
