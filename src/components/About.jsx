import { gym } from '../data.js';
import { Cta, Eyebrow, FacebookIcon, Icon, Reveal } from './ui.jsx';

export default function About() {
  return (
    <section className="sheet about" id="about">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow>About the gym</Eyebrow>
          <h2 className="h2">Close enough to keep <em>showing up</em></h2>
          <p className="head__sub">
            The gym you stick with is usually the one near home. A workout here is a short trip, not a whole afternoon.
          </p>
        </Reveal>

        <div className="about__grid">
          <div className="about__tiles">
            <Reveal className="tile">
              <Icon name="medal" size={26} />
              <h3>Experienced trainers</h3>
              <p>Qualified both locally and internationally.</p>
            </Reveal>
            <Reveal className="tile" delay={80}>
              <Icon name="users" size={26} />
              <h3>Workouts for women</h3>
              <p>Sessions tailored for women, open for enrollment.</p>
            </Reveal>
            <Reveal as="a" href="#visit" className="tile tile--photo" delay={160}>
              <img src="./photos/barbell.jpg" alt="" loading="lazy" />
              <span className="tile__tag">Find us</span>
              <h3>Cogeo Gate 2, Antipolo</h3>
            </Reveal>
          </div>

          <Reveal className="about__photo" delay={100}>
            <img src="./photos/resting.jpg" alt="A man resting between sets on a gym bench" loading="lazy" />
          </Reveal>

          <Reveal className="about__story" delay={180}>
            <h3>Your barangay gym</h3>
            <p>
              JayCab Fitness is a neighborhood gym on Langka Street, in Phase 4B of Cogeo Gate 2. You train with people from your own neighborhood, and you can always ask a trainer when you need a hand.
            </p>
            <p>
              Join the women's workouts, work with a trainer on a plan built around your goal, or come in and run your own program.
            </p>
            <div className="about__foot">
              <Cta href="#visit">Plan your visit</Cta>
              <a className="about__social" href={gym.facebook} target="_blank" rel="noopener">
                <FacebookIcon /> Follow us on Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
