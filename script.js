// ===== CANVAS RAIN ENGINE WITH IMPACT RIPPLES =====
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1';
document.body.appendChild(canvas);

let raindrops = [];
let ripples = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Raindrop {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.depth = Math.random(); // 0 = far, 1 = close
    
    // Depth affects speed and appearance
    this.speed = 2 + this.depth * 3; // Foreground moves faster
    this.opacity = 0.1 + this.depth * 0.8; // Foreground more visible
    this.width = 1 + this.depth * 2; // Foreground thicker
    this.height = 20 + this.depth * 30; // Foreground longer
    
    // Wind effect
    this.windDrift = (Math.random() - 0.5) * 2;
  }

  update() {
    this.y += this.speed;
    this.x += this.windDrift * 0.3;

    // Wrap around screen edges
    if (this.y > canvas.height) {
      this.reset();
    }
    if (this.x < 0 || this.x > canvas.width) {
      this.x = (this.x + canvas.width) % canvas.width;
    }
  }

  draw() {
    ctx.strokeStyle = `rgba(43, 108, 176, ${this.opacity})`;
    ctx.lineWidth = this.width;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - 5, this.y + this.height);
    ctx.stroke();
  }
}

class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = 40;
    this.opacity = 0.6;
  }

  update() {
    this.radius += 2;
    this.opacity -= 0.01;
  }

  draw() {
    ctx.strokeStyle = `rgba(43, 108, 176, ${this.opacity})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  isDone() {
    return this.opacity <= 0 || this.radius >= this.maxRadius;
  }
}

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw raindrops
  raindrops.forEach(drop => {
    drop.update();
    drop.draw();

    // Occasional impact ripples (10% chance per frame for realism)
    if (drop.y > canvas.height - 50 && Math.random() > 0.98) {
      ripples.push(new Ripple(drop.x, canvas.height));
    }
  });

  // Update and draw ripples
  ripples = ripples.filter(ripple => !ripple.isDone());
  ripples.forEach(ripple => {
    ripple.update();
    ripple.draw();
  });

  requestAnimationFrame(animate);
}

function initRain() {
  resizeCanvas();
  
  // Create 150 raindrops across depth planes
  for (let i = 0; i < 150; i++) {
    raindrops.push(new Raindrop());
  }

  animate();
}

window.addEventListener('resize', resizeCanvas);
document.addEventListener('DOMContentLoaded', () => {
  initRain();
});

// ===== YOUTUBE PLAYER CODE =====
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
}  const dropCount = 100;
  
  for (let i = 0; i < dropCount; i++) {
    const drop = createRainDrop();
    container.appendChild(drop);
  }
}

document.addEventListener('DOMContentLoaded', initializeRain);
