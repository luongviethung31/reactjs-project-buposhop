import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row, Col
} from 'reactstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import './Products.css';

import { CartContext } from '../../contexts/Cart';

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
          <div className='container'>
            <div className='product'>
              <Row>
                {
                  products.map((product) => {
                    return (
                      <Col sm='6' md='6' lg='3' className='colum'  key={product.id}>
                        <Card className='product-item'>
                          <div className='overflow'>
                            <CardImg top width="100%"
                              className='img-best-seller'
                              src={product.image}
                              alt="Card image cap" />
                          </div>
                          <CardBody className='cardtext-container'>
                            <CardTitle className='product-name' tag="h5">{product.name}</CardTitle>
                            <CardText className="product-cost"  >{product.cost}</CardText>
                          </CardBody>
                          <div className='buy-container'>
                            <Button className='buy-now'>Buy Now</Button>
                            <CartContext.Consumer>
                              {({addToCart})=>(<MdAddShoppingCart className='add-cart' size='1.5em' onClick={()=>addToCart(product)}></MdAddShoppingCart>)}
                            </CartContext.Consumer>
                          </div>
                        </Card>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </div>
    );
  }
}

export default Products;