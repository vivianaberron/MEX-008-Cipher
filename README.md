# MEX-008-Cipher
https://safe-case-e52cd.firebaseapp.com/


Cifrado César
1 Pensé que una manera de utilizar el cifrado podría ser para clasificar cosas y hacer que sea más improbable que se pierdan. Pensé en las maletas de los aeropuertos y en la vulnerabilidad del equipaje cuando llega al país de destino. Después de hacer mi prototipo en figma https://www.figma.com/file/W9zDf6Lqzcv3sZUt4U77oBUw/Untitled?node-id=0%3A1, decidí comenzar a configurar el estilo en CSS. Hice un esqueleto de todas las ventanas y de los botones principales que voy a necesitar. Me centré en que las ventanas fueran llamativas y que las rutas fuera fáciles de utilizar, porque los usuarios generalmente tendrían prisa de recoger sus cosas.

Traté que todos los backgrounds fueran relacionados al propósito de la aplicación. Mi último avance fue en pintar un formulario para aplicar la función que contiene la fórmula para cifrar
¿Cómo pensé en el usuario y cómo llegué a esas conclusiones? El primer usuario que llegó a mi cabeza fue una persona que necesitaba codificar información delicada, ya fuese con el propósito de mantenerla en secreto o como una manera de no perder los datos en su memoria. Finalmente y después de plantearme varias ideas, decidí que podía explorar otras opciones, y que, al contrario de lo pensado en un principio, el usuario podría hacer uso de su memoria o de alguna mnemotecnia para codificar y decodificar información. Sin embargo, todavía no sabía exactamente hacia qué o cómo aplicarlo. Pensé en que dicho código podría ligarse a alguna entidad de la vida diaria, como las pertenencias personales. Luego pensé que sería buena idea un sistema de paquetería sin intermediarios, aunque también pensé que usar lockers generalmente solucionaba el problema, y agregar pasos extra a algo que ya funciona no es precisamente útil. Después pensé en los aeropuertos y en lo expuestas que están las maletas todo el tiempo: desde el momento de documentar, hasta el momento que aparecen en la banda, las maletas pueden perderse entre miles de paquetes y más maletas, algunas incluso idénticas. Pensé que sería buena idea enfocar la temática del proyecto hacia el equipaje documentado, pues a veces no basta con poner un sticker o un listón en la maleta. Y aunque las aerolíneas juran tener un control sobre el equipaje que suben al avión, siguen existiendo casos de equipaje perdido o robado en el transcurso del viaje. Mis pasos para concluir el proyecto fueron los siguientes:

