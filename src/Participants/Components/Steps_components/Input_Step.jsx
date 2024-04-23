import { useState } from "react";
import styled from "styled-components";

const Input_Step = ({id, label, type, maxCaracter, value}) => {
  const [remainingCharacters, setRemainingCharacters] = useState(maxCaracter);
  const handleInputChange = async(e) => {
    const { name, value } = e.target;

      setRemainingCharacters(maxCaracter - value.length);
   
  };

  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        defaultValue={value}
        onChange={handleInputChange}
      />
      {maxCaracter && 
        <p className="charactersLeft">
        {remainingCharacters} caractères restants
      </p>}
    </div>
  );
};

const Input = styled.div` 
    display: flex;
    flex-direction: column;
    input,
    textarea {
      all: initial;
      padding: 10px 10px;
      border: 1px solid #edf1f2;
    }
    .charactersLeft {
      text-align: end;
      color: #b3b5b6;
      font-size: 17px;
    }
  

` 

export default Input_Step