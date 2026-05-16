import CaseStudyPage from '../../components/CaseStudyPage';

export default function LLMAssistant() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/ai-workshop', label: 'AI Prototyping Workshop' }}
      next={{ to: '/work/unity', label: 'Unity Design System' }}
    >
      <h1 className="cs-title">Design System Compass</h1>
      <p className="cs-subtitle">A conversational assistant that answers design system questions before you have to ask the team.</p>

      <div className="cs-section">
        <h2 className="cs-section-heading">The Problem</h2>
        <div className="cs-body">
          <p>
            Design system support doesn't scale. Every question answered by a human is a question that could have been answered by the system itself. At enterprise scale — dozens of product teams, two design systems, constantly evolving components — the support burden becomes a bottleneck.
          </p>
          <p>
            Designers were asking the same questions. The answers existed in documentation. The gap was access: the docs were there, but finding the right answer fast enough to matter wasn't.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">What I Built</h2>
        <div className="cs-body">
          <p>
            In January 2026, I built Design System Compass — an LLM assistant for the Global Banking Design System that lets designers query component guidelines, usage rules, and best practices directly, without routing through the design systems team.
          </p>
          <p>
            The assistant was built using JPMC's internal AI infrastructure, with comprehensive instruction sets covering both the open-source Salt foundation and the enterprise pattern layer built on top of it. Writing those instruction sets was the hardest part: the model needed enough context to give accurate, specific answers — not paraphrased documentation.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">In Practice</h2>
        <div className="cs-img">
          <img src="/images/compass/compass-sticky-headers.png" alt="Design System Compass answering a question about sticky headers" />
          <p className="cs-caption">Compass answers questions about component behavior — here, sticky header rules across scroll contexts</p>
        </div>
        <div className="cs-img">
          <img src="/images/compass/compass-cta-placement.png" alt="Design System Compass answering a question about CTA placement" />
          <p className="cs-caption">CTA placement guidance — Salt layout patterns, Salt vs. enterprise layer breakdown, responsive behavior</p>
        </div>
        <div className="cs-body">
          <p>
            Answers cite sources. When documentation doesn't cover a case, Compass flags the gap rather than guessing — the same anti-hallucination discipline built into the broader Agentic Design System.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Why It Matters</h2>
        <div className="cs-body">
          <p>
            This is a different kind of design system artifact. Not a component. Not a guideline page. A conversational layer on top of the system that makes it more likely to be used correctly — and faster to query than any documentation site.
          </p>
          <p>
            Compass is currently in testing within the design systems team, with a wider rollout to Global Banking designers planned for Q2 2026. It connects directly to the broader agentic design system infrastructure — the same component data dictionary that powers code generation also powers Compass's answers.
          </p>
        </div>
      </div>
    </CaseStudyPage>
  );
}
