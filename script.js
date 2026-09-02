let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('api-player', {
    height: '100%',
    width: '100%',
    videoId: 'M7VSEZOQIlg',
    playerVars: {
      'autoplay': 0,
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
  // Player is ready
}

function switchTrack(videoId, title, artist, element) {
  if (player && typeof player.loadVideoById === 'function') {
    player.loadVideoById({ videoId: videoId });
    player.unMute();
    player.setVolume(100); 
  }
  
  document.getElementById('song-title').innerText = title;
  document.getElementById('artist-name').innerText = artist;

  document.querySelectorAll('.pixel-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}

function createRainDrop() {
  const drop = document.createElement('div');
  drop.className = 'rain-drop';
  
  const depthSelector = Math.random();
  let plane = {};
  
  if (depthSelector < 0.2) {
    plane = {
      width: '3px',
      height: '60px',
      opacity: '0.9',
      duration: '0.5s',
      driftSpeed: '1.5s',
      blurAmount: '0px',
      zIndex: 3
    };
  } else if (depthSelector < 0.6) {
    plane = {
      width: '2px',
      height: '40px',
      opacity: '0.5',
      duration: '0.8s',
      driftSpeed: '2s',
      blurAmount: '0.5px',
      zIndex: 2
    };
  } else {
    plane = {
      width: '1px',
      height: '20px',
      opacity: '0.15',
      duration: '1.2s',
      driftSpeed: '3s',
      blurAmount: '1px',
      zIndex: 1
    };
  }
  
  drop.style.width = plane.width;
  drop.style.height = plane.height;
  drop.style.opacity = plane.opacity;
  drop.style.zIndex = plane.zIndex;
  drop.style.filter = `blur(${plane.blurAmount})`;
  
  const startX = Math.random() * 100;
  drop.style.left = startX + '%';
  
  const delay = Math.random() * 2;
  
  drop.style.animation = `
    fall ${plane.duration} linear infinite,
    drift ${plane.driftSpeed} ease-in-out infinite
  `;
  drop.style.animationDelay = `-${delay}s, -${delay}s`;
  
  return drop;
}

function initializeRain() {
  const container = document.getElementById('rain-container');
  const dropCount = 100;
  
  for (let i = 0; i < dropCount; i++) {
    const drop = createRainDrop();
    container.appendChild(drop);
  }
}

document.addEventListener('DOMContentLoaded', initializeRain);
