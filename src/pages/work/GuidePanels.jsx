import CaseStudyPage from '../../components/CaseStudyPage';

export default function GuidePanels() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/unity', label: 'Unity Design System' }}
      next={{ to: '/work/thea', label: 'Thea Render' }}
    >
      <div className="cs-header-img">
        <img src="/images/guidepanels/inspire-UI.png" alt="Inspire user interface" />
        <p className="cs-caption">Inspire user interface</p>
      </div>

      <h1 className="cs-title">Inspire Guide Panels</h1>

      <div className="cs-section">
        <h2 className="cs-section-heading">Overview</h2>
        <div className="cs-body">
          <p>
            At Altair, we have been offering generative design to our customers since 2008. Today it is called generative AI — the same gift in new wrapping.
          </p>
          <p>
            Altair Inspire, launched in 2009, brought forward a completely new way to optimize engineering models. This was the first user-experience-focused{' '}
            <a href="https://en.wikipedia.org/wiki/Topology_optimization" target="_blank" rel="noreferrer">Topology Optimization</a>{' '}
            software on the market. Its goal was simple: place the power of generative design into the hands of anyone, persona-agnostic.
          </p>
          <p>
            Previously, mechanical engineers had the formal authority to optimize designs as it required domain expertise, and optimization came after prototyping and testing. Inspire was shaking things up by bringing optimization earlier in the design pipeline.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">My Contribution</h2>
        <div className="cs-body">
          <p>
            I was tasked with creating a new way of capturing inputs. This involved both novel component design and brand new user-experience elements.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Problem</h2>
        <div className="cs-body">
          <p>
            As Inspire grew in complexity, we found ourselves dealing with input fatigue for several tools. Existing methods of capturing inputs were getting quite unwieldy.
          </p>
          <p>
            The "Guide-bar" introduced with Inspire was sufficient for most tools but became increasingly hard to handle for newer tools that required multiple inputs. In some cases, the guidebar flowed across the entire width of the modeling window, forcing users to traverse this distance to complete a task.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/guidepanels/guidepanel-ex1.jpg" alt="A guidebar example from the Contacts tool" />
          <p className="cs-caption">A guidebar example from the Contacts tool</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Challenges</h2>
        <div className="cs-body">
          <p>This new method would be inherited across multiple products in our portfolio:</p>
          <ol>
            <li>Understand and map typical and edge-case workflows.</li>
            <li>Improve the workflow while adhering to user expectations.</li>
            <li>Design a scalable method that is easy to comprehend, intuitive, and can be applied across workflows and products.</li>
          </ol>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Discovery</h2>
        <div className="cs-body">
          <p>
            I took an example of a tool called "extrude" and laid out the flow. I used the anchoring principle to carefully choose expected defaults. This came from both my own experience as a 3D modeler and data from informal interviews with other designers.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/guidepanels/discovery.png" alt="Mapping user journey for extrude" />
          <p className="cs-caption">Mapping user journey for extrude</p>
        </div>
        <div className="cs-body">
          <p>
            Next, I performed competitor analysis and landed on a top-left to bottom-down approach versus the existing left-to-right workflow. This changed the guidebar design to a panel. I started exploring options for information architecture.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/guidepanels/renditions-gp.jpg" alt="Mocks for IA inside guide panel" />
          <p className="cs-caption">Mocks for IA inside guide panel</p>
        </div>
        <div className="cs-body">
          <p>
            After talking with all stakeholders, we narrowed our design to a panel that satisfied these criteria:
          </p>
          <ol>
            <li>Clear primary workflow selection using tabs.</li>
            <li>Defined IA with group headers.</li>
            <li>Novel "entity selector" component.</li>
            <li>New methods for real-time editing (toggle buttons instead of dropdowns to save time).</li>
            <li>Mini guide bar to maintain familiarity.</li>
            <li>Natural progression from top-left to bottom-right.</li>
          </ol>
        </div>
        <div className="cs-img">
          <img src="/images/guidepanels/gp-final.jpg" alt="Final spec of guidepanel including a new entity selector component" />
          <p className="cs-caption">Final spec of guide panel including a new "entity selector" component</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Outcome</h2>
        <div className="cs-body">
          <p>
            The new guide panel design was well received, with over 20 teams adopting the design in the first 6 months of delivery. During this redesign I also created a brand new entity selector component that made selecting multiple types of inputs in the same panel intuitive.
          </p>
        </div>
      </div>
    </CaseStudyPage>
  );
}
