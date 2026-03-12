const profile = {
  name: 'Robic John C. Borja',
  title: 'Web Developer | Backend Developer | Production Support',
  location: 'Bacoor, Cavite, Philippines',
  email: 'rborja.ccheetah@gmail.com',
  phone: '0906 295 1999',
  linkedin: 'https://www.linkedin.com/in/robic-john-borja-399328159/',
  summary:
    'I help teams build stable web applications, resolve production issues fast, and deliver systems that stay maintainable as the business grows. My background covers backend development, production support, web and mobile delivery, debugging, documentation, and cross-team execution.',
};

const heroStatement =
  'Web developer focused on dependable systems, backend delivery, and production support for real business operations.';

const resumeUrl = `${import.meta.env.BASE_URL}Robic-John-Borja-Resume.pdf`;

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
    role: 'Backend Developer / Production Support',
    challenge:
      'Financial systems require stable backend behavior, careful incident handling, and consistent support for sensitive production environments.',
    solution:
      'Supported backend services, investigated incidents, monitored production behavior, and documented troubleshooting steps to keep business-critical workflows dependable.',
    outcome:
      'Improved operational continuity through faster issue investigation, clearer support processes, and stronger day-to-day production reliability.',
    highlights: ['Backend services', 'Production support', 'PostgreSQL', 'AWS monitoring'],
  },
  {
    title: 'E-Commerce Suite',
    type: 'Commerce Platform',
    role: 'Web / Mobile Developer',
    challenge:
      'Commerce operations needed product, payment, promotion, and finance workflows that were easier to manage across connected business modules.',
    solution:
      'Built and maintained modules for product management, payment options, promotional control, finance tracking, and electronic commerce operations using modern web tooling.',
    outcome:
      'Delivered a more organized internal workflow for online selling, pricing management, and transaction handling across the platform.',
    highlights: ['Vue', 'Node.js', 'MySQL', 'Business workflows'],
  },
  {
    title: 'Time Labor System',
    type: 'Internal Operations Platform',
    role: 'Web Developer',
    challenge:
      'Teams needed a simpler way to monitor labor activity and track work in real time without relying on fragmented manual processes.',
    solution:
      'Created a labor tracking application focused on visibility, reporting, and practical task monitoring for day-to-day operations.',
    outcome:
      'Gave teams clearer reporting and faster access to work activity data, improving operational awareness across labor workflows.',
    highlights: ['Vue', 'TypeScript', 'Reporting', 'Operations tracking'],
  },
  {
    title: 'Mobile Inventory',
    type: 'Mobile Inventory Management',
    role: 'Mobile Developer',
    challenge:
      'Inventory work needed to be accessible on mobile so teams could update and manage items closer to actual operations.',
    solution:
      'Built a mobile-first inventory system with practical workflows for tracking, managing, and organizing inventory records.',
    outcome:
      'Made inventory handling more accessible for operational users and improved consistency in item management across workflows.',
    highlights: ['Ionic', 'Vue 3', 'TypeScript', 'Inventory management'],
  },
  {
    title: 'Real Estate System',
    type: 'MERN Platform',
    role: 'Web Developer',
    challenge:
      'The platform needed property browsing, agent coordination, and commission tracking in one system that stayed usable for both internal teams and end users.',
    solution:
      'Built features for listings, user and agent management, commission workflows, and database structure using the MERN stack.',
    outcome:
      'Supported a more connected property workflow with clearer data handling and smoother interaction between agents, users, and platform administrators.',
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
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>

            <div className="social-strip">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>

          <aside className="profile-card">
            <p className="profile-label">Current Focus</p>
            <p className="profile-value">Backend development, business systems, and production support</p>
            <p className="profile-label">Based in</p>
            <p className="profile-value">{profile.location}</p>
            <p className="profile-label">Email</p>
            <a className="profile-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p className="profile-label">Phone</p>
            <p className="profile-value">{profile.phone}</p>
            <p className="profile-label">Profile</p>
            <div className="profile-links">
              <a className="profile-link subtle-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="profile-link subtle-link" href={resumeUrl} target="_blank" rel="noreferrer">
                Resume PDF
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
            <p className="section-tag">Experience Snapshot</p>
            <h2>Core strengths developed through backend work, production support, and project delivery.</h2>
          </div>

          <div className="signal-grid">
            {recruiterSignals.map((item, index) => (
              <article key={item} className="signal-card">
                <span className="signal-mark">{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-tag">How I Work</p>
            <h2>Approach shaped by ownership, coordination, and practical problem solving.</h2>
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
            <h2>Selected systems and platforms based on my actual project experience.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                  <p className="project-type">{project.type}</p>
                </div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <div className="case-study">
                  <div>
                    <p className="case-label">Challenge</p>
                    <p className="project-description">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="case-label">Solution</p>
                    <p className="project-description">{project.solution}</p>
                  </div>
                  <div>
                    <p className="case-label">Outcome</p>
                    <p className="project-description">{project.outcome}</p>
                  </div>
                </div>
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
            <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              Resume PDF
            </a>
          </div>
        </section>

        <section className="closing-banner">
          <p className="section-tag">Closing Note</p>
          <h2>I build dependable systems, support live environments, and help teams ship work that lasts.</h2>
          <p>
            If your team needs someone who can handle both delivery and production responsibility, I am ready to
            contribute.
          </p>
        </section>
      </main>
    </div>
  );
}
