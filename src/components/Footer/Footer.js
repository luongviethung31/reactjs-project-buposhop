import React, { Component } from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import  logo from '../../images/logoBupo.png';

class Footer extends Component {
    render() {
        return (
            <div className='Footer-container'>
                {/* <div className='triangle'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" width='100%' height='100px'>
                        <path d="M0 0 L100 98 L100 100 L0 100 Z" fill="#16334df7"></path>
                    </svg>
                </div> */}
                <div className='site-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 info-area'>
                                <div className='info-title'>
                                    <h6>Newsletter</h6>
                                </div>
                                <div className='subscription-email-area'>
                                    <div className='subscription-email-title'><p>Get timely updates from your favorite products</p></div>
                                    <div className='subscription-email-input'>
                                        <input type='email' className='email-textform' placeholder='Your email address *' required/>
                                        <button type='submit' className='btn-submit-email'>subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 info-area'>
                                <div className='info-title'>
                                    <h6>Contact Info</h6>
                                </div>
                                <div className='contact-info-area'>
                                    <ul className='list-contact-info'>
                                        <li className='contact-info-item logo-social'>
                                            <a href="https://www.facebook.com/boluong31.01" target="_blank"><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></a> &ensp;
                                            <a href="https://www.instagram.com/_bo.lg_/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a> &ensp;
                                            <a href="#"><img src={logo} class='logo-footer'></img></a>
                                        </li>
                                        <li className='contact-info-item'>Email: luongmauviethung31.01@gmail.com</li>
                                        <li className='contact-info-item'>Phone: 0964.465.300</li>
                                        <li className='contact-info-item'>Address: No 03, Hoa Minh 10 street, Hoa Minh ward, Lien Chieu distric, Da Nang city</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='row'>
                                    <div className='col-lg-5 info-area'>
                                        <div className='info-title'>
                                            <h6>Boutique Info</h6>
                                        </div>
                                        <div className='additional-info-area'>
                                            <ul className='list-additional-info'>
                                                <li className='item-additional-info'><a href='#'>About us</a></li>
                                                <li className='item-additional-info'><a href='#'>News</a></li>
                                                <li className='item-additional-info'><a href='#'>Best services</a></li>
                                                <li className='item-additional-info'><a href='#'>Privacy policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-lg-7 info-area'>
                                        <div className='info-title'>
                                            <h6>Payment & shipping</h6>
                                        </div>
                                        <div className='additional-info-area'>
                                            <ul className='list-additional-info'>
                                                <li className='item-additional-info'><a href='#'>Payment method</a></li>
                                                <li className='item-additional-info'><a href='#'>Shipping policy</a></li>
                                                <li className='item-additional-info'><a href='#'>Return policy</a></li>
                                                <li className='item-additional-info'><a href='#'>Shipping guide</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;