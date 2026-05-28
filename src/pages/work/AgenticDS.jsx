import CaseStudyPage from '../../components/CaseStudyPage';
import {
  BookOpen, FileText, GitBranch, Bot,
  Braces, Component, Code2, Accessibility,
  ShieldCheck, Frame, Puzzle, SquareCode, CheckCircle2, Zap,
  Link2, Ban, Database,
} from 'lucide-react';

export default function AgenticDS() {
  return (
    <CaseStudyPage
      next={{ to: '/work/syndicated-loan', label: 'Syndicated Loan — Future State' }}
    >
      <h1 className="cs-title">Agentic Design System</h1>
      <p className="cs-subtitle">What happens when you build a design system for an agent — not a human.</p>

      <div className="cs-section">
        <h2 className="cs-section-heading">Overview</h2>
        <div className="cs-body">
          <p>
            An AI-powered metadata pipeline that uses Claude Opus 4.6 to autonomously generate and maintain a machine-readable component data dictionary for JPMorganChase's design systems — powering component selection, code generation, design-to-code workflows, and governance checks.
          </p>
          <p>
            <strong>281 components covered</strong> — schema-validated, with props, variants, design tokens, ARIA accessibility data, composition rules, and usage guidance. Currently in beta with 20 designers across Investment Banking, Markets, Payments, and Security Services.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">The Problem</h2>
        <div className="cs-body">
          <p>
            At enterprise scale, design system documentation is always incomplete — not because teams are lazy, but because keeping it current is expensive. A single component documented at real depth — props, tokens, ARIA metadata, composition rules, anti-patterns — takes hours. Multiply that by 281 components, then multiply it again every time something changes.
          </p>
          <p>
            The documentation debt compounds silently until the system stops being trusted. I started asking a different question: <strong>what if an AI agent could maintain that documentation autonomously?</strong>
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Architecture</h2>
        <div className="cs-body">
          <p>Three principles govern the system:</p>
          <p>
            <strong>Data-dictionary-first mandate</strong> — agents must read local JSON metadata before generating any UI code. No guessing props or tokens.
          </p>
          <p>
            <strong>Layered system</strong> — Salt (core) → enterprise pattern layer → Global Banking overrides, with layer policies enforcing sizing rules, required states, anti-patterns, and token usage. GB override rules are highest priority and supersede all lower layers.
          </p>
          <p>
            <strong>Anti-hallucination protocol</strong> — if a component, prop, or token isn't documented, the agent stops and flags it rather than guessing.
          </p>
        </div>

        <div className="cs-diagram">
          <p className="cs-diagram-label">System layers — override priority: top wins</p>
          <div className="cs-layers-stack">
            <div className="cs-layer cs-layer--top">
              <span className="cs-layer-num">04</span>
              <div>
                <strong>Global Banking Overrides</strong>
                <span>Highest priority — supersedes all layers. Sentence case, one solid button per view, semantic icons required.</span>
              </div>
            </div>
            <div className="cs-layer">
              <span className="cs-layer-num">03</span>
              <div>
                <strong>Generic UI Guidance</strong>
                <span>Content design, WCAG 2.1 AA accessibility, best practices — design-system-agnostic.</span>
              </div>
            </div>
            <div className="cs-layer">
              <span className="cs-layer-num">02</span>
              <div>
                <strong>Enterprise Pattern Layer</strong>
                <span>Enterprise components, responsive layouts, charts, data visualizations.</span>
              </div>
            </div>
            <div className="cs-layer cs-layer--bottom">
              <span className="cs-layer-num">01</span>
              <div>
                <strong>Salt — Foundation</strong>
                <span>Core components, design tokens, base patterns. Open source.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">How It Was Built</h2>
        <div className="cs-body">
          <p>Built solo, outside core responsibilities, across six phases.</p>

          <p><strong>Phase 1 — Docs-only baseline.</strong> Agent fetched data from Salt Storybook and the documentation site. Generated 61 schema-validated JSON files. 100% validation pass rate. Exposed every gap: zero design tokens, no anti-composition rules, incomplete props on 8 components. A clean baseline with honest failure modes.</p>

          <p><strong>Phase 2 — GitHub source enrichment.</strong> Added TypeScript interfaces and CSS custom properties as a third data source. Tokens went from 0 to 161. Props coverage improved. Usage guidance went from 87% to 95%.</p>

          <p><strong>Phase 3 — Schema v2.</strong> Evolved what the agent was asked to produce: broader token extraction, implementation notes, cross-referenced anti-composition rules. On the same 5-component sample, token extraction went from 14 to 68.</p>

          <p><strong>Phase 4 — Enterprise pattern layer.</strong> Extended generation to the internal enterprise pattern system using deterministic local enrichment — no API key required. 189 additional components generated and schema-validated.</p>

          <p><strong>Phase 5 — Deep enrichment.</strong> Real Storybook variants (400+), 600+ design tokens, pattern cross-references, and 438 enterprise-specific use cases. Metadata density up 47%.</p>

          <p><strong>Phase 6 — Full enrichment.</strong> ARIA APG patterns mapped to every component. Explicit sizing constraints. Best practices and common mistakes extracted from designer-authored Figma documentation. Layer policy files refactored to separate rigid guardrails from component-level detail.</p>
        </div>

        <div className="cs-diagram">
          <p className="cs-diagram-label">Data pipeline</p>
          <div className="cs-pipeline">
            <div className="cs-pipeline-row">
              <div className="cs-pipeline-node">
                <BookOpen size={16} className="cs-pipeline-icon" />
                Storybook
                <span>1,274 stories</span>
              </div>
              <div className="cs-pipeline-node">
                <FileText size={16} className="cs-pipeline-icon" />
                Docs Site
                <span>Usage pages</span>
              </div>
              <div className="cs-pipeline-node">
                <GitBranch size={16} className="cs-pipeline-icon" />
                GitHub Source
                <span>TSX + CSS</span>
              </div>
            </div>
            <div className="cs-pipeline-arrow">↓</div>
            <div className="cs-pipeline-row">
              <div className="cs-pipeline-node cs-pipeline-node--agent">
                <Bot size={16} className="cs-pipeline-icon" />
                Claude Opus 4.6 — Autonomous Agent
                <span>Locked schema · Locked prompt · Temperature 0</span>
              </div>
            </div>
            <div className="cs-pipeline-arrow">↓</div>
            <div className="cs-pipeline-row">
              <div className="cs-pipeline-node cs-pipeline-node--output">
                <Braces size={16} className="cs-pipeline-icon" />
                281 Schema-Validated Component JSONs
                <span>91 Salt + 190 Enterprise · 100% validation pass rate</span>
              </div>
            </div>
            <div className="cs-pipeline-arrow">↓</div>
            <div className="cs-pipeline-row">
              <div className="cs-pipeline-node">
                <Component size={16} className="cs-pipeline-icon" />
                Component<br />Selection
              </div>
              <div className="cs-pipeline-node">
                <Code2 size={16} className="cs-pipeline-icon" />
                Code<br />Generation
              </div>
              <div className="cs-pipeline-node">
                <Accessibility size={16} className="cs-pipeline-icon" />
                A11y<br />QA
              </div>
              <div className="cs-pipeline-node">
                <ShieldCheck size={16} className="cs-pipeline-icon" />
                Governance<br />Checks
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Cost &amp; Effort</h2>
        <div className="cs-body">
          <p>POC across 3 runs on the Salt core library (61 components):</p>
        </div>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead>
              <tr>
                <th>Run</th>
                <th>Scope</th>
                <th>Tokens</th>
                <th>Cost</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Run 1</td>
                <td>61 components, docs only</td>
                <td>~1.1M</td>
                <td>~$33</td>
                <td>~25 min</td>
              </tr>
              <tr>
                <td>Run 2</td>
                <td>61 components, docs + GitHub source</td>
                <td>~1.4M</td>
                <td>~$40</td>
                <td>~30 min</td>
              </tr>
              <tr>
                <td>Run 3</td>
                <td>5 components, schema-v2 sample</td>
                <td>~155K</td>
                <td>~$4.43</td>
                <td>~8 min</td>
              </tr>
              <tr className="cs-table-total">
                <td><strong>Total</strong></td>
                <td><strong>61 unique components</strong></td>
                <td><strong>~2.7M</strong></td>
                <td><strong>~$77</strong></td>
                <td><strong>~63 min</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cs-body">
          <p>Manual equivalent for the same depth and coverage: <strong>3–5 weeks</strong> of design system team effort.</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Skills &amp; Agents</h2>
        <div className="cs-body">
          <p>The data dictionary powers a suite of nine skills and six agents that designers invoke directly in VS Code via GitHub Copilot:</p>
        </div>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead>
              <tr>
                <th>Skill</th>
                <th>What it does</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>component-selection</td><td>Maps UX intent → correct component with rationale + starter code</td></tr>
              <tr><td>pattern-builder</td><td>Transforms feature requirements into full pattern blueprints with state coverage</td></tr>
              <tr><td>a11y-content-qa</td><td>WCAG 2.1 AA accessibility + content clarity review</td></tr>
              <tr><td>token-guard</td><td>Detects hardcoded styles and maps them to design tokens</td></tr>
              <tr><td>migration</td><td>Creates phased migration plans from legacy UI to the current design system</td></tr>
              <tr><td>gb-review</td><td>Audits code against Global Banking override rules</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Designer Workflow</h2>
        <div className="cs-body">
          <p><strong>Phase 1 — Setup (one-time, ~3–5 min).</strong> Drop a single markdown file into an empty folder. Say "start setup" to Copilot. The agent reads it, clones the repo, installs dependencies, launches the dev server, and asks what you want to build. No terminal. No config files.</p>

          <div className="cs-bootstrap">
            <Zap size={14} className="cs-bootstrap-icon" />
            <div>
              <strong>One file. Zero friction.</strong>
              <p>The bootstrap is a markdown file — human-readable documentation that doubles as an agent instruction. Any designer at the firm drops it into an empty folder and they're fully scaffolded in under five minutes. The same file works for every LOB, every team, every setup.</p>
            </div>
          </div>

          <p><strong>Phase 2 — Describe what you want.</strong> Input can be vague ("I need a page where users approve trades"), specific ("Build a form with name, email, phone"), or a fully structured prompt generated by the Figma plugin — the highest-fidelity input path.</p>

          <p><strong>Phase 3 — Agent builds it.</strong> The agent reads data-dictionary JSONs for every component it plans to use, selects components per layer policy, generates code with all required states (loading, empty, error, success), applies design tokens, and marks output as VERIFIED / UNVERIFIED / PARTIAL.</p>

          <p><strong>Phase 4 — Iterate.</strong> Natural language instructions ("Make the card accent blue", "Add a confirmation dialog before delete") are resolved against token metadata and component JSONs — not guessed.</p>

          <p><strong>Phase 5 — Quality gates.</strong> On-demand: accessibility audit, token violation check, Global Banking compliance review.</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Figma → Code</h2>
        <div className="cs-body">
          <p>
            Vague prompts produce vague code. The highest-fidelity input path is a Figma plugin I built that reads a selected frame, extracts the full component JSON, and converts it into a structured prompt — with layer names, component hierarchy, and design intent intact.
          </p>
          <p>
            That prompt, fed into VS Code with Claude and the data dictionary as context, produces output that is <strong>~95% identical to the original Figma design</strong> — without the designer writing a single line of code.
          </p>
          <p>
            This is context is king in practice: the more precisely you describe the design intent going in, the less correction the agent needs coming out.
          </p>
        </div>

        <div className="cs-diagram">
          <p className="cs-diagram-label">Figma → code pipeline</p>
          <div className="cs-snake">
            <div className="cs-pipeline-node">
              <Frame size={16} className="cs-pipeline-icon" />
              Figma Frame
              <span>Designer selects any frame</span>
            </div>
            <div className="cs-snake-arrow">→</div>
            <div className="cs-pipeline-node">
              <Puzzle size={16} className="cs-pipeline-icon" />
              Figma Plugin
              <span>Reads JSON · extracts hierarchy · generates structured prompt</span>
            </div>

            <div /><div />
            <div className="cs-snake-turn">↓</div>

            <div className="cs-pipeline-node">
              <CheckCircle2 size={16} className="cs-pipeline-icon" />
              ~95% Fidelity Output
              <span>Schema-compliant · Token-accurate · GB-checked</span>
            </div>
            <div className="cs-snake-arrow">←</div>
            <div className="cs-pipeline-node">
              <SquareCode size={16} className="cs-pipeline-icon" />
              VS Code + Claude
              <span>Prompt + 281 component JSONs + layer policies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">The Data Dictionary</h2>
        <div className="cs-body">
          <blockquote className="cs-blockquote">
            Context is king.
          </blockquote>
          <p>
            Every decision in this system comes back to that principle. The data dictionary is not documentation — it is context, structured for a machine. The richer the context the agent has before it generates a single line of code, the closer the output is to what the designer intended.
          </p>
          <p>
            That also means knowing what to leave out. I deliberately excluded internal animation timing, anatomy layer ordering, and spacing internals from the extraction — because an agent generating code doesn't need them. It needs best practices and common mistakes. Everything else is noise that degrades signal.
          </p>
          <p>
            Layer policies are rigid guardrails that rarely change. Component JSONs are comprehensive and self-contained — everything an agent needs, nothing it doesn't.
          </p>
          <blockquote className="cs-blockquote">
            Knowing what to leave out is harder than knowing what to include.
          </blockquote>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Fields That Matter</h2>
        <div className="cs-body">
          <p>Most schema fields document what a component <em>is</em>. These three document what it <em>does in context</em> — the difference between plausible code and correct code.</p>
        </div>

        <div className="cs-field-cards">
          <div className="cs-field-card">
            <Link2 size={20} className="cs-field-icon" />
            <span className="cs-field-name">composes_with</span>
            <p className="cs-field-desc">Components this one is designed to work alongside.</p>
            <span className="cs-field-source">Storybook imports · TSX composition · docs</span>
          </div>
          <div className="cs-field-card">
            <Ban size={20} className="cs-field-icon" />
            <span className="cs-field-name">do_not_compose_with</span>
            <p className="cs-field-desc">Two valid components that are wrong together. Without this, the agent has no signal.</p>
            <span className="cs-field-source">when_not_to_use cross-ref · GB overrides · usage patterns</span>
          </div>
          <div className="cs-field-card">
            <Database size={20} className="cs-field-icon" />
            <span className="cs-field-name">domain_instances</span>
            <p className="cs-field-desc">Banking context mappings — how this component has been used across real GB screens. Empty at generation, filled over time.</p>
            <span className="cs-field-source">Validated product work · accumulates over time</span>
          </div>
        </div>

        <div className="cs-schema-example">
          <p className="cs-diagram-label">Example — Badge component, GB override</p>
          <div className="cs-code-block">
            <div className="cs-code-header">
              <div className="cs-code-dots">
                <span className="cs-code-dot" style={{ background: '#ff5f57' }} />
                <span className="cs-code-dot" style={{ background: '#ffbd2e' }} />
                <span className="cs-code-dot" style={{ background: '#28c840' }} />
              </div>
              <span className="cs-code-filename">badge.gb-override.json</span>
            </div>
            <pre className="cs-code-pre"><code>
{`{
  `}<span className="json-key">"gbRules"</span>{`: {
    `}<span className="json-key">"restrictedUsage"</span>{`: [
      `}<span className="json-string">"Do NOT use Badge as a status indicator in tables or data grids"</span>{`,
      `}<span className="json-string">"Do NOT use Badge to display categorical metadata (Active, Pending, Failed, etc.)"</span>{`
    ],
    `}<span className="json-key">"redirectTo"</span>{`: {
      `}<span className="json-key">"statusInTables"</span>{`: `}<span className="json-string">"Tag (bordered, variant='primary', with category number)"</span>{`,
      `}<span className="json-key">"categoricalMetadata"</span>{`: `}<span className="json-string">"Tag (bordered, variant='primary', with category number)"</span>{`
    },
    `}<span className="json-key">"allowedUsage"</span>{`: [
      `}<span className="json-string">"Notification counts (wrapping an icon or tab)"</span>{`,
      `}<span className="json-string">"Unread message indicators (dot badge)"</span>{`,
      `}<span className="json-string">"Numeric annotations on navigation items"</span>{`
    ]
  }
}`}
            </code></pre>
          </div>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">What This Proves</h2>
        <div className="cs-body">
          <p>
            A design system can be made machine-readable at scale, maintained autonomously, and used to power AI-native workflows — component selection, vibe coding guardrails, design-to-code pipelines.
          </p>
          <p>
            We're not far from a design system that doesn't wait for a designer to look something up. It already knows. It tells you before you ask.
          </p>
          <p>
            That's not a better design system. That's a different kind of design system entirely.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Beta Pilot</h2>
        <div className="cs-stat-row">
          <div className="cs-stat">
            <span className="cs-stat-value">20</span>
            <span className="cs-stat-label">Designers onboarded</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-value">4</span>
            <span className="cs-stat-label">Lines of business</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-value">5 hrs</span>
            <span className="cs-stat-label">Total onboarding time</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-value">4 steps</span>
            <span className="cs-stat-label">Walkthrough</span>
          </div>
        </div>
        <div className="cs-body">
          <p>
            Spanning Investment Banking, Markets, Payments, and Security Services. The structured 4-step walkthrough covers repo scaffold, data dictionary overview, and the two key workflows: intent-based AI-augmented design and the Figma-to-code plugin.
          </p>
          <p>
            5 hours to go from zero to fluent across four different lines of business — with no terminal commands, no config files, and no design system knowledge required at the start.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">What's Next</h2>
        <div className="cs-body">
          <p>
            The beta is active across Global Banking at JPMorganChase, with broader rollout to follow.
          </p>
          <p>
            The next question is governance: how do you build an agentic system that stays trustworthy as the underlying components change? How do you prevent an agent from confidently generating code against a component that was deprecated last Tuesday? That's the problem I'm bringing to the <a href="https://www.saltdesignsystem.com" target="_blank" rel="noreferrer">Salt design system</a> team. The answer doesn't exist yet.
          </p>
        </div>
      </div>
    </CaseStudyPage>
  );
}
