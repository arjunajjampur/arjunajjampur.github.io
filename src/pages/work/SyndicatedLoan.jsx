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

function CovenantScorecard() {
  const cx = 100, cy = 105, r = 74;
  const BORROWER = 82, AVG = 65, HIGH = 91;
  const arcLen = Math.PI * r;

  const toXY = (v, radius = r) => {
    const a = Math.PI * (1 - v / 100);
    return [cx + radius * Math.cos(a), cy - radius * Math.sin(a)];
  };

  const fullArc = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
  const filledLen = (BORROWER / 100) * arcLen;

  const [bx, by]   = toXY(BORROWER);
  const [ax, ay]   = toXY(AVG);
  const [hxi, hyi] = toXY(HIGH, r - 8);
  const [hxo, hyo] = toXY(HIGH, r + 8);

  return (
    <div className="cs-csc" role="img" aria-label="Reconstruction of covenant score card">
      <div className="cs-csc-header">
        <span className="cs-csc-title">Covenant Score Card</span>
      </div>
      <div className="cs-csc-gauge-wrap">
        <svg viewBox="0 0 200 118" className="cs-csc-svg">
          {/* Background track */}
          <path d={fullArc} fill="none"
                stroke="rgba(255,255,255,0.1)" strokeWidth="9" strokeLinecap="butt" />

          {/* Filled arc — borrower score */}
          <path d={fullArc} fill="none"
                stroke="#4d9de0" strokeWidth="9" strokeLinecap="butt"
                strokeDasharray={`${filledLen} ${arcLen + 1}`} />

          {/* Peer high — tick through arc */}
          <line x1={hxi} y1={hyi} x2={hxo} y2={hyo}
                stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Peer average — hollow circle */}
          <circle cx={ax} cy={ay} r={5.5}
                  fill="#0d1d3e" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

          {/* Borrower — filled circle */}
          <circle cx={bx} cy={by} r={7}
                  fill="#4d9de0" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" />

          {/* Composite score */}
          <text x={cx} y={cy - 14} textAnchor="middle"
                fontSize="30" fontWeight="800" fill="#ffffff"
                fontFamily="interstate-compressed, Helvetica Neue, sans-serif">82</text>
          <text x={cx} y={cy + 4} textAnchor="middle"
                fontSize="7" fill="rgba(255,255,255,0.4)"
                fontFamily="interstate, Helvetica Neue, sans-serif">COMPOSITE</text>

          {/* Range labels */}
          <text x={cx - r - 5} y={cy + 16} textAnchor="end"
                fontSize="7" fill="rgba(255,255,255,0.3)"
                fontFamily="interstate, Helvetica Neue, sans-serif">0</text>
          <text x={cx + r + 5} y={cy + 16} textAnchor="start"
                fontSize="7" fill="rgba(255,255,255,0.3)"
                fontFamily="interstate, Helvetica Neue, sans-serif">100</text>
        </svg>
      </div>
      <div className="cs-csc-legend">
        <span className="cs-csc-legend-item"><span className="cs-csc-mk cs-csc-mk--b" />Borrower</span>
        <span className="cs-csc-legend-item"><span className="cs-csc-mk cs-csc-mk--a" />Peer Average</span>
        <span className="cs-csc-legend-item"><span className="cs-csc-mk cs-csc-mk--h" />Peer High</span>
      </div>
    </div>
  );
}

