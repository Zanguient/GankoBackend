# Ganko Backend
## README
 
-------------------
## API DOCUMENTATION

* BASEURL = "https://gankotest.herokuapp.com/bovino/"

## GET BOVINOS
### Se define la ruta para recibir la lista de bovinos asociados a una finca
* Method: GET
* Route: "get-bovinos/{id_finca}"
* HEAD: "Authorization" : "String token"

## ADD BOVINO
### Se define la ruta para agregar un nuevo bovino
* Method: POST
* Route: "add-bovino/"
* HEAD: "Authorization" : "String token"
* BODY : {
    idBovino: string,
    imagen: string,
    name: string,
    fecha: Date,
    genero: string,
    proposito: string,
    peso: number,
    color: string,
    raza: string,
    idMadre: string,
    idPadre: string,
    salida: string,
    lote: string,
    salidaPor: string,
    numeroPartos: number,
    partoFallo: string,
    fechaSalida: Date,
    finca: number,
    usuario: number
}

## UPDATE BOVINO
### Se define la ruta para actualizar un bovino
* Method: PUT
* Route: "update-bovino/{id_bovino}"
* HEAD: "Authorization" : "String token"
* BODY : {
    idBovino: string,
    imagen: string,
    name: string,
    fecha: Date,
    genero: string,
    proposito: string,
    peso: number,
    color: string,
    raza: string,
    idMadre: string,
    idPadre: string,
    salida: string,
    lote: string,
    salidaPor: string,
    numeroPartos: number,
    partoFallo: string,
    fechaSalida: Date,
    finca: number,
    usuario: number
}

## DELETE BOVINO
### Se define la ruta para eliminar un bovino
* Method: DELETE
* Route: "delete-bovino/{id_bovino}"
* HEAD: "Authorization" : "String token"