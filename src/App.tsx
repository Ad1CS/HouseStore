/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { HouseDetails } from './pages/HouseDetails';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Admin } from './pages/Admin';
import { useEffect } from 'react';

function ScrollToTopAndSEO() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const titles: Record<string, string> = {
      '/': 'Главная | СтройДом - Одноэтажные дома',
      '/catalog': 'Каталог проектов | СтройДом',
      '/about': 'О компании | СтройДом',
      '/contacts': 'Контакты | СтройДом',
      '/admin': 'Панель управления | СтройДом'
    };

    if (titles[location.pathname]) {
      document.title = titles[location.pathname];
    } else if (location.pathname.startsWith('/house/')) {
      document.title = 'Проект дома | СтройДом';
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndSEO />
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/house/:id" element={<HouseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
