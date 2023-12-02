import React from 'react';
import 'tailwindcss/tailwind.css';

const RecipeCard = () => {
  return (


    <div className="flex flex-col min-h-screen">

      <div className="bg-my-yellow p-6 w-full flex justify-between  ">
        <div></div>
        <h1 className="text-4xl font-serif  text-black">MYMEAL</h1>
        <button className="font-serif  font-normal text-2xl text-black pr-4 text-right">Atras</button>
      </div>
      <div className="flex items-center justify-center">
        <div className=" max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white text-black">
          <div className=" px-6 pt-4 pb-2 flex justify-center bg-slate-800 p-4">
            <span className="text-yellow-400 text-center">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-gray-400">★</span>
            <span className="text-gray-400">★</span>
            <span className="text-gray-400">★</span>
          </div>
          <img className="w-full" src="/tostada.jpg" alt="Tostada de aguacate con huevo" />
          <div className="px-6 pt-4  flex justify-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">10 Min</span>
          </div>
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2 text-center">Tostada de aguacate con huevo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
