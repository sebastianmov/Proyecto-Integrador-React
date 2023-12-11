import "../../../styles/general/inputs/TextInput.css";

const FrameDimensionsInput = ({
  placeholderText,
  labelText,
  id,
  isRequired,
  nameText,
}) => {
  return (
    <div className="text-input d-flex flex-column-reverse">
      <input
        type="text"
        placeholder={placeholderText}
        name={nameText}
        id={id}
        className="p-2"
        required={isRequired}
        minLength={"2"}
        onChange={(e) => {
          e.target.value = e.target.value.replace(/[^0-9.]/g, "");
          e.target.value = e.target.value.replace(/\.\./g, ".");
          e.target.value = e.target.value.replace(/^\./g, "");
        }}
      />
      <label htmlFor={id} className="mx-2 px-1">
        {labelText}
      </label>
      <span class="input-group-text">cm</span>
    </div>
  );
};

export default FrameDimensionsInput;
