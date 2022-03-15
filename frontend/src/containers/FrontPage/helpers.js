/* 
Helper function that filters recipes based on categories. If no categories is selected all recepies is returned
If a category is selected, only recepies matching the categories is returned
*/

export const getFilteredRecipes = (recipeData, meal, estimate, difficulty ,cousine, otherCategories, searchTerm) => 
    
    recipeData
    .filter(recipe => {
        if(searchTerm === "") return true;
        if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase())) return true;
        return false; 
    })
    .filter(recipe => {
        if(!meal.length) return true; 
        return meal.includes(recipe.meal); 
    })
    .filter(recipe => {
        if(!estimate.length) return true; 
        return estimate.includes(recipe.estimate); 
    })
    .filter(recipe => {
        if(!difficulty.length) return true; 
        return difficulty.includes(recipe.difficulty); 
    })
    .filter(recipe => {
        if(!cousine.length) return true; 
        return cousine.includes(recipe.cousine); 
    })
    .filter(recipe => {
        if(!otherCategories.length) return true; 
        return recipe.categories.some(spesificOtherCategories => otherCategories.includes(spesificOtherCategories)); 
    });