import CaseStudyPage from '../../components/CaseStudyPage';

export default function AIWorkshop() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/syndicated-loan', label: 'Syndicated Loan — Future State' }}
      next={{ to: '/work/llm-assistant', label: 'Design System Compass' }}
    >
      <h1 className="cs-title">AI Prototyping Workshop</h1>
      <p className="cs-subtitle">Enabling 50+ designers across four locations to build clickable prototypes with AI — and measuring what stuck.</p>

      <div className="cs-section">
        <h2 className="cs-section-heading">The Problem</h2>
        <div className="cs-body">
          <p>
            Most designers in Global Banking weren't using AI tools to prototype. The tools existed. Licenses were available. But no one had mapped the path from a Figma component to a working prototype in VS Code or Xcode — and without that, adoption wasn't going to happen on its own.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">What I Did</h2>
        <div className="cs-body">
          <p>
            In December 2025, I ran two workshops for Global Banking designers across four locations — 50+ attendees. Before the workshops, I researched which AI tools were available within JPMC, how to get licenses, and documented the full setup process on Confluence so designers had a reference they could act on.
          </p>
          <p>
            The workshops were hands-on: I showed designers how to take a component snippet from Figma and build a fully clickable prototype in Xcode and VS Code. Many weren't set up yet, so I walked them through onboarding personally — troubleshooting access issues one by one after the sessions.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Outcome</h2>
        <div className="cs-body">
          <p>
            By February 2026, <strong>70% of GB designers were onboarded</strong> — compared to roughly 45% across the rest of Commercial and Investment Banking. That's 56% above the benchmark, two months after two workshops.
          </p>
          <p>
            The workshops also created demand. Follow-up sessions were requested across teams, and the approach was later used as the model for a CIB-wide GitHub Copilot and AI tool rollout covering 400+ people.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">What People Said</h2>
        <div className="cs-body">
          <blockquote className="cs-blockquote">
            Fantastic training delivered today on AI-enabled prototyping. It's a game changer.
            <br /><span style={{ fontSize: '0.7em', opacity: 0.7, fontWeight: 500 }}>— Workshop attendee</span>
          </blockquote>
          <blockquote className="cs-blockquote">
            Your AI enabled prototyping session was easily the most informative and useful event I attended all year.
            <br /><span style={{ fontSize: '0.7em', opacity: 0.7, fontWeight: 500 }}>— Workshop attendee</span>
          </blockquote>
        </div>
      </div>
    </CaseStudyPage>
  );
}
