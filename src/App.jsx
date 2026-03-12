const profile = {
  name: 'Robic John C. Borja',
  title: 'Web Developer | Backend Developer | Production Support',
  location: 'Bacoor, Cavite, Philippines',
  email: 'rborja.ccheetah@gmail.com',
  phone: '0906 295 1999',
  linkedin: 'https://www.linkedin.com/in/robic-john-borja-399328159/',
  github: 'https://github.com/robic07',
  summary:
    'I help teams build stable web applications, resolve production issues fast, and deliver systems that stay maintainable as the business grows. My background covers backend development, production support, web and mobile delivery, debugging, documentation, and cross-team execution.',
};

const heroStatement =
  'Backend-focused developer for business-critical applications, production support, and delivery that holds up in real operations.';

const metrics = [
  { value: '5+', label: 'Years Building Web Products' },
  { value: '3', label: 'Production-Focused Roles' },
  { value: '10+', label: 'Business Systems Delivered' },
  { value: '24/7', label: 'Support Mindset for Live Systems' },
];

const strengths = [
  'Backend services and production support for live applications',
  'Web and mobile delivery using Vue, Node.js, TypeScript, and modern UI stacks',
  'Database design, issue triage, debugging, and technical documentation',
  'Cloud-aware development using AWS services, Azure tooling, and containerized workflows',
];

const reasons = [
  'I can work on both feature delivery and production support, which reduces handoff gaps and speeds up issue resolution.',
  'I have experience across finance, e-commerce, inventory, and real estate systems with real business workflows.',
  'I contribute beyond coding through documentation, debugging, monitoring, collaboration, and user-facing problem solving.',
];

const recruiterSignals = [
  'Experience supporting live financial and business systems',
  'Hands-on work across backend APIs, debugging, databases, and cloud operations',
  'Able to translate operational problems into stable technical solutions',
];

const experience = [
  {
    company: 'Ascendon Digital Solutions Philippines Inc.',
    role: 'Backend Developer / Production Support',
    date: 'Aug 2025 - Present',
    summary:
      'Support and maintain backend services for banking and financial systems with emphasis on reliability, investigation, debugging, monitoring, and operational continuity.',
    points: [
      'Build and maintain backend services with clean, scalable, and production-ready code.',
      'Investigate incidents, resolve root-cause issues, and restore service stability for live systems.',
      'Monitor logs and application behavior using AWS CloudWatch and related operational tools.',
      'Work with PostgreSQL, API Gateway, and AWS Secrets Manager across production environments.',
      'Produce technical documentation, incident reports, troubleshooting guides, and system notes.',
    ],
  },
  {
    company: 'Infopiphany I.T. Solution',
    role: 'Web / Mobile Developer',
    date: 'Jun 2020 - Aug 2025',
    summary:
      'Designed and delivered web and mobile systems across e-commerce, HR, inventory, finance, and internal operations using Vue, Nuxt, Ionic, Node.js, and MySQL-based solutions.',
    points: [
      'Built responsive applications with Vue 2, Vue 3, Nuxt JS, Ionic, HTML, CSS, SCSS, Tailwind, and Bootstrap.',
      'Developed backend APIs and services using Node.js, Express, and Sails.',
      'Designed databases, implemented reporting workflows, and maintained business-critical system features.',
      'Collaborated with designers, developers, clients, and stakeholders to deliver aligned solutions.',
      'Provided onboarding, training, and technical guidance for internal users and teams.',
    ],
  },
  {
    company: 'Investpro Realty',
    role: 'Web Developer',
    date: 'Nov 2023 - Jun 2024',
    summary:
      'Delivered a real estate platform experience with property browsing, agent and user management, commission tracking, UI design, Azure-backed collaboration, and MERN-stack implementation.',
    points: [
      'Implemented front-end and back-end features using MongoDB, Express, React, and Node.js.',
      'Built property listing, agent management, user dashboards, and commission processing flows.',
      'Designed MongoDB schemas and improved data handling for responsive application behavior.',
      'Supported project coordination, documentation, testing, and deployment preparation.',
    ],
  },
];

