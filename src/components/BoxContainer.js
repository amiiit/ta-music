import React from 'react';
import './box-container.css';

const BoxContainer = ({children}) => (
    <div className='box-container'>
        {children}
    </div>
);

export default BoxContainer