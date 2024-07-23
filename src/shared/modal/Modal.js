import React, { useEffect } from 'react';
import './Modal.scss';

const Modal = ({ active, setActive, children }) => {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [active]);


    return (
        <div className={`modal ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
