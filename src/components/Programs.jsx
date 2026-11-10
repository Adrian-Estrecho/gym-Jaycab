import { gym } from '../data.js';
import { Eyebrow, Icon, Reveal } from './ui.jsx';

export default function Programs() {
  return (
    <section className="section" id="programs">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow>Programs</Eyebrow>
          <h2 className="h2">Train the way that <em>fits you</em></h2>
          <p className="head__sub">Same gym, different ways to get stronger.</p>
        </Reveal>

        <div className="bento">
          <Reveal as="article" className="card card--women">
            <img src="./photos/women-squat.jpg" alt="A woman squatting a loaded barbell" loading="lazy" />
            <div className="card__text">
              <span className="tag">Enrollment open</span>
              <h3>Women's Gym Workouts</h3>
              <p>Workouts tailored for women, held right here at our barangay gym.</p>
              <a className="card__link" href={gym.facebook} target="_blank" rel="noopener">
                Ask about enrolling <Icon name="arrow" size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="card card--pt" delay={80}>
            <img src="./photos/trainer.jpg" alt="A trainer correcting a client's push-up" loading="lazy" />
            <div className="card__text">
              <h3>Personal Training</h3>
              <p>Work with a trainer on a plan built around your goal.</p>
              <a className="card__link" href={gym.facebook} target="_blank" rel="noopener">
                Ask about a trainer <Icon name="arrow" size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="card card--plain" delay={120}>
            <Icon name="medal" size={28} />
            <h3>Qualified trainers</h3>
            <p>Trained and qualified both locally and internationally.</p>
          </Reveal>

          <Reveal as="article" className="card card--open" delay={160}>
            <img src="./photos/gym-floor.jpg" alt="A gym floor with benches and racks" loading="lazy" />
            <div className="card__text">
              <h3>Open Gym</h3>
              <p>Run your own program. Ask when you need a hand.</p>
              <a className="card__link" href={gym.facebook} target="_blank" rel="noopener">
                Ask about gym access <Icon name="arrow" size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
