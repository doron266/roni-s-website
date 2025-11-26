import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function Products() {
  const { t } = useContext(LanguageContext);
  return (
    <section className="products-section">
      <h2 className="products-title section-title">{t['section-title']}</h2>
      <div className="products-container">
        <div className="product-component">
          <img src="https://roni-s-website.s3.eu-north-1.amazonaws.com/fruhling-bakery.images/krokumbush2.jpg" alt="Dessert Table" />
          <div className="product-description product1-desc">{t['product1-desc']}</div>
        </div>
        <div className="product-component">
          <img src="https://roni-s-website.s3.eu-north-1.amazonaws.com/fruhling-bakery.images/lemon-tart.jpg" alt="Restaurant Desserts" />
          <div className="product-description product2-desc">{t['product2-desc']}</div>
        </div>
        <div className="product-component">
          <img src="https://roni-s-website.s3.eu-north-1.amazonaws.com/fruhling-bakery.images/sadna.jpg" alt="Workshops" />
          <div className="product-description product3-desc">{t['product3-desc']}</div>
        </div>
      </div>
    </section>
  );
}
