import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row, Col
} from 'reactstrap';
import { IoBagAddOutline } from 'react-icons/io5';
import './Products.css';
import Wrapper from './Wrapper';
import mencollection from './image-bg/mencollection.png';
import womencollection from './image-bg/womencollection.png';
import newarrivals from './image-bg/new-arrivals.jpg';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: products
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className='home-contents'>

        {/* MEN - WOMEN */}
        <div className='shop-card-area'>
          <div className='container'>
            <div className='row justify-content-center row-container'>
              <div className='col-md-6'>
                <div className='shop-item-card'>
                  <div className='banner-box new-arrival-box'>
                    <img src={newarrivals} className='new-arrivals' />
                    <div className='banner-text'>
                      <span>new arrivals</span>
                      <p>Trendy & Dramatic</p>
                    </div>
                    <div className='banner-btn'>
                      <a href='#'>SHOP NOW</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='shop-item-card'>
                    <div className='banner-box men-box'>
                      <img src={mencollection} className='men-collection' />
                      <div className='banner-text'>
                        <span>Men's collection</span>
                        <p>Sporty - Chic</p>
                      </div>
                      <div className='banner-btn'>
                        <a href='#'>SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='shop-item-card'>
                    <div className='banner-box women-box'>
                      <img src={womencollection} className='women-collection' />
                      <div className='banner-text'>
                        <span>Women's collection</span>
                        <p>Glamorous - Sophisticated</p>
                      </div>
                      <div className='banner-btn'>
                        <a href='#'>SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Wrapper tittle="OUR BEST SELLERS">
          <div className='more-info'>CLICK IMAGE FOR MOR INFO</div>
        </Wrapper>
        {/* BEST SELLER */}
        <div className='Product-bestseller'>
          <div className='container'>
            <div className='product'>
              <Row>
                {
                  products.map((product) => {
                    return (
                      <Col sm='6' md='6' lg='3' className='colum'>
                        <Card className='product-item'>
                          <div className='overflow'>
                            <CardImg top width="100%"
                              className='img-best-seller'
                              src={product.image}
                              alt="Card image cap" />
                          </div>
                          <CardBody className='cardtext-container'>
                            <CardTitle className='product-name' tag="h5">{product.name}</CardTitle>
                            <CardText className="product-cost" mb-0>{product.cost}</CardText>
                          </CardBody>
                          <div className='buy-container'>
                            <Button className='buy-now'>Buy Now</Button>
                            <IoBagAddOutline className='add-bag' size='2em'></IoBagAddOutline>
                          </div>
                        </Card>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const products = [{
  "name": "EGYPT TEE",
  "cost": "$33.28",
  "sex": "Male",
  "id": "58275d92-01b9-4e5b-a62c-77baa80191ab",
  "image": "//product.hstatic.net/1000344185/product/2374_8b3d99297dce45cb9526078d9660a49f_master.png"
}, {
  "name": "PAINTER TEE",
  "cost": "$24.49",
  "sex": "Male",
  "id": "12ab9d03-3974-4c6e-a463-1286d5c19eeb",
  "image": "https://product.hstatic.net/1000344185/product/3598_586ea6d9160c4064b9a611d79d9e3a70_master.png"
}, {
  "name": "BASIC SWEATPANTS",
  "cost": "$30.97",
  "sex": "Male",
  "id": "045ad768-a637-4c2a-90c6-7157cc8a3c6f",
  "image": "https://product.hstatic.net/1000344185/product/_nio0990_f019eff6fbac41ab811d6c422b5e73c0_master.jpg"
}, {
  "name": "OFF-WHITE basic",
  "cost": "$105.36",
  "sex": "Male",
  "id": "71f324b2-cce4-4f0c-91a2-89a661c9cc37",
  "image": "https://images.stockx.com/images/OFF-WHITE-Oversized-Fit-Airport-Tape-T-Shirt-White.jpg?fit=clip&bg=FFFFFF&auto=compress&dpr=2&trim=color&updated_at=1613582808&fm=webp&ixlib=react-9.1.5&q=90&w=1140&h=500"
}, {
  "name": "Neighborhood",
  "cost": "$41.30",
  "sex": "Male",
  "id": "8974cd5d-31d5-443a-8f60-864c2da0bdb1",
  "image": "https://product.hstatic.net/1000088324/product/tw142d-t_n1_d2f32fa51dd24bd28261c908426f891f_grande.jpg"
}, {
  "name": "Teeworld Basic Tee",
  "cost": "$38.57",
  "sex": "Male",
  "id": "f03c2716-44fb-46ba-ac43-f15106fbf7d2",
  "image": "https://product.hstatic.net/1000088324/product/1_17a82931386d435e8a1d529205cfc355_large_1bf3bf7d86944404a985bda5dae884e1_master.png"
}, {
  "name": "CARDIGAN FLORA",
  "cost": "$23.60",
  "sex": "Female",
  "id": "dd6d3b0a-fce1-4d69-ad04-ea5f8d2a8044",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-white-1A.jpg"
}, {
  "name": "CARDIGAN FLORA STEEL",
  "cost": "$18.45",
  "sex": "Male",
  "id": "ff433869-1193-4124-b8b0-f235aaf6a0e2",
  "image": "https://slyclothing.vn/wp-content/uploads/2021/06/cardigan-flora-steel-1.jpg"
}];
export default Products;