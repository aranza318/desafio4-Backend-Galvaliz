# desafio4-Backend-Galvaliz

Presentacion del proyecto y desarrollo hasta ahora:
A. Se va a encontrar una carpeta SRC y detro de ella se encontrara:
1. Una carpeta llamada files que es donde se encuentran tanto el json del carrito como el de productos, el de carrito no es utilizado en esta 
   instancia pero igualmente decidi dejarlo porque venia del desafio anterior y posiblemente sirva para el proximo.
2. Una carpeta managers donde encontraremos ambos managers tanto para el carrito como para los productos, dentro de ellos estan las funciones
   que utilizaremos en la carpeta public como en la carpeta views, que ya seran descriptas.
4. Una carpeta publics que dentro de ella tendermos el css dentro de su carpeta de estilos y tambien el javascript de realtime, el cual trabaja
   con socketClient.
5. Una carpeta de rutas la cual tendra tres rutas dentro, una para el carrito (no se utilizara en esta instacia), una para los productos (si
   utilizada a lo largo del proyecto y explicada dentro del codigo) y una ultima que es para las views (la cual basicamente trae los productos
   actualizados en lista).
5. Una carpeta de views que dentro tendra una carpeta layouts donde se alojara el main.handlebars (body del proyecto y lo que se vera en pantalla),
   tambien encontratemos por fuera de esta carpeta pero dento de views home.handlebars que se encargara de las vistas del producto y
   realtimeProducts.handlebars que manejara las vistas del formulario que permite agregar o quitar un producto de la lista en tiempo real.
B. Tambien se encontran por fuera de la carpeta de SRC la app.js que trabajara con handlebars, socket.io, express, dirname y las diferentes rutas del
   proyecto para que este funcione, y a su vez encontraremos a utils.js donde se aloja el dirname.
   
