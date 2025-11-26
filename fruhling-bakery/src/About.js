import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function About() {
  const { t } = useContext(LanguageContext);
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">{t['about-title']}</h2>
          <p className="about-p1">{t['about-p1']}</p>
          <p className="about-p2">{t['about-p2']}</p>
          <p className="about-p3" style={{marginTop: '1rem'}}>{t['about-p3']}</p>
          <p className="about-p4" style={{marginTop: '1rem'}}>{t['about-p4']}</p>
        </div>
        <div className="about-image">
          <img src="https://roni-s-website.s3.eu-north-1.amazonaws.com/fruhling-bakery.images/at-jeffrys.jpg" alt="At Jeffrey's" />
        </div>
      </div>
    </section>
  );
}
