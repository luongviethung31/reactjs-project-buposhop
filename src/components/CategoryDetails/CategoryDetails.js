import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './CategoryDetails.css';
import Products from '../Products/Products';

function sortProducts(key, direction) {
    return function (a, b) {
        var varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        var varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        if(key ==='cost'){
            let a1 = a[key].replace("$","");
            let b1 = b[key].replace("$","");
            varA = parseFloat(a1,10);
            varB = parseFloat(b1,10);
        }

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        
        return (
            (direction == 'desc') ? (comparison * -1) : comparison
        );
    }
}

function CategoryDetails(props) {
    
    const { title, allProducts } = props;
    const [products, setProducts] = useState(allProducts);
    const [sortTitle, setSortTitle] = useState(null);
    const dropdown = React.useRef(null);
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    function handleClick(e) {
        var temProduct = [...allProducts];
        temProduct.sort(sortProducts(e.target.name, e.target.value));   
        //console(this.innerHTML);
        // console.log(dropdown);
        // const a =  e.target.innerHTML;
        // ReactDOM.render(a,document.getElementById('1'));
        setProducts(temProduct);
            // setSortTitle(e.target.innerHTML);
    }
    // useEffect(()=>{
    //     this.rootElm = ReactDOM.findDOMNode(this);
    //     this.SlidesElement = this.rootElm.querySelector(".dropdown-button");
    //     return ()=>{};
    // },[]);
    return (
        <div className='categoryDetails-box'>
            <div className='container'>
                <div className='sort-box'>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className='dropdown-area'>
                        <DropdownToggle caret id='1' className='dropdown-button' ref={dropdown}>
                            Sort by:
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem  name='cost' value ='asc' className='menu-item' onClick={handleClick.bind(this)}>Price <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></DropdownItem>
                            <DropdownItem  name='cost' value='desc' className='menu-item' onClick={handleClick.bind(this)}>Price <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></DropdownItem>
                            <DropdownItem  name='name' value='asc' className='menu-item' onClick={handleClick.bind(this)}>Product Name <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></DropdownItem>
                            <DropdownItem  name='name' value='desc' className='menu-item' onClick={handleClick.bind(this)}>Product Name <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <div className='title-type-product'>
                        <h3>All {title} products</h3>
                    </div>
                </div>
                <div className='all-product'>
                    <Products products={products} />
                </div>
            </div>
        </div>
    );
}

export default CategoryDetails;