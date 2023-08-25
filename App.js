import React from 'react'
import Home from'./Component/header/Header';
import Hero from './Component/hero/Hero';
import Slider from'./Component/Slider/Slider';
import VirtualDemo from './Component/virtual/virtual';
import Products from './Component/products/products';
import Review from './Component/Testimonial/Testimonial';
import Contact from "./Component/footer/Footer";
function App() {
  return (
    <div className='App'>
      <Home/>
      <Hero/>
      <Slider/>
      <VirtualDemo/>
      <Products/>
      <Review/>
      <Contact/>
    </div>
  );
}
export default App;
