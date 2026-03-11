import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Challenge } from './components/sections/Challenge';
import { Scope } from './components/sections/Scope';
import { Support } from './components/sections/Support';
import { Investment } from './components/sections/Investment';
import { ActionPlan } from './components/sections/ActionPlan';
import { Footer } from './components/layout/Footer';
import { ScrollUpButton } from './components/ui/ScrollUpButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-x-clip w-full">
        <ScrollToTop />
        <ScrollUpButton />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/el-reto" element={<Challenge />} />
            <Route path="/alcance" element={<Scope />} />
            <Route path="/soporte" element={<Support />} />
            <Route path="/inversion" element={<Investment />} />
            <Route path="/plan-de-accion" element={<ActionPlan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
