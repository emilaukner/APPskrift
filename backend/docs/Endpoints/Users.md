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