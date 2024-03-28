# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "Jalan Contoh, optional",
    "city" : "Kota",
    "province" : "Provinsi, optional",
    "country" : "Negara Apa",
    "postal_code" : "50276"
}
```

Response Body :

```json
{
    "data" : {
        "id" : 1,        
        "street" : "Jalan Contoh, optional",
        "city" : "Kota",
        "province" : "Provinsi, optional",
        "country" : "Negara Apa",
        "postal_code" : "50276"
    }
}
```

## Get Address

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body :

```json
{
    "data" : {
        "id" : 1,        
        "street" : "Jalan Contoh, optional",
        "city" : "Kota",
        "province" : "Provinsi, optional",
        "country" : "Negara Apa",
        "postal_code" : "50276"
    }
}
```

## Update Address

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "Jalan Contoh, optional",
    "city" : "Kota",
    "province" : "Provinsi, optional",
    "country" : "Negara Apa",
    "postal_code" : "50276"
}
```

Response Body :

```json
{
    "data" : {
        "id" : 1,        
        "street" : "Jalan Contoh, optional",
        "city" : "Kota",
        "province" : "Provinsi, optional",
        "country" : "Negara Apa",
        "postal_code" : "50276"
    }
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :

Response Body :

```json
{
    "data" : true
}
```

## List Address

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body :

```json
{
    "data" : [
        {
            "id" : 1,        
            "street" : "Jalan Contoh, optional",
            "city" : "Kota",
            "province" : "Provinsi, optional",
            "country" : "Negara Apa",
            "postal_code" : "50276"
        },
        {
            "id" : 2,        
            "street" : "Jalan Contoh, optional",
            "city" : "Kota",
            "province" : "Provinsi, optional",
            "country" : "Negara Apa",
            "postal_code" : "50276"
        }
    ]
}
```