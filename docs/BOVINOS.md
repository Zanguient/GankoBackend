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
        id_bovino:string,
        imagen: number,
        name: string,
        fecha_ingreso: Date,
        genero: string,
        proposito: number,
        peso: number,
        color: string,
        raza: string,
        id_Madre: string,
        id_Padre: string,
        lote: string,
        salida_por: string,
        numero_partos: string,
        parto_fallo: string,
        fecha_salida: string,
        precio_compra:number,
        precio_venta:number,
        finca: number,
        usuario: number,
        version:number
}

## UPDATE BOVINO
### Se define la ruta para actualizar un bovino
* Method: PUT
* Route: "update-bovino/{id_bovino}" //este id_bovino es el asignado por el usuario, no de la bd.
* HEAD: "Authorization" : "String token"
* BODY : {
        id_bovino:string,
        imagen: number,
        name: string,
        fecha_ingreso: Date,
        genero: string,
        proposito: number,
        peso: number,
        color: string,
        raza: string,
        id_Madre: string,
        id_Padre: string,
        lote: string,
        salida_por: string,
        numero_partos: string,
        parto_fallo: string,
        fecha_salida: string,
        precio_compra:number,
        precio_venta:number,
        finca: number,
        usuario: number,
        version:number
}

## DELETE BOVINO
### Se define la ruta para eliminar un bovino
* Method: DELETE
* Route: "delete-bovino/{id_bovino}" //este id_bovino es el asignado por el usuario, no de la bd.
* HEAD: "Authorization" : "String token"