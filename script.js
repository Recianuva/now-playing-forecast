// 1. Dynamic Video Engine Swapping Execution (Added strict embed delegation variables)
function switchTrack(videoId, title, artist, element) {
  const player = document.getElementById('video-frame');
  
  // Appending autoplay=1 along with mute=1 completely unlocks the security restriction layout
  player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1&rel=0&modestbranding=1";
  
  document.getElementById('song-title').innerText = title;
  document.getElementById('artist-name').innerText = artist;

  document.querySelectorAll('.pixel-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

// 2. Wind-Blown Slanted Rain Drop Generation Script
function generateSlantedRain() {
  const rainCanvas = document.getElementById('rain-canvas');
  const dropCount = 40; 

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    
    drop.style.left = Math.random() * 130 + '%'; 
    drop.style.top = (Math.random() * -100) - 20 + 'px';
    
    drop.style.animationDuration = (Math.random() * 0.5) + 0.6 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    
    rainCanvas.appendChild(drop);
  }
}

window.addEventListener('DOMContentLoaded', generateSlantedRain);
