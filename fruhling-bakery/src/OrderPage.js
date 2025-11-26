import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function OrderPage() {
  const { t, lang } = useContext(LanguageContext);

  return (
    <section
      className="order-page"
      aria-labelledby="order-page-title"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="order-page__content">
        <p className="order-page__eyebrow">{t['order-page-eyebrow']}</p>
        <h1 id="order-page-title">{t['order-page-title']}</h1>
        <p className="order-page__lead">{t['order-page-lead']}</p>
        <div className="order-page__details">
          <h2>{t['order-page-what-to-expect']}</h2>
          <ul>
            <li>{t['order-page-list-1']}</li>
            <li>{t['order-page-list-2']}</li>
            <li>{t['order-page-list-3']}</li>
          </ul>
        </div>
        <div className="order-page__note" lang={lang === 'he' ? 'he' : 'en'}>
          {t['order-page-note']}
        </div>
      </div>
    </section>
  );
}
