# Property Management API

## Description

This project is an API for property management. The API currently allows adding new properties to the database via the `POST /properties` endpoint, validating the data before saving it. Additionally, a unit test is included to ensure that the validations work correctly.

## Features

### 1. `POST /properties` Endpoint

- **Functionality:**
  - This endpoint receives an array of JSON objects representing properties.
  - It validates each property and saves them to the database if the data is valid.

- **Important Validations:**
  - `m2_net` must be a number greater than 0 and less than or equal to `m2_gross`.
  - `owner_email` must be a valid email address.

- **Error Handling:**
  - If the provided data is invalid, the endpoint responds with a `400 Bad Request` error.

#### Environment Variables

- **Variable List:**
  - `DB_USER`: Database User 
  - `DB_HOST`: Database HOST URI
  - `DB_NAME`: Database Name
  - `DB_PASSWORD`: Database Password
  - `DB_PORT`: Database Port
  - `PORT`: Express Service Port

#### Request Example:

```json
POST /properties
Content-Type: application/json

[
  {
        "street_type": "Avenue",
        "street_name": "Ocean Drive",
        "street_number": 12,
        "staircase": "A",
        "floor_number": "3",
        "door": "2B",
        "district": "Beverly Hills",
        "postal_code": "90265",
        "cadastral_reference": "3265801VK4736E0003EL",
        "m2_net": 150.0,
        "m2_gross": 180.0,
        "owner_email": "owner1@example.com"
    },
    {
        "street_type": "Street",
        "street_name": "Fifth Avenue",
        "street_number": 456,
        "staircase": "B",
        "floor_number": "10",
        "door": "10A",
        "district": "Manhattan",
        "postal_code": "10001",
        "cadastral_reference": "3265801VK4736E0004EL",
        "m2_net": 90.0,
        "m2_gross": 100.0,
        "owner_email": "owner2@example.com"
    }
]