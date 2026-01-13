let arr = [
  {
    songName: "Lovely",
    artist: "Billie Eilish",
    artistDescription:
      "Billie Eilish is an American singer-songwriter who rose to global fame for her unique whisper-style vocals, dark pop sound, and deeply emotional lyrics. She is known for breaking traditional pop norms, experimenting with minimal production, and addressing themes like mental health, loneliness, and self-identity in her music.",
    songPoster: "img/Lovely.webp",
    artistPoster: "img/billie elilish.png",
    url: "audio/Billie_Eilish_Khalid_-_Lovely_(mp3.pm).mp3",
  },

  {
    songName: "Raat Ki Rani",
    artist: "Seedhe Maut",
    artistDescription:
      "Seedhe Maut is a Delhi-based hip-hop duo consisting of Calm and Encore ABJ. They are widely respected in the Indian underground rap scene for their raw lyricism, sharp wordplay, and socially conscious storytelling. Their music reflects urban realities, youth struggles, and the evolution of desi hip-hop culture.",
    songPoster: "img/raat ki rani.jpg",
    artistPoster: "img/seedhe maut poster.jpg",
    url: "audio/Raat Ki Rani - Seedhe Maut (pagalall.com).mp3",
  },

  {
    songName: "Sad",
    artist: "XXXTENTACION",
    artistDescription:
      "XXXTENTACION was an American rapper and songwriter known for his emotionally intense music and genre-blending style. His work often explored themes of depression, heartbreak, inner conflict, and personal pain, which helped him build a deep emotional connection with a global youth audience.",
    songPoster: "img/sad.jpg",
    artistPoster: "img/tentaxion.jpg",
    url: "audio/XXXTENTACION-SAD-(TopGhanaMusic.Com).mp3",
  },

  {
    songName: "On My Way",
    artist: "Alan Walker",
    artistDescription:
      "Alan Walker is a Norwegian DJ, producer, and electronic music artist best known for his cinematic melodies and atmospheric sound. His music blends EDM with emotional storytelling, often featuring themes of journey, hope, and self-discovery, making his tracks popular worldwide.",
    songPoster: "img/on my way.jpg",
    artistPoster: "img/alan walker poster.jpg",
    url: "audio/Alan_Walker_Sabrina_Carpenter_-_On_My_Way_(mp3.pm).mp3",
  },

  {
    songName: "Perfect",
    artist: "Ed Sheeran",
    artistDescription:
      "Ed Sheeran is an English singer-songwriter famous for his heartfelt songwriting, acoustic guitar-driven sound, and romantic ballads. He has achieved massive global success by blending pop, folk, and soul influences, often writing songs inspired by personal experiences and relationships.",
    songPoster: "img/perfect.jpg",
    artistPoster: "img/ed sheeran poster.jpg",
    url: "audio/Edd_Sheeran_-_Perfect_(mp3.pm).mp3",
  },

  {
    songName: "Die With A Smile",
    artist: "Bruno Mars",
    artistDescription:
      "Bruno Mars is an American singer, songwriter, and performer known for his energetic stage presence and versatile musical style. His music draws inspiration from funk, soul, R&B, and pop, and he is widely praised for his powerful vocals, retro influences, and chart-topping hits.",
    songPoster: "img/die with smile.jpg",
    artistPoster: "img/bruno mars.jpeg",
    url: "audio/Die With A Smile-(SambalpuriStar.In).mp3",
  },
];


let songDiv = document.querySelector("#song-div");
let audio = new Audio();

let mid1 = document.querySelector("#mid-1");
let mid2 = document.querySelector("#mid-2");
let playbar1 = document.querySelector("#playbar-1");
let playbar3 = document.querySelector("#playbar-3");
let play = document.querySelector("#play");

let forward = document.querySelector("#forward");
let backward = document.querySelector("#back");

let rightTop = document.querySelector("#right-top");
let rightBottom = document.querySelector("#right-bottom");

let selectedSong = 0;
let flag = 0;

/* ================= SONG LIST ================= */

function displaySongs() {
  let clutter = "";
  arr.forEach((elem, idx) => {
    clutter += `
      <div id="${idx}" class="song">
        <div id="song-poster">
          <img src="${elem.songPoster}">
        </div>
        <div id="title">
          <h4>${elem.songName}</h4>
          <p>By ${elem.artist}</p>
        </div>
        <div id="liked">
          <h2>1234</h2>
          <i #like class="ri-heart-line"></i>
        </div>
      </div>
    `;
  });

  songDiv.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
}
displaySongs();

/* ================= UI UPDATE ================= */

function updateUI() {
  audio.src = arr[selectedSong].url;
  audio.play();

  play.classList.remove("ri-play-fill");
  play.classList.add("ri-pause-fill");
  flag = 1;

  mid1.style.height = "50%";
  mid2.style.height = "50%";

  mid1.innerHTML = `
    <div id="overlay">
      <div id="nav">
        <i class="ri-arrow-left-wide-line"></i>
        <i class="ri-arrow-right-wide-line"></i>
        <input type="text" placeholder="Search for artists,songs,albums"/>
        <div id="profile">
          <img src="img/profile.jpg">
          <h3>harshit Tiwari</h3>
        </div>
      </div>
      <div id="hero">
        <h1>${arr[selectedSong].artist}</h1>
         <div> <button id="btn1">PLAY NOW</button>
        <button id="btn2">FOLLOW</button></div>
      </div>
    </div>
    <img class="artist-poster" src="${arr[selectedSong].artistPoster}">
  `;

  playbar1.innerHTML = `
    <div id="poster">
      <img src="${arr[selectedSong].songPoster}">
    </div>
    <div id="song-details">
      <h2>${arr[selectedSong].songName}</h2>
      <h3>${arr[selectedSong].artist}</h3>
    </div>
  `;

  playbar3.innerHTML = `
    <i class="ri-share-line"></i>
    <i class="ri-volume-up-fill"></i>
    <i class="ri-alarm-snooze-line"></i>
  `;

  updateRightSidebar();
}

/* ================= RIGHT SIDEBAR ================= */

function updateRightSidebar() {
  let nextSongs = arr.filter((_, i) => i !== selectedSong).slice(0, 4);

  rightTop.innerHTML = `
    <div class="rs-head">Up Next</div>
    <div class="queue-list">
      ${nextSongs
        .map(
          (song) => `
        <div class="queue-item">
          <img src="${song.songPoster}">
          <span>${song.songName}</span>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  rightBottom.innerHTML = `
    <div class="artist-footer">
      <div class="artist-left">
        <img src="${arr[selectedSong].artistPoster}">
        <div>
          <h4>${arr[selectedSong].artist}</h4>
          <p>${arr[selectedSong].artistDescription}</p>
        </div>
      </div>
      <div class="artist-actions">
       
      </div>
    </div>
  `;
}

/* ================= EVENTS ================= */

songDiv.addEventListener("click", (e) => {
  let song = e.target.closest(".song");
  if (!song) return;
  selectedSong = Number(song.id);
  updateUI();
});

play.addEventListener("click", () => {
  if (flag === 0) {
    play.classList.replace("ri-play-fill", "ri-pause-fill");
    audio.play();
    flag = 1;
  } else {
    play.classList.replace("ri-pause-fill", "ri-play-fill");
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", () => {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    updateUI();
  }
});

backward.addEventListener("click", () => {
  if (selectedSong > 0) {
    selectedSong--;
    updateUI();
  }
});
