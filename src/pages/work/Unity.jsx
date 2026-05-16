import CaseStudyPage from '../../components/CaseStudyPage';

export default function Unity() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/llm-assistant', label: 'Design System Compass' }}
      next={{ to: '/work/guidepanels', label: 'Inspire Guide Panels' }}
    >
      <div className="cs-header-img">
        <img src="/images/unity/unity-variables.jpg" alt="Unity Design System inside Figma" />
        <p className="cs-caption">Unity Design System inside Figma</p>
      </div>

      <h1 className="cs-title">Unity Design System</h1>

      <div className="cs-section">
        <h2 className="cs-section-heading">Overview</h2>
        <div className="cs-body">
          <p>
            Altair Design System, known internally as <em>Unity</em>, sits at the core of our organization, servicing a suite of software applications designed for simulation and high performance computing. It supports over 20 product teams by providing foundational elements and components, and acting as a platform for creating and maintaining design systems at Altair.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">My Contribution</h2>
        <div className="cs-body">
          <p>
            Strategy for design tokens and variable-based theming, lead designer for core components, pattern library, release notes, and contribution guides.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Problem</h2>
        <div className="cs-body">
          <p>
            When I joined the UI team in 2021, we were a small team of designers handling requests from around 5 product teams. Product managers were using a mix of prototyping tools — from Word to Balsamiq — to create and share customer journeys. Although we were closing tickets on time, we were unable to accomplish larger goals set for the team. There was no centralized component library, patterns were unclear, and usage was not fully documented.
          </p>
          <p>
            From a business perspective, this was not good. We were efficiently inefficient. Our designs were neither scalable nor sharable, making it difficult to expand our reach to new products and teams.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Solution</h2>
        <div className="cs-body">
          <p>The strategy was to build a fully atomic design system in three steps:</p>
          <ol>
            <li>Inventory existing components.</li>
            <li>Build components starting from fundamental atoms.</li>
            <li>Share design patterns with product teams and set them up for success.</li>
          </ol>
          <p>
            As a team of one, I started with the foundational elements — defining a color palette using{' '}
            <a href="https://leonardocolor.io" target="_blank" rel="noreferrer">Leonardo Color</a>{' '}
            by Nate Baldwin.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/unity/colors.jpg" alt="Colors from Leonardo" />
          <p className="cs-caption">Colors from Leonardo</p>
        </div>
        <div className="cs-body">
          <p>Using Figma variables, we defined global and alias tokens to ensure consistency.</p>
        </div>
        <div className="cs-img-half">
          <img src="/images/unity/tokens.jpg" alt="Variables and tokens" />
          <p className="cs-caption">Variables and tokens</p>
        </div>
        <div className="cs-body">
          <p>
            While building these components, we identified design evangelists who were leading teams. After setting up a formal ticketing, component request, and fixing process, we rolled out the design system with a kickoff — including an overview of the project, Figma and its utility for our teams, and design system usage and guidelines.
          </p>
          <p>
            Using the atomic approach, I built templates to be self-sufficient and easily updatable. The resulting pattern library was extensive for the first launch, with over 200 components and 400 variants.
          </p>
        </div>
        <div className="cs-img-half">
          <img src="/images/unity/component.png" alt="A guide bar component" />
          <p className="cs-caption">A guide bar component</p>
        </div>
        <div className="cs-body">
          <p>
            This was a brand new initiative, and the response was overwhelmingly positive. PMs were excited to dive in and build. We ensured the guides were clear and every designer was empowered to contribute.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/unity/guides.png" alt="Release notes and guidelines" />
          <p className="cs-caption">Release notes and guidelines</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Outcome</h2>
        <div className="cs-body">
          <p>
            The new design system increased our sprint efficiency, improved organizational fluency, and expanded our visibility as the core GUI team. Last but not least, it enabled quicker turnaround times for PMs and devs to implement powerful new features for our customers.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Next</h2>
        <div className="cs-body">
          <p>
            We are currently working on a web design system that incorporates many learnings from our desktop exercise. The new version of Unity will also have improved accessibility and be WCAG 2.0 compliant, thanks to our new designer{' '}
            <a href="https://www.linkedin.com/in/daniel-dao-design/" target="_blank" rel="noreferrer">Daniel</a>{' '}
            who laid out the areas for us to improve.
          </p>
        </div>
      </div>
    </CaseStudyPage>
  );
}
