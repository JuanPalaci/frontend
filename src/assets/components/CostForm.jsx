import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";

function CostForm({formData, setFormData}) {

    const {
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm();
    
     const onSubmit = (data) => console.log(data);

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-8 space-y-6 bg-gray-50 p-6 border border-transparent rounded-xl 
            font-Montserrat text-lg '>

                <label>¿Consideras importante el precio de los ingredientes?</label>

                <button
                  type="button"
                  onClick={() => {
                    setValue("cost", "expensive");
                    setFormData({ ...formData, cost: "expensive" });
                  }}
                  className={` bg-white w-full px-4 py-2 border ${
                    formData.cost === "expensive"
                      ? "border-blue-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  No quiero que el coste sea una limitante
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setValue("cost", "cheap");
                    setFormData({ ...formData, cost: "cheap" });
                  }}
                  className={` bg-white w-full px-4 py-2 border ${
                    formData.cost === "cheap"
                      ? "border-blue-600"
                      : "border-gray-300"
                  } rounded-md`}
                >
                  Prefiero ahorrar dinero 
                </button>



              </div>

              
              
            


           
            

        </form>
    </div>
  )
}

export default CostForm