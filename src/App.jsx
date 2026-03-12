const skills = [
  'React',
  'JavaScript (ES6+)',
  'Node.js',
  'Vite',
  'REST APIs',
  'UI/UX Design',
  'Accessibility (WCAG)',
  'Performance Optimization',
  'GitHub Actions',
  'Cloud Deployment',
];

const highlights = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Production Projects Shipped', value: '20+' },
  { label: 'Avg. Lighthouse Score', value: '95+' },
  { label: 'Deployment Standard', value: 'CI/CD + GitHub Pages' },
];

const experiences = [
  {
    role: 'Frontend Engineer',
    company: 'Brightwave Digital',
    date: '2022 — Present',
    points: [
      'Built scalable React + Vite applications with reusable UI patterns and maintainable architecture.',
      'Improved Lighthouse scores by 30% through code splitting, image optimization, and bundle tuning.',
      'Partnered with product and QA to deliver accessible interfaces aligned to WCAG AA standards.',
    ],
  },
  {
    role: 'JavaScript Developer',
    company: 'Freelance',
    date: '2020 — 2022',
    points: [
      'Delivered responsive web apps for education, e-commerce, and healthcare clients using React and Node.js tooling.',
      'Translated business requirements into production-ready components and API integrations.',
      'Implemented SEO and analytics strategies that improved organic traffic and conversion metrics.',
    ],
  },
];

const projects = [
  {
    title: 'InsightBoard Analytics',
    description:
      'A real-time dashboard that visualizes business metrics with interactive charts, role-based access, and filtering.',
    stack: 'React, Node.js, Express, PostgreSQL',
    impact: 'Reduced reporting turnaround from hours to minutes for operations teams.',
  },
  {
    title: 'Nomad Journal',
    description:
      'A mobile-first travel journaling app with offline support, photo uploads, and route snapshots.',
    stack: 'React, Vite, Firebase, PWA',
    impact: 'Reached 8k+ active users and earned a 4.7/5 average user rating.',
  },
  {
    title: 'HireFlow Portal',
    description:
      'A streamlined applicant tracking portal that helps recruiters shortlist candidates and automate updates.',
    stack: 'React, Node.js, MongoDB, Tailwind CSS',
    impact: 'Cut recruiter manual follow-up tasks by 40%.',
  },
];

const certifications = [
  'Meta Front-End Developer Professional Certificate',
  'Google UX Design Certificate',
  'Scrum Fundamentals Certified (SFC)',
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <p className="logo">Alex Carter</p>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="button button-secondary">Hire Me</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">React + Node.js Engineer • Open to global opportunities</p>
          <h1>I help teams ship high-quality JavaScript products that are fast, accessible, and built to scale.</h1>
          <p className="hero-description">
            This portfolio is now built with React on Vite, using Node.js tooling and modern deployment standards.
            It highlights what I build, how I collaborate, and the measurable outcomes I deliver.
          </p>
          <div className="cta-group">
            <a href="#projects" className="button">View Projects</a>
            <a href="#contact" className="button button-secondary">Download Resume</a>
          </div>
        </div>

        <div className="stats-grid">
          {highlights.map((item) => (
            <article key={item.label} className="stat-card">
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </header>

      <main>
        <section className="section" id="skills">
          <h2>Core Skills</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="card-grid">
            {experiences.map((item) => (
              <article key={`${item.role}-${item.company}`} className="card">
                <div className="card-header">
                  <h3>{item.role}</h3>
                  <span>{item.date}</span>
                </div>
                <p className="company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Featured Projects</h2>
          <div className="card-grid project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="stack">{project.stack}</p>
                <p className="impact">Impact: {project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Certifications</h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="section contact" id="contact">
          <h2>Let&apos;s Build Something Great</h2>
          <p>
            Available for full-time roles and freelance collaboration. Reach out and I&apos;ll get back within 24 hours.
          </p>
          <div className="contact-actions">
            <a className="button" href="mailto:alexcarter.dev@email.com">alexcarter.dev@email.com</a>
            <a className="button button-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
