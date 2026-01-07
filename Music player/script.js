let arr = [
  {
   
    songName: "Lovely",
    artist: "Billie Eilish",
    songPoster: "img/Lovely.webp",
    artistPoster: "img/billie elilish.png",
    url: "audio/Billie_Eilish_Khalid_-_Lovely_(mp3.pm).mp3",
  },

  {
   
    songName: "Raat Ki Rani",
    artist: "Seedhe Maut",
    songPoster: "img/raat ki rani.jpg",
    artistPoster: "img/seedhe maut poster.jpg",
    url: "audio/Raat Ki Rani - Seedhe Maut (pagalall.com).mp3",
  },

  {
   
    songName: "Sad",
    artist: "XXXTENTACION",
    songPoster: "img/sad.jpg",
    artistPoster: "img/tentaxion.jpg",
    url: "audio/XXXTENTACION-SAD-(TopGhanaMusic.Com).mp3",
  },

  {
  
    songName: "On My Way",
    artist: "Alan Walker",
    songPoster: "img/on my way.jpg",
    artistPoster: "img/alan walker poster.jpg",
    url: "audio/Alan_Walker_Sabrina_Carpenter_-_On_My_Way_(mp3.pm).mp3",
  },

  {
 
    songName: "Perfect",
    artist: "Ed Sheeran",
    songPoster: "img/perfect.jpg",
    artistPoster: "img/ed sheeran poster.jpg",
    url: "audio/Edd_Sheeran_-_Perfect_(mp3.pm).mp3",
  },

  {
    
    songName: "Die With A Smile",
    artist: "Bruno Mars",
    songPoster: "img/die with smile.jpg",
    artistPoster: "img/bruno mars.jpeg",
    url: "audio/Die_With_A_Smile.mp3",
  },
];


let songDiv  = document.querySelector("#song-div");
let clutter = "";
let audio = new Audio();

let mid  = document.querySelector("#mid-1");

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

let shutter = "";
songDiv.addEventListener("click",(e)=>{
   audio.src = arr[e.target.id].url;
   audio.play();
shutter = ` <div id="overlay">
                 <div id="nav">
                    <i class="ri-arrow-left-wide-line"></i><i class="ri-arrow-right-wide-line"></i>
                    <input id="Search" type="text" placeholder="Search for artists,songs,albums"/>
                    <div id="profile"><img src="img/profile.jpg" alt=""> <h3>harshit Tiwari</h3></div>
                </div>
                <div id="hero">
                    <h1>${arr[e.target.id].artist}</h1>
                    <div id="btn"> <button id="btn1">PLAY NOW</button>
                    <button id="btn2">FOLLOW</button></div>
                </div>
               </div>
                <img class = "artist-poster" src="${arr[e.target.id].artistPoster}" alt="">
                `;
                mid.innerHTML = shutter;
});
