import React from 'react';
import '../Gallery.css';

const images = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg',
  '/images/pic4.jpg',
  '/images/pic5.jpg',
  '/images/pic6.jpg',
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img src={src} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

