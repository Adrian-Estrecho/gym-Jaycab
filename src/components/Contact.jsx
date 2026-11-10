import { useState } from 'react';
import { gym, programOptions } from '../data.js';
import { Cta, Eyebrow, Icon, Reveal } from './ui.jsx';

const empty = { name: '', phone: '', program: '', message: '' };

function compose({ name, phone, program, message }) {
  return [
    `Hi JayCab Fitness! I'm ${name.trim() || '(your name)'}.`,
    program && `I'm interested in: ${program}.`,
    message.trim(),
    phone.trim() && `You can reach me at ${phone.trim()}.`,
  ].filter(Boolean).join('\n');
}

// The site has no server, so the form writes the message for the visitor and
// hands it to Facebook through the clipboard, or to their phone's SMS app.
function ContactForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your name so we know who to reply to.';
    if (!form.message.trim()) next.message = 'Write your question or your goal.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const sendFacebook = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text = compose(form);
    // Open the tab first: browsers block pop-ups that follow an await.
    window.open(gym.facebook, '_blank', 'noopener');
    try {
      await navigator.clipboard.writeText(text);
      setStatus({ copied: true });
    } catch {
      setStatus({ copied: false, text });
    }
  };

  const smsHref = `sms:${gym.smsNumber}?body=${encodeURIComponent(compose(form))}`;

  return (
    <form className="form" onSubmit={sendFacebook} noValidate>
      <div className="form__row">
        <label className="field">
          <span>Name</span>
          <input
            value={form.name}
            onChange={update('name')}
            placeholder="Maria Santos"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
          />
          {errors.name && <small id="err-name" className="field__error">{errors.name}</small>}
        </label>
        <label className="field">
          <span>Phone (optional)</span>
          <input value={form.phone} onChange={update('phone')} placeholder="09XX XXX XXXX" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label className="field">
        <span>Which program are you interested in?</span>
        <span className="field__select">
          <select value={form.program} onChange={update('program')}>
            <option value="">Select a program</option>
            {programOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
          <Icon name="chevron" size={18} />
        </span>
      </label>
      <label className="field">
        <span>Message</span>
        <textarea
          rows="5"
          value={form.message}
          onChange={update('message')}
          placeholder="What's your goal? Any questions about rates or schedules?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && <small id="err-message" className="field__error">{errors.message}</small>}
      </label>
      <div className="form__actions">
        <Cta type="submit">Copy and open Facebook</Cta>
        <a className="ghost ghost--sm" href={smsHref}><span>Send as text instead</span></a>
      </div>
      <div className="form__status" aria-live="polite">
        {status?.copied && <p>Message copied. Paste it into the JayCab Fitness chat on Facebook.</p>}
        {status && !status.copied && (
          <>
            <p>Facebook opened, but your browser blocked copying. Copy this message and paste it into the chat:</p>
            <pre>{status.text}</pre>
          </>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section className="contact" id="visit">
      <div className="wrap">
        <Reveal className="head">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="h2">Get in touch</h2>
          <p className="head__sub">Ready to start or want to know more? Write your message here and send it our way.</p>
        </Reveal>

        <Reveal className="contact__panel">
          <img src="./photos/trainer.jpg" alt="" loading="lazy" />
          <ContactForm />
        </Reveal>

        <Reveal className="location">
          <div className="location__head">
            <h3><Icon name="pin" size={24} /> Location</h3>
            <p>A short trip from anywhere in Cogeo Gate 2. Message us for today's hours before you head over.</p>
          </div>
          <div className="location__card">
            <div className="location__info">
              <span className="location__tag">Find us</span>
              <h4>JayCab Fitness</h4>
              <address>
                {gym.addressLines.map((line) => <span key={line}>{line}</span>)}
              </address>
              <div className="location__actions">
                <Cta href={gym.directions} external>Get directions</Cta>
                <a className="ghost ghost--sm" href={gym.phoneHref}><Icon name="phone" size={15} /> <span>{gym.phoneDisplay}</span></a>
              </div>
            </div>
            <div className="location__map">
              <iframe
                title="Map of Langka Street, Cogeo Gate 2, Antipolo City"
                src={gym.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
