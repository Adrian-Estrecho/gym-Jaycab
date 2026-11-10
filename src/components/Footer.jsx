import { gym, navLinks } from '../data.js';
import { Cta, FacebookIcon, Logo, Reveal } from './ui.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__bg" src="./photos/ropes.jpg" alt="" loading="lazy" />
      <div className="wrap footer__inner">
        <Reveal className="footer__cta">
          <Logo large className="footer__sign" />
          <h2 className="h2">Ready to get <em>stronger?</em></h2>
          <p>Send one message. We'll take it from there.</p>
          <Cta href={gym.facebook} external>Message us</Cta>
        </Reveal>
        <div className="footer__bar">
          <Logo />
          <nav aria-label="Footer">
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="footer__contact">
            <a href={gym.phoneHref}>{gym.phoneDisplay}</a>
            <a href={gym.facebook} target="_blank" rel="noopener" aria-label="JayCab Fitness on Facebook"><FacebookIcon /></a>
          </div>
        </div>
        <p className="footer__note">
          Website concept prepared for review by JayCab Fitness. Not yet an official site. Photos are stock images. Programs, rates, and counts are to be confirmed by the gym.
        </p>
      </div>
    </footer>
  );
}
