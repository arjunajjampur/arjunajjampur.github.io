import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const projects = [
  {
    to: '/work/agentic-ds',
    title: 'Agentic Design System',
    desc: 'Building a machine-readable design system that an AI agent can maintain, query, and act on.',
    tags: ['AI', 'Design Systems', 'JPMorganChase'],
  },
  {
    to: '/work/syndicated-loan',
    title: 'Syndicated Loan — Future State',
    desc: 'Designing the end-to-end future-state vision for one of global banking\'s most complex workflows.',
    tags: ['UX', 'Strategy', 'JPMorganChase'],
  },
  {
    to: '/work/ai-workshop',
    title: 'AI Prototyping Workshop',
    desc: '70% of GB designers onboarded to AI prototyping tools — vs. 45% across the rest of CIB.',
    tags: ['Enablement', 'AI', 'JPMorganChase'],
  },
  {
    to: '/work/llm-assistant',
    title: 'Design System LLM Assistant',
    desc: 'A conversational interface that lets designers query component guidelines without routing through the team.',
    tags: ['AI', 'Design Systems', 'JPMorganChase'],
  },
  {
    to: '/work/unity',
    title: 'Unity Design System',
    desc: 'How we built a fully atomic design system at Altair, serving 20+ product teams.',
    tags: ['Design Systems', 'UX', 'Figma'],
  },
  {
    to: '/work/guidepanels',
    title: 'Inspire Guide Panels',
    desc: 'A novel component to capture complex multi-step inputs in engineering software.',
    tags: ['UX', 'Component Design', 'Enterprise'],
  },
  {
    to: '/work/thea',
    title: 'Thea Render',
    desc: 'Redesigning the image post-processing workflow for Altair Inspire.',
    tags: ['UX', 'Research', 'A/B Testing'],
  },
  {
    to: '/work/wilson',
    title: 'Wilson Golf Driver',
    desc: 'Golf driver design for Driver vs. Driver, featured on The Golf Channel.',
    tags: ['Industrial Design', 'CAD', 'TV'],
  },
  {
    to: '/work/3d',
    title: '3D Modeling',
    desc: 'A curation of 3D models built using polygons, NURBS, and rendering techniques.',
    tags: ['3D', 'CAD', 'Visualization'],
  },
  {
    to: '/work/2d',
    title: 'Illustration',
    desc: 'Sketching and marker work, mostly on iPad using Procreate.',
    tags: ['Illustration', 'Sketching'],
  },
];

export default function Work() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <section className="page" style={{ paddingTop: '4rem' }}>
            <p className="page-label">Portfolio</p>
            <h1 className="work-heading">Work</h1>
            <div className="work-grid">
              {projects.map((p) => (
                <Link to={p.to} key={p.to} className="work-card">
                  <div className="work-card-tags">
                    {p.tags.map((t) => (
                      <span className="work-card-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <h2 className="work-card-title">{p.title}</h2>
                  <p className="work-card-desc">{p.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
