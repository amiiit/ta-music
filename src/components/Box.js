import React from 'react';
import './box.css';

const Box = ({children}) => (
    <div className='box'>
        {children}
    </div>
);
export default Box