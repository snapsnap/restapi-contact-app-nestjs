# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
    "username" : "ian",
    "password" : "rahasia",
    "name" : "ian aditiawan"
}
```

Response Body (Success):

```json
{
    "data" : {
        "username" : "ian",
        "name" : "ian aditiawan"
    }
}
```

Response Body (Failed):

```json
{
    "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username" : "ian",
    "password" : "rahasia"
}
```

Response Body (Success):

```json
{
    "data" : {
        "username" : "ian",
        "name" : "ian aditiawan",
        "token" : "session_id_generated"
    }
}
```

Response Body (Failed):

```json
{
    "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body (Success):

```json
{
    "data" : {
        "username" : "ian",
        "name" : "ian aditiawan"
    }
}
```

Response Body (Failed):

```json
{
    "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :

```json
{
    "password" : "rahasia", // optional, if want to change password
    "name" : "ian aditiawan" // optional, if want to change name
}
```

Response Body (Success):

```json
{
    "data" : {
        "username" : "ian",
        "name" : "ian aditiawan"
    }
}
```

Response Body (Failed):

```json
{
    "errors" : "Failed to update"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
- Authorization : token

Response Body (Success):

```json
{
    "data" : true
}
```

Response Body (Failed):

```json
{
    "errors" : "Failed to delete"
}
```