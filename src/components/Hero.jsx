import { useEffect, useRef, useState } from 'react';

const FULL_TEXT = "Hi, I'm Ben.";
const PAUSE_AFTER = "Hi,";
const PAUSE_DURATION = 600; // ms to pause after "Hi,"
const TYPE_SPEED = 80;      // ms per character

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorGone, setCursorGone] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function type() {
      for (let i = 1; i <= FULL_TEXT.length; i++) {
        if (cancelled) return;

        const chunk = FULL_TEXT.slice(0, i);
        setDisplayed(chunk);

        // Pause after "Hi," before continuing
        if (chunk === PAUSE_AFTER) {
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

  // Blinking cursor — fades out ~1.2s after typing finishes
  useEffect(() => {
    const blink = setInterval(() => {
      if (doneRef.current) {
        clearInterval(blink);
        setTimeout(() => setCursorGone(true), 1200);
        return;
      }
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="hero" role="banner">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-heading">
          {displayed}
          {!cursorGone && (
            <span
              className="hero-cursor"
              style={{ opacity: cursorVisible ? 1 : 0 }}
              aria-hidden="true"
            >
              |
            </span>
          )}
        </h1>
        <p className="hero-sub">Software Engineer</p>
        <a href="#about" className="hero-scroll" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" strokeWidth="1.75" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
