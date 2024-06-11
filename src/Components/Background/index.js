import React from 'react';
import './styles.css';


const Background = ({children}) => {
    return (
        <div className="background">
            {children}
        </div>
    );
}

export default Background;