import './App.css';
import Header from './components/Header';
import SlideIntroduce from './components/homepage/SlideIntroduce';
import React from 'react';
import Products from './components/homepage/Products';
import Footer from './components/Footer';
import StorePolicy from './components/homepage/StorePolicy';
import { CartProvider } from './contexts/Cart';
import ScrollToTop from './components/ScrollToTop';
import SaleOff from './components/homepage/SaleOff';

const day = new Date("August 20, 2021 12:00:00");

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header/>
        <SlideIntroduce slides = {items}/>
        <Products/>
        <SaleOff date={Date.now()+100000000}/>
        <StorePolicy/>
        <Footer/>
        <ScrollToTop/>
      </div>
    </CartProvider>
  );
}

export default App;

const items = [
  {
    src: 'https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258349.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: 0,
    className: "slide 1",
  },
  {
    src: 'https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258371.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: 1,
    className: "slide 2",
  },
  {
    src: 'https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258407.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: 2,
    className: "slide 3",
  }
];
