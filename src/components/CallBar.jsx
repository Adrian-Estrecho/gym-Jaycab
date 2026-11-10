import { useEffect, useState } from 'react';
import { gym } from '../data.js';
import { FacebookIcon, Icon } from './ui.jsx';

// Phone only: the two ways to reach the gym stay under the thumb after the hero.
export default function CallBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`callbar ${show ? 'is-shown' : ''}`} inert={!show}>
      <a className="callbar__primary" href={gym.facebook} target="_blank" rel="noopener"><FacebookIcon size={16} /> Message us</a>
      <a className="callbar__secondary" href={gym.phoneHref}><Icon name="phone" size={16} /> Call</a>
    </div>
  );
}