const projects = [
  {
    title: 'Banking Systems',
    type: 'Confidential Financial Systems',
    description:
      'Contributed to backend systems supporting banking and financial operations, with focus on data integrity, incident investigation, issue resolution, and secure production support.',
    highlights: ['Backend services', 'Production support', 'PostgreSQL', 'AWS monitoring'],
  },
  {
    title: 'E-Commerce Suite',
    type: 'Commerce Platform',
    description:
      'Built and maintained modules for product management, payment methods, promotions, finance tracking, and electronic commerce workflows that improved internal efficiency and online selling operations.',
    highlights: ['Vue', 'Node.js', 'MySQL', 'Business workflows'],
  },
  {
    title: 'Time Labor System',
    type: 'Internal Operations Platform',
    description:
      'Developed a labor tracking application for monitoring employee work and task activity in real time, giving teams clearer reporting and better day-to-day visibility.',
    highlights: ['Vue', 'TypeScript', 'Reporting', 'Operations tracking'],
  },
  {
    title: 'Mobile Inventory',
    type: 'Mobile Inventory Management',
    description:
      'Created a mobile-first inventory system for tracking, managing, and organizing inventory items across workflows with a practical interface for operational teams.',
    highlights: ['Ionic', 'Vue 3', 'TypeScript', 'Inventory management'],
  },
  {
    title: 'Real Estate System',
    type: 'MERN Platform',
    description:
      'Built a property platform with browsing, user and agent management, commission processing, and structured database design to support end-to-end real estate workflows.',
    highlights: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
];

const skillGroups = [
  {
    title: 'Backend and Data',
    items: ['Node.js', 'Express', 'Sails', 'PHP', 'SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Frontend and Mobile',
    items: ['Vue 2', 'Vue 3', 'Nuxt JS', 'React', 'Ionic', 'TypeScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    title: 'Cloud and Operations',
    items: ['AWS CloudWatch', 'AWS API Gateway', 'AWS Secrets Manager', 'Azure DevOps', 'Production monitoring'],
  },
  {
    title: 'Workflow and Delivery',
    items: ['Git', 'GitLab', 'Docker', 'Kubernetes', 'QA testing', 'Technical documentation'],
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <main className="page">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Building reliable systems that stay strong in production</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-statement">{heroStatement}</p>
            <p className="hero-description">{profile.summary}</p>

            <div className="hero-proof">
              <span>Backend development</span>
              <span>Production support</span>
              <span>Business systems delivery</span>
            </div>

            <div className="cta-group">
              <a className="button" href="#experience">View Experience</a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>Email Me</a>
            </div>

            <div className="social-strip">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <aside className="profile-card">
            <p className="profile-label">Based in</p>
            <p className="profile-value">{profile.location}</p>
            <p className="profile-label">Email</p>
            <a className="profile-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p className="profile-label">Phone</p>
            <p className="profile-value">{profile.phone}</p>
            <p className="profile-label">Profiles</p>
            <div className="profile-links">
              <a className="profile-link subtle-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="profile-link subtle-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </aside>
        </section>

        <section className="metrics-grid">
          {metrics.map((item) => (
            <article key={item.label} className="metric-card">
              <p className="metric-value">{item.value}</p>
              <p className="metric-label">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="feature-layout">
          <article className="section section-strong">
            <p className="section-tag">About Me</p>
            <h2>Development work that balances delivery speed with production reliability.</h2>
            <p>
              My background combines application development with production ownership. I have worked across
              backend implementation, issue investigation, cloud-backed support, UI delivery, database design,
              and system documentation for business platforms used in finance, commerce, inventory, and real estate.
            </p>
          </article>

          <article className="section">
            <p className="section-tag">Core Focus</p>
            <div className="strength-list">
              {strengths.map((item) => (
                <div key={item} className="strength-item">
                  <span className="strength-bullet" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section signal-panel">
          <div className="section-heading">
            <p className="section-tag">What Stands Out</p>
            <h2>The points an employer should notice immediately.</h2>
          </div>

          <div className="signal-grid">
            {recruiterSignals.map((item) => (
              <article key={item} className="signal-card">
                <span className="signal-mark">01</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-tag">Why Hire Me</p>
            <h2>A concise case for what I bring to an engineering team.</h2>
          </div>

          <div className="reason-grid">
            {reasons.map((item) => (
              <article key={item} className="reason-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-tag">Experience</p>
            <h2>Professional history shaped by delivery work and live-system responsibility.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-body">
                  <div className="timeline-header">
                    <div>
                      <p className="timeline-date">{item.date}</p>
                      <h3>{item.role}</h3>
                      <p className="timeline-company">{item.company}</p>
                    </div>
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-tag">Selected Work</p>
            <h2>Projects and systems drawn from my actual resume experience.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                  <p className="project-type">{project.type}</p>
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="chip-grid">
                  {project.highlights.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skill-layout">
          {skillGroups.map((group) => (
            <article key={group.title} className="section skill-card">
              <p className="section-tag">{group.title}</p>
              <div className="skill-chip-grid">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="section contact-panel" id="contact">
          <div>
            <p className="section-tag">Contact</p>
            <h2>Available for web development, backend support, and production-focused roles.</h2>
            <p>
              If you need someone who can build features, investigate live issues, and work across engineering and
              operations, contact me directly.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="button button-secondary" href="tel:+639062951999">{profile.phone}</a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
