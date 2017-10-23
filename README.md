# Ganko Backend
## README
 
-------------------
### API DOCUMENTATION

## lOGIN
# Se definen parametros de inicio de sesion
* Method: POST
* Route: "/login"
* Body Request: username,password

## CREATE USER
# Se definen los parametros para agregar un nuevo usuario
* Method: POST
* Route: "/create-user"
* Body Request: nombre,apellido,email,usuario,password,identificacion

## RESET PASSWORD
# Se define el parametro para resetear el password
* Method: POST
* Route: "/reset-password"
* Body Request: email

## GET FINCAS
# Se define la ruta para recibir la lista de fincas asociadas a un usuario
* Method: GET
* Route: "/get-fincas"
* HEAD: token

## GET Bovinos
# Se define la ruta para recibir la lista de bovinos asociados a una finca
* Method: GET
* Route: "/get-bovinos/{id_finca}"
* HEAD: token

**Enjoy!**