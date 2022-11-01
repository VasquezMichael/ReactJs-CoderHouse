Me# ReactJs-CoderHouse
######31/10/2022
##Curso de React-Js en CoderHouse




**HOME**

En el HOME tendremos acceso al ITEMLISTCONTAINER donde muestro todos los productos de la fake api utilizada en clase, este componente recibe una props GREETING, la cual cambia segun donde nos encontremos, en el HOME será un mensaje de bienvenida mientras que navegando hacia las categorias mostrará un mensaje del tipo: 'Jewelery', que corresponderá a la CATEGORY seleccionada.


**Navbar**

En el navbar tendremos los NavLink necesarios para recorrer la app, de momento cada categoria esta hardcodeada esto pretendo modificarlo luego, teniendo todas las disponibles en FireBase o algun archivo del cual pueda leerlas de forma dinamica.

Dentro del funcionamiento general contamos con una State showMobileMenu que me ayuda a desplegar el Menu cuando nos encontramos en la vista Mobile. Mi intencion era quizas tener un componente a parte para esta vista pero debido al tiempo de entrega tuve que dejarlod de esta forma.


**ITEM, ITEM DETAIL CONTAINER**

En ITEMLIST recibimos una lista completa con todos los productos disponibles

En Item recibimos los datos de un producto, con esto armamos las card que se muestran en la HOME contendra la informacion necesaria de cada producto.

En cada producto contamos con un LINK el cual navega hacia '/product/:id' donde el ID se carga en forma dinamica por cada CARD.

**ITEM DETAIL**

Aqui tendremos el detalle del producto, siempre contaremos con la informacion basica, lo unico que cambiara sera si damos la opcion de agregar al carrito o no, esto dependera si en el momento que se selecciona el producto hay stock disponible, esta es la primer valicacion que realizamos antes de generar la orden de compra.

**ITEM COUNT**

Aqui recibimos cierta informacion del producto del cual estamos viendo el detalle, tendremos initial, stock, onAdd los cuales nos permitirar manejar la logica para controlar las cantidades y agregar el producto al carrito.

Aqui use React-Toastify para mostrar algunos mensajes, por ejemplo cuando cambiamos las cantidades y llegamos a un limite de stock, tanto para el minimo como maximo.

**CART**

Bien, de este componente no hay mucho que decir, obtiene toda la informacion del cartContext entonces mostraremos toda la informacion del Cart.

**MODAL PAY**

Para la implementacion del Modal me apoye en las herramientas que proporciona el Framework Chakra, me resulto muy util y sencillo de implementar.
Solicitamos los datos basicos para una compra, estos se van guardando en cada cambio en un objeto el cual me servira para enviar la informacion a la DB.

Por otro lado aqui desarrolle toda la logica para realizar el pedido de compra.

Tenemos una sencilla **validacion de formulario**, por el momento solo me asegure que no hayan campos vacios (exceptuando los comentarios).

**GetProducts** nos permite obtener de la DB todos los productos que se encuentren en nuestro carrito, esto lo hago para hacer una segunda validacion del stock al momento de realizar la compra
Esta funcion nos retornara los datos en una promesa, decidi guardar todas en un array para luego hacer uso de **Promise.all**, esto ya que cuando queria hacerlo de otra forma (recorriendo el cart y realizando un getDoc con cada producto tenia problemas de asincronismo=)

Entonces dentro del Promise.all matcheo cada producto del cart con los obtenidos desde la DB y verifico el stock. De no ser suficiente se almacenara el nombre de ese producto en un array para luego mostrar todos los productos que no esten disponibles en esa cantidad.
En caso de no haber ninguno dejaremos continuar con normalidad.

Una vez finalizada la compra se mostrara un mensaje de exito con el **ID DE COMPRA**, anteriormente trabaje con la api de whatsapp la cual me permitia enviar todo el detalle de compra al vendedor, prendendia hacer lo mismo pero no me dieron los tiempos, sera algo en lo que trabajare a continuacion.


**ESTILOS**

Con respectos a los estilos en principio estuve utilizando bootstrap 5 pero lo dejé de lado, me encontré con Styled-Components el cual me parece super util y comodo, de mas está decir aun no me encuentro muy comodo estilizando, pero trabajaré en ello.
