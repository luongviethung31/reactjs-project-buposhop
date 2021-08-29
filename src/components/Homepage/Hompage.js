import React, { Component } from 'react';

import SlideIntroduce from '../SlideIntroduce/SlideIntroduce';
import Products from '../Products/Products';
import StorePolicy from '../StorePolicy/StorePolicy';
import SaleOff from '../SaleOff/SaleOff';

class Hompage extends Component {
    render() {
        return (
            <div className='homepage-contents'>
                <SlideIntroduce slides = {items}/>
                <Products/>
                <SaleOff date={Date.now()+100000000}/>
                <StorePolicy/>
            </div>
        );
    }
}
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

export default Hompage;