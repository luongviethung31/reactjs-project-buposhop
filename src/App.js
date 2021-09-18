import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './contexts/Cart';
import ScrollToTop from './components/ScrollToTop';
import Hompage from './components/Homepage/Hompage';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const day = new Date("August 20, 2021 12:00:00");
function App() {
  return (
    <Router>
    <CartProvider>
      <div className="App">
        <Header/>
        <Route path='/' exact component={Hompage}></Route>
        <Route path='/top' exact render={() => <CategoryDetails allProducts={allProducts} title='top'/>}></Route>
        <Route path='/bottom' exact render={() => <CategoryDetails allProducts={allProducts} title='bottom'/>}></Route>
        <Route path='/outerwear' exact render={() => <CategoryDetails allProducts={allProducts} title='outerwear'/>}></Route>
        <Footer/>
        <ScrollToTop/>
      </div>
    </CartProvider>
    </Router>
  );
}

const allProducts = [{
  "name": "EGYPT TEE",
  "cost": "$33.28",
  "sex": "Male",
  "id": "58275d92-01b9-4e-a62c-77baa80191ab",
  "image": "//product.hstatic.net/1000344185/product/2374_8b3d99297dce45cb9526078d9660a49f_master.png",
  "type": "top"
}, {
  "name": "PAINTER TEE",
  "cost": "$24.49",
  "sex": "Male",
  "id": "12ab9d03-3974-4c6e-a463-1285c19eeb",
  "image": "https://product.hstatic.net/1000344185/product/3598_586ea6d9160c4064b9a611d79d9e3a70_master.png",
  "type": "top"
}, {
  "name": "BASIC SWEATPANTS",
  "cost": "$30.97",
  "sex": "Male",
  "id": "045ad768-a637-4c2a-90c6-71c8a3c6f",
  "image": "https://product.hstatic.net/1000344185/product/_nio0990_f019eff6fbac41ab811d6c422b5e73c0_master.jpg",
  "type": "bottom"
}, {
  "name": "OFF-WHITE basic",
  "cost": "$105.36",
  "sex": "Male",
  "id": "71f324b2-cce4f0c-91a2-89a661c9cc37",
  "image": "https://images.stockx.com/images/OFF-WHITE-Oversized-Fit-Airport-Tape-T-Shirt-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613582808&fm=webp&ixlib=react-9.1.5&q=90&w=1140&h=500",
  "type": "top"
}, {
  "name": "Neighborhood",
  "cost": "$41.30",
  "sex": "Male",
  "id": "8974cd5d-31d5-44a-0-864c2da0bdb1",
  "image": "https://product.hstatic.net/1000088324/product/tw142d-t_n1_d2f32fa51dd24bd28261c908426f891f_grande.jpg",
  "type": "top"
}, {
  "name": "Teeworld Basic Tee",
  "cost": "$38.57",
  "sex": "Male",
  "id": "f03c2716-44fb-46ac43-f5106fbf7d2",
  "image": "https://product.hstatic.net/1000088324/product/1_17a82931386d435e8a1d529205cfc355_large_1bf3bf7d86944404a985bda5dae884e1_master.png",
  "type": "top"
}, {
  "name": "CARDIGAN FLORA",
  "cost": "$23.60",
  "sex": "Female",
  "id": "dd6d3b0a-fce1-4d69-d04f8d2a8044",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-white-1A.jpg",
  "type": "outerwear"
}, {
  "name": "CARDIGAN FLORA STEEL",
  "cost": "$18.45",
  "sex": "Male",
  "id": "ff433869-1193-4124-b8-f235aaf6a0e2",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-steel-1.jpg",
  "type": "outerwear"
},
{
  "name": "EGYPT TEE",
  "cost": "$33.28",
  "sex": "Male",
  "id": "58275d92-01b9-4e5b-a62c-77a80191ab",
  "image": "//product.hstatic.net/1000344185/product/2374_8b3d99297dce45cb9526078d9660a49f_master.png",
  "type": "top"
}, {
  "name": "PAINTER TEE",
  "cost": "$24.49",
  "sex": "Male",
  "id": "12ab9d03-3974-4c463-1286d5c19eeb",
  "image": "https://product.hstatic.net/1000344185/product/3598_586ea6d9160c4064b9a611d79d9e3a70_master.png",
  "type": "top"
}, {
  "name": "BASIC SWEATPANTS",
  "cost": "$30.97",
  "sex": "Male",
  "id": "045ad768-a637-4c2a-90c6-7157cc6f",
  "image": "https://product.hstatic.net/1000344185/product/_nio0990_f019eff6fbac41ab811d6c422b5e73c0_master.jpg",
  "type": "bottom"
}, {
  "name": "OFF-WHITE basic",
  "cost": "$105.36",
  "sex": "Male",
  "id": "71f324b2-c-91a2-89a661c9cc37",
  "image": "https://images.stockx.com/images/OFF-WHITE-Oversized-Fit-Airport-Tape-T-Shirt-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613582808&fm=webp&ixlib=react-9.1.5&q=90&w=1140&h=500",
  "type": "top"
}, {
  "name": "Neighborhood",
  "cost": "$41.30",
  "sex": "Male",
  "id": "8971d5-443a-8f60-864c2da0bdb1",
  "image": "https://product.hstatic.net/1000088324/product/tw142d-t_n1_d2f32fa51dd24bd28261c908426f891f_grande.jpg",
  "type": "top"
}, {
  "name": "Teeworld Basic Tee",
  "cost": "$38.57",
  "sex": "Male",
  "id": "f03c2716-44fb-46ba-106fbf7d2",
  "image": "https://product.hstatic.net/1000088324/product/1_17a82931386d435e8a1d529205cfc355_large_1bf3bf7d86944404a985bda5dae884e1_master.png",
  "type": "top"
}, {
  "name": "CARDIGAN FLORA",
  "cost": "$23.60",
  "sex": "Female",
  "id": "dd6d3b0a-fce1-4d69-ad04-e2a8044",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-white-1A.jpg",
  "type": "outerwear"
}, {
  "name": "CARDIGAN FLORA STEEL",
  "cost": "$18.45",
  "sex": "Male",
  "id": "ff433869-1193-4124-aaf6a0e2",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-steel-1.jpg",
  "type": "outerwear"
},
{
  "name": "EGYPT TEE",
  "cost": "$33.28",
  "sex": "Male",
  "id": "58275d92-01b9-4baa80191ab",
  "image": "//product.hstatic.net/1000344185/product/2374_8b3d99297dce45cb9526078d9660a49f_master.png",
  "type": "top"
}, {
  "name": "PAINTER TEE",
  "cost": "$24.49",
  "sex": "Male",
  "id": "12ab9d03-3974-4c6e-c19eeb",
  "image": "https://product.hstatic.net/1000344185/product/3598_586ea6d9160c4064b9a611d79d9e3a70_master.png",
  "type": "top"
}, {
  "name": "BASIC SWEATPANTS",
  "cost": "$30.97",
  "sex": "Male",
  "id": "045ad768-a637-4-7157cc8a3c6f",
  "image": "https://product.hstatic.net/1000344185/product/_nio0990_f019eff6fbac41ab811d6c422b5e73c0_master.jpg",
  "type": "bottom"
}, {
  "name": "OFF-WHITE basic",
  "cost": "$105.36",
  "sex": "Male",
  "id": "71f324b2-cce4-4f0c-89a661c9cc37",
  "image": "https://images.stockx.com/images/OFF-WHITE-Oversized-Fit-Airport-Tape-T-Shirt-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613582808&fm=webp&ixlib=react-9.1.5&q=90&w=1140&h=500",
  "type": "top"
}, {
  "name": "Neighborhood",
  "cost": "$41.30",
  "sex": "Male",
  "id": "8974cd5d-864c2da0bdb1",
  "image": "https://product.hstatic.net/1000088324/product/tw142d-t_n1_d2f32fa51dd24bd28261c908426f891f_grande.jpg",
  "type": "top"
}, {
  "name": "Teeworld Basic Tee",
  "cost": "$38.57",
  "sex": "Male",
  "id": "f03c2716-44fb-46ba-15106fbf7d2",
  "image": "https://product.hstatic.net/1000088324/product/1_17a82931386d435e8a1d529205cfc355_large_1bf3bf7d86944404a985bda5dae884e1_master.png",
  "type": "top"
}, {
  "name": "CARDIGAN FLORA",
  "cost": "$23.60",
  "sex": "Female",
  "id": "dd6d3b0a-fce1-4d69-ad0d2a8044",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-white-1A.jpg",
  "type": "outerwear"
}, {
  "name": "CARDIGAN FLORA STEEL",
  "cost": "$18.45",
  "sex": "Male",
  "id": "ff433869-1193-4af6a0e2",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-steel-1.jpg",
  "type": "outerwear"
},
{
  "name": "EGYPT TEE",
  "cost": "$33.28",
  "sex": "Male",
  "id": "58275d92-01b9-4e5b-a62a80191ab",
  "image": "//product.hstatic.net/1000344185/product/2374_8b3d99297dce45cb9526078d9660a49f_master.png",
  "type": "top"
}, {
  "name": "PAINTER TEE",
  "cost": "$24.49",
  "sex": "Male",
  "id": "12ab9d03-3974-4c6e-a463-126d5c19eeb",
  "image": "https://product.hstatic.net/1000344185/product/3598_586ea6d9160c4064b9a611d79d9e3a70_master.png",
  "type": "top"
}, {
  "name": "BASIC SWEATPANTS",
  "cost": "$30.97",
  "sex": "Male",
  "id": "045ad768-a637-4c2a-90c6-7157cc8c6f",
  "image": "https://product.hstatic.net/1000344185/product/_nio0990_f019eff6fbac41ab811d6c422b5e73c0_master.jpg",
  "type": "bottom"
}, {
  "name": "OFF-WHITE basic",
  "cost": "$105.36",
  "sex": "Male",
  "id": "71f324bce4-4f0c-91a2-89a661c9cc37",
  "image": "https://images.stockx.com/images/OFF-WHITE-Oversized-Fit-Airport-Tape-T-Shirt-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613582808&fm=webp&ixlib=react-9.1.5&q=90&w=1140&h=500",
  "type": "top"
}, {
  "name": "Neighborhood",
  "cost": "$41.30",
  "sex": "Male",
  "id": "8974cd5d-31d5-443a-8f60-86da0bdb1",
  "image": "https://product.hstatic.net/1000088324/product/tw142d-t_n1_d2f32fa51dd24bd28261c908426f891f_grande.jpg",
  "type": "top"
}, {
  "name": "Teeworld Basic Tee",
  "cost": "$38.57",
  "sex": "Male",
  "id": "f03c2716-44fb-46ba-ac43-f1506fbf7d2",
  "image": "https://product.hstatic.net/1000088324/product/1_17a82931386d435e8a1d529205cfc355_large_1bf3bf7d86944404a985bda5dae884e1_master.png",
  "type": "top"
}, {
  "name": "CARDIGAN FLORA",
  "cost": "$23.60",
  "sex": "Female",
  "id": "dd6d3b0-fce1-49-ad04-ea5fa8044",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-white-1A.jpg",
  "type": "outerwear"
}, {
  "name": "CARDIGAN FLORA STEEL",
  "cost": "$18.45",
  "sex": "Male",
  "id": "ff433869-1193-4124-b8b0-f2af6a0e2",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-steel-1.jpg",
  "type": "outerwear"
}];
export default App;


