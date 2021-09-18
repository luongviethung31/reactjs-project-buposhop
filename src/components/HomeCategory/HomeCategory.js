import React from 'react';
import "./HomeCategory.css";

import mencollection from '../image-bg/mencollection.png';
import womencollection from '../image-bg/womencollection.png';
import newarrivals from '../image-bg/new-arrivals.jpg';

function HomeCategory() {
    return (
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
    );
}

export default HomeCategory;