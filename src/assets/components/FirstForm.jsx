import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Form({ formData, setFormData }) {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 space-y-6 bg-gray-50 p-6 border border-transparent rounded-xl">

            <div className="font-Montserrat text-lg">
              <label>¿Tus dietas incluyen carne?</label>
              <div className="flex flex-col space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setValue("diet", "allMeat");
                    setFormData({ ...formData, diet: "allMeat" });
                  }}
                  className={` bg-white w-full px-4 py-2 border ${
                    formData.diet === "allMeat"
                      ? "border-blue-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  Sí, cualquier tipo de carne
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setValue("diet", "RedMeat");
                    setFormData({ ...formData, diet: "RedMeat" });
                  }}
                  className={` bg-white w-full px-4 py-2 border ${
                    formData.diet === "RedMeat"
                      ? "border-blue-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  Solo carne roja
                </button>


                <button
                  type="button"
                  onClick={() => {
                    setValue("diet", "WhiteMeat");
                    setFormData({ ...formData, diet: "WhiteMeat" });
                  }}
                  className={` bg-white w-full px-4 py-2 border ${
                    formData.diet === "WhiteMeat"
                      ? "border-blue-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  Solo carne blanca
                </button>


                <button
                  type="button"
                  onClick={() => {
                    setValue("diet", "noMeat");
                    setFormData({ ...formData, diet: "noMeat" });
                  }}
                  className={` bg-white w-full px-4 py-2 border ${
                    formData.diet === "noMeat"
                      ? "border-blue-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  No consumo ningún tipo de carne
                </button>
              </div>
              
            </div>
          </div>
        </form>
      
    </div>
  );
}

export default Form;
