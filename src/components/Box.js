import React from 'react';
import './box.css';

const Box = ({children, className}) => (
    <div className={`${className} box`}>
        {children}
    </div>
);
export default Box