function Dots({ n }) {
  return (
    <div className="cs-ps-dots">
      {Array.from({ length: n }).map((_, i) => <span key={i} className="cs-ps-dot" />)}
    </div>
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

      <div className="cs-nda-banner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
          <path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
          <circle cx="8" cy="11" r="1" fill="currentColor"/>
        </svg>
        <div className="cs-nda-banner-text">
          <strong>NDA — Screens not shown</strong>
          This project is covered by a non-disclosure agreement. I'm happy to walk through the work in detail during a conversation — reach out and I'll share what I can.
        </div>
      </div>

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
        <h2 className="cs-section-heading">Deal Assist</h2>
        <div className="cs-body">
          <p>
            Alongside the three core surfaces, I introduced <strong>Deal Assist</strong> — a persistent AI assistant embedded across every stage of the syndicated loan lifecycle. Unlike point-in-time tools, Deal Assist maintains deal context from origination through servicing, so each stage benefits from everything that came before it.
          </p>
          <p>
            The design challenge was showing continuity without adding friction. Deal Assist surfaces when it's relevant and stays out of the way when it isn't — a thread, not a feature.
          </p>
        </div>

        <div className="cs-deal-assist">
          <div className="cs-deal-assist-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1 L8.1 4.9 L12 6 L8.1 7.1 L7 11 L5.9 7.1 L2 6 L5.9 4.9 Z" fill="var(--accent)"/>
              <path d="M11.5 0.5 L12 2 L13.5 2.5 L12 3 L11.5 4.5 L11 3 L9.5 2.5 L11 2 Z" fill="var(--accent)" opacity="0.55"/>
            </svg>
            <span className="cs-deal-assist-header-label">Deal Assist</span>
            <span className="cs-deal-assist-header-tag">AI</span>
            <span className="cs-deal-assist-header-sub">Active across all 6 stages</span>
          </div>
          <div className="cs-deal-assist-stages">

            <div className="cs-deal-assist-stage">
              <div className="cs-deal-assist-stage-num">Stage 01</div>
              <div className="cs-deal-assist-stage-name">Deal Prep</div>
              <div className="cs-deal-assist-stage-desc">Surfaces comparable deals, suggests term structures, and drafts initial term sheet language based on borrower profile and current market conditions.</div>
            </div>

            <div className="cs-deal-assist-stage">
              <div className="cs-deal-assist-stage-num">Stage 02</div>
              <div className="cs-deal-assist-stage-name">Credit Pre-Approval</div>
              <div className="cs-deal-assist-stage-desc">Summarizes borrower financials, flags key risk indicators, and surfaces precedent deals to strengthen the credit memo narrative.</div>
            </div>

            <div className="cs-deal-assist-stage">
              <div className="cs-deal-assist-stage-num">Stage 03</div>
              <div className="cs-deal-assist-stage-name">Pitch Prep</div>
              <div className="cs-deal-assist-stage-desc">Drafts investor-ready pitch materials and pricing guidance grounded in live market data and prior syndication outcomes for comparable credits.</div>
            </div>

            <div className="cs-deal-assist-stage">
              <div className="cs-deal-assist-stage-num">Stage 04</div>
              <div className="cs-deal-assist-stage-name">Data Validation</div>
              <div className="cs-deal-assist-stage-desc">Reconciles counterparty and deal data across systems, surfacing discrepancies before they become downstream blockers in the syndication process.</div>
            </div>

            <div className="cs-deal-assist-stage">
              <div className="cs-deal-assist-stage-num">Stage 05</div>
              <div className="cs-deal-assist-stage-name">Syndication</div>
              <div className="cs-deal-assist-stage-desc">Tracks live commitment status, surfaces investor appetite signals from similar deals, and recommends targeted outreach to close funding gaps.</div>
            </div>

            <div className="cs-deal-assist-stage">
              <div className="cs-deal-assist-stage-num">Stage 06</div>
              <div className="cs-deal-assist-stage-name">Closing &amp; Servicing</div>
              <div className="cs-deal-assist-stage-desc">Monitors covenant compliance post-close, alerts on upcoming triggers, and automates routine servicing communications to reduce operational overhead.</div>
            </div>

          </div>
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
        <h2 className="cs-section-heading">Design Detail — Process Score</h2>
        <div className="cs-body">
          <p>
            Within the Syndication Table, each deal row needed to communicate two completely independent things: how healthy the deal is, and where it sits in the process. In most banking tools these live in separate views. I consolidated them into a single inline element — the <strong>Process Score</strong> — so a deal manager could read both axes in one glance without navigating anywhere.
          </p>
          <p>
            The score (higher is better) anchors the left as a badge. The bar reads left-to-right as a stage timeline — darkest at origination, lighter toward close — with a position indicator showing progress within the active stage.
          </p>
        </div>

        <div className="cs-process-score" role="img" aria-label="Reconstruction of process score">
          {/* Legend */}
          <div className="cs-ps-legend">
            <span><strong>7</strong> — Score (Higher is better)</span>
            <span className="cs-ps-legend-sep">·</span>
            <span className="cs-ps-legend-progress">
              <span className="cs-ps-pill-icon" aria-hidden="true" />
              Progress within task
            </span>
          </div>

          {/* Track */}
          <div className="cs-ps-track">
            <div className="cs-ps-score-badge">7</div>
            <div className="cs-ps-bar">
              <div className="cs-ps-seg cs-ps-seg-1">
                <Dots n={2} />
              </div>
              <div className="cs-ps-seg cs-ps-seg-2">
                <Dots n={3} />
                <div className="cs-ps-indicator" />
              </div>
              <div className="cs-ps-seg cs-ps-seg-3">
                <Dots n={6} />
              </div>
              <div className="cs-ps-seg cs-ps-seg-4">
                <Dots n={4} />
              </div>
            </div>
          </div>

          {/* Stage labels */}
          <div className="cs-ps-labels">
            <div className="cs-ps-labels-offset" />
            <div className="cs-ps-labels-inner">
              <span>KYC</span>
              <span>Review</span>
              <span>Pre-Approval</span>
              <span>Funding</span>
            </div>
          </div>
        </div>
        <p className="cs-caption">Reconstruction of process score — original screens covered by NDA</p>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Design Detail — Covenant Score Card</h2>
        <div className="cs-body">
          <p>
            Introduced as part of the Closing &amp; Servicing stage, the <strong>Covenant Score Card</strong> is a composite indicator designed to give relationship managers a single, holistic read on a borrower's compliance with their key financial covenants — without having to cross-reference individual reports.
          </p>
          <p>
            It surfaces three reference points simultaneously: the borrower's own position, the peer average, and the peer high. The composite score aggregates across all tracked covenants, surfacing where a borrower stands relative to the market rather than just against their own thresholds.
          </p>
        </div>
        <CovenantScorecard />
        <p className="cs-caption">Reconstruction of covenant score card — original screens covered by NDA</p>
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