Realicé un prototipo en papel con el cual yo misma realicé un test a través de la aplicación Marvel.
Realicé varios tests con mis amigos para probar la funcionalidad de las rutas y de la temática.
Cambié de prototipo y de temática, decidí prototipar esta vez con Figma.
Probé el prototipo con mis amigos, les platiqué acerca de la nueva temática. Las rutas fueron fáciles de usar y no tuvieron preguntas acerca de cómo usar la maqueta, excepto por la funcionalidad del cifrado César.
Hice mi maqueta en HTML y CSS, utilicé el prototipo de Figma para guiarme.
Comencé a investigar sobre ASCII y a leer los recursos que venían indicados en el README.
Probé pequeñas partes de código en Repl.it y me apoyé con mis compañeras para detectar errores de sintaxis.
Completé el diseño con CSS, terminé de escribir los archivos HTML.
Cuando logré completar el archivo cipher.js comencé a escribir el archivo index.js para estructurar el DOM. Llamé a los id de mis HTML con documen.getElementById y los asigné a una variable. Luego los reasigné dentro de una función flecha, y utilicé .value para que me devolvieran el string y el valor ingresado en el input. Mandé llamar a window.cipher.encode para ejecutar encode con los datos que el usuario ingrese en el input. También mandé llamar al espacio en blanco que serviría como contenedor de los resultados.
Corrí los test y corregí los errores que me arrojó la terminal Introducción a la aplicación Para descargar la aplicación se pueden seguir estos pasos: Entrar al link de GitHub https://github.com/vivianaberron/MEX-008-Cipher y dar click en ‘download zip’ para obtener una descarga de los archivos comprimidos. Éstos se pueden correr a través de un editor de código como Visual Code o Atom. Para entrar a la aplicación sin tener una copia local de los archivos es necesario tener el link de GH pages (https://vivianaberron.github.io/MEX-008-Cipher/src/). Dicho link funciona como si el repositorio estuviese alojado en algún hosting. Al entrar, la página tiene varios botones, de arriba hacia abajo tienen la siguiente funcionalidad: -FAQ: dirige a una ventana que contiene varias preguntas frecuentes que podrían surgir al usar la aplicación. -Soporte: dirige a una ventana que explica el procedimiento en caso de pérdida del equipaje. -Genera un código: dirige a una ventana que tiene varios cuadros de texto. El primer cuadro pide que se ingrese el destino, la inicial del nombre del pasajero y el vuelo. El segundo cuadro pide el número de asiento. Al dar click en ‘obtén tu código’, la aplicación arroja una clave única para identificar tus maletas. Todo el equipaje de un único pasajero está ligado a su vuelo, a su asiento y a su nombre. -Recupera tu equipaje: ayuda a que el staff verifique, con de los datos proporcionados por el cliente, que el equipaje le pertenezca y haya sido entregado. Se ingresa el código y el número de asiento, el resultado son los datos del cliente, que deben cotejarse con el pase de abordar. Funcionalidad de la app La aplicación está pensada para ser una herramienta utilizada por las aerolíneas para reducir sus pérdidas de equipaje o el robo de éste cuando las pertenencias de los pasajeros estén bajo su responsabilidad. Así mismo, permite que los pasajeros dejen una constancia extra de la documentación de su equipaje, de tal manera que las maletas que pertenecen a un asiento de un vuelo, deban ir en el mismo trayecto. En caso de que eso no suceda, permite que la aerolínea tenga un rastreo más eficaz del equipaje de los pasajeros y, por tanto, podría ayudar a reducir el tiempo de respuesta ante una reclamación. Modelo de negocio La aplicación está planeada para darle un valor añadido al servicio de la aerolínea que lo contrate. La aerolínea sería la encargada de ofrecer o proporcionar la opción de tener un equipaje con rastreo (de modo que, incluso, podría cobrarse como un servicio plus o extra). La aplicación puede comprarse o rentarse, y adaptarse al esquema de negocio de cada empresa. En una versión más elaborada, podría permitirle al usuario seguir su equipaje, tal como sucede con las aplicaciones de paquetería, e incluso generar bloqueos especiales para sólo liberar las claves una vez que el pasajero y las maletas estuviesen documentadas en el mostrador. Un extra es que la aplicación reduciría la posibilidad de subir maletas sin dueño, hecho mismo que podría ayudar a reducir atentados, o incluso, a reducir retrasos en caso de que el pasajero no aborde el avión, pues podría identificarse más rápido la maleta de quien no está adentro de la cabina. UX ¿Quiénes son los principales usuarios del producto? Aerolíneas que desean ofrecer un servicio plus o extra para asegurar el equipaje. Clientes de las aerolíneas que prefieren asegurar sus pertenencias, incluso después de la documentación de éste. ¿Cuáles son los objetivos de estos usuarios en relación con tu producto? Evitar pérdidas de equipaje, tener mayor control sobre éste una vez que esté bajo su resguardo. ¿Cómo crees que el producto que estás creando está resolviendo sus problemas? Podría reducir drásticamente el tiempo de retraso en caso de que una persona haya documentado y no aborde el avión, reduciría por tanto, costos e impuestos generados por dicho retraso. También reduciría los costos por equipaje perdido y ayudaría a tener mayores índices de satisfacción con los clientes. Diseño Las rutas de mi aplicación están divididas en dos partes: cuando se genera un código, se espera que el usuario sea el cliente que está documentando. Cuando se recuperan los datos, se espera que una persona del staff, o algún mecanismo de supervisión coteje los datos del equipaje. De tal modo, que ambas rutas están separadas. También busqué que existieran botones para regresar al inicio o para avanzar dependiendo de quien esté usando la aplicación (un cliente puede avanzar desde ‘genera tu código’ hasta ‘recupera tu equipaje’, o alguien del staff puede únicamente ingresar a ‘recupera tu equipaje’).
Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

caeser-cipher

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

La letra A se cifra como D.
La palabra CASA se cifra como FDVD.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

Resumen del proyecto
¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del bootcamp. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (offset).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de ejemplo:

Crear claves seguras para el email.
Encriptar/cifrar una tarjeta de crédito.
Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
Mensajería secreta para parejas.
Consideraciones generales
Este proyecto se debe resolver de manera individual.
El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
Tiempo para completarlo: 2 semanas divididas en 2 sprints (1 entrega cada viernes)
Objetivos de aprendizaje
En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

Pintar elementos de formulario en la pantalla usando HTML y CSS.
Permitir al usuario interactuar (eventos del DOM) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
Manipular strings (cadenas de texto).
Usar control de flujo (bucles, condicionales, ...).
Actualizar la pantalla con los resultados (manipular el DOM).
Implementar funciones dada una descripción de su comportamiento.
Verificar tu implementación con pruebas unitarias.
Entender las necesidades del usuario y cómo proponer una solución.
Organizar tu tiempo y priorizar tareas en un entorno de alta incertidumbre.
Parte Obligatoria
Usa este alfabeto simple (solamente mayúsculas y sin ñ):

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Definición del producto
En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

Quiénes son los principales usuarios de producto.
Cuáles son los objetivos de estos usuarios en relación con tu producto.
Cómo crees que el producto que estás creando está resolviendo sus problemas.
Interfaz de usuario (UI)
La interfaz debe permitir al usuario:

Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
Insertar un mensaje (texto) que queremos cifrar.
Ver el resultado del mensaje cifrado.
Insertar un mensaje (texto) a descifrar.
Ver el resultado del mensaje descifrado.
Scripts / Archivos
README.md: debe explicar cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.
src/index.html: este es el punto de entrada a tu aplicación. Este archivo debe contener tu markup (HTML) e incluir el CSS y JavaScript necesario.
src/cipher.js: acá debes implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:
cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.
src/index.js: acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.
test/cipher.spec.js: este archivo contiene algunos tests de ejemplo y acá tendrás que implementar los tests(pruebas ) para cipher.encode() y cipher.decode().
Parte opcional o “Hacker edition”
Las secciones llamadas “Hacker Edition” son opcionales. Si terminaste con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados al principio del archivo cipher.spec.js) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también este caso por tu cuenta.

