# **:sparkles:fchtjs:sparkles:**
*A javascript api rest consumer, produces a spiderable webpage*

## Features
* URLs configurables (por lo tanto, amigables)
* parsea y pinta cualquier JSON en un div, span, p ... lo que quieras
* contenido SEO friendly (el contenido se inyecta en el DOM, es legible por los bots)
* al usar Head.js es fácil añadir cualquier librería javascript extra que necesites


## Proyectos utilizados
* **Head.js** para añadir las librerías
* **jQuery** (obligatorio, supongo que se puede sustituir por **Zepto**, pero no lo he probado)
* **Transparency** [https://github.com/leonidas/transparency] como plantillas (obligatorio, tu puedes usar otro parecido si sabes lo que haces xD)
* **Semantic-UI** para darle un aspecto decente (opcional, puedes usar lo que quieras)


## Vale, pero ¿esto para qué sirve?
Imagina que quieres visualizar con tu librería javascript super-guay unos gráficos de unos valores que te llegan de un API en JSON,
o que tienes una landing estática con uno o varios bloques de contendio dinámico:
simplemente edita en el fichero de configuración la ruta de la llamada al API y en qué div lo quieres pintar y listo!

Este código solo hace llamadas GET para cargar el contenido en el document.ready(), pero puedes implementar las llamadas
PUSH, POST que quieras :)

## Venga, te lo compro .. ¿cómo se configura?
1. sólo hay una regla en el HTML: el nombre del contenedor (el div o span en el que se pintan los datos) tiene que tener una clase que se llame igual.
Un ejemplo: `<div container="uno" class="uno">`
2. configura las URLs de la app y del API que consumas en js/config.js
3. si necesitas alguna librería javascript, añádela en el array que carga Head.js
4. necesitas crear una página HMTL por cada tramo de URL al que llames.
Un ejemplo: puedes tener en tu app sólo 2 URLs: "/users" (un listado) y "/user/11" (el detalle de cada uno)
pues tienes que crear un "users.html" y un "user.html". Después tienes que configurar el *.htaccess*
5. mas o menos, eso es todo :)

