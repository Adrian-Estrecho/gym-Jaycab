import { useEffect, useRef } from 'react';

const paths = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  phone: <path d="M6.6 3.5 9 3l2 4.6-2 1.6a12 12 0 0 0 5.8 5.8l1.6-2 4.6 2-.5 2.4a2.6 2.6 0 0 1-2.6 2.1A15.9 15.9 0 0 1 4.5 6.1a2.6 2.6 0 0 1 2.1-2.6Z" />,
  pin: <><path d="M12 21.5s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  medal: <><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 8 5-2.6 5 2.6-1.5-8" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.5-3.8 3-6 6.5-6s6 2.2 6.5 6" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18.5 14.6c1.7.8 2.7 2.6 3 5.4" /></>,
  dumbbell: <path d="M3 9.5v5M6.5 6.5v11M17.5 6.5v11M21 9.5v5M6.5 12h11" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, size = 20 }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.500 21.500v-8.200h2.800l.4-3.200h-3.200V8.100c0-.9.300-1.600 1.600-1.600h1.700V3.600c-.3 0-1.300-.1-2.400-.1-2.400 0-4.100 1.500-4.100 4.200v2.400H7.500v3.200h2.800v8.200h3.200Z" />
    </svg>
  );
}

// The gym's own neon-sign logo. Source artwork: brand-source/jaycab-logo.png.
export function Logo({ large = false, className = '' }) {
  return (
    <img
      className={`logo ${className}`}
      src={large ? './brand/logo-1400.webp' : './brand/logo-640.webp'}
      width={large ? 1400 : 640}
      height={large ? 398 : 182}
      alt="JayCab Fitness"
      decoding="async"
    />
  );
}

// The primary action on the page: a pill with an arrow that nudges on hover.
export function Cta({ href, children, external, className = '', ...rest }) {
  const props = external ? { target: '_blank', rel: 'noopener' } : {};
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={`cta ${className}`} href={href} {...props} {...rest}>
      <span>{children}</span>
      <span className="cta__arrow"><Icon name="arrow" size={16} /></span>
    </Tag>
  );
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { '--delay': `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
