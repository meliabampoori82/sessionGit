import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Inventory from './pages/Inventory.jsx';
import VehicleDetail from './pages/VehicleDetail.jsx';
import Brands from './pages/Brands.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const overHero = pathname === '/';

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header transparent={overHero} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<VehicleDetail />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal page="privacy" />} />
          <Route path="/terms" element={<Legal page="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
