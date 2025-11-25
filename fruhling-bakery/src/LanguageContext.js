import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  he: {
    'nav-about': 'אודות',
    'nav-gallery': 'גלריה',
    'nav-contact': 'צור קשר',
    'nav-order': 'הזמנה',
    'about-title': 'הסיפור שלנו',
    'about-p1': 'קצת על עצמי :)',
    'about-p2': 'נעים מאוד שמי רוני פרילינג, קונדיטורית מאבן יהודה. לאחר שסיימתי בהצטיינות לימודי קונדיטוריה בבית הספר "בישולים". המשכתי לסטאז׳ בפריז אצל השף קונדיטור ג׳פרי קנייה המוכשר!',
    'about-p3': 'הקמתי את העסק FRUHLING.BAKERY המתמקד ב: קינוחי מסעדות וברי יין, קינוחי "ואוו" לאירועים פרטיים, שיתופי פעולה ופרוייקטים קולינריים.',
    'about-p4': 'שמחה לקחת חלק באירועים מושקעים, לממש את הידע שצברתי ואת הטכניקות שלמדתי באהבה רבה...',
    'section-title': 'המוצרים שלנו',
    'product1-desc': 'שולחן קינוחי הוואו שלי',
    'product2-desc': 'פיתוח קינוחי מסעדות וברי יין',
    'product3-desc': 'סדנאות ושיתופי פעולה',
    'gallery-title-text': 'הגלריה שלנו',
    'footer-title': 'בואו לבקר אותנו היום',
    'footer-location': '📍 אבן יהודה, ישראל',
    'footer-phone': '📞 054-326-0188',
    'footer-chef': '👩‍🍳 שף קונדיטור: רוני פרילינג',
    'footer-hours': 'זמני איסוף מהמקום: 07:00 - 19:00',
    'footer-copyright': '© 2024 Fruhling Bakery. כל הזכויות שמורות.'
  },
  en: {
    'nav-about': 'About',
    'nav-gallery': 'Gallery',
    'nav-contact': 'Contact',
    'nav-order': 'Order',
    'about-title': 'Our Story',
    'about-p1': 'A bit about myself :)',
    'about-p2': 'Nice to meet you, my name is Roni Friling, a pastry chef from Even Yehuda. After graduating with honors from the "Bishulim" culinary school, I continued to an internship in Paris with the talented pastry chef Jeffrey Cagnes!',
    'about-p3': 'I founded FRUHLING.BAKERY which focuses on: restaurant and wine bar desserts, "WOW" desserts for private events, collaborations and culinary projects.',
    'about-p4': 'I am happy to take part in special events, to realize the knowledge I have gained and the techniques I learned with great love...',
    'section-title': 'Our Products',
    'product1-desc': 'My WOW Dessert Table',
    'product2-desc': 'Restaurant & Wine Bar Dessert Development',
    'product3-desc': 'Workshops & Collaborations',
    'gallery-title-text': 'Our Gallery',
    'footer-title': 'Visit Us Today',
    'footer-location': '📍 Even Yehuda, Israel',
    'footer-phone': '📞 054-326-0188',
    'footer-chef': '👩‍🍳 Pastry Chef: Roni Friling',
    'footer-hours': 'Pickup Times: 7:00 AM - 7:00 PM',
    'footer-copyright': '© 2024 Fruhling Bakery. All rights reserved.'
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('he');
  const toggle = () => setLang(l => l === 'he' ? 'en' : 'he');
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
