import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import Header from './Header';
import About from './About';
import Products from './Products';
import Gallery from './Gallery';
import Footer from './Footer';
import OrderPage from './OrderPage';

function HomePage() {
  return (
    <main>
      <About />
      <Products />
      <Gallery />
    </main>
  );
}

function InnerApp() {
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.classList.toggle('ltr', lang === 'en');
  }, [lang]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <InnerApp />
    </LanguageProvider>
  );
}
