import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { getRecipesByTags } from '../../services/recipe.service';
import { useEffect } from 'react';


const Menu = () => {

  const [userTags, setUserTags] = useState(["vegetarian"]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [userMeals, setUserMeals] = useState([]);

  useEffect(() => {
    // Realiza la solicitud al backend al cargar el componente
    const fetchUserRecipes = async () => {
      try {
        // Hacer la solicitud con los tags del usuario
        const recipes = await getRecipesByTags(userTags);
        console.log('Recetas del usuario:', recipes);
        setUserRecipes(recipes);
        const filteredRecipesByMeal = recipes.reduce((acc, recipe) => {
          const existingTime = acc.find(item => item.time === recipe.time);

          if (existingTime) {
            existingTime.recipes.push(recipe);
          } else {
            acc.push({ time: recipe.time, recipes: [recipe] });
          }

          return acc;
        }, []);
        console.log(filteredRecipesByMeal);
        setUserMeals(filteredRecipesByMeal);

      } catch (error) {
        console.error("Error al obtener las recetas:", error);
        // Manejar el error según tus necesidades
      }
    };

    // Verifica si hay tags del usuario antes de hacer la solicitud
    if (userTags.length > 0) {
      fetchUserRecipes();
    }
    fetchUserRecipes();

  }, [userTags]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const meals = [
    { title: 'Desayuno', dishes: ['Tostada de rúcula con huevo', 'Pan con tomate', 'Tostada de fresas con crema', 'Batido de espinacas', 'Tortitas de coco y cacahuate', 'Plato extra 1', 'Plato extra 2'] },
    { title: 'Almuerzo', dishes: ['Ensalada de quinoa con pollo', 'Plato extra 3', 'Plato extra 4', 'Tostada de fresas con crema', 'Batido de espinacas', 'Tortitas de coco y cacahuate', 'Plato extra 1', 'Plato extra 2'] }
  ];
  const MealTimeSection = ({ mealTime, index }) => {
    <div key={index} className="mb-10">
      <h2 className="text-white text-xl mb-6">{mealTime.time}</h2>

      <Slider {...settings}>
        {mealTime.recipes.map((recipe, index) => (
          <div key={index}>
            <Card recipe={recipe} />
          </div>
        ))}
      </Slider>
    </div>;
  };

  const Card = ({ recipe }) => {
    return (
      <div className=" w-48 h-60 bg-white rounded-lg mt-2">
        <img
          className="h-24 w-full object-cover mb-2 rounded-lg"
          src={recipe.image}
          alt={recipe.title}
        />
        <h2 className="font-bold mt-2">{recipe.title}</h2>
        <p className="text-sm">{`Tiempo de cocción ${recipe.cookinTime}`}</p>
        <p className="mt-2 text-blue-900 underline cursor-pointer">Detalles</p>
      </div>
    );
  };
  

  return (



    <div className="bg-slate-800 relative">

      {sidebarOpen && <div className="absolute inset-0 bg-white opacity-50 z-30"></div>}


      <div className=" p-28">
        <img className=" absolute top-8 left-8 h-10 w-10 cursor-pointer z-50" src="/menu.png" alt="Menu" onClick={() => setSidebarOpen(!sidebarOpen)} />

        {sidebarOpen && (
          <div className="absolute top-0 left-0 w-64 h-full bg-slate-800 p-4 z-40">
            {/* Aquí puedes agregar el contenido de tu barra lateral */}
            <div className='p-5 mt-16  text-white space-y-4'>
              <Link to="/">
                <p>Cerrar Sesion</p>
              </Link>
              <p>Preferencias</p>
              <p>Síguenos</p>
              <div className="flex justify-center space-x-4 p-3 ">
                <img className="w-8 h-8" src="/instagram.png" alt="Instagram" />
                <img className="w-8 h-8" src="/gorjeo.png" alt="Twitter" />
                <img className="w-8 h-8" src="/facebook.png" alt="Facebook" />
              </div>
            </div>
          </div>
        )}

        
      <div>
        <h2 className='text-white text-center'>Recetas!</h2>
        <ul>
          {userRecipes.map((data) => (
            <li className='text-violet-950 text-center p-2 bg-white m-4 rounded-2xl' key={data._id}>{data.title}
              <img className="h-24 w-full object-cover mb-2 rounded-lg" 
              src={data.image}/>
              <p>time: {data.cookinTime} minutes</p>

            </li>
            
          ))}
        </ul>
      </div>

      </div>

    </div>
  );
};

export default Menu;
