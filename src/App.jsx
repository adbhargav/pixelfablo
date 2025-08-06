import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PresetDetails from './pages/PresetDetails';
import Home from './pages/Home';
import Presets from './pages/Presets';
import Grading from './pages/Grading';
import Cart from './pages/Cart';
import { CartProvider } from "./context/CartContext";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presets" element={<Presets />} />
            <Route path="/presets/:section/:preset" element={<PresetDetails />} />
            <Route path="/grading/:section/:grading" element={<Grading />} />
            <Route path="/grading" element={<Grading />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
