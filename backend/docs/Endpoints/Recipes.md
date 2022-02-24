# /recipes

## GET
Returns every recipe in the database in the format:
```json
[
    {
        "recipeId": "b0cc4c25-5c38-4f87-a391-ed310a590d73",
        "title": "Test rec2",
        "difficulty": "E",
        "estimate": 10,
        "ingredients": "Banan",
        "steps": "1. Spis",
        "dateMade": "2022-02-10",
        "category": null,
        "publishedBy": null
    },
    {
        "recipeId": "71f77247-fe60-4452-9ed6-8ff6a979c4be",
        "title": "Test rec3",
        "difficulty": "E",
        "estimate": 10,
        "ingredients": "Banan",
        "steps": "1. Spis",
        "dateMade": "2022-02-10",
        "category": null,
        "publishedBy": null
    }
]
```


## POST
Takes in the following body and saves as a recipe:
```json
{
	"title": "Test rec3",
	"difficulty": "E",
	"estimate": 10,
	"ingredients": "Banan",
	"steps": "1. Spis",
	"category": "",
	"publishedBy": ""
}
```

## DELETE
At the following endpoint: `recipes/{RECIPE_ID}/` send a delete request and the recipe will be deleted

# Detail view at /recipes/{RECIPE_ID}

## GET
Shows the datails about the given recipe

