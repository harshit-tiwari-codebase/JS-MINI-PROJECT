const reelsData = [
  {
    id: 1,
    username: "Vision0808",
    profileImg: "img/user1.jpg",
    isFollowing: false,
    isLiked: true,
    isMute: true,
    videoSrc: "videos/one.mp4",
    description:
      "Some scenes don’t need dialogue, the emotions speak for themselves.",
    likes: 5000,
    comments: 1200,
    shares: 800,
  },

  {
    id: 2,
    username: "Animeverse",
    profileImg: "img/user2.jpg",
    isFollowing: true,
    isLiked: false,
    isMute: true,
    videoSrc: "videos/two.mp4",
    description:
      "Power isn’t born overnight, it’s forged through pain and discipline.",
    likes: 8200,
    comments: 2100,
    shares: 1500,
  },

  {
    id: 3,
    username: "Otakuworld",
    profileImg: "img/user3.jpg",
    isFollowing: false,
    isLiked: true,
    isMute: true,
    videoSrc: "videos/three.mp4",
    description:
      "Not every battle is fought with fists, some are fought within.",
    likes: 6700,
    comments: 1800,
    shares: 900,
  },

  {
    id: 4,
    username: "Darkanime",
    profileImg: "img/user4.jpg",
    isFollowing: false,
    isLiked: true,
    isMute: true,
    videoSrc: "videos/four.mp4",
    description: "Darkness doesn’t create villains, it creates survivors.",
    likes: 9100,
    comments: 2600,
    shares: 1700,
  },

  {
    id: 5,
    username: "Animefeelz",
    profileImg: "img/user5.jpg",
    isFollowing: true,
    isLiked: false,
    isMute: true,
    videoSrc: "videos/five.mp4",
    description: "Some moments stay with you long after the episode ends.",
    likes: 5000,
    comments: 1400,
    shares: 600,
  },

  {
    id: 6,
    username: "Weebculture",
    profileImg: "img/user6.jpg",
    isFollowing: false,
    isLiked: true,
    isMute: true,
    videoSrc: "videos/six.mp4",
    description:
      "Pain, silence, and strength — this is where legends are born.",
    likes: 12000,
    comments: 3200,
    shares: 2400,
  },
];
let section = document.querySelector("section")
let allReels = document.querySelector(".all-reels");

function renderDATA() {
  let clutter = "";
  reelsData.forEach((elem, idx) => {
    clutter += `
    <div class="reel">
            <video
  src="${elem.videoSrc}"
  autoplay
  ${elem.isMute ? "muted" : ""}
  loop
></video>

              <div class="mute">
            <i class="ri-volume-mute-line"></i>
         </div>
            <div class="bottom">
              <div class="user">
                <img src="on my way.jpg" alt="" />
                <h3>${elem.username}</h3>
            <button 
              class="follow-btn" 
               id="${idx}">
               ${elem.isFollowing ? "Following" : "Follow"}
            </button>


              </div>
              <div class="discription">
                <h2>
                 ${elem.description}
                </h2>
              </div>
            </div>
            <div class="right">
              <div id="${idx}" class="like">
                <h1>${
                  elem.isLiked
                    ? `<i id="liked" class="ri-heart-fill"></i>`
                    : `<i class="ri-heart-line"></i>`
                }</h1>
                <h2>
                ${elem.likes}</h2>
              </div>
              <div class="comment">
                <h1><i class="ri-chat-3-line"></i></h1>
                <h2> ${elem.comments}</h2>
              </div>
              <div class="share">
                <h1><i class="ri-share-forward-line"></i></h1>
                <h2> ${elem.shares}</h2>
              </div>
              <div class="more">
                <h1><i class="ri-more-2-line"></i></h1>
             
              </div>
            </div>
          </div>
   `;
  });
  allReels.innerHTML = clutter;
}

renderDATA();

allReels.addEventListener("click", (dets) => {
  /* ---------- LIKE ---------- */
  if (dets.target.className === "like") {
    const i = dets.target.id;

    if (reelsData[i].isLiked === false) {
      reelsData[i].isLiked = true;
      reelsData[i].likes++;
    } else {
      reelsData[i].isLiked = false;
      reelsData[i].likes--;
    }

    renderDATA();
  }

  /* ---------- FOLLOW ---------- */
  if (dets.target.className === "follow-btn") {
    const i = dets.target.id;
    const btn = dets.target; // 👈 YE HI BUTTON HAI

    if (reelsData[i].isFollowing === false) {
      reelsData[i].isFollowing = true;

      btn.textContent = "Following";
      btn.style.background = "transparent";
      btn.style.color = "#fff";
      btn.style.border = "1px solid rgba(255,255,255,0.6)";
    } else {
      reelsData[i].isFollowing = false;

      btn.textContent = "Follow";
      btn.style.background = "#fff";
      btn.style.color = "#000";
      btn.style.border = "none";
    }
  }
 if (dets.target.className === "mute") {
  const reel = dets.target.closest(".reel");
  const video = reel.querySelector("video");
  const i = reel.querySelector(".follow-btn").id;

  if (reelsData[i].isMute) {
    // 🔊 sirf ye reel unmute
    document.querySelectorAll(".reel").forEach((r, idx) => {
      r.querySelector("video").muted = true;
      r.querySelector(".mute").innerHTML =
        `<i class="ri-volume-mute-line"></i>`;
      reelsData[idx].isMute = true;
    });

    reelsData[i].isMute = false;
    video.muted = false;
    dets.target.innerHTML = `<i class="ri-volume-up-line"></i>`;
  } else {
    reelsData[i].isMute = true;
    video.muted = true;
    dets.target.innerHTML = `<i class="ri-volume-mute-line"></i>`;
  }
}



});
function playOnlyCurrentReel(currentReel) {
  const reels = document.querySelectorAll(".reel");

  reels.forEach((reel, idx) => {
    const video = reel.querySelector("video");
    const muteIcon = reel.querySelector(".mute");

    // 🔇 sab mute
    video.muted = true;
    reelsData[idx].isMute = true;
    muteIcon.innerHTML = `<i class="ri-volume-mute-line"></i>`;
  });

  // 🔊 sirf active reel
  const activeIndex = currentReel.querySelector(".follow-btn").id;
  const activeVideo = currentReel.querySelector("video");
  const activeMuteIcon = currentReel.querySelector(".mute");

  reelsData[activeIndex].isMute = false;
  activeVideo.muted = false;
  activeMuteIcon.innerHTML = `<i class="ri-volume-up-line"></i>`;
}

section.addEventListener("scroll", () => {
  const reels = document.querySelectorAll(".reel");
  let activeReel = null;
  let maxVisible = 0;

  reels.forEach((reel) => {
    const rect = reel.getBoundingClientRect();
    const visibleHeight =
      Math.min(rect.bottom, window.innerHeight) -
      Math.max(rect.top, 0);

    if (visibleHeight > maxVisible) {
      maxVisible = visibleHeight;
      activeReel = reel;
    }
  });

  if (activeReel) {
    playOnlyCurrentReel(activeReel);
  }
});
