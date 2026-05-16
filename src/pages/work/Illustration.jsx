import CaseStudyPage from '../../components/CaseStudyPage';

const images = [
  '/images/2D/1.jpg',
  '/images/2D/2.jpg',
  '/images/2D/3.jpg',
  '/images/2D/4.jpg',
  '/images/2D/5.jpg',
  '/images/2D/6.jpg',
  '/images/2D/7.jpg',
  '/images/2D/8.jpg',
  '/images/2D/10.jpg',
  '/images/2D/11.jpg',
  '/images/2D/12.jpg',
  '/images/2D/13.jpg',
  '/images/2D/14.jpg',
];

export default function Illustration() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/3d', label: '3D Modeling' }}
    >
      <h1 className="cs-title">Illustration</h1>

      <div className="cs-section">
        <div className="cs-body">
          <p>
            I enjoy the process of sketching and find it very therapeutic. As much as I like the feeling of pen on paper, I like to use{' '}
            <a href="https://procreate.com" target="_blank" rel="noreferrer">Procreate</a>{' '}
            on my iPad.
          </p>
          <p>Yes, I am kinda obsessed with cars.</p>
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((src) => (
          <div className="gallery-item" key={src}>
            <img src={src} alt="Illustration" />
          </div>
        ))}
      </div>
    </CaseStudyPage>
  );
}
