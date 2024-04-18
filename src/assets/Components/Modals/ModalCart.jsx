import React from 'react';
import '../Modals/ModalCart.css'

const ModalCart = ({ isOpen, toggleOpen, children }) => {
    return (
        <div className={`overlay ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
            <div className='modal'>
                {children}
            </div>     
        </div>
    );
};

export default ModalCart;