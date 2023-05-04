const body = document.querySelector('body');
const h1 = document.querySelector('.moviesListTitulo');

Swal.fire({
    title: 'Desea activar el modo oscuro?',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, activalo!'
  }).then((result) => {
    if (result.isConfirmed) {
        body.style.color = "#7f7f7f"
        body.classList.add('fondoMoviesList')
    }
  })

h1.innerHTML = "Listado de peliculas";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding = "20px"