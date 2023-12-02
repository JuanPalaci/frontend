import React, { useState } from "react";
import FirstForm from "./FirstForm";
import FormCheck from "./SecondForm";
import FinalForm from "./FinalForm";
import CheckBoxForm from "./CheckBoxForm";
import MediumForm from "./MediumForm";
import CostForm from "./CostForm";
import { Link, NavLink } from "react-router-dom";

function PrincipalForm(getData= [] ) {
  const [page, setPage] = useState(0);

  

  const FormTitles = [
    "Empecemos",
    "Continuemos",
    "Mitad de marcha",
    "Pasos finales",
    "Pasos finales",
  ];

  const FormSubtitles = [
    "Cuéntanos acerca de ti",
    "Cuéntanos acerca de tus preferencias",
    "Cuéntanos acerca de tus preferencias",
    "Ingresa los detalles finales",
    "Ingresa los detalles finales",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <FormCheck formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <CheckBoxForm formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <MediumForm formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <CostForm formData={formData} setFormData={setFormData} />;
    }
  };

  const [formData, setFormData] = useState({
    diet: ["", ""],
    milk: ["", ""],
    cost: ["", ""],
    restriction: [],
    rice: ["", ""],
  });

  const tags = Object.keys(formData).map(category => formData[category]).flat();
  
  
  
  function checkPageCompletion(page, formData) {
    switch (page) {
      case 0:
        return formData.diet[0] !== "" && formData.diet[1] !== "";
      case 1:
        return formData.milk[0] !== "" && formData.milk[1] !== "";
      case 2:
        return formData.restriction && formData.restriction.length > 0;
      case 3:
        return formData.rice[0] !== "" && formData.rice[1] !== "";
      case 4:
        return formData.cost[0] !== "" && formData.cost[1] !== "";
      default:
        return true;
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-my-gray p-6 w-full flex justify-between items-center">
        <div></div>
        <h1 className="text-4xl font-Roboto text-white text-center">MYMEAL</h1>
        <Link to="/">
          <button className="font-Montserrat font-normal text-xl text-white pr-4">
            INICIO
          </button>
        </Link>
      </div>

      <div className="max-w-2xl w-full  mx-auto mt-8 py-12 px-6">
        <div>
          <p className="font-Montserrat mt-2 flex items-start text-3xl text-my-gray ">
            {FormTitles[page]}
          </p>
        </div>

        <div>
          <p className="font-Montserrat mt-2 text-lg text-gray-600">
            {FormSubtitles[page]}
          </p>
        </div>

        {PageDisplay()}

        <div className="flex justify-center md:justify-between items-center">
          <div></div>
          <div>
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className=" m-3 font-Montserrat mt-8 py-2 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-my-orange hover:bg-my-orange-hover"
            >
              ANTERIOR
            </button>

            <button
            

              onClick={() => {
                const isCurrentPageComplete = checkPageCompletion(
                  page,
                  formData
                );
                if (!isCurrentPageComplete) {
                  alert(
                    "Por favor completa todos los campos antes de continuar."
                  );
                  return;
                }
                if (page == FormTitles.length - 1) {
              
                  console.log(tags);
                  // Hace la magia JC
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }
            }
              className="font-Montserrat mt-8 py-2 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-my-orange hover:bg-my-orange-hover"
            >
              {page === FormTitles.length - 1 ? (
                <Link to={{ pathname: '/FinalForm', state: { tags } }}>LISTO</Link>
              ) : (
                "SIGUIENTE"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalForm;