import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <section className="page" style={{ paddingTop: '4rem' }}>
            <p className="page-label">About</p>
            <h1 className="about-heading">Then &amp; Now</h1>
            <div className="about-body">
              <p>
                I started as an engineer, pivoted to industrial design, and spent the last decade building design systems for enterprise software.
              </p>
              <p>
                After a Masters in Industrial Design at Chalmers in Sweden — with internships at Volvo and Mercedes-Benz — I moved into digital product design. I joined Altair, now part of Siemens, as a design subject matter expert and eventually led the company's design system, <em>Unity</em>, from zero to enterprise-wide adoption. Along the way I worked with clients including Under Armour, Wilson Golf, and Tervis on interface and systems work.
              </p>
              <p>
                In 2024, I completed an MBA at UC Berkeley Haas — which sharpened my instinct for where design creates business value.
              </p>
              <p>
                Today I'm VP of Design Systems at JPMorganChase, leading design infrastructure for Global Banking. My current focus is on agentic design systems that bring AI into the workflow without losing craft or consistency.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
