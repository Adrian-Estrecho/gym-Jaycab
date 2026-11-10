import { counts, gym } from '../data.js';
import { Cta, Eyebrow, Reveal } from './ui.jsx';

export default function Proof() {
  return (
    <section className="section proof" id="reviews">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="h2">Don't take our word for it. <em>Ask the neighbors.</em></h2>
        </Reveal>
        <Reveal className="proof__panel">
          <div className="proof__media">
            <img src="./photos/class.jpg" alt="A group workout class training with resistance bands" loading="lazy" />
          </div>
          <div className="proof__body">
            <p className="proof__score" aria-label={`${counts.recommendYes} of ${counts.recommendTotal}`}>
              <span>{counts.recommendYes}</span><i>of</i><span>{counts.recommendTotal}</span>
            </p>
            <p className="proof__line">Facebook reviewers recommend JayCab Fitness.</p>
            <Cta href={gym.facebook} external>Read the reviews</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
