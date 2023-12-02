import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function CheckBoxForm({ formData, setFormData }) {
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
            <label>¿Posees alguna restricción alimentaria?</label>
            <div className="flex flex-col space-y-2">
              <label>
                <input
                  type="checkbox"
                  value="lactoseFree"
                  disabled={formData.restriction.includes("withoutRestriction")}
                  checked={formData.restriction.includes("lactoseFree")}
                  onChange={() => {
                    const newrestriction = formData.restriction.includes(
                      "lactoseFree"
                    )
                      ? formData.restriction.filter((m) => m !== "lactoseFree")
                      : [...formData.restriction, "lactoseFree"];
                    setValue("restriction", newrestriction);
                    setFormData({ ...formData, restriction: newrestriction });
                  }}
                />
                Libre de lácteos
              </label>

              <label>
                <input
                  type="checkbox"
                  value="noGluten"
                  disabled={formData.restriction.includes("withoutRestriction")}
                  checked={formData.restriction.includes("noGluten")}
                  onChange={() => {
                    const newrestriction = formData.restriction.includes(
                      "noGluten"
                    )
                      ? formData.restriction.filter((m) => m !== "noGluten")
                      : [...formData.restriction, "noGluten"];
                    setValue("restriction", newrestriction);
                    setFormData({ ...formData, restriction: newrestriction });
                  }}
                />
                No como gluten
              </label>

              <label>
                <input
                  type="checkbox"
                  value="lowSodium"
                  disabled={formData.restriction.includes("withoutRestriction")}
                  checked={formData.restriction.includes("lowSodium")}
                  onChange={() => {
                    const newrestriction = formData.restriction.includes(
                      "lowSodium"
                    )
                      ? formData.restriction.filter((m) => m !== "lowSodium")
                      : [...formData.restriction, "lowSodium"];
                    setValue("restriction", newrestriction);
                    setFormData({ ...formData, restriction: newrestriction });
                  }}
                />
                Bajo en sodio
              </label>

              <label>
                <input
                  type="checkbox"
                  value="integralFood"
                  disabled={formData.restriction.includes("withoutRestriction")}
                  checked={formData.restriction.includes("integralFood")}
                  onChange={() => {
                    const newrestriction = formData.restriction.includes(
                      "integralFood"
                    )
                      ? formData.restriction.filter((m) => m !== "integralFood")
                      : [...formData.restriction, "integralFood"];
                    setValue("restriction", newrestriction);
                    setFormData({ ...formData, restriction: newrestriction });
                  }}
                />
                Prefiero la comida integral
              </label>

              <label>
                <input
                  type="checkbox"
                  value="SugarFree"
                  disabled={formData.restriction.includes("withoutRestriction")}
                  checked={formData.restriction.includes("SugarFree")}
                  onChange={() => {
                    const newrestriction = formData.restriction.includes(
                      "SugarFree"
                    )
                      ? formData.restriction.filter((m) => m !== "SugarFree")
                      : [...formData.restriction, "SugarFree"];
                    setValue("restriction", newrestriction);
                    setFormData({ ...formData, restriction: newrestriction });
                  }}
                />
                Libre de azúcar
              </label>

              <label>
                <input
                  type="checkbox"
                  value="withoutRestriction"
                  checked={formData.restriction.includes("withoutRestriction")}
                  onChange={() => {
                    let newrestriction;
                    if (formData.restriction.includes("withoutRestriction")) {
                      newrestriction = formData.restriction.filter(
                        (m) => m !== "withoutRestriction"
                      );
                    } else {
                      newrestriction = ["withoutRestriction"];
                    }
                    setValue("restriction", newrestriction);
                    setFormData({ ...formData, restriction: newrestriction });
                  }}
                />
                No tengo ninguna restricción
              </label>

                  

            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckBoxForm;
