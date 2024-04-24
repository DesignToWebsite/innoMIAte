import { useState } from "react";

const Textarea_Step = ({
  id,
  label,
  type,
  maxCaracter = false,
  value,
  setDataCard = false,
}) => {
  const [remainingCharacters, setRemainingCharacters] = useState(maxCaracter);
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    if (maxCaracter) setRemainingCharacters(maxCaracter - value.length);
    if (setDataCard)
      setDataCard((prev) => ({
        ...prev,
        description: value,
      }));
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
      {maxCaracter && (
        <p className="charactersLeft">
          {remainingCharacters} caractères restants
        </p>
      )}
    </div>
  );
};

export default Textarea_Step;
