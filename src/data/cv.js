export const profile = {
  name: 'Al-Hussein Raed',
  role: 'Full-Stack Developer',
  location: 'Cairo, Egypt',
  email: 'husseinraed243@gmail.com',
  phone: '+20 120 525 1472',
  linkedin: 'https://www.linkedin.com/in/al-hussein-raed',
  github: 'https://github.com/distru3',
  tagline:
    'I build fast, reliable web products across the stack — React interfaces, Node.js and Laravel backends, and the databases between them.',
};

export const about = [
  'Software Developer and IT graduate with practical Frontend, Backend, Database, and integration experience across multiple team projects. I work comfortably on both sides of the stack — building React interfaces and the Node.js / Laravel / PHP backends that power them.',
  'I have configured application logic, designed and troubleshot MySQL/MariaDB databases, integrated third-party APIs (Cloudinary, Exchange Rate API) into production-style systems, and revamped existing features to improve functionality and usability.',
];

export const facts = [
  { k: 'role', v: 'Full-Stack Developer' },
  { k: 'location', v: 'Cairo, Egypt' },
  { k: 'focus', v: 'Frontend · backend · databases' },
  { k: 'education', v: 'B.Sc. Computers & Informatics — Zagazig University' },
  { k: 'currently', v: 'Freelance — open to frontend, backend & full-stack roles' },
];

export const astroos = {
  name: 'Echoes of Water, Shadows of Loss: Derna Seen by Radar',
  subtitle: 'Astroos',
  year: '2025',
  badge: 'NASA Space Apps 2025 · Global Nominee',
  desc: 'Astroos — a data-storytelling platform that reveals the 2023 Derna flood through Synthetic Aperture Radar (SAR) — Sentinel-1 flood mapping, radar-vs-optical comparison, interactive quizzes, and an AI chatbot grounded in NASA\u2019s open data. Advanced past 1,290 projects to global judging.',
  badge2: "First-ever People's Choice & Global Nominee · Cairo Local Event",
  deps: ['SAR / Sentinel-1', 'NASA Open Data', 'AI chatbot', 'React', 'Vercel'],
  links: [
    { label: 'live project', href: 'https://astroos-curiou-sar-1iat.vercel.app/' },
    {
      label: 'demo',
      href: 'https://drive.google.com/file/d/1bzk0mrbpSDTPUqY1olxgTyP5Km_lRm2V/view?usp=sharing',
    },
    {
      label: 'official team page',
      href: 'https://www.spaceappschallenge.org/2025/find-a-team/astroos1/',
    },
  ],
};

export const projects = [
  {
    name: 'Soraya',
    tag: 'graduation project',
    year: '2025',
    desc: 'AI-powered multi-voice audiobook generator — detects characters and dialogue in any book, assigns each a distinct TTS voice, and exports a finished M4B.',
    deps: ['React 19', 'FastAPI', 'PyTorch / Transformers', 'BookNLP', 'Gemini'],
    links: [],
  },
  {
    name: 'Transfer Market Command',
    tag: 'team project',
    year: '2025',
    desc: 'World Cup-themed transfer marketplace — federations list players, scouts sign them with QR confirmations, and live exchange rates price every move.',
    deps: ['Laravel 12', 'Livewire 3', 'Tailwind', 'Cloudinary', 'ExchangeRate-API'],
    links: [],
  },
  {
    name: 'Hogwarts for Programming',
    tag: 'team project',
    year: '2024',
    desc: 'MVC education platform for a fictional programming school — auth, role/house assignment, and course management on a MySQL backend.',
    deps: ['PHP 8', 'MySQL', 'MVC', 'Composer'],
    links: [{ label: 'source code', href: 'https://github.com/mohamedadel96e/Hogwarts-for-programming' }],
  },
  {
    name: 'Almagles',
    tag: 'personal project · رجال الأمة',
    year: '2026',
    full: true,
    desc: 'Full-stack Arabic (RTL) content platform — role-based publishing (reader / writer / admin), weekly schedule with Hijri dates, categorized posts, reactions, threaded comments, and email-verified signup with password recovery.',
    deps: ['React 18', 'Vite + Tailwind', 'Node.js / Express', 'TypeScript', 'Prisma + Neon', 'Cloudinary', 'Resend'],
    links: [{ label: 'source code', href: 'https://github.com/distru3/almagles' }],
  },
];

export const skills = {
  Languages: ['C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'PL/SQL'],
  Frontend: ['React.js'],
  Backend: ['Laravel', 'Node.js'],
  Data: ['MySQL', 'MongoDB'],
};

export const journey = [
  {
    when: 'Apr 2025 — present',
    title: 'Software Developer',
    org: 'Freelance',
    current: true,
    bullets: [
      'design and build full-stack projects with React.js and Node.js',
      'component structuring, routing, state management, and API integration',
      'broaden the stack as each project demands',
    ],
  },
  {
    when: 'Oct 2025',
    title: 'Astroos — NASA Space Apps',
    org: 'International Space Apps Challenge · Cairo Local Event',
    current: false,
    link: 'https://www.spaceappschallenge.org/2025/find-a-team/astroos1/',
    bullets: [
      'shipped a SAR data-storytelling platform — the 2023 Derna flood, seen by radar',
      'Global Nominee — advanced to global judging from 1,290+ projects',
      "People's Choice — Cairo Local Event, first People's Choice and Global Nominee at the same time in the event's history",
    ],
  },
  {
    when: 'Jan — Mar 2025',
    title: 'Software Developer Trainee',
    org: 'Siftop',
    current: false,
    bullets: [
      'enhanced existing modules — new features, refined logic, resolved bugs',
      'revamped functionality and performance for better UX',
    ],
  },
  {
    when: 'Jul — Sep 2024',
    title: 'React.js Developer',
    org: 'Information Technology Institute (ITI)',
    current: false,
    bullets: [
      'completed a 150-hour frontend program — JavaScript, ES6+, HTML5, React',
      'built hands-on React applications end to end',
    ],
  },
  {
    when: '2022 — 2026',
    title: 'B.Sc. Computers & Informatics',
    org: 'Zagazig University · Information Technology',
    current: false,
    bullets: [
      'practical frontend, backend, database, and integration experience',
      'configured logic, designed MySQL/MariaDB schemas, integrated third-party APIs',
    ],
  },
];

export const certifications = [
  { what: 'Front End Development Using React', who: 'ITI', yr: '2024' },
  { what: 'Backend Track — Certificate of Completion', who: 'IEEE SB ZAG', yr: '2025' },
  { what: 'Standard English Certificate', who: 'Education First (EF)', yr: '2023' },
];