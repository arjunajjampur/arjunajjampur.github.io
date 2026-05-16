import CaseStudyPage from '../../components/CaseStudyPage';

function DocCenterIcon() {
  const cur = (tx, ty, color) => (
    <path
      key={color}
      d={`M${tx},${ty} L${tx},${ty + 11} L${tx + 2.5},${ty + 8.5} L${tx + 4.5},${ty + 13} L${tx + 6},${ty + 12.5} L${tx + 4.5},${ty + 8} L${tx + 7.5},${ty + 8} Z`}
      fill={color}
      stroke="white"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  );
  return (
    <svg className="cs-concept-icon" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14 L8 46 Q8 48 10 48 L34 48 Q36 48 36 46 L36 16 L28 8 L10 8 Q8 8 8 10 Z"
            fill="var(--bg-subtle)" stroke="var(--text-2)" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M28 8 L28 16 L36 16"
            stroke="var(--text-2)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <line x1="13" y1="26" x2="31" y2="26" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="32" x2="31" y2="32" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="38" x2="23" y2="38" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round"/>
      {cur(3, 30, '#4B8EF1')}
      {cur(26, 4, '#34C759')}
      {cur(34, 34, '#F5A623')}
    </svg>
  );
}

function SyndicationTableIcon() {
  return (
    <svg className="cs-concept-icon" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="44" height="44" rx="2" stroke="var(--text-2)" strokeWidth="1.5" fill="var(--bg-subtle)"/>
      <line x1="4" y1="16" x2="48" y2="16" stroke="var(--text-2)" strokeWidth="1"/>
      <line x1="4" y1="26" x2="48" y2="26" stroke="var(--border)" strokeWidth="0.75"/>
      <line x1="4" y1="36" x2="48" y2="36" stroke="var(--border)" strokeWidth="0.75"/>
      <line x1="18" y1="4" x2="18" y2="48" stroke="var(--border)" strokeWidth="0.75"/>
      <rect x="6" y="8.5" width="8" height="2.5" rx="1" fill="var(--text-3)"/>
      <rect x="20" y="8.5" width="12" height="2.5" rx="1" fill="var(--text-3)"/>
      <rect x="6" y="19.5" width="9" height="2" rx="0.5" fill="var(--text-3)"/>
      <rect x="6" y="29.5" width="7" height="2" rx="0.5" fill="var(--text-3)"/>
      <rect x="6" y="39.5" width="8" height="2" rx="0.5" fill="var(--text-3)"/>
      <rect x="20" y="18" width="22" height="4" rx="1" fill="#4B8EF1"/>
      <rect x="20" y="28" width="16" height="4" rx="1" fill="#34C759"/>
      <rect x="20" y="38" width="9" height="4" rx="1" fill="#F5A623"/>
    </svg>
  );
}

function CovenantReviewerIcon() {
  return (
    <svg className="cs-concept-icon" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14 L8 46 Q8 48 10 48 L34 48 Q36 48 36 46 L36 16 L28 8 L10 8 Q8 8 8 10 Z"
            fill="var(--bg-subtle)" stroke="var(--text-2)" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M28 8 L28 16 L36 16"
            stroke="var(--text-2)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <line x1="13" y1="24" x2="31" y2="24" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="12" y="28.5" width="20" height="5" rx="1" fill="#F5A623" fillOpacity="0.28"/>
      <line x1="13" y1="31" x2="30" y2="31" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13" y1="38" x2="24" y2="38" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M42 5 L43.2 8.8 L47 10 L43.2 11.2 L42 15 L40.8 11.2 L37 10 L40.8 8.8 Z"
            fill="var(--accent)"/>
      <path d="M46 3 L46.5 4.5 L48 5 L46.5 5.5 L46 7 L45.5 5.5 L44 5 L45.5 4.5 Z"
            fill="var(--accent)" opacity="0.6"/>
    </svg>
  );
}

