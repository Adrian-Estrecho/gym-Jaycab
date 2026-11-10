// JayCab Fitness: three small behaviors, no dependencies.
document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The plate rolls away to the right as you scroll, clear of the text.
// Its rotation matches the distance traveled.
const wheel = document.querySelector('.plate__wheel');
if (wheel && !reduceMotion) {
  let queued = false;
  const update = () => {
    queued = false;
    const y = window.scrollY;
    if (y > window.innerHeight * 1.2) return;
    const distance = y * 0.7;
    const radius = wheel.getBoundingClientRect().width / 2 || 1;
    const degrees = (distance / radius) * (180 / Math.PI);
    wheel.style.transform = `translateX(${distance}px) rotate(${degrees}deg)`;
  };
  window.addEventListener('scroll', () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

// The route line draws in when the stops reach the screen.
const stops = document.querySelector('.stops');
if (stops) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        stops.classList.add('is-in');
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(stops);
  } else {
    stops.classList.add('is-in');
  }
}

// Proposal notes mark what the gym still has to confirm. Delete this and the button at launch.
const notesToggle = document.querySelector('.notes-toggle');
if (notesToggle) {
  notesToggle.addEventListener('click', () => {
    const off = document.body.classList.toggle('notes-off');
    notesToggle.setAttribute('aria-pressed', String(!off));
    notesToggle.textContent = `Proposal notes: ${off ? 'off' : 'on'}`;
  });
}
