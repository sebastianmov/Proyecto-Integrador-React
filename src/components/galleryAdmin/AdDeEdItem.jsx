import { useRef } from "react";
import GeneralButton from "../general/buttons/GeneralButton";
import PhoneInput from "../general/inputs/PhoneInput";
import NameInput from "../general/inputs/NameInput";
import FrameDimensionsInput from "../general/inputs/FrameDimensionsInput";


const GalleryAdminForm = () => {
  const GalleryAdminFormRef = useRef();


  return (
    <>
      <h1 className="mb-3">Agregar elemento</h1>
      <form
        ref={GalleryAdminFormRef}
        className="w-auto pb-5 pb-md-0"
        // onSubmit={}
      >
        <NameInput
          placeholderText={"Destellos del desierto"}
          isRequired={true}
          labelText={"Título de la obra"}
          id={"admin-gallery-form-title"}
          nameText={"admin-gallery-form-title"}
        />

        <FrameDimensionsInput
          placeholderText={"Alto de la obra en centímetros"}
          isRequired={true}
          labelText={"Altura"}
          id={"admin-gallery-form-height"}
          nameText={"admin-gallery-form-height"}
        />
        <FrameDimensionsInput
          placeholderText={"Ancho de la obra en centímetros"}
          isRequired={true}
          labelText={"Anchura"}
          id={"admin-gallery-form-width"}
          nameText={"admin-gallery-form-width"}
        />
        <GeneralButton
          buttonText={"Enviar"}
          buttonColorClass={"bg-black text-white"}
        />
      </form>
    </>
  );
};

export default GalleryAdminForm;
