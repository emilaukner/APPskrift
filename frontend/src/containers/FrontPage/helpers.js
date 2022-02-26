export const getFilteredRecipes = (recipeData, meal, estimate, cousine, otherCategories) => recipeData.filter(recipe => {
    if (!meal.lengh && !estimate.lengh && !cousine.lengh && !meal.lengh && !otherCategories.lengh ) return true;
    return (recipe.meal.some(spesificMeal => meal.includes(spesificMeal)) 
            || recipe.estimate.some(spesificEstimate => estimate.includes(spesificEstimate)) 
            || recipe.cousine.some(spesificCousine => cousine.includes(spesificCousine)) 
            || recipe.otherCategories.some(spesificOtherCategories => otherCategories.includes(spesificOtherCategories))
    );
})