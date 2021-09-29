import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import {
    Row, Col
} from 'reactstrap';
import classNames from 'classname';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './CategoryDetails.css';
import Products from '../Products/Products';

//SORT
function sortProducts(key, direction) {
    return function (a, b) {
        var varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        var varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        if (key === 'cost') {
            let a1 = a[key].replace("$", "");
            let b1 = b[key].replace("$", "");
            varA = parseFloat(a1, 10);
            varB = parseFloat(b1, 10);
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
    const [displayOption, setDisplayOption] = useState(listFilter);
    const dropdown = React.useRef(null);
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    function handleClickSort(e) {
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
    function handleClickTriangle(option){
        console.log(displayOption['sex']);
        let object = Object.create(null);
        let listFilterTemp = Object.create(null);
        let key = option.target.title;
        object[key] = !displayOption[key];
        Object.assign(listFilterTemp,displayOption,object);        
        setDisplayOption(listFilterTemp);
    }

    return (
        <div className='categoryDetails-box'>
            <div className='container_'>
                <div className='sort-box'>
                    <div className='title-type-product'>
                        <h3>All {title} products</h3>
                    </div>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className='dropdown-area'>
                        <DropdownToggle caret id='1' className='dropdown-button' ref={dropdown}>
                            SORT BY:
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem name='cost' value='asc' className='menu-item' onClick={handleClickSort.bind(this)}>Price <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></DropdownItem>
                            <DropdownItem name='cost' value='desc' className='menu-item' onClick={handleClickSort.bind(this)}>Price <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></DropdownItem>
                            <DropdownItem name='name' value='asc' className='menu-item' onClick={handleClickSort.bind(this)}>Product Name <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></DropdownItem>
                            <DropdownItem name='name' value='desc' className='menu-item' onClick={handleClickSort.bind(this)}>Product Name <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>

                </div>
                <div className='main-content'>
                    <div className='filter-col'>
                        <div className='filter-block'>
                            <div className='filter-title'>
                                <span className='filter-title-text'>FILTER</span>
                            </div>
                            <div className='filter-block-content'>
                                <div className='filter-option'>
                                    <div className='filter-option-item' title='sex' onClick={handleClickTriangle.bind(this)}>
                                        <div className='option-title' title='sex' >SEX</div>
                                        <div className={`${(displayOption['sex'])? "triangle-up": "triangle-down"}`} title='sex'></div>
                                    </div>
                                    <div className={`filter-option-contents ${(displayOption['sex'])? "activeFilter": "hidden"}`}>
                                        <div className='filter-option-list'>
                                            <ul className='list-option'>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='male' /><label for='male'>&nbsp;Male</label></a>
                                                </li>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='female' /><label for='female'>&nbsp;Female</label></a>
                                                </li>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='unisex' /><label for='unisex'>&nbsp;Unisex</label></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-option'>
                                    <div className='filter-option-item' title='fit' onClick={handleClickTriangle.bind(this)}>
                                        <div className='option-title' title='fit'>FIT</div>
                                        <div className={`${(displayOption['fit'])? "triangle-up": "triangle-down"}`} title='fit'></div>
                                    </div>
                                    <div className={`filter-option-contents ${(displayOption['fit'])? "activeFilter": "hidden"}`}>
                                        <div className='filter-option-list'>
                                            <ul className='list-option'>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='loose'/><label for='loose'>&nbsp;Loose</label></a>
                                                </li>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='standard'/><label for='standard'>&nbsp;Standard</label></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-option'>
                                    <div className='filter-option-item' title='extendedSize' onClick={handleClickTriangle.bind(this)}>
                                        <div className='option-title' title='extendedSize'>EXTENDED SIZES</div>
                                        <div className={`${(displayOption['extendedSize'])? "triangle-up": "triangle-down"}`} title='extendedSize'></div>
                                    </div>
                                    <div className={`filter-option-contents ${(displayOption['extendedSize'])? "activeFilter": "hidden"}`}>
                                        <div className='filter-option-list'>
                                            <ul className='list-option'>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='big-tall'/><label for='big-tall'>&nbsp;Big & Tall</label></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-option'>
                                    <div className='filter-option-item' title='price' onClick={handleClickTriangle.bind(this)}>
                                        <div className='option-title' title='price'>PRICE</div>
                                        <div className={`${(displayOption['price'])? "triangle-up": "triangle-down"}`} title='price'></div>
                                    </div>
                                    <div className={`filter-option-contents ${(displayOption['price'])? "activeFilter": "hidden"}`}>
                                        <div className='filter-option-list'>
                                            <ul className='list-option'>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='20'/><label for='20'>&nbsp; &lt; 20$</label></a>
                                                </li>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='20-50'/><label for='20-50'>&nbsp; 20$ - 50$</label></a>
                                                </li>
                                                <li className='list-option-item'>
                                                    <a href='#'><input type='radio' id='50'/><label for='50'>&nbsp; &gt; 50$</label></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-option'>
                                    <div className='filter-option-item' title='color' onClick={handleClickTriangle.bind(this)}>
                                        <div className='option-title' title='color'>COLOR</div>
                                        <div className={`${(displayOption['color'])? "triangle-up": "triangle-down"}`} title='color'></div>
                                    </div>
                                    <div className={`filter-option-contents ${(displayOption['color'])? "activeFilter": "hidden"}`}>
                                        <div className='filter-option-list'>
                                            <ul className='list-option color-filter'>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'black'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'white'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'red'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'#00a8f7'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'yellow'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'#1fb871'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'#ed8227'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'#ffc0cb'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'#808080'}}></button></a>
                                                </li>
                                                <li className='list-option-item color-list-item'>
                                                    <a href='#'><button className='color-item' style={{backgroundColor:'#af8f7b'}}></button></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-col'>
                        <div className='all-product'>
                            <Products products={products} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CategoryDetails;

const listFilter = {
    'sex': false,
    'fit': false,
    'extendedSize': false,
    'price': false,
    'color': false
}

// const listFilter = [{'sex': false},
//                     {'fit': false},
//                     {'extendedSize': false},
//                     {'price': false},
//                     {'color': false}]
// const listFilter = {'sex': false};