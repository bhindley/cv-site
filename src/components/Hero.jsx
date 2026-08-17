import { useEffect, useRef, useState } from 'react';

const TYPED_TEXT = "Hi, I'm Ben.";
const TYPE_SPEED = 80; // ms per character

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const indexRef = useRef(0);
  const doneRef = useRef(false);

  // Typing effect
  useEffect(() => {
    if (indexRef.current >= TYPED_TEXT.length) return;

    const timer = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(TYPED_TEXT.slice(0, indexRef.current));
      if (indexRef.current >= TYPED_TEXT.length) {
        clearInterval(timer);
        doneRef.current = true;
      }
    }, TYPE_SPEED);

    return () => clearInterval(timer);
  }, []);

  // Blinking cursor — stops blinking once typing is done and fades out after 2s
  const [cursorGone, setCursorGone] = useState(false);
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