Por otra parte, complementando la definición de tu producto, puedes plantear un modelo de negocio para tu aplicación, en el que se explique y justifique cómo podrías obtener ingresos a través de ella.

Vamos a los detalles. Consideraciones Técnicas
La lógica del proyecto debe estar implementada completamente en JavaScript (ES6). En este proyecto NO está permitido usar librerías o frameworks, sólo vanilla JavaScript.

No se debe utilizar la pseudo-variable this.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches. El boilerplate ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como code coverage para ver el nivel de cobertura de los tests usando el comando npm run test.

El boilerplate incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio que contiene el boilerplate.

El boilerplate contiene una estructura de archivos como punto de partida así como toda la configuración de dependencias y tests de ejemplo:

./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
El boilerplate incluye tareas que ejecutan eslint y htmlhint para verificar el HTML y JavaScript con respecto a una guías de estilos. Ambas tareas se ejecutan automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando npm run test. En el caso de JavaScript estamos usando un archivo de configuración de eslint que se llama .eslintrc que contiene un mínimo de información sobre: qué version de JavaScript/ECMAScript, el entorno (browser en este caso) y las reglas recomendadas ("eslint:recommended"). En cuanto a reglas/guías de estilo en sí, usaremos las recomendaciones por defecto de tanto eslint como htmlhint.

Evaluación
Te aconsejamos revisar la rúbrica para ver la descripción detallada de cada habilidad y cada nivel. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo completes:

General
Característica/Habilidad
Completitud
Habilidades Blandas
Habilidad
Planificación y organización
Autoaprendizaje
Solución de problemas
Dar y recibir feedback
Adaptabilidad
Trabajo en equipo
Comunicación eficaz
Presentaciones
Habilidades Técnicas Front-end
Habilidad
Computer Science (CS)
Lógica
Arquitectura
System Control Managmen(SCM)t
Git
GitHub
JavaScript
Estilo
Nomenclatura/semántica
Funciones/modularidad
Tests
HTML
Validación
Estilo
Semántica
CSS
Dont Repeat YourSelf (DRY)
Habilidades Técnicas UX
Habilidad
User Centricity
Pistas sobre cómo comenzar a trabajar en el proyecto
Antes que nada, asegúrate de tener un memo editor de texto en condiciones, algo como Atom, Visual Code, Sublime Text o cualquier otro de tu preferencia.
Para ejecutar los comandos a continuación necesitarás una shell UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar penguin GNU/Linux como tu Sistema Operativo.
Haz tu propio fork_and_knife fork de este repositorio de tu cohort, tus coaches te compartirán un link a un repositorio y te darán acceso de lectura en ese repo.
arrow_down Clona tu fork a tu computadora (copia local).
package Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).
Si todo ha ido bien, deberías poder ejecutar las traffic_light pruebas unitarias (unit tests) con el comando npm run test.
A codear se ha dicho! rocket
Recursos y temas relacionados
A continuación un video de Michelle que te lleva a través de la fórmula matemática del Cifrado César y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

tips caesar cipher

Diseño de experiencia de usuario (User Experience Design):

Ideación
Prototipado (sketching)
Pruebas con usuarios (User Testing) e Iteración
Desarrollo Front-end:

Valores
Tipos
Variables
Control de flujo
Pruebas nitarias (Unit test)
Aprende más sobre charCodeAt()
Aprende más sobre String.fromCharCode()
Aprende más sobre ASCII
Documentación de NPM
Herramientas:

GitHub y GitHub Pages.
Guía de Scrum: solamente para comenzar a entender cómo organizar tu trabajo.
Checklist
Esta sección está para ayudarte a llevar un control de lo que vas completando.

Parte Obligatoria
 README.md incluye info sobre proceso y decisiones de diseño.
 README.md explica claramente quiénes son los usuarios y su relación con el producto.
 README.md explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
 Usa VanillaJS.
 No utiliza this.
 Implementa cipher.encode.
 Implementa cipher.decode.
 Pasa linter con configuración provista.
 Pasa pruebas unitarias.
 Pruebas unitarias cubren 70% de statements, functions y lines, y un mínimo del 50% de branches.
 Interfaz permite elegir el offset o desplazamiento a usar en el cifrado/descifrado.
 Interfaz permite escribir un texto para ser cifrado.
 Interfaz muestra el resultado del cifrado correctamente.
 Interfaz permite escribir un texto para ser descifrado.
 Interfaz muestra el resultado del descifrado correctamente.
Parte Opcional: "Hacker edition"
 Cifra/descifra minúsculas
 Cifra/descifra otros caracteres (espacios, puntuación, ñ, á, ...)
 Permite usar un offset negativo.
 Modelo de negocio.
