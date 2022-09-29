# ReactJs-CoderHouse
Curso de React-Js en CoderHouse

27/09/2022

En el HOME tendremos acceso al ITEMLISTCONTAINER donde muestro todos los productos de la fake api utilizada en clase, este componente recibe una props GREETING, la cual cambia segun donde nos encontremos, en el HOME será un mensaje de bienvenida mientras que navegando hacia las categorias mostrará un mensaje del tipo: 'Listado de: xxx', que corresponderá a la CATEGORY seleccionada.

Decidí solo agregar dos categorias, esto por comodidad propia y tiempo, aun asi el codigo esta preparado para que solo deba agregar un MenuItem mas, de momento esto lo estoy haciendo a mano pero tengo pensado en guardar las categorias en otro archivo y luego mostrarlos en forma dinamica.

En cada producto contamos con un LINK el cual navega hacia '/product/:id' donde el ID se carga en forma dinamica por cada CARD. De momento solo lo represente como una card un poco mas grande, pretendo cambiar esto, agregar algunos detalles mas y el ITEMCOUNT, trabajaré en eso a continuación.

Con respectos a los estilos en principio estuve utilizando bootstrap 5 pero lo dejé de lado, me encontré con Styled-Components el cual me parece super util y comodo, de mas está decir aun no me encuentro muy comodo estilizando, pero trabajaré en ello.
