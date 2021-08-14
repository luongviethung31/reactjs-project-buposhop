import React, { Component } from 'react';
import Countdown, { zeroPad } from "react-countdown";
import saleoff from './image-bg/saleoff-bg.png';
import './SaleOff.css';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
        <div className='countdown-items'>
            <div className='countdown-item-list days'>
                <h5>{zeroPad(days)}</h5>
                <span>Days</span>
            </div>
            <div className='countdown-item-list hours'>
                <h5>{zeroPad(hours)}</h5>
                <span>Hours</span>
            </div>
            <div className='countdown-item-list minutes'>
                <h5>{zeroPad(minutes)}</h5>
                <span>Mins</span>
            </div>
            <div className='countdown-item-list seconds'>
                <h5>{zeroPad(seconds)}</h5>
                <span>Secs</span>
            </div>
        </div>
    )
};

class SaleOff extends Component {
    render() {
        return (
            <div className='sale-off-banner'>
                <div className='container'>
                    <div className='row content-saleoff'>
                        <div className='col-md-7 countdown-box'>
                            <div className='title-saleoff'>
                                <h2>DEAL <br /> of the day</h2>
                            </div>
                            <div className='slogen-saleoff'>
                                <h4>Big Buys, But Bigger Savings.</h4>
                                <h4>Sale up to 70%</h4>
                            </div>
                            <Countdown date={this.props.date} renderer={renderer} />
                            <div className='banner-btn'>
                                <a href='#'>SHOP NOW</a>
                            </div>
                        </div>
                        <div className='col-md-5 image-sale-off'>
                            <img src={saleoff} className='bg-image' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaleOff;