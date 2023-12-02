import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <div>
        <p className="bg-my-yellow p-6 text-center text-4xl font-serif text-my-gray">
          MYMEAL
        </p>
      </div>

      {/* Contenedor de la imagen y el texto */}
      <div className="relative w-full h-80 sm:h-90 overflow-hidden mx-auto">
        <img
          src="/image5.jpg"
          className="w-full h-full object-cover rounded-b-full"
          alt="Descripción de la imagen"
        />

        {/* Texto y botón posicionados encima de la imagen */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center w-80vw sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Alimentación saludable para estudiantes

          </p>
          {/* Botón de Iniciar Sesión */}
          <div className="text-center mt-4">
          <Link to="/Login"> 
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-80vw sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Iniciar sesión
            </button>
            </Link>
         
          </div>
        </div>
      </div>


      {/* Rombos - Filas Izquierda y Derecha */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 mx-4 sm:mx-20">
        {/* Rombo 1 - Fila Izquierda */}
        <div className="mb-8 sm:mb-0 flex flex-col items-center">
          <div
            className="w-16 h-16 bg-green-300 transform rotate-45 p-4 sm:p-9 shadow-md relative overflow-hidden rounded-xl mb-2"
            style={{
              backgroundImage: 'url("/plato.png")',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          {/* Texto centrado debajo del rombo */}
          <div className=" p-2 text-sm sm:text-base  lg:text-xl">
            Menú
          </div>
        </div>
        <div className="mb-8 sm:mb-0 flex items-end">
          {/* Cuadro transparente con texto */}
          <div className="bg-transparent p-4 sm:p-9 border rounded-md">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Adaptarse a las preferencias y necesidades individuales de los
              usuarios. Esto mejora la experiencia del usuario, ya que pueden
              encontrar fácilmente los platos que les interesan
            </p>
          </div>
        </div>
        {/* Rombo 3 - Fila Derecha */}
        <div className="mb-8 sm:mb-0 flex flex-col items-center">
          <div
            className="w-16 h-16 bg-yellow-200 transform rotate-45 p-4 sm:p-9 shadow-md relative overflow-hidden rounded-xl mb-2"
            style={{
              backgroundImage: 'url("/presupuesto.png")',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          {/* Texto centrado debajo del rombo */}
          <div className=" p-2 text-sm sm:text-base  lg:text-xl">
            Rango
          </div>
        </div>
        <div className="mb-8 sm:mb-0 flex items-end">
          {/* Cuadro transparente con texto */}
          <div className="bg-transparent p-4 sm:p-9 border rounded-md">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Permite a los usuarios filtrar y seleccionar opciones de acuerdo
              a su capacidad económica. Evitando la necesidad de navegar por
              opciones que pueden estar fuera de su alcance financiero
            </p>
          </div>
        </div>
      </div>


      {/* Rombos - Filas Izquierda y Derecha */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 mx-4 sm:mx-20">
        {/* Rombo 2 - Fila Izquierda */}
        <div className="mb-8 sm:mb-0 flex flex-col items-center">
          <div
            className="w-16 h-16 bg-blue-300 transform rotate-45 mt-4 p-4 sm:p-9 shadow-md relative overflow-hidden rounded-xl mb-2"
            style={{
              backgroundImage: 'url("/reloj-de-arena.png")',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div className=" p-2 text-sm sm:text-base  lg:text-xl">
            Tiempo
          </div>
        </div>
        <div className="mb-8 sm:mb-0 flex items-end">
          {/* Cuadro transparente con texto */}
          <div className="bg-transparent p-4 sm:p-9 border rounded-md">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Conocer el tiempo estimado de preparación permite planificar sus
              comidas de acuerdo a los horarios y la disponibilidad de tiempo,
              pueden agregar recetas que se ajusten a su agenda
            </p>
          </div>
        </div>

        {/* Rombo 4 - Fila Derecha */}
        <div className="mb-8 sm:mb-0 flex flex-col items-center">
          <div
            className="w-16 h-16 bg-orange-300 transform rotate-45 mt-4 p-4 sm:p-9 shadow-md relative overflow-hidden rounded-xl mb-2"
            style={{
              backgroundImage: 'url("/ensalada.png")',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          {/* Texto centrado debajo del rombo */}
          <div className=" p-2 text-sm sm:text-base  lg:text-xl">
            Ingredientes
          </div>
        </div>
        <div className="mb-8 sm:mb-0 flex items-end ">


          {/* Cuadro transparente con texto */}
          <div className="bg-transparent p-4 sm:p-9 border rounded-md ">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl ">
              Proporcionan información clave
              sobre el valor nutricional de una
              comida. Esto es especialmente
              importante para las personas que
              tienen restricciones dietéticas,
              alergias alimentarias o que
              siguen dietas específicas.
            </p>
          </div>
        </div>
      </div>



      {/* Imagen Redonda Cortada a la Mitad (mitad superior) */}
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto overflow-hidden relative">
        {/* Máscara circular para cortar la imagen a la mitad */}
        <img
          src="/plato1.jpg"
          className="w-full h-auto sm:h-full object-cover rounded-t-full"
          alt="Descripción de la imagen"
        />
      </div>

      {/* Footer */}
      <footer className="bg-my-gray text-white p-5 text-left mt-auto flex flex-col items-left justify-left">
        {/* Texto "MY MEAL" encima de los iconos */}
        <p className="text-white text-lg font-serif mb-2">MY MEAL</p>

        {/* Iconos de Redes Sociales */}
        <div className="flex">
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-8 h-8 mr-4 cursor-pointer"
          />
          <img
            src="/gorjeo.png"
            alt="Twitter"
            className="w-8 h-8 mr-4 cursor-pointer"
          />
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-8 h-8 cursor-pointer"
          />
          <p className="text-white text-lx font-serif ml-auto text-right " >© 2023 MYMEAL</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;


