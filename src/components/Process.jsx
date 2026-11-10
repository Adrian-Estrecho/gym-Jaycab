import { gym, steps } from '../data.js';
import { Cta, Eyebrow, Reveal } from './ui.jsx';

const BAR_KG = 20;
const CENTER_Y = 110;
const TOTAL_KG = steps.reduce((sum, s) => sum + s.add * 2, BAR_KG);

// Plates are drawn as neon tubes in the logo's colors.
// Heaviest plates sit closest to the collar and step down in size, as on a real bar.
const PLATE_SIZE = {
  25: { w: 30, h: 196, tone: 'sign' },
  20: { w: 26, h: 172, tone: 'cyan' },
  15: { w: 22, h: 142, tone: 'white' },
  10: { w: 18, h: 110, tone: 'sign' },
};

const plates = (() => {
  let offset = 0;
  return steps.map((step) => {
    const size = PLATE_SIZE[step.add];
    const plate = { ...size, kg: step.add, offset };
    offset += size.w + 2;
    return plate;
  });
})();

function Plate({ plate, side }) {
  const collar = side === 'left' ? 170 : 470;
  const x = side === 'left' ? collar - plate.offset - plate.w : collar + plate.offset;
  const y = CENTER_Y - plate.h / 2;
  const labelX = x + plate.w / 2;
  return (
    <g className={`plate plate--${plate.tone}`}>
      <rect x={x + 1.5} y={y} width={plate.w - 3} height={plate.h} rx="5" filter="url(#tube-glow)" />
      <text
        x={labelX}
        y={CENTER_Y - 34}
        textAnchor="middle"
        dominantBaseline="central"
        transform={`rotate(-90 ${labelX} ${CENTER_Y - 34})`}
      >
        {plate.kg}
      </text>
    </g>
  );
}

// The fully loaded bar, bending slightly under the weight.
function Barbell() {
  return (
    <svg className="barbell" viewBox="-40 0 720 220" aria-hidden="true">
      <defs>
        <filter id="tube-glow" x="-60%" y="-20%" width="220%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {['left', 'right'].map((side) => (
        <g key={side} className={`barbell__side barbell__side--${side}`}>
          {side === 'left' ? (
            <>
              <rect className="barbell__shaft" x="178" y="105" width="143" height="10" />
              <rect className="barbell__sleeve" x="0" y="101" width="172" height="18" rx="3" />
              <rect className="barbell__collar" x="170" y="94" width="9" height="32" rx="2" />
            </>
          ) : (
            <>
              <rect className="barbell__shaft" x="319" y="105" width="143" height="10" />
              <rect className="barbell__sleeve" x="468" y="101" width="172" height="18" rx="3" />
              <rect className="barbell__collar" x="461" y="94" width="9" height="32" rx="2" />
            </>
          )}
          {plates.map((plate) => (
            <Plate key={plate.kg} plate={plate} side={side} />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function Process() {
  return (
    <section className="load" id="start">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="h2">Four steps to your <em>first workout</em></h2>
          <p className="head__sub">Progress is added one plate at a time. So is getting started.</p>
        </Reveal>

        <div className="load__stage">
          <div className="load__side">
            <ol className="steps">
              {steps.map((step, i) => (
                <li key={step.title} className="step">
                  <h3 className="step__head">
                    <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
                    <span className="step__title">{step.title}</span>
                    <span className="step__kg">+{step.add * 2} kg</span>
                  </h3>
                  <p className="step__text">{step.text}</p>
                </li>
              ))}
            </ol>
            <div className="load__cta">
              <p>Step one is <em>one message.</em></p>
              <Cta href={gym.facebook} external>Message us</Cta>
            </div>
          </div>

          <div className="rig" aria-hidden="true">
            <div className="rig__glow" />
            <div className="rig__readout">
              <span className="rig__label">On the bar</span>
              <span className="rig__kg">{TOTAL_KG}<small>kg</small></span>
            </div>
            <div className="rig__stage">
              <Barbell />
            </div>
            <p className="rig__status">Bar loaded. Your turn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
