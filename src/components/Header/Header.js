//ADD LINK a href
//Chưa responsive cho menu
//xem lại useState
//Chưa add to bag
import React, { useState, Component } from 'react';
import logo from '../../images/logoBupo.png';
import { List, ListInlineItem } from 'reactstrap';
import { HiSearch } from 'react-icons/hi';
import { IoCartOutline} from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CartContext } from '../../contexts/Cart';
import {Link} from "react-router-dom";


const MenuIcon = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    return(
    <div className="icon-menu">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className='btn-group-dropdown'>
            <DropdownToggle color='none' className='btn-dropdown'>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </DropdownToggle>
            <DropdownMenu className='items-menu-box'>
                <DropdownItem className='menu-item'><a href='#'>TOPS</a></DropdownItem>
                <DropdownItem className='menu-item'><a href='#'>BOTTOMS</a></DropdownItem>
                <DropdownItem className='menu-item'><a href='#'>OUTERWEAR</a></DropdownItem>
                <DropdownItem className='menu-item'><a href='#'>SALE</a></DropdownItem>
                <DropdownItem className='menu-item'><a href='#'>Sizechart</a></DropdownItem>
                <DropdownItem className='menu-item'><a href='#'>about us</a></DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    </div>
    );
};

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='Header-top'>
                    <a href='#' target="_blank">Login</a>
                    <a href='#'  target="_blank">Register</a>
                </div>
                <div className='Header-bottom'>
                    {/*-------------- DROPDOWN ------------ */}
                    <MenuIcon/>

                    <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
                    <List type="inline" className='menu-list'>
                        <ListInlineItem className='menu-item'><Link to='/top'>TOPS</Link></ListInlineItem>
                        <ListInlineItem className='menu-item'><Link to='/bottom'>BOTTOMS</Link></ListInlineItem>
                        <ListInlineItem className='menu-item'><Link to='/outerwear'>OUTERWEAR</Link></ListInlineItem>
                        <ListInlineItem className='menu-item'><Link to='/top'>SALE</Link></ListInlineItem>
                        <ListInlineItem className='menu-item'><Link to='/top'>SIZE CHART</Link></ListInlineItem>
                        <ListInlineItem className='menu-item'><Link to='/top'>ABOUT US</Link></ListInlineItem>
                    </List>
                    <div className='search-item'>
                        <List type="inline" className='icon-list'>
                            <input type='text' className='search-text-box' placeholder='Search...' />
                            <ListInlineItem className='icon-item loupe'><a href='#'><HiSearch color="black" size="1.2em" /></a></ListInlineItem>
                            <ListInlineItem className='icon-item cart'><a href='#'>
                                <IoCartOutline color="black" size="1.2em" /></a>
                                <CartContext.Consumer>
                                    {({product})=><span className="amount-product">{product.length}</span>}
                                </CartContext.Consumer>
                            </ListInlineItem>
                            
                        </List>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;