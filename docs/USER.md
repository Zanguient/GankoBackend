# Ganko Backend
## README
 
-------------------
## API DOCUMENTATION

* BASEURL = "https://gankotest.herokuapp.com/user/"

## LOGIN
### Se definen parametros de inicio de sesion
* Method: POST
* Route: "login"
* Body Request: {
    "username" : "String",
    "password" : "String"
}

## CREATE USER
### Se definen los parametros para agregar un nuevo usuario
* Method: POST
* Route: "create-user"
* Body Request: {
    "nombre" : "String",
    "apellido" : "String",
    "email" : "String",
    "usuario" : "String",
    "password" : "String",
    "identificacion" : "BIGINT"

## RESET PASSWORD
### Se define el parametro para resetear el password
* Method: POST
* Route: "reset-password"
* Body Request: {
    "email" : "String"
}

## CHANGE PASSWORD
### Se define el parametro para cambiar el password
* Method: POST
* Route: "reset-password"
* Body Request: {
    "oldPass" : "String",
    "newPass" : "String"
}
* HEAD: "Authorization" : "String token"