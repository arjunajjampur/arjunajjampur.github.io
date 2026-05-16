import CaseStudyPage from '../../components/CaseStudyPage';

const images = [
  { src: '/images/3D/arm.png', alt: 'Robotic arm' },
  { src: '/images/3D/buds.jpg', alt: 'Earbuds' },
  { src: '/images/3D/boot.png', alt: 'Boot' },
  { src: '/images/3D/cam.jpg', alt: 'Camera' },
  { src: '/images/3D/car.jpg', alt: 'Car render' },
  { src: '/images/3D/chair.jpg', alt: 'Chair' },
  { src: '/images/3D/chair2.jpg', alt: 'Chair variant' },
  { src: '/images/3D/dryier.jpg', alt: 'Hair dryer' },
  { src: '/images/3D/hp.jpg', alt: 'HP product' },
  { src: '/images/3D/mic.jpg', alt: 'Microphone' },
  { src: '/images/3D/pool.png', alt: 'Pool render' },
  { src: '/images/3D/sena.jpg', alt: 'Sena helmet' },
];

export default function Modeling3D() {
  return (
    <CaseStudyPage
      prev={{ to: '/work/wilson', label: 'Wilson Golf Driver' }}
      next={{ to: '/work/2d', label: 'Illustration' }}
    >
      <h1 className="cs-title">3D Modeling</h1>

      <div className="cs-section">
        <div className="cs-body">
          <p>
            For over a decade, I have been working with a plethora of modeling and visualization tools. I started with Alias, which laid the foundation for high-quality surfacing techniques. I was able to apply this to{' '}
            <a href="https://www.rhino3d.com" target="_blank" rel="noreferrer">Rhinoceros 3D</a>,{' '}
            <a href="https://www.autodesk.com/products/maya/overview" target="_blank" rel="noreferrer">Maya</a>, and{' '}
            <a href="https://www.blender.org/about/" target="_blank" rel="noreferrer">Blender</a>.
          </p>
          <p>
            I also hold a SolidWorks Certification for surface, solid, and sheet metal modeling.
          </p>
          <p>
            3D modeling is definitely skill-based and there are multiple ways to reach the same result. However, in rendering and visualization, there is only one way light behaves — according to the laws of physics. One of my favorite books for learning and applying lighting is{' '}
            <a href="https://www.amazon.com/Lighting-Product-Photography-Step-Step/dp/1608955443" target="_blank" rel="noreferrer">
              Lighting for Product Photography
            </a>
            , which helped me understand how light interacts with surfaces, materials, and the broader environment.
          </p>
          <p>
            Most of the images below were part of content or product marketing.
          </p>
        </div>
      </div>

      <div className="gallery-grid">
        {images.map((img) => (
          <div className="gallery-item" key={img.src}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </CaseStudyPage>
  );
}
