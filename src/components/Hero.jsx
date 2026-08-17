import { useEffect, useRef, useState } from 'react';

const FULL_TEXT = "Hi, I'm Ben.";
const PAUSE_LOCATIONS = [2,11]; // Pause character locations
const PAUSE_DURATION = 1200; // ms to pause for
const TYPE_SPEED = 125;      // ms per character
const CURSOR_BLINK_INTERVAL = 530; // ms for cursor blink

// Particle config
const PARTICLE_DENSITY = 0.0001; // particles per px^2 - scales with canvas size
const PARTICLE_COLOR_LIGHT = '46, 125, 50';   // green in light/dark hero context
const PARTICLE_COLOR_DARK  = '102, 187, 106';  // brighter on dark bg
const CONNECTION_DISTANCE = 140;
const SPEED = 0.35;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function isDark() {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') return true;
      if (theme === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function spawn() {
      particles = Array.from({ length: Math.round(canvas.width * canvas.height * PARTICLE_DENSITY) }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
        r:  Math.random() * 1.5 + 0.8,
      }));
    }

    function draw() {
      const color = isDark() ? PARTICLE_COLOR_DARK : PARTICLE_COLOR_LIGHT;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.7)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    spawn();
    draw();

    const ro = new ResizeObserver(() => { resize(); spawn(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function type() {
      await wait(PAUSE_DURATION); // Initial delay before typing starts

      for (let i = 1; i <= FULL_TEXT.length; i++) {
        if (cancelled) return;

        const chunk = FULL_TEXT.slice(0, i);
        setDisplayed(chunk);

        if (PAUSE_LOCATIONS.includes(i)) {
          await wait(PAUSE_DURATION);
        } else {
          await wait(TYPE_SPEED);
        }
      }

      doneRef.current = true;
    }

    type();
    return () => { cancelled = true; };
  }, []);

  // Cursor blinks continuously
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_INTERVAL);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="hero">
      <ParticleCanvas />
      <div className="hero-content">
        <p className="hero-heading" aria-label={FULL_TEXT}>
          <span aria-hidden="true">{displayed}</span>
          <span
            className="hero-cursor"
            style={{ opacity: cursorVisible ? 1 : 0 }}
            aria-hidden="true"
          >
            |
          </span>
        </p>
        <p className="hero-sub">Software Engineer</p>
        <a href="#about" className="hero-scroll" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" strokeWidth="1.75" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
      <div className="hero-bottom">
        <div className="hero-links">
          <a
            href="https://github.com/bhindley"
            target="_blank"
            rel="noreferrer"
            className="hero-icon-link"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" strokeWidth="1.75" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-hindley-b07b95253"
            target="_blank"
            rel="noreferrer"
            className="hero-icon-link"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" strokeWidth="1.75" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
