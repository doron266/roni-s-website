import React, { useContext, useEffect } from 'react';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Header from './Header';
import About from './About';
import Products from './Products';
import Gallery from './Gallery';
import Footer from './Footer';

function InnerApp() {
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.classList.toggle('ltr', lang === 'en');
  }, [lang]);

  return (
    <>
      <Header />
      <main>
        <About />
        <Products />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <InnerApp />
    </LanguageProvider>
  );
}
