import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <section className="home-hero">
            <h1 className="home-name">Arjun Ajjampur</h1>
            <p className="home-subtitle">Product Designer · Design Systems · Enterprise UX</p>
            <div className="home-bio">
              <p>
                I call myself an Indian globetrotter living in the Silicon Valley. Currently, I am <em>VP, Design Systems</em> at JPMorganChase&Co, where I am building <em>Agentic design systems for Global Banking</em>.
              </p>
              <p>
                Prior to this role, I was leading Design Systems for Altair (now part of Siemens). By craft, I am Industrial Designer turned Product Designer. I have a background in designing for enterprise software, with a focus on design systems and design operations.
              </p>
              <p>
                When I am not working with pixels, I like to ride my motorcycle and spend time with my family and our cat Luna. I am a big fan of eclectic vegetarian food and we are a house of Ottolenghi.
              </p>
            </div>
            <div className="home-cta">
              <Link to="/work" className="btn btn-primary">View Work</Link>
              <a href="mailto:arjun.ajjampur@gmail.com" className="btn btn-ghost">Say Hi</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
