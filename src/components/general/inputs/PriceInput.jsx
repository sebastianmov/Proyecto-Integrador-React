import "../../../styles/general/inputs/TextInput.css";
import { useState } from "react";

const PriceInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
  register,
}) => {
  const [fillState, setFillState] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (e) => {
    // Check if price is valid
    if (
      (e.target.value !== "" && e.target.value.match(/^[0-9]+$/)) ||
      isRequired === false
    ) {
      setFillState(true);
    } else {
      setFillState(false);
      setAlertMessage("Introduzca un precio válido");
    }
  };

  return (
    <div className="text-input d-flex flex-column-reverse">
      <p className={fillState ? "d-none" : "text-danger m-0"}>{alertMessage}</p>
      <input
        type="number"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        onChange={(e) => {
          // Only allow numbers
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
          showAlertMessage(e);
        }}
        {...register(nameText)}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
    </div>
  );
};

export default PriceInput;
