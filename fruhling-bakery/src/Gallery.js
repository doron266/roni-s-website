import React, { useRef, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const images = [
  'krokumbush.jpg','krokumbush2.jpg','krokumbush3.jpg','sadna.jpg','sadna2.jpg','sadna3.jpg',
  'saint-honore.jpg','2saint-honore.jpg','roni.jpg','roni-working.jpg','at-jeffrys.jpg','pavlova.jpg',
  'desert-deck.jpg','desert-deck2.jpg'
].map(p => `https://roni-s-website.s3.eu-north-1.amazonaws.com/fruhling-bakery.images/${p}`);

export default function Gallery() {
  const sliderRef = useRef(null);
  const { t } = useContext(LanguageContext);

  const scrollGallery = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const scrollAmount = 370;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title gallery-title-text">{t['gallery-title-text']}</h2>
      <div className="gallery-container">
        <button className="gallery-nav prev" onClick={() => scrollGallery(-1)}>‹</button>
        <div className="gallery-slider" id="gallerySlider" ref={sliderRef}>
          {images.map((src, i) => (
            <div className="gallery-item" key={i}><img src={src} alt={`gallery-${i}`} /></div>
          ))}
        </div>
        <button className="gallery-nav next" onClick={() => scrollGallery(1)}>›</button>
      </div>
    </section>
  );
}
