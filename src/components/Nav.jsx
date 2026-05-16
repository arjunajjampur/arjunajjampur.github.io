import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const themes = ['dark', 'light', 'retro'];
  const icons  = { dark: '☀', light: '◈', retro: '☾' };
  const labels = { dark: 'light', light: 'retro', retro: 'dark' };

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycle = () =>
    setTheme(t => themes[(themes.indexOf(t) + 1) % themes.length]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-ascii">AA</span>
        </Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/process">Process</Link>
          <Link to="/work">Work</Link>
          <a href="mailto:arjun.ajjampur@gmail.com" className="nav-contact">
            Contact
          </a>
          <button
            className="theme-toggle"
            onClick={cycle}
            aria-label={`Switch to ${labels[theme]} mode`}
            title={`Switch to ${labels[theme]} mode`}
          >
            {icons[theme]}
          </button>
        </div>
      </div>
    </nav>
  );
}
