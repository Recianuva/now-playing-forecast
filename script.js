let player; // Holds the YouTube player instance globally

// 1. Mandatory function called automatically by YouTube's API script when ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('api-player', {
    height: '100%',
    width: '100%',
    videoId: 'M7VSEZOQIlg', // Your default starting track
    playerVars: {
      'autoplay': 0, // Starts paused so the first view doesn't block audio layout
      'modestbranding': 1,
      'rel': 0,
      'origin': window.location.origin
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // Player is successfully loaded and bound
}

// 2. Upgraded API Track-Switching Logic (Fixed Muting/Audio State Blocks)
function switchTrack(videoId, title, artist, element) {
  if (player && typeof player.loadVideoById === 'function') {
    // Force browser to load the video directly through the official state framework
    player.loadVideoById({
      videoId: videoId
    });
    
    // THE MAGIC FIX: Tells the frame structure to break browser silencers and run audio out loud
    player.unMute();
    player.setVolume(100); 
  }
  
  // Swap textual metadata elements dynamically
  document.getElementById('song-title').innerText = title;
  document.getElementById('artist-name').innerText = artist;

  // Toggle active button highlight states
  document.querySelectorAll('.pixel-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

// 3. Wind-Blown Slanted Rain Drop Generation Script
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
  drop.style.animation = `
    fall ${plane.duration} linear infinite,
    drift ${plane.driftSpeed} ease-in-out infinite
  `;
  drop.style.animationDelay = `-${delay}s, -${delay}s`; // Staggers both fall and drift timelines perfectly
  
  return drop;
}

// Create multiple rain drops
function initializeRain() {
  const container = document.getElementById('rain-container');
  const dropCount = 100; // Optimal balance for rendering performance on phones
  
  for (let i = 0; i < dropCount; i++) {
    const drop = createRainDrop();
    container.appendChild(drop);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeRain);
