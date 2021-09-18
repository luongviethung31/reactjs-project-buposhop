import React, { Component } from 'react';

import SlideIntroduce from '../SlideIntroduce/SlideIntroduce';
import Products from '../Products/Products';
import StorePolicy from '../StorePolicy/StorePolicy';
import SaleOff from '../SaleOff/SaleOff';
import HomeCategory from '../HomeCategory/HomeCategory';
import Wrapper from '../Subject/Subject';
import './Homepage.css';

class Hompage extends Component {
  render() {
    return (
      <div className='homepage-contents'>
        <SlideIntroduce slides={items} />
        <Wrapper tittle="what are you looking for?">
          <div className='more-info'>CLICK IMAGE FOR MOR INFO</div>
        </Wrapper>
        <HomeCategory />
        <Wrapper tittle="OUR BEST SELLERS">
          <div className='more-info'>CLICK IMAGE FOR MOR INFO</div>
        </Wrapper>
        <div className='Product-bestseller'>
          <Products products = {products}/>
        </div>
        <SaleOff date={Date.now() + 100000000} />
        <StorePolicy />
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

const products = [{
  "name": "EGYPT TEE",
  "cost": "$33.28",
  "sex": "Male",
  "id": "58275d92-01b9-4e5b-a62c-77baa80191ab",
  "image": "//product.hstatic.net/1000344185/product/2374_8b3d99297dce45cb9526078d9660a49f_master.png",
  "type": "top"
}, {
  "name": "PAINTER TEE",
  "cost": "$24.49",
  "sex": "Male",
  "id": "12ab9d03-3974-4c6e-a463-1286d5c19eeb",
  "image": "https://product.hstatic.net/1000344185/product/3598_586ea6d9160c4064b9a611d79d9e3a70_master.png",
  "type": "top"
}, {
  "name": "BASIC SWEATPANTS",
  "cost": "$30.97",
  "sex": "Male",
  "id": "045ad768-a637-4c2a-90c6-7157cc8a3c6f",
  "image": "https://product.hstatic.net/1000344185/product/_nio0990_f019eff6fbac41ab811d6c422b5e73c0_master.jpg",
  "type": "bottom"
}, {
  "name": "OFF-WHITE basic",
  "cost": "$105.36",
  "sex": "Male",
  "id": "71f324b2-cce4-4f0c-91a2-89a661c9cc37",
  "image": "https://images.stockx.com/images/OFF-WHITE-Oversized-Fit-Airport-Tape-T-Shirt-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613582808&fm=webp&ixlib=react-9.1.5&q=90&w=1140&h=500",
  "type": "top"
}, {
  "name": "Neighborhood",
  "cost": "$41.30",
  "sex": "Male",
  "id": "8974cd5d-31d5-443a-8f60-864c2da0bdb1",
  "image": "https://product.hstatic.net/1000088324/product/tw142d-t_n1_d2f32fa51dd24bd28261c908426f891f_grande.jpg",
  "type": "top"
}, {
  "name": "Teeworld Basic Tee",
  "cost": "$38.57",
  "sex": "Male",
  "id": "f03c2716-44fb-46ba-ac43-f15106fbf7d2",
  "image": "https://product.hstatic.net/1000088324/product/1_17a82931386d435e8a1d529205cfc355_large_1bf3bf7d86944404a985bda5dae884e1_master.png",
  "type": "top"
}, {
  "name": "CARDIGAN FLORA",
  "cost": "$23.60",
  "sex": "Female",
  "id": "dd6d3b0a-fce1-4d69-ad04-ea5f8d2a8044",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-white-1A.jpg",
  "type": "outerwear"
}, {
  "name": "CARDIGAN FLORA STEEL",
  "cost": "$18.45",
  "sex": "Male",
  "id": "ff433869-1193-4124-b8b0-f235aaf6a0e2",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-steel-1.jpg",
  "type": "outerwear"
}];

export default Hompage;