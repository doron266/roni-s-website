import React, { useContext, useMemo, useState } from 'react';
import { LanguageContext } from './LanguageContext';

export default function OrderPage() {
  const { t, lang } = useContext(LanguageContext);
  const [cart, setCart] = useState({});

  const products = useMemo(() => {
    const productImageBase =
      'https://roni-s-website.s3.eu-north-1.amazonaws.com/fruhling-bakery.products';

    return [
      {
        id: 'krokumbush',
        name: { he: 'קרוקומבוש', en: 'Krokumbush' },
        price: 450,
        image: `${productImageBase}/krokumbush.jpg`,
        description: {
          he: 'מגדל פחזניות חגיגי ממולא בקרם וניל וקישוטי פרחים.',
          en: 'A celebratory croquembouche filled with vanilla cream and decorated with flowers.',
        },
      },
      {
        id: 'saint-honore',
        name: { he: 'סן אונורה', en: 'Saint-Honoré' },
        price: 250,
        image: `${productImageBase}/saint-honore.jpg`,
        description: {
          he: 'קלאסיקה פריזאית עם עלים מקורמלים, קרם דיפלומט וקרמל.',
          en: 'A Parisian classic with caramelized puffs, diplomat cream, and caramel.',
        },
      },
      {
        id: 'millioner-cookie',
        name: { he: 'עוגיות מיליונר (10)', en: 'Millionaire Cookies (10)' },
        price: 200,
        image: `${productImageBase}/millioner-cookie.jpg`,
        description: {
          he: '10 יחידות עוגיות עשירות בשכבות קרמל ושוקולד.',
          en: '10 indulgent cookies layered with caramel and chocolate.',
        },
      },
      {
        id: 'pavlova',
        name: { he: 'פבלובה', en: 'Pavlova' },
        price: 200,
        image: `${productImageBase}/pavlova.jpg`,
        description: {
          he: 'מרנג קריספי עם קרם עשיר ופירות טריים.',
          en: 'Crisp meringue with rich cream and fresh fruits.',
        },
      },
      {
        id: 'designed-cake',
        name: { he: 'עוגה מעוצבת', en: 'Designed Cake' },
        price: 250,
        image: `${productImageBase}/designed-cakes.jpg`,
        description: {
          he: 'עוגה מעוצבת בהתאמה אישית לחגיגה מושלמת.',
          en: 'A bespoke designed cake customized for your celebration.',
        },
      },
    ];
  }, []);

  const handleAdd = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const handleRemove = (productId) => {
    setCart((prev) => {
      if (!prev[productId]) return prev;
      const updated = { ...prev };
      updated[productId] -= 1;
      if (updated[productId] <= 0) {
        delete updated[productId];
      }
      return updated;
    });
  };

  const selectedProducts = products.filter((product) => cart[product.id]);
  const total = selectedProducts.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0
  );

  return (
    <section
      className="order-page"
      aria-labelledby="order-page-title"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="order-page__header">
        <div>
          <p className="order-page__eyebrow">{t['order-page-eyebrow']}</p>
          <h1 id="order-page-title">{t['order-page-title']}</h1>
          <p className="order-page__lead">{t['order-page-lead']}</p>
        </div>
        <div className="order-page__tagline" lang={lang === 'he' ? 'he' : 'en'}>
          {t['order-page-note']}
        </div>
      </div>

      <div className="order-page__layout">
        <div className="order-page__catalog" aria-label={t['order-page-catalog']}>
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__image-wrapper">
                <img
                  src={product.image}
                  alt={product.name[lang]}
                  className="product-card__image"
                />
                <button
                  type="button"
                  className="product-card__add"
                  onClick={() => handleAdd(product.id)}
                  aria-label={`${t['order-page-add']} ${product.name[lang]}`}
                >
                  +
                </button>
              </div>
              <div className="product-card__body">
                <div className="product-card__header">
                  <h3 className="product-card__title">{product.name[lang]}</h3>
                  <span className="product-card__price">₪{product.price}</span>
                </div>
                <p className="product-card__description">
                  {product.description[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>

        <aside className="order-page__summary" aria-label={t['order-page-summary']}>
          <div className="summary__header">
            <h2>{t['order-page-summary']}</h2>
            <p className="summary__hint">{t['order-page-summary-note']}</p>
          </div>
          <div className="summary__list">
            {selectedProducts.length === 0 ? (
              <p className="summary__empty">{t['order-page-empty']}</p>
            ) : (
              selectedProducts.map((product) => (
                <div key={product.id} className="summary__item">
                  <div className="summary__info">
                    <p className="summary__name">{product.name[lang]}</p>
                    <p className="summary__meta">
                      {cart[product.id]} × ₪{product.price}
                    </p>
                  </div>
                  <div className="summary__actions">
                    <button
                      type="button"
                      className="summary__remove"
                      onClick={() => handleRemove(product.id)}
                      aria-label={`${t['order-page-remove']} ${product.name[lang]}`}
                    >
                      −
                    </button>
                    <button
                      type="button"
                      className="summary__add"
                      onClick={() => handleAdd(product.id)}
                      aria-label={`${t['order-page-add']} ${product.name[lang]}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="summary__footer">
            <div className="summary__total">
              <span>{t['order-page-total']}</span>
              <strong>₪{total}</strong>
            </div>
            <p className="summary__disclaimer">{t['order-page-disclaimer']}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
