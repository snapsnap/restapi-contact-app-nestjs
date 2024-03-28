# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :

```json
{
    "first_name" : "Ian",
    "last_name" : "Aditiawan",
    "email" : "ian@example.com",
    "phone" : "089123123123"
}
```

Response Body :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Ian",
        "last_name" : "Aditiawan",
        "email" : "ian@example.com",
        "phone" : "089123123123"
    }
}
```

## Get Contact

Endpoint : GET /api/contacts/:contactId

Headers :
- Authorization : token

Response Body :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Ian",
        "last_name" : "Aditiawan",
        "email" : "ian@example.com",
        "phone" : "089123123123"
    }
}
```

## Update Contact

Endpoint : PUT /api/contacts/:contactId

Headers :
- Authorization : token

Request Body :

```json
{
    "first_name" : "Ian",
    "last_name" : "Aditiawan",
    "email" : "ian@example.com",
    "phone" : "089123123123"
}
```

Response Body :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Ian",
        "last_name" : "Aditiawan",
        "email" : "ian@example.com",
        "phone" : "089123123123"
    }
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:contactId

Headers :
- Authorization : token

Response Body :

```json
{
    "data" : true
}
```

## Search Contact

Endpoint : GET /api/contacts

Headers :
- Authorization : token

Query Params :
- name: string, contact first name or contact last name, optional
- phone: string, contact phone, optional
- email: string, contact email, optional
-page: number, default 1
- size: number, default 10

Response Body :

```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Ian",
            "last_name" : "Aditiawan",
            "email" : "ian@example.com",
            "phone" : "089123123123"
        },
        {
            "id" : 2,
            "first_name" : "Ian",
            "last_name" : "Aditiawan",
            "email" : "ian@example.com",
            "phone" : "089123123123"
        }
    ],
    "paging" : {
        "current_page" : 1,
        "total_page" : 10,
        "size" : 10
    }
}
```