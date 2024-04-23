import { useState } from "react";

const Textarea_Step = ({id, label, type, maxCaracter, value}) => {
  const [remainingCharacters, setRemainingCharacters] = useState(maxCaracter);
  const handleInputChange = async(e) => {
    const { name, value } = e.target;

      setRemainingCharacters(maxCaracter - value.length);
   
  };
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <textarea
        type={type}
        name={id}
        id={id}
        rows="4"
        cols="50"
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

export default Textarea_Step