import { gym, plans } from '../data.js';
import { Cta, Eyebrow, Icon, Reveal } from './ui.jsx';

function Plan({ plan, delay }) {
  return (
    <Reveal as="article" className={`plan plan--${plan.id}`} delay={delay}>
      <div className="plan__top">
        {plan.badge && <span className="tag plan__badge">{plan.badge}</span>}
        <h3><Icon name={plan.icon} size={22} /> {plan.title}</h3>
        <p>{plan.desc}</p>
        <dl className="plan__rates">
          {plan.rates.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd className={r.price ? 'has-price' : ''}>{r.price ?? 'Ask for rate'}</dd>
            </div>
          ))}
        </dl>
        <Cta href={gym.facebook} external>Ask for rates</Cta>
      </div>
      <ul className="plan__list">
        {plan.highlight && (
          <li className="is-highlight"><span><Icon name="check" size={13} /></span>{plan.highlight}</li>
        )}
        {plan.features.map((f) => (
          <li key={f}><span><Icon name="check" size={13} /></span>{f}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section className="pricing" id="rates">
      <img className="pricing__bg" src="./photos/dumbbell-rack.jpg" alt="" loading="lazy" />
      <div className="wrap pricing__inner">
        <Reveal className="head">
          <Eyebrow>Rates</Eyebrow>
          <h2 className="h2">Choose <em>your plan</em></h2>
          <p className="head__sub">Train on your own or with a trainer. Message us for today's rates.</p>
        </Reveal>
        <div className="plans">
          {plans.map((p, i) => <Plan key={p.id} plan={p} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}
