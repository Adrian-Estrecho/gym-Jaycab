import { useEffect, useState } from 'react';
import { gym, navLinks } from '../data.js';
import { Icon, Logo } from './ui.jsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Clear glass over the hero; a little more tint once the page scrolls under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${open ? 'nav--open' : ''} ${scrolled || open ? 'nav--tinted' : ''}`}>
      <div className="nav__bar">
        <a className="nav__brand" href="#top" aria-label="JayCab Fitness, back to top">
          <Logo />
        </a>
        <nav aria-label="Main" className="nav__links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="nav__cta" href={gym.facebook} target="_blank" rel="noopener"><span>Message us</span></a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      <div id="nav-panel" className="nav__panel" hidden={!open}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </header>
  );
}
