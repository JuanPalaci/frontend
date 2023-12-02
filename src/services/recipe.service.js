import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`;

export const getRecipesByTags = async (tags) =>{
    try {
        console.log('Tags en getRecipesByTags:', tags); 
        
        const response = await axios.post(`${BASE_URL}/recipes/bytags`,  {
             tags: tags , 
        } );
        console.log('Respuesta del servidor:', response.data);
        const recipes = response.data.data;
        return recipes;
      } catch (error) {
        console.error('Error al obtener recetas por tags:', error);
        throw error;
      }   
};

export const loginUser = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, formData);
      const token = response.data.token;
      
      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user)); 
      localStorage.setItem('token', token);
      // Devuelve true si la autenticación es exitosa
      return true;
  
   
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      return error;
    }
};

export const registerUser = async (formData) =>{
    try {
        
        
        const response = await axios.post(`${BASE_URL}/auth/register`,formData,{
          headers: {
            "Content-Type": "application/json"
        }
        } );
        // Devuelve true si el registro es exitoso
        return response.data;
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        return error;
    }
}

