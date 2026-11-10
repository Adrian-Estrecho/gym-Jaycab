// Everything the gym may need to update lives in this file.

export const gym = {
  name: 'JayCab Fitness',
  phoneDisplay: '0960 371 8716',
  phoneHref: 'tel:+639603718716',
  smsNumber: '+639603718716',
  facebook: 'https://www.facebook.com/p/JAYCAB-FITNESS-100086471773307/',
  addressLines: [
    'Blk 9 Lot 1, Phase 4B, Langka Street',
    'Brgy. Dela Paz, Cogeo Gate 2',
    'Antipolo City, Rizal',
  ],
  directions: 'https://www.google.com/maps/search/?api=1&query=Langka+Street+Cogeo+Gate+2+Antipolo+City',
  mapEmbed: 'https://www.google.com/maps?q=Langka%20Street%2C%20Cogeo%20Gate%202%2C%20Antipolo%20City&output=embed',
};

// Facebook counts. Refresh these before launch.
export const counts = {
  recommendYes: 14,
  recommendTotal: 14,
  pageLikes: '2,400+',
  checkIns: '257',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#start', label: 'Get started' },
  { href: '#rates', label: 'Rates' },
  { href: '#faq', label: 'FAQ' },
  { href: '#visit', label: 'Visit' },
];

// `add` is the kilos loaded per side on the barbell when this step is reached.
export const steps = [
  {
    title: 'Message us',
    text: 'Tell us your goal and ask about current rates. Facebook or phone both work.',
    add: 25,
  },
  {
    title: 'Come to Langka Street',
    text: "Head to Cogeo Gate 2, then Phase 4B. We're at Blk 9 Lot 1.",
    add: 20,
  },
  {
    title: 'Meet your trainer',
    text: 'See the gym floor, talk through your goal, and start training.',
    add: 15,
  },
  {
    title: 'Come back',
    text: "Same street, next session. That's where the progress happens.",
    add: 10,
  },
];

// Set `price` to a string such as '₱1,200' once the gym confirms it.
export const plans = [
  {
    id: 'own',
    title: 'Train on your own',
    icon: 'dumbbell',
    desc: 'Come in, run your own program, and ask a trainer when you need a hand.',
    rates: [
      { label: 'Single session', price: null },
      { label: 'Monthly membership', price: null },
    ],
    features: ['Open gym access', 'Your program, your pace', 'A trainer nearby when you have a question'],
  },
  {
    id: 'trainer',
    title: 'Train with a trainer',
    icon: 'users',
    badge: "Women's enrollment open",
    desc: 'Work with a trainer on a plan built around your goal.',
    rates: [
      { label: "Women's Gym Workouts", price: null },
      { label: 'Personal training', price: null },
    ],
    highlight: 'Workouts tailored for women',
    features: ['A plan built around your goal', 'Trainers qualified locally and internationally'],
  },
];

export const programOptions = ["Women's Gym Workouts", 'Personal Training', 'Open Gym', 'Not sure yet'];

export const faqs = [
  {
    q: 'How do I get started?',
    a: 'Message us on Facebook or call 0960 371 8716. Tell us your goal, ask about rates, then come by to see the gym floor and meet a trainer.',
  },
  {
    q: 'Do you have workouts for women?',
    a: "Yes. Our Women's Gym Workouts are tailored for women and held here at the gym. Enrollment is open.",
  },
  {
    q: "I've never trained before. Is that okay?",
    a: 'Yes. Tell your trainer it\'s your first time. You\'ll see the gym floor, talk through your goal, and start from there.',
  },
  {
    q: 'Can I work out on my own?',
    a: 'Yes. Open gym lets you run your own program, and you can ask a trainer when you need a hand.',
  },
  {
    q: 'How much does it cost?',
    a: "Message us on Facebook or call for today's rates on single sessions, monthly membership, women's workouts, and personal training.",
  },
  {
    q: 'What are your hours?',
    a: "Message us for today's hours before you head over.",
  },
];
