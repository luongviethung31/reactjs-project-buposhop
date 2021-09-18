import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isVisible: false
        }
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    scrollToTop(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }

    componentDidMount() {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset>500 && this.state.isVisible===false){
                this.setState({
                    isVisible: true
                })
            }
            if(window.pageYOffset<=500 && this.state.isVisible===true){
                this.setState({
                    isVisible:false
                })
            }
        }
        )
    }

    render() {
        return (
            <div className="ScrollToTop" onClick={this.scrollToTop}>
            {
                this.state.isVisible && <div className="iconScrollToTop">
                    <FontAwesomeIcon icon={faCaretSquareUp} className='arrow-up-icon'/>
                </div>
            }
            </div>
        );
    }
}


export default ScrollToTop;