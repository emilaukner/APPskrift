# /users

## GET
Returns every user stored in the database

Format:
```json
[
    {
        "userId": "56a79476-9ed0-4fe3-b7ec-cb2f5aa56a71",
        "admin": false,
        "username": "name",
        "password": "password",
        "email": "name@email.com",
        "darkMode": false,
        "favorites": []
    }
]
```

## POST
Stores a user to the database

Body format:
```json
{
    "admin": false, //Optional
    "username": "name",
    "password": "password",
    "email": "name@email.com", //Has to be unique
    "darkMode": false //Optional
}
```

## DELETE
At the following endpoint: `users/{USER_ID}/` send a delete request and the user will be deleted

# Detail view at /users/{USER_ID}/

## Saved recipes at
Can be found at endpoint: `users/{USER_ID}/saved/`

### GET
Retrieves a list of `recipeId`s that the current user has saved

### POST
Adds a recipe in the database to the saved recipes of the user

Format of body:

```json
{
	"id": RECIPE_ID
}
```

### DELETE
Removes a recipe in the database from the saved recipes of the user

Format of body:

```json
{
	"id": RECIPE_ID
}
```

## Favorite recipes at
Can be found at endpoint: `users/{USER_ID}/favorites/`

### GET
Retrieves a list of `recipeId`s that the current user has favorited

### POST
Adds a recipe in the database to the favorited recipes of the user

Format of body:

```json
{
	"id": RECIPE_ID
}
```

### DELETE
Removes a recipe in the database from the favorited recipes of the user

Format of body:

```json
{
	"id": RECIPE_ID
}
```
