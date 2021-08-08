//ADD LINK a href
//Chưa responsive cho menu
import React from 'react';
import logo from '../images/logoBupo.png';
import { List, ListInlineItem } from 'reactstrap';
import {HiOutlineShoppingBag, HiSearch} from'react-icons/hi';
import './Header.css'

const Header = (props) => {
  return (
    <div className='Header'>
        <div className='Header-top'>
            <a href='#'>Login</a>   
            <a href='#'>Register</a>   
        </div>
        <div className='Header-bottom'>
            <a href='#'><img className = "logo" src ={logo} alt="logo"/></a>
            <List type="inline" className='menu-list'>
                <ListInlineItem className='menu-item'><a href='#'>TOPS</a></ListInlineItem>
                <ListInlineItem className='menu-item'><a href='#'>BOTTOMS</a></ListInlineItem>
                <ListInlineItem className='menu-item'><a href='#'>OUTERWEAR</a></ListInlineItem>
                <ListInlineItem className='menu-item'><a href='#'>SALE</a></ListInlineItem>
                <ListInlineItem className='menu-item'><a href='#'>SIZE CHART</a></ListInlineItem>
                <ListInlineItem className='menu-item'><a href='#'>ABOUT US</a></ListInlineItem>
            </List>
            <div className='search-item'>
                <List type="inline" className='icon-list'>
                    <ListInlineItem className='icon-item loupe'><a href='#'><HiSearch color="black" size="1.2em"/></a></ListInlineItem>
                    <ListInlineItem className='icon-item bag'><a href='#'><HiOutlineShoppingBag color="black" size="1.2em"/></a></ListInlineItem>
                    {/* <ListInlineItem className='icon-item loupe'><a href='#'><img className='loupe' src={loupe} width={20}/></a></ListInlineItem>
                    <ListInlineItem className='icon-item bag'><a href='#'><img className='bag' src={bag} width={20}/></a></ListInlineItem> */}
                </List>
            </div>
        </div>
        
    </div>
  );
}

export default Header;