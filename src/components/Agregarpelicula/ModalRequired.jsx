// modalrequired.jsx  
import React from 'react'; 


const ModalRequired = ({ show, handleClose, children }) => {  
  if (!show) return null;  

  return (  
    <div className="modal">  
      <div className="modal-content">  
        <button className="close-btn" onClick={handleClose}>  
          X  
        </button>  
        {children}  
      </div>  
    </div>  
  );  
};  

export default ModalRequired;