# Healthcare-Treatment-Entry-System
The application's purpose is for medical providers to input details of treatments and medications for patients.


SERVER

firstly open your terminal, then cd server
second you need to npm i and and need Service Account credential from firebase

Service Account : https://firebase.google.com/support/guides/service-accounts

nodemon app.js

## Endpoints :
- `POST /patients`


Request:

- body:
```json
{
  "name": "string",
  "dateOfTreatment": "string",
  "treatmentDesc": "[string]",
  "medPrescribtion" : "[string]",
    "cost" : "integer"
}
```

_Response (201 - Created)_
```json
{
  "message" : "New patient successfully added"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name can't be empty"
}
OR
{
  "message": "Date can't be empty"
}
OR
{
  "message": "Treament Description must be selected"
}
OR
{
  "message": "Prescribtion must be selected"
}
OR
{
  "message": "Cost can't be empty or must be greater than 0"
}

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```


CLIENT 


-firstly open your terminal, then cd client
second you need to npm i.
-second : npm run dev, but before running this command, please check your server. server must be running before you trying to add new patient.