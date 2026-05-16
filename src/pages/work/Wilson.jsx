import CaseStudyPage from '../../components/CaseStudyPage';

export default function Wilson() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/thea', label: 'Thea Render' }}
      next={{ to: '/work/3d', label: '3D Modeling' }}
    >
      <div className="cs-header-img">
        <img src="/images/wilson/dvd-hero.png" alt="Driver vs Driver" />
      </div>

      <h1 className="cs-title">Wilson Golf Driver</h1>

      <div className="cs-section">
        <h2 className="cs-section-heading">Overview</h2>
        <div className="cs-body">
          <p>
            I was part of{' '}
            <a href="https://www.golfpass.com/watch/driver-vs-driver" target="_blank" rel="noreferrer">
              Wilson's Driver vs. Driver reality TV show
            </a>{' '}
            as an Industrial Design expert. It was a fantastic experience showcasing my entire design skillset — from sketching, concept modeling, and visualization to branding.
          </p>
          <p>
            The winner of the contest walked away with half a million dollars. I walked away with a depth of expertise in golf clubs, a free driver, and glowing skin — thanks to repeated applications of stage makeup.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">My Contribution</h2>
        <div className="cs-body">
          <p>
            I helped design the runner-up driver, <em>Pivot</em>. The concept was submitted by contestant Gavin Wallin, but I was tasked with taking a napkin sketch to a hittable prototype. The concept contained a unique interchangeable weight system that was revolutionary.
          </p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Competition</h2>
        <div className="cs-body">
          <p>
            The season finale was a head-to-head between the top two drivers — Pivot and Triton. Pivot would ultimately lose to Triton, the winning driver designed by my manager{' '}
            <a href="https://www.linkedin.com/in/darren-chilton-2817596/" target="_blank" rel="noreferrer">Darren Chilton</a>,
            a well-known golf fanatic inside Altair.
          </p>
          <p>
            Most details of this project remain under NDA, but here are some comparisons between the top two drivers as we approached the season finale.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/wilson/comparison-1.jpg" alt="Triton vs Pivot — heel to toe" />
          <p className="cs-caption">Triton vs Pivot — heel to toe</p>
        </div>
        <div className="cs-img">
          <img src="/images/wilson/comparison-2.jpg" alt="Triton vs Pivot — face" />
          <p className="cs-caption">Triton vs Pivot — face</p>
        </div>
        <div className="cs-img">
          <img src="/images/wilson/comparison-3.jpg" alt="Triton vs Pivot — crown" />
          <p className="cs-caption">Triton vs Pivot — crown</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Challenges</h2>
        <div className="cs-body">
          <p>
            Golf drivers are extremely complex with highly precise geometry, both inside and outside. The{' '}
            <a href="https://www.usga.org/content/dam/usga/pdf/Equipment/Equipment%20Rules%20Final.pdf" target="_blank" rel="noreferrer">
              USGA equipment rules handbook
            </a>{' '}
            defines the constraints when designing drivers:
          </p>
          <ol>
            <li>Every gram counts — the lighter the head, the better.</li>
            <li>User experience mattered when designing interchangeable weights.</li>
            <li>Surfaces had to be of high quality to facilitate smooth production, especially fillets around edges and the transition from face to hosel.</li>
          </ol>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Design</h2>
        <div className="cs-body">
          <p>
            Drivers have the lowest loft angle in a golf set — they can hit far but not high. The design of the face had to be so precise that it often involved moving one or two control points.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/wilson/details.png" alt="Golf driver KPIs" />
          <p className="cs-caption">Golf driver KPIs</p>
        </div>
        <div className="cs-body">
          <p>
            The driver is built by fusing four main parts: crown, face, sole, and hosel. Most drivers are made with titanium, and towards the finale, every 0.1g was critical.
          </p>
        </div>
        <div className="cs-img-half">
          <img src="/images/wilson/mass.png" alt="Weight estimates of each part" />
          <p className="cs-caption">Weight estimates of each part</p>
        </div>
        <div className="cs-body">
          <p>
            The show was held at Wilson HQ in Chicago, and was one of the most interesting and challenging projects I have undertaken. Their incredible facility and supportive team gave me an opportunity to learn the intricacies of golf club design.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/wilson/wacko.png" alt="Driver testing robot" />
          <p className="cs-caption">Driver testing robot</p>
        </div>
      </div>

      <div className="cs-section">
        <h2 className="cs-section-heading">Outcome</h2>
        <div className="cs-body">
          <p>
            As someone who hits the tee once in a while, I now have renewed respect and admiration for what goes into that head every time I swing my club.
          </p>
        </div>
        <div className="cs-img">
          <img src="/images/wilson/comparison-hero.png" alt="Final driver comparison" />
        </div>
      </div>
    </CaseStudyPage>
  );
}
