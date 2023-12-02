import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";

function MediumForm({formData, setFormData}) {
    const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

 const onSubmit = (data) => console.log(data);

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8 space-y-6 bg-gray-50 p-6 border border-transparent rounded-xl"'>
          <div className="font-Montserrat text-lg">
            <label>¿Qué tipo de arroz consumes usualmente?</label>
            <div className="flex flex-col space-y-2">
              <button
                type="button"
                onClick={() => {
                  setValue("rice", "whiteRice");
                  setFormData({ ...formData, rice: "whiteRice" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.rice === "whiteRice"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                Arroz blanco
              </button>

              <button
                type="button"
                onClick={() => {
                  setValue("rice", "BrownRice");
                  setFormData({ ...formData, rice: "BrownRice" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.rice === "BrownRice"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                Arroz integral
              </button>

              <button
                type="button"
                onClick={() => {
                  setValue("rice", "withoutRice");
                  setFormData({ ...formData, rice: "withoutRice" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.rice === "withoutRice"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                No consumo arroz
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MediumForm;