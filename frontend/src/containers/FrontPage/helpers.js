/* 
Helper function that filters recipes based on categories. If no categories is selected all recepies is returned
If a category is selected, only recepies matching the categories is returned
*/

export const getFilteredRecipes = (recipeData, meal, estimate, difficulty ,cousine, otherCategories) => 
    recipeData.filter(recipe => {
        console.log(recipe.meal)
        if (!meal.length && !estimate.length && !difficulty.length && !cousine.length && !otherCategories.length ) return true;
        return (!meal.length ? true : meal.includes(recipe.meal)
                && !estimate.length ? true : estimate.includes(recipe.estimate) 
                && !difficulty.length ? true : difficulty.includes(recipe.difficulty)
                && !cousine.length ? true : cousine.includes(recipe.cousine) 
                && !otherCategories.length ? true : recipe.categories.some(spesificOtherCategories => otherCategories.includes(spesificOtherCategories))
        );
    }
);