import { counts, gym } from '../data.js';
import { Cta, Icon } from './ui.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <img src="./photos/hero-focus.jpg" alt="" width="1600" height="2400" fetchPriority="high" />
      </div>

      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="eyebrow hero__in" style={{ '--i': 0 }}>Langka St. · Cogeo Gate 2, Antipolo</p>
          <h1 className="hero__title">
            <span className="hero__line" style={{ '--i': 1 }}>Show up.</span>
            <span className="hero__line" style={{ '--i': 2 }}>Lift <em>heavy.</em></span>
            <span className="hero__line" style={{ '--i': 3 }}>Leave stronger.</span>
          </h1>
          <span className="hero__bar" aria-hidden="true" />
          <p className="hero__lede hero__in" style={{ '--i': 4 }}>
            Your neighborhood gym in Antipolo. Qualified trainers, a friendly floor, and workouts
            built for women who are just starting out or getting back into it.
          </p>
          <div className="hero__actions hero__in" style={{ '--i': 5 }}>
            <Cta href={gym.facebook} external>Book your first session</Cta>
            <a className="ghost" href={gym.phoneHref}><Icon name="phone" size={16} /> <span>Call {gym.phoneDisplay}</span></a>
          </div>
        </div>

        <div className="hero__foot hero__in" style={{ '--i': 6 }}>
          <dl className="hero__stats">
            <div className="stat">
              <dt>Facebook page likes</dt>
              <dd>{counts.pageLikes.replace('+', '')}<b>+</b></dd>
            </div>
            <div className="stat">
              <dt>Facebook check-ins</dt>
              <dd>{counts.checkIns}</dd>
            </div>
          </dl>
          <a className="hero__chip" href="#programs">
            <span className="hero__chip-tag">Enrollment open</span>
            <strong>Women's Gym Workouts</strong>
            <span className="hero__chip-go"><Icon name="arrow" size={16} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
