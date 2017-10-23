# Ganko Backend
## README
 
-------------------
## API DOCUMENTATION

* BASEURL = "Server/ganko/"

## LOGIN
### Se definen parametros de inicio de sesion
* Method: POST
* Route: "login"
* Body Request: username,password

## CREATE USER
### Se definen los parametros para agregar un nuevo usuario
* Method: POST
* Route: "create-user"
* Body Request: nombre,apellido,email,usuario,password,identificacion

## RESET PASSWORD
### Se define el parametro para resetear el password
* Method: POST
* Route: "reset-password"
* Body Request: email