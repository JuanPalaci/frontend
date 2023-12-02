import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/recipe.service";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  const {
    register,
    handleSubmit: useFormHandleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
    // Obtiene navigate de useNavigate
    const navigate = useNavigate();
    
  const handleLogin = async (formData) => {
    const result = await loginUser(formData);
    if (result === true) {
      navigate('/UserPage');
    } else {
      alert('Error al iniciar sesión: ' + result);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <div className="bg-my-gray p-6 w-full flex justify-between items-center">
        <div></div>
        <h1 className="text-4xl font-Roboto text-white text-center">MYMEAL</h1>
        <Link to ="/">
        <button className="font-Montserrat font-normal text-xl text-white pr-4">
          INICIO
        </button>
        </Link>
      </div>

      <div className="max-w-2xl w-full  mx-auto mt-8 py-12 px-6">
        <div>
          <p className="font-Montserrat mt-2 flex items-start text-3xl text-my-gray ">
            ¡Bienvenid@!
          </p>
        </div>

        <div>
          <p className="font-Montserrat mt-2 text-md text-gray-600">
            Ingresa tu correo y contraseña para iniciar sesión:
          </p>
        </div>

        <form onSubmit={useFormHandleSubmit(handleLogin)}>
          <div className="mt-8 space-y-6 bg-gray-50 p-6 border border-transparent rounded-xl ">
            <div>
              <label className="font-Montserrat">UserName</label>
              <input
                type="text"
                {...register("identifier", {
                  required: "El campo correo es requerido",
                })}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              />
              {errors.identifier && <p>{errors.identifier.message}</p>}
            </div>


            <div>
              <label className="font-Montserrat">Contraseña</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                })}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              />
            </div>
            {errors.password?.type === "required" && (
              <p>Por favor introduzca su contraseña</p>
            )}
          </div>
          

          
          <p className="font-Montserrat mt-4 text-center text-md text-gray-600">
            ¿No tienes una cuenta? Ven y completa el siguiente formulario:
            <Link className="font-medium text-my-gray hover:text-indigo-700" to="/PrincipalForm"> 
            {" EMPEZAR"}
            </Link>
          </p>
          

          <div className="flex justify-center md:justify-between items-center">
            <div></div>
            <div>
              
              <input
                type="submit"
                className=" font-Montserrat mt-8 py-2 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-my-orange hover:bg-my-orange-hover"
                value={"INICIAR SESIÓN"}
              />
              
          
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Login;