export default function SyndicatedLoan() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/agentic-ds', label: 'Agentic Design System' }}
      next={{ to: '/work/ai-workshop', label: 'AI Prototyping Workshop' }}
    >
      <h1 className="cs-title">Syndicated Loan — Future State</h1>
      <p className="cs-subtitle">Designing the end-to-end vision for one of global banking's most complex workflows.</p>

      <div className="cs-section">
        <h2 className="cs-section-heading">Context</h2>
        <div className="cs-body">
          <p>
            The syndicated loan process at a global bank involves hundreds of counterparties, multi-step approval chains, and workflows that had been largely manual for decades. In November 2025 — within my first 90 days at JPMorganChase — I was asked to lead the design of a future-state vision for the end-to-end process across Global Banking.
          </p>
          <p>
            The output wasn't an MVP. It was a narrative: a cohesive set of screens and a video that would align stakeholders across the business around a shared vision before engineering investment was committed.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Approach</h2>
        <div className="cs-body">
          <p>
            The work was informed by two inputs: outputs from a masterclass with MIT and extensive discovery work done by partner teams across the end-to-end journey. My role was to translate that research into something a senior stakeholder could see and react to.
          </p>
          <p>
            Within one month, the team built a narrative, mocked up aspirational screens, and produced a video to tell the story. The screens were deliberately forward-looking — incorporating AI automation for specific tasks and personalized experiences — while remaining grounded in the real constraints of the process.
          </p>
          <p>
            The video became the alignment artifact. It gave every stakeholder — across compliance, relationship management, operations, and technology — a single reference point for what "done" looked like.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Key Concepts</h2>
        <div className="cs-body">
          <p>
            Three new experiences formed the core of the future-state vision — each addressing a distinct failure point in the current process.
          </p>
        </div>
        <div className="cs-concept-cards">
          <div className="cs-concept-card">
            <DocCenterIcon />
            <div className="cs-concept-name">Counsel Doc Center</div>
            <div className="cs-concept-desc">
              Real-time collaborative workspace for term sheet negotiation. Lawyers, relationship managers, and borrower counsel review, redline, and reach agreement in one place — eliminating version conflicts, the single biggest source of deal delay.
            </div>
          </div>
          <div className="cs-concept-card">
            <SyndicationTableIcon />
            <div className="cs-concept-name">Syndication Table</div>
            <div className="cs-concept-desc">
              Live commitment dashboard showing funding health across participating institutions. Who has committed, at what ticket size, and where gaps remain — from manual aggregation to one glanceable view of deal health.
            </div>
          </div>
          <div className="cs-concept-card">
            <CovenantReviewerIcon />
            <div className="cs-concept-name">AI Covenant Reviewer</div>
            <div className="cs-concept-desc">
              Surfaces precedents from prior deals, flags clauses that deviate from market standard, and suggests language based on historical outcomes. Faster starting point, less back-and-forth from asymmetric knowledge across the table.
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Outcome</h2>
        <div className="cs-body">
          <p>
            The future-state vision directly fed the MVP currently in development. I now act as a design consultant to the lead designer on that MVP, ensuring continuity between the vision and what gets built.
          </p>
          <p>
            The work was recognized with the <strong>Digital &amp; Platform Services Quarterly Excellence Award for Q4 2025</strong> — the quarter I joined the firm.
          </p>
          <blockquote className="cs-blockquote">
            Within only a month we were able to build a narrative, mockup aspirational designs, and produce a video to tell the story.
            <br /><span style={{ fontSize: '0.7em', opacity: 0.7, fontWeight: 500 }}>— Q4 2025 Excellence Award recognition</span>
          </blockquote>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">What's Next</h2>
        <div className="cs-body">
          <p>
            The MVP is in active development. Key metrics — client experience improvements and process efficiency — will be measured post-launch.
          </p>
        </div>
      </div>
    </CaseStudyPage>
  );
}
