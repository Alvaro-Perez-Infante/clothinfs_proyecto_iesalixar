En este repositorio centralizaremos toda la información relativa a los **Proyectos de Desarrollo de Aplicaciones Web del I.E.S Alixar**.
Al continuación encontraremos los **apellidos y nombre** del alumno/a junto al **título de su proyecto**. El enlace nos dará acceso al repositorio del proyecto (no a la página GitHub del usuario).

En este repositorio se debe incluir la documentación especificada en [Requerimientos y criterios a seguir en el desarrollo de los proyectos](https://github.com/iesalixar/plantilla_proyecto_iesalixar/wiki/a.---Criterios-comunes-para-todos-los-proyectos), así como las indicaciones que el tutor haya podido ir a realizando a lo largo del desarrollo del mismo.

El desarrollo de toda Aplicación Web requiere seguir un [proceso estructurado](https://github.com/iesalixar/plantilla_proyecto_iesalixar/wiki/w1.--PROCESO-ESTRUCTURADO-PARA-DESARROLLO-DE-APLICACIONES-WEB), este  de contenido de la wiki te puede ayudar.


---

**Los párrafos anteriores son informativos y no deben aparecer en el reposotirio de los alumnos.**

---

# ColthInfs

#### Curso Escolar 2023-2024
#### Autor: [Álvaro Pérez Infante](https://github.com/Alvaro-Perez-Infante)
#### Tutor: [Antonio Gabriel González Casado](https://github.com/antonio-gabriel-gonzalez-casado)
#### Fecha de Inicio: 15-03-2024
#### Fecha de Finalización: XX-06-2024

## Breve descripción del proyecto

ClothInfs es una tienda en línea donde puedes comprar ropa de moda urbana, como camisetas, sudaderas y accesorios. Pero no es solo una tienda, también es un lugar donde puedes compartir tus estilos favoritos, 
descubrir nuevas marcas y conectarte con otros a los que les gusta la moda urbana.

Es como una red social para amantes de la moda streetwear. Puedes crear tu perfil, decir qué te gusta y seguir a otras personas para ver qué están usando. También puedes dejar comentarios sobre la ropa y ver 
las últimas tendencias y marcas.

En ClothInfs, quiero que todos se sientan bienvenidos y puedan expresarse a través de su ropa. Es un lugar divertido y fácil de usar donde puedes encontrar ropa genial y hacer nuevos amigos que comparten tus intereses. 

## Definir el objetivo de la aplicación
**Tener una gran idea** o encontrar un punto del mercado al que no se esté dando un producto o servicio es el punto de partida en cada nuevo proyecto. Antes de comenzar debes **definir claramente el propósito y la misión de la aplicación web**:

- **¿Qué va a hacer la aplicación?**
- **¿Cuál es su atractivo principal?** 
- **¿Qué problema concreto va a resolver?** 
- **¿Qué necesidad va a cubrir?**

## Estructura del Proyecto

En este apartado el alumno explicará el contenido del repositorio y de todas las carpetas relevantes del mismo. Para facilitar la gestión de la entrega, todo el código y documentación debe estar en este repositorio.

Por lo anterior, un proyecto que contenga un Frontend en una tecnología o framework (por ejemplo Angular) y una API REST en otra tecnología o framework (Springboot, Express) deberá tener la siguiente estructura de directorios en el repositorio de entrega:

- src-api
- src-frontend
- docs
- README.md

En el caso anterior, si se quiere desplegar de forma automatizada a partir del control de versiones, lo habitual es que estén los dos proyectos en repositorios separados. Por lo que se deberá configurar el despliegue automático para indicarle la raíz del código fuente de cada proyecto (si es posible) o hacer dos folks del repositorio principal uno para la API y otro para el frontend y adaptar los directorios para poder realizar el despliegue automático.

En un proyecto monolítico (tecnología servidor: Springboot, Django, Express, PHP,... con un sistema de templates propio para el frontend: Thymeleaf, jinja, ejs,...) deberá tener la siguiente estructura en el repositorio de entrega:

- src
- docs
- README.md
