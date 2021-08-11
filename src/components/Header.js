//ADD LINK a href
//Chưa responsive cho menu
//xem lại useState
//Chưa add to bag
import React, { useState, Component } from 'react';
import logo from '../images/logoBupo.png';
import { List, ListInlineItem } from 'reactstrap';
import { HiOutlineShoppingBag, HiSearch } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
    // constructor(){
    //     super();
    //     this.state={
    //         amount: 0
    //     }
    //     this.addToBag = this.addToBag.bind(this);
    // }
    // addToBag(){
    //     this.setState({
    //         amount: this.state.amount++
    //     });
    // }
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

                    <a href='#'><img className="logo" src={logo} alt="logo" /></a>
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
                            <input type='text' className='search-text-box' placeholder='Search...' />
                            <ListInlineItem className='icon-item loupe'><a href='#'><HiSearch color="black" size="1.2em" /></a></ListInlineItem>
                            <ListInlineItem className='icon-item bag'><a href='#'><HiOutlineShoppingBag color="black" size="1.2em" /></a></ListInlineItem>
                            {/* <ListInlineItem className='icon-item loupe'><a href='#'><img className='loupe' src={loupe} width={20}/></a></ListInlineItem>
                    <ListInlineItem className='icon-item bag'><a href='#'><img className='bag' src={bag} width={20}/></a></ListInlineItem> */}
                        </List>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;