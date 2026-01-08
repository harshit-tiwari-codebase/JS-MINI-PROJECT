let arr = [
  {
    songName: "Lovely",
    artist: "Billie Eilish",
    artistDescription: "Billie Eilish is an American singer-songwriter known for her soft vocals, dark pop style, and emotionally deep lyrics.",
    songPoster: "img/Lovely.webp",
    artistPoster: "img/billie elilish.png",
    url: "audio/Billie_Eilish_Khalid_-_Lovely_(mp3.pm).mp3",
  },

  {
    songName: "Raat Ki Rani",
    artist: "Seedhe Maut",
    artistDescription: "Seedhe Maut is a Delhi-based hip-hop duo known for raw lyrics, underground sound, and strong desi rap culture.",
    songPoster: "img/raat ki rani.jpg",
    artistPoster: "img/seedhe maut poster.jpg",
    url: "audio/Raat Ki Rani - Seedhe Maut (pagalall.com).mp3",
  },

  {
    songName: "Sad",
    artist: "XXXTENTACION",
    artistDescription: "XXXTENTACION was an American rapper known for emotional music, genre-blending sound, and deep connection with youth.",
    songPoster: "img/sad.jpg",
    artistPoster: "img/tentaxion.jpg",
    url: "audio/XXXTENTACION-SAD-(TopGhanaMusic.Com).mp3",
  },

  {
    songName: "On My Way",
    artist: "Alan Walker",
    artistDescription: "Alan Walker is a Norwegian DJ and producer famous for electronic music with cinematic and emotional vibes.",
    songPoster: "img/on my way.jpg",
    artistPoster: "img/alan walker poster.jpg",
    url: "audio/Alan_Walker_Sabrina_Carpenter_-_On_My_Way_(mp3.pm).mp3",
  },

  {
    songName: "Perfect",
    artist: "Ed Sheeran",
    artistDescription: "Ed Sheeran is an English singer-songwriter known for romantic songs, acoustic style, and global chart-topping hits.",
    songPoster: "img/perfect.jpg",
    artistPoster: "img/ed sheeran poster.jpg",
    url: "audio/Edd_Sheeran_-_Perfect_(mp3.pm).mp3",
  },

  {
    songName: "Die With A Smile",
    artist: "Bruno Mars",
    artistDescription: "Bruno Mars is an American pop icon known for energetic performances, soulful voice, and retro-funk music.",
    songPoster: "img/die with smile.jpg",
    artistPoster: "img/bruno mars.jpeg",
    url: "audio/Die With A Smile-(SambalpuriStar.In).mp3",
  },
];



let songDiv  = document.querySelector("#song-div");

let audio = new Audio();

let mid1  = document.querySelector("#mid-1");
let mid2  = document.querySelector("#mid-2");
let playbar1  = document.querySelector("#playbar-1");
let playbar3  = document.querySelector("#playbar-3");
let play  = document.querySelector("#play");
let selectedSong = 0;
let forward = document.querySelector("#forward");
let backward = document.querySelector("#back");
let rightSidebar = document.querySelector("#right-sidebar");


function displaySongs(){
   let clutter = "";
  arr.forEach((elem,idx)=>{
 
    clutter += `  <div id=${idx} class="song">
                  <div id="song-poster">
                    <img src="${elem.songPoster}">
                  </div>
                <div id="title">
                  <h4>${elem.songName}</h4>
                  <p>By ${elem.artist}</p>
                </div>
                <div id="liked">
                  <h2>1234</h2>
                  <i id="like" class="ri-heart-line"></i>
                </div>
                </div>`;
})

songDiv.innerHTML = clutter;
audio.src = arr[selectedSong].url;
}
displaySongs();




// Event Listener for song selection
function updateUI() {
  // audio
  audio.src = arr[selectedSong].url;
  audio.play();

  // play button
  play.classList.remove("ri-play-fill");
  play.classList.add("ri-pause-fill");
  flag = 1;

  // layout resize
  mid1.style.height = "50%";
  mid2.style.height = "50%";

  // mid-1
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
        <button id="btn1">PLAY NOW</button>
        <button id="btn2">FOLLOW</button>
      </div>
    </div>
    <img class="artist-poster" src="${arr[selectedSong].artistPoster}">
  `;

  // playbar-1
  playbar1.innerHTML = `
    <div id="poster">
      <img src="${arr[selectedSong].songPoster}">
    </div>
    <div id="song-details">
      <h2>${arr[selectedSong].songName}</h2>
      <h3>${arr[selectedSong].artist}</h3>
    </div>
  `;

  // playbar-3
  playbar3.innerHTML = `
    <i class="ri-share-line"></i>
    <i class="ri-volume-up-fill"></i>
    <i class="ri-alarm-snooze-line"></i>
  `;
  updateRightSidebar();
}
songDiv.addEventListener("click", (e) => {
  let song = e.target.closest(".song");
  if (!song) return;

  selectedSong = Number(song.id);
  updateUI();
});

let flag = 0;

play.addEventListener("click", () => {
  if (flag === 0) {
    play.classList.remove("ri-play-fill");
    play.classList.add("ri-pause-fill");
    audio.play();
    flag = 1;
  } else {
    play.classList.remove("ri-pause-fill");
    play.classList.add("ri-play-fill");
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", () => {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    updateUI();
  }
  else{
    forward.style.opacity = "0.5";
  }
});
backward.addEventListener("click", () => {
  if (selectedSong > 0) {
    selectedSong--;   
    updateUI();
  }
  else{
    backward.style.opacity = "0.5";
  }   
});


function updateRightSidebar() {
  let nextSongs = arr
    .filter((_, i) => i !== selectedSong)
    .slice(0, 4);

  rightSidebar.innerHTML = `
    <!-- UP NEXT -->
    <div>
      <div class="rs-head">Up Next</div>
      <div class="queue-list">
        ${nextSongs.map(song => `
          <div class="queue-item">
            <img src="${song.songPoster}">
            <span>${song.songName}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- ARTIST INFO -->
    <div class="artist-footer">
      <div class="artist-left">
        <img src="${arr[selectedSong].artistPoster}">
        <div>
          <h4>${arr[selectedSong].artist}</h4>
          <p style="font-size:0.75em;color:#b3b3b3;line-height:1.3;">
            ${arr[selectedSong].artistDescription}
          </p>
        </div>
      </div>

      <div class="artist-actions">
        <i class="ri-user-follow-line" title="Follow"></i>
        <i class="ri-share-line" title="Share"></i>
      </div>
    </div>
  `;
}

