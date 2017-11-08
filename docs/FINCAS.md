# Ganko Backend
## README
 
-------------------
## API DOCUMENTATION

* BASEURL = "https://gankotest.herokuapp.com/finca/"

## GET FINCAS
### Se define la ruta para recibir la lista de fincas asociadas a un usuario
* METHOD: GET
* ROUTE: "get-fincas"
* HEAD: "Authorization" : "String token"

## ADD FINCA
### Se define la ruta para agregar una finca nueva
* METHOD: POST
* ROTE: "add-finca"
* BODY: {
    "nombre" : "String",
    "ubicacion" : "String",
    "hectareas" : "number"
}
* HEAD: "Authorization" : "String token"

## DELETE FINCA
### Se define la ruta para eliminar una finca
* METHOD: DELETE
* ROUTE: "delete-finca/{id_finca}"
* HEAD: "Authorization" : "String token"

## UPDATE FINCA
### Se define la ruta para agregar una finca nueva
* METHOD: PUT
* ROUTE: "update-finca/{idfinca}"
* BODY: {
    "nombre" : "String",
    "ubicacion" : "String",
    "hectareas" : "number"
}
* HEAD: "Authorization" : "String token"