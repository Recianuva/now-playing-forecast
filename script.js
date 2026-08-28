// 1. Dynamic Video Engine Swapping Execution
function switchTrack(videoId, title, artist, element) {
  // Safe layout string incorporating autoplay, mute override, and dynamic jsapi rules
  const player = document.getElementById('video-player');
  player.src = `https://youtube.com{videoId}?enablejsapi=1&modestbranding=1&rel=0&autoplay=1&mute=1`;
  
  // Swap textual metadata elements dynamically
  document.getElementById('song-title').innerText = title;
  document.getElementById('artist-name').innerText = artist;

  // Toggle active button highlight states
  document.querySelectorAll('.pixel-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  // Trigger visualizer animation on track change
  const visualizer = document.querySelector('.visualizer-container');
  visualizer.classList.add('playing');
}

// 2. Wind-Blown Slanted Rain Drop Generation Script
function generateSlantedRain() {
  const rainCanvas = document.getElementById('rain-canvas');
  const dropCount = 40; // Keeps performance ultra smooth on small mobile devices

  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    
    // Spread the base drops across wide spectrum boundaries to factor slanting offset paths
    drop.style.left = Math.random() * 130 + '%'; 
    drop.style.top = (Math.random() * -100) - 20 + 'px';
    
    // Randomize timing for natural wind patterns
    drop.style.animationDuration = (Math.random() * 0.5) + 0.6 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';
    
    rainCanvas.appendChild(drop);
  }
}

// Spark up execution system on document mount
window.addEventListener('DOMContentLoaded', generateSlantedRain);
