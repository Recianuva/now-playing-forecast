// Dynamic Video Engine Swapping Execution using your proven ID format
function switchTrack(videoId, title, artist, element) {
  // Uses your exact "video-frame" ID target from your working setup
  const player = document.getElementById('video-frame');
  
  // Uses your exact URL building logic with the autoplay trigger
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  
  // Swap textual metadata elements dynamically
  document.getElementById('song-title').innerText = title;
  document.getElementById('artist-name').innerText = artist;

  // Toggle active button highlight states
  document.querySelectorAll('.pixel-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

// Wind-Blown Slanted Rain Drop Generation Script
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
