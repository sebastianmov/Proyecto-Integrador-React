// import { useState } from "react";
import ToRegisterButton from "../general/buttons/ToRegisterButton";
import GeneralButton from "../general/buttons/GeneralButton";
import EmailTextInput from "../general/inputs/EmailTextInput";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import PasswordInput from "../general/inputs/PasswordInput";
import logInFunction from "../../utils/logIn/logInFunction";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userFeature";
// import validator from "validator";

// Solo falta que Alan corrija la API

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  
  
   const getUserData = async (data) => {
    console.log(data);
    const userData = await logInFunction(data);
    dispatch(setUser(userData));
    
   };

  return (
    <>
      <h1 className="mb-3 text-center">Bienvenido a Ferro</h1>
      <h2 className="mb-3 text-center">Ingresa con</h2>
      {/* Logos de Google y Facebook */}
    <div className="d-flex justify-content-center mb-3">
      <div className="me-3">
        <FaGoogle size={80} color="green" /> {/* Ajusta el tamaño según tus preferencias */}
      </div>
      <div className="ms-5">
        <FaFacebook size={80} color="blue" /> {/* Ajusta el tamaño según tus preferencias */}
      </div>
    </div>
    <h4 className="mb-1 text-center">ó</h4>
      <form
        className="w-auto h-auto pb-md-0 d-flex flex-column"
        onSubmit={handleSubmit(getUserData)}
      >
        <EmailTextInput
          register={register}
          placeholderText={"alan@mail.com"}
          isRequired={true}
          labelText={"email"}
          id={"login-form-email"}
          nameText={"email"}
          />

          <PasswordInput
          placeholderText={"Introduzca aquí su contraseña"}
          labelText={"Contraseña"}
          id={"login-form-password"}
          isRequired={true}
          nameText={"password"}
          register={register}
          />
          <GeneralButton
          buttonText={"Ingresar"}
          buttonColorClass={"bg-primary text-white my-2 mt-5 btn-block"}
    />
      </form>
      <div className="d-flex flex-column align-items-center justify-content-center pb-5">
    <ToRegisterButton
      buttonTextp1={`¿No tienes una cuenta?`}
      buttonTextp2={`¡Registrate! Es gratis`}
      buttonColorClass={"bg-black text-white my-2 btn-block"}
    />
    <GeneralButton
      buttonText={"¿Olvidaste tu contraseña?"}
      buttonColorClass={"bg-light text-black my-2 btn-block"}
    />
  </div>
    </>
  );
};

export default LoginForm;
