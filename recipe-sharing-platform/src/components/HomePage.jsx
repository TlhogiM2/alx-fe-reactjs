// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch data from local JSON file
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Error loading recipe data:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{recipe.title}</h2>
                            <p className="text-gray-600">{recipe.summary}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;