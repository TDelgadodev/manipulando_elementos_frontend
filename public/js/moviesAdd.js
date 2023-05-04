const h1 = document.querySelector('.moviesAddTitulo');
const section = document.querySelector('#formulario');
const article = document.querySelector('article');

h1.innerHTML = "AGREGAR PELICULA";
h1.classList.remove("moviesAddTitulo")
h1.classList.add("titulo"); 
section.classList.add("fondoCRUD")
article.classList.add('fondoTransparente');
