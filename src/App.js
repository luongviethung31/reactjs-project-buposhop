import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './contexts/Cart';
import ScrollToTop from './components/ScrollToTop';
import Hompage from './components/Homepage/Hompage';

const day = new Date("August 20, 2021 12:00:00");

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header/>
        <Hompage/>
        <Footer/>
        <ScrollToTop/>
      </div>
    </CartProvider>
  );
}

export default App;


