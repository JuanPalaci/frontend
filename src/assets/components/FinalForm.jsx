import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/recipe.service";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function FinalForm() {
  const location = useLocation();
  const [tags, setTags] = useState([]);
 
  useEffect(() => {
    // Verificar si la propiedad 'state' existe en la ubicación
    if (location.state && location.state.tags) {
      setTags(location.state.tags);
    }
  }, [location]);
  
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  
  // Obtiene navigate de useNavigate
  const navigate = useNavigate();
    
  const [finalobject,setfinalobject] = useState({});

console.log("finalform:", FinalForm);
  const handleRegister = async (FormData) =>{
    setfinalobject({FormData,tags});
    
    const result = await registerUser(finalobject);
    if (result === true) {
      navigate('/');
    } else {
      alert('Error al iniciar sesión: ' + result);
    }
  }

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
            Una última cosa
          </p>
        </div>

        <div>
          <p className="font-Montserrat mt-2 text-md text-gray-600">
            Crea un nombre de usuario y una contraseña:
          </p>
        </div>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mt-8 space-y-6 bg-gray-50 p-6 border border-transparent rounded-xl ">
            <div>
              <label className="font-Montserrat">Nombre de usuario</label>
              <input
                type="text"
                {...register("username", {
                  required: "El campo usuario es requerido",
                })}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>

            <div>
              <label className="font-Montserrat">Email de usuario</label>
              <input
                type="text"
                {...register("email", {
                  required: "El campo email es requerido",
                })}
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              />
              {errors.email && <p>{errors.email.message}</p>}
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

export default FinalForm;
