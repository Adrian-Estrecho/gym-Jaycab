import { useId, useState } from 'react';
import { faqs } from '../data.js';
import { Eyebrow, Icon, Reveal } from './ui.jsx';

function Item({ item, open, onToggle }) {
  const id = useId();
  return (
    <div className={`faq__item ${open ? 'is-open' : ''}`}>
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle}>
          <span>{item.q}</span>
          <Icon name="plus" size={18} />
        </button>
      </h3>
      <div className="faq__answer" id={id}>
        <div><p>{item.a}</p></div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="sheet sheet--overlap faq" id="faq">
      <div className="wrap faq__wrap">
        <Reveal className="head">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="h2">Frequently asked questions</h2>
          <p className="head__sub">The things people ask us before their first visit.</p>
        </Reveal>
        <Reveal className="faq__list">
          {faqs.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
