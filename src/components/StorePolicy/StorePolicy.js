import React, { Component } from 'react';
import {Card} from 'reactstrap';
import {faBoxOpen, faMoneyCheckAlt, faShippingFast} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StorePolicy.css';

class StorePolicy extends Component {
    render() {
        return (
            <div className='policy-card'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xm-12 col-sm-4 card-container'>
                            <Card className='policy-card-item return-policy'>
                                <div className='icon-area'>
                                    <FontAwesomeIcon icon={faBoxOpen} className='icon-policy'/>
                                </div>
                                <div className='text-policy-area'>
                                    <h6>Shipping & Return</h6>
                                    <p>If your glasses aren't perfect, return them within 30 days</p>
                                </div>
                            </Card>
                        </div>   
                        <div className='col-xm-12 col-sm-4 card-container'>
                            <Card className='policy-card-item payment-policy'>
                                <div className='icon-area'>
                                    <FontAwesomeIcon icon={faMoneyCheckAlt} className='icon-policy'/> 
                                </div>
                                <div className='text-policy-area'>
                                    <h6>Safe Payment</h6>
                                    <p>Pay with the world's most popular and secure payment methods</p>
                                </div>
                            </Card>
                        </div>   
                        <div className='col-xm-12 col-sm-4 card-container'>
                            <Card className='policy-card-item shipping-policy'>
                                <div className='icon-area'>
                                    <FontAwesomeIcon icon={faShippingFast} className='icon-policy'/> 
                                </div>
                                <div className='text-policy-area'>
                                    <h6>Shop with confidence</h6>
                                    <p>Our Buyer Protection covers your purchase from click to delivery</p>
                                </div>
                            </Card>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}

export default StorePolicy;