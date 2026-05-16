import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function CaseStudyPage({ prev, next, children }) {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <div className="cs-pagination">
            {prev ? <Link to={prev.to}>← {prev.label}</Link> : <span />}
            <Link to="/work">All work</Link>
            {next ? <Link to={next.to}>{next.label} →</Link> : <span />}
          </div>

          {children}

          <div className="cs-pagination" style={{ marginTop: '4rem', borderBottom: 'none', borderTop: '1px solid var(--border)' }}>
            {prev
              ? <Link to={prev.to}>← {prev.label}</Link>
              : <span className="cs-pagination-disabled">← Previous</span>}
            <Link to="/work">All work</Link>
            {next
              ? <Link to={next.to}>{next.label} →</Link>
              : <span className="cs-pagination-disabled">Next →</span>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
