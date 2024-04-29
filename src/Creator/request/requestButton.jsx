import React, { useState } from 'react';

const MyButton = ({ color }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const buttonStyle = {
        margin: '20px 1px',
        padding: '10px 20px',
        borderRadius: '4px',
        backgroundColor: isClicked ? color : color,
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        border: 'none',
        outline: 'none'
    };

    return (
     
            <button 
                style={buttonStyle}
                onClick={handleClick}>
                {isClicked ? 'Request Sent' : 'Send Request'}
        </button>
        
      
    );
};

export default MyButton;
