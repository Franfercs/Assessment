# Prueba Frontend

## Indicaciones

Preparar un proyecto de react o react native, en caso de usar react native utilizar CLI. En lo posible utilizando Typescript y lo subirlo a un repositorio de Github/Gitlab/Bitbucket/etc, una vez termine el proyecto (o antes, si te parece) me puedes pasar el link y me das acceso en caso de que sea privado para poder realizar la evaluación.

Básicamente estamos hablando de una aplicación que lista películas y el detalle de cada una de ellas. El diseño de la aplicación no es objeto de evaluación, pero se puede utilizar libs de diseño. Ej. (MUI, Paper, tailwind).

La api que usaremos para obtener los datos de las películas es la siguiente: http://www.omdbapi.com/

Los requerimientos para la aplicación son:
Buscador;
La aplicación debe contar con un buscador y un filtro en el cual se consulte al servidor buscando por:
- Título
- Año

Listado;
Cada item del listado debe contener los siguientes datos:
- Imagen
- Titulo
- Rating
- Descripción corta

Pantalla de la película;
Al tocar un item del listado se debe navegar a la pantalla donde se pueden ver mas detalles de la película, tales como:
- Imagen/es
- Nombre
- Rating
- Descripción larga
- Director
- Listado de actores
- Otro dato que se crea conveniente

Se puede utilizar gestores de estado (redux, zustand, MobX, etc).

Se tendrá en cuenta para la evaluación:
- Buenas prácticas
- Técnicas de mejoras de rendimiento
- Typescript
- Patrones de diseño / Arquitectura

## Requerimientos 

- NodeJS >= 16

## Desarrollo en entorno local

Para levantar el proyecto en entorno de desarrollo, siga los siguientes pasos:

1. Clonar este repositorio: `git clone git@github.com:Franfercs/Assessment.git`
2. Instalar las dependencias del proyecto: `npm i`
3. Crear un archivo `.env` con las siguientes variables de entorno:
    
    ```bash
    REACT_APP_API_KEY=<OMDb API KEY>
    ```
4. Correr la aplicación: `npm run start`