import CaseStudyPage from '../../components/CaseStudyPage';

export default function Thea() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/guidepanels', label: 'Inspire Guide Panels' }}
      next={{ to: '/work/wilson', label: 'Wilson Golf Driver' }}
    >
      <div className="cs-header-img">
        <img src="/images/thea/studio-UI.png" alt="Thea render inside Altair Inspire" />
        <p className="cs-caption">Thea render inside Altair Inspire</p>
      </div>

      <h1 className="cs-title">Thea Render</h1>

      <div className="cs-section">
        <h2 className="cs-section-heading">Overview</h2>
        <div className="cs-body">
          <p>
            Altair acquired Thea Render in 2014, gaining access to an industry-leading visualization engine.{' '}
            <a href="https://www.thearender.com" target="_blank" rel="noreferrer">Thea Render</a>{' '}
            is an award-winning rendering and visualization product used by designers and architects.
          </p>
          <p>
            One of the convergences after this acquisition was to bring the capabilities of Thea into Inspire, our 3D modeling product.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">My Contribution</h2>
        <div className="cs-body">
          <p>
            I was tasked with redesigning the post-processing interface for what we called "Darkroom" within Inspire. The goal was to make it easy to compare, re-condition, and animate frames on rendered images.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Inconsistencies</h2>
        <div className="cs-body">
          <p>
            The initial implementation after acquisition did not give product teams enough time to conduct UX research. This led to a less-than-desired state.
          </p>
          <p>
            I started by taking a closer look at the UI and talking to several customers who were beta testers. The findings were not surprising:
          </p>
          <ol>
            <li>The "Darkroom" UI did not feel like it was part of the Altair family of products.</li>
            <li>Information architecture was sometimes illogical and confusing. Checkboxes were sometimes on the right, and sometimes on the left.</li>
            <li>Iconography was inconsistent with other icons inside Inspire.</li>
            <li>Several post-processing tools, such as applying filters, had a steep learning curve.</li>
          </ol>
        </div>
        <div className="cs-img">
          <img src="/images/thea/incon-1.png" alt="Some styling issues" />
          <p className="cs-caption">Some styling issues</p>
        </div>
        <div className="cs-img">
          <img src="/images/thea/incon-2.png" alt="Inconsistent iconography" />
          <p className="cs-caption">Inconsistent iconography</p>
        </div>
        <div className="cs-img">
          <img src="/images/thea/incon-4.png" alt="Relight timeline showing keyframe usage" />
          <p className="cs-caption">Relight timeline showing keyframe usage</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Journey Map</h2>
        <div className="cs-body">
          <p>
            I laid out the journey map for the entire post-processing workflow, which included several sub-flows such as render now, render later, and relight (a way to change lighting after an image is rendered).
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/thea/journey-map.png" alt="Journey map for post-processing workflow" />
          <p className="cs-caption">Journey map for post-processing workflow</p>
        </div>
        <div className="cs-body">
          <p>
            The first rendition was a more traditional post-processing style with the main image in the front-left, tools on the right, and a timeline at the bottom.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/thea/layouts.png" alt="First pass at the new UI layout" />
          <p className="cs-caption">First pass at the new UI layout</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">A/B Testing</h2>
        <div className="cs-body">
          <p>
            To better understand the accessibility of rendered and in-process image thumbnails, I redesigned some image cards. These cards contained crucial information such as aspect ratio, type of rendering (full vs. progressive), and current stage. We ran tests in{' '}
            <a href="https://maze.co" target="_blank" rel="noreferrer">Maze</a>{' '}
            to find the optimal solution given a set of constraints.
          </p>
        </div>
        <div className="cs-img-half">
          <img src="/images/thea/abtest.png" alt="Image cards for testing in Maze" />
          <p className="cs-caption">Image cards for testing in Maze</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Image Gallery</h2>
        <div className="cs-body">
          <p>
            I found interesting ideas from image filtering on Apple devices and proposed a way of pre-applying and visualizing filters on the right side of the UI. This reduced the time required to find the right filter by 70%.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/thea/image-gallery.png" alt="Image thumbnails with pre-applied filters" />
          <p className="cs-caption">Image thumbnails with pre-applied filters</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Result</h2>
        <div className="cs-body">
          <p>The new UI included several improvements:</p>
          <ol>
            <li>A new horizontal image gallery showing both queued and completed image thumbnails.</li>
            <li>Queued images pre-rendered in mesh view to let users verify camera angle.</li>
            <li>Three distinct tabs for local rendering, relight, and network rendering.</li>
            <li>Post-processing panel with pre-applied filter presets.</li>
            <li>13 new icons aligned with design system guidelines.</li>
          </ol>
        </div>
        <div className="cs-img">
          <img src="/images/thea/final-thea.png" alt="Final spec for Inspire Render Darkroom" />
          <p className="cs-caption">Final spec for Inspire Render Darkroom</p>
        </div>
        <blockquote className="cs-quote">
          "The image gallery filtering is a game changer for us. I also love the quick preset for novice users." — Dir. of PM, Rendering Technologies
        </blockquote>
      </div>
    </CaseStudyPage>
  );
}
