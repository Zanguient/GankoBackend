# Ganko Backend
## README
 
-------------------
## API DOCUMENTATION

* BASEURL = "https://gankotest.herokuapp.com/finca/"

## GET FINCAS
### Se define la ruta para recibir la lista de fincas asociadas a un usuario
* Method: GET
* Route: "get-fincas"
* HEAD: "Authorization" : "String token"

## ADD FINCA
### Se define la ruta para agregar una finca nueva
* Method: POST
* Route: "add-finca"
* Body Request: {
    "nombre" : "String",
    "ubicacion" : "String",
    "hectareas" : "number"
}
* HEAD: "Authorization" : "String token"

## DELETE FINCA
### Se define la ruta para eliminar una finca
* Method: DELETE
* Route: "delete-finca/{id_finca}"
* HEAD: "Authorization" : "String token"

## UPDATE FINCA
### Se define la ruta para agregar una finca nueva
* Method: PUT
* Route: "update-finca/{idfinca}"
* Body Request: {
    "nombre" : "String",
    "ubicacion" : "String",
    "hectareas" : "number"
}
* HEAD: "Authorization" : "String token"