# Catálogo petshop 🐾

Esta aplicación es un pequeño sistema que permite ingresar, eliminar y modificar artículos vendidos por un petshop. A través del registro y logueo de usuarios, van a poder acceder a toda la información disponible. Fue creada con NodeJS, express, MySQL y jsonwebtoken.

## Inicio 

Para poder poner en funcionamiento la aplicación, hay que instalar los **node_modules** y crear un archivo **.env** que contenga las siguientes variables:

```
DB_HOST = ""
DB_PASS = ""
DB_USER = ""
DB_PORT = 
DB_NAME = "petshop"

```

```
MAIL_SERVICE = ""
MAIL_USER = ""
MAIL_PASSWORD = ""

```
## Endpoints

### Usuarios 😁
Se pueden crear nuevos usuarios y loguearse una vez que el registro el confirmado.

##### Creación de nuevo usuario
Se tiene que realizar una petición a través del método POST a http://localhost:3000/register, y en el body enviar los siguientes campos con sus respectivos valores:
```
nombre
apellido
correo
tel
usuario
password

```
Una vez que la petición es exitosa, el usuario recibirá un correo con una URL dinámica, a la que tendrá que acceder para poder confirmar su registro.
##### Login de un usuario
Una vez que el registro se confirmó, se tiene que realizar una petición a través del método POST a http://localhost:3000/login, y en el body enviar los siguientes campos con sus respectivos valores:
```
usuario
password

```
Si la petición es exitosa, el servidor responderá con un token que le servirá al usuario durante 7 horas.

### Productos 🦴

##### Listar todos los productos
Se tiene que realizar una petición a través del método GET a http://localhost:3000/admin/productos, y enviar en la cabecera el campo "Authorization" con el token recibido durante el login.
De este modo, el usuario recibirá un json con la información de todos los productos que estén disponibles.
##### Ver la información de un producto por ID
Se tiene que realizar una petición a través del método GET a http://localhost:3000/admin/productos/[id], y enviar en la cabecera el campo "Authorization" con el token recibido durante el login.
De este modo, el usuario recibirá un json con toda la información correspondiente al producto.
##### Creación de un producto
Se tiene que realizar una petición a través del método POST a http://localhost:3000/admin/productos/create, enviar en la cabecera el campo "Authorization" con el token recibido durante el login, y en el body enviar los siguientes campos con sus respectivos valores:
```
nombre
descripcion
precioUnitario
idCategoria

```
##### Modificación de un producto
Se tiene que realizar una petición a través del método PUT a http://localhost:3000/admin/productos/modify/[id], enviar en la cabecera el campo "Authorization" con el token recibido durante el login, y en el body enviar los siguientes campos con sus respectivos valores:
```
nombre
descripcion
precioUnitario
idCategoria

```
En el caso de la modificación, ningún campo es obligatorio, se puede modificar el o los campos que se quiera.
##### Eliminación de un producto
Se tiene que realizar una petición a través del método GET a http://localhost:3000/admin/productos/delete/[id], y enviar en la cabecera el campo "Authorization" con el token recibido durante el login. Al aprobarse la transacción, el campo "habilitado" pasará a ser "false".

### Categorías 📑

##### Listar todas las categorías
Se tiene que realizar una petición a través del método GET a http://localhost:3000/admin/categorias, y enviar en la cabecera el campo "Authorization" con el token recibido durante el login.
De este modo, el usuario recibirá un json con la información de todas las categorías.
##### Ver la información de una categoría por ID
Se tiene que realizar una petición a través del método GET a http://localhost:3000/admin/categorias/[id], y enviar en la cabecera el campo "Authorization" con el token recibido durante el login.
De este modo, el usuario recibirá un json con toda la información correspondiente a la categoría.
##### Creación de una categoría
Se tiene que realizar una petición a través del método POST a http://localhost:3000/admin/categorias/create, enviar en la cabecera el campo "Authorization" con el token recibido durante el login, y en el body enviar el siguiente campo con su respectivo valor:
```
nombre

```
##### Modificación de una categoría
Se tiene que realizar una petición a través del método PUT a http://localhost:3000/admin/categorias/modify/[id], enviar en la cabecera el campo "Authorization" con el token recibido durante el login, y en el body enviar el siguiente campo con su respectivo valor:
```
nombre

```
##### Eliminación de una categoría
Se tiene que realizar una petición a través del método GET a http://localhost:3000/admin/categorias/delete/[id], y enviar en la cabecera el campo "Authorization" con el token recibido durante el login. Al aprobarse la transacción, el campo "habilitado" pasará a ser "false".



### Autoría ⚙
Macarena Romero para la Diplomatura de Programación Web de la UTN.