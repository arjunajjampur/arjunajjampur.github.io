import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Layers, Target, Compass } from 'lucide-react';

const pillars = [
  {
    num: '01',
    icon: Layers,
    title: 'Frame and Reframe',
    body: [
      'Simple solutions to complex problems start with understanding the problem well. I use the Jobs To Be Done approach — <strong>ask why to go up one level and how to go down one level.</strong> <em>Why?</em> reveals the reason a problem exists. <em>How?</em> surfaces the current approach and opens a path forward.',
      '<strong>Measure twice, cut once.</strong>',
    ],
  },
  {
    num: '02',
    icon: Target,
    title: 'Outcome over Output',
    body: [
      'My job is <strong>not</strong> to produce a large volume of outputs, but to create experiences that result in better outcomes for <s>users</s> <strong>people</strong>.',
      'Delivery matters — but so does the follow-up. How did it perform in the real world? Always ask: <strong>So what?</strong>',
    ],
  },
  {
    num: '03',
    icon: Compass,
    title: 'UX is Strategy',
    body: [
      'A designer who works in a <strong>silo</strong> is a liability. You need to see where your work fits in the broader organization — and how it moves the needle.',
      'Can your team cut costs in a downturn? Can it boost the bottom line? If not — <strong>why bother?</strong>',
    ],
  },
];

export default function Process() {
  return (
    <>
      <Nav />
      <main>
        <div className="container">
          <section className="page" style={{ paddingTop: '4rem' }}>
            <p className="page-label">Process</p>
            <h1 className="process-heading">Design Philosophy</h1>
            <p className="process-intro">I approach design challenges with three things in mind.</p>
            <div className="process-pillars">
              {pillars.map((p) => (
                <div className="process-pillar" key={p.num}>
                  <span className="process-pillar-num">{p.num}</span>
                  <div>
                    <h2 className="process-pillar-title">
                      <p.icon size={20} className="process-pillar-icon" />
                      {p.title}
                    </h2>
                    <div className="process-pillar-body">
                      {p.body.map((para, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
