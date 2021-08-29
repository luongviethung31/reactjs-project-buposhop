import React, { Component } from 'react';
import './Subject.css';
class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { tittle, children } = this.props;
        return (
            <div className='wrapper-title'>
                <div className='container'>
                    <h3 className='header-tittle'>{tittle}</h3>
                    {children}
                </div>
            </div>
        );
    }
}

export default Wrapper;