import React, { Component } from 'react';

export const CartContext = React.createContext();
export class CartProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: []
        }
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product){
        console.log(this.state.product);
        this.setState(
            {
                product: this.state.product.concat(product)
            }
        );
    }
    render() {
        return(
            <CartContext.Provider 
            value={{
                product: this.state.product,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

