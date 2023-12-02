import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function FormCheck({ formData, setFormData }) {
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
            <label>¿Qué tipo de leches sueles consumir?</label>
            <div className="flex flex-col space-y-2">
              <button
                type="button"
                onClick={() => {
                  setValue("milk", "almdonMilk");
                  setFormData({ ...formData, milk: "almdonMilk" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.milk === "almdonMilk"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                Leche de almendras
              </button>

              <button
                type="button"
                onClick={() => {
                  setValue("milk", "soyMilk");
                  setFormData({ ...formData, milk: "soyMilk" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.milk === "soyMilk"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                Leche de soya
              </button>

              <button
                type="button"
                onClick={() => {
                  setValue("milk", "cowMilk");
                  setFormData({ ...formData, milk: "cowMilk" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.milk === "cowMilk"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                Leche de vaca
              </button>

              <button
                type="button"
                onClick={() => {
                  setValue("milk", "coconutMilk");
                  setFormData({ ...formData, milk: "coconutMilk" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.milk === "coconutMilk"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                Leche de coco
              </button>

              <button
                type="button"
                onClick={() => {
                  setValue("milk", "noMilk");
                  setFormData({ ...formData, milk: "noMilk" });
                }}
                className={` bg-white w-full px-4 py-2 border ${
                  formData.milk === "noMilk"
                    ? "border-blue-600"
                    : "border-gray-300"
                } rounded-md`}
              >
                No consumo leche
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormCheck;
