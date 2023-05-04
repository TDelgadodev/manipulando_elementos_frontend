const qs = (e) => document.querySelector(e);

const main = qs(".container");
const subtitulo = qs(".subtitulo");
const link = qs("h2 a");
const paragraphs = document.querySelectorAll(".informacion p");

main.style.display = "block";

Swal.fire({
  title: "Escribe tu nombre",
  input: "text",
})
  .then(({ value: nombre }) => {
    if (nombre) {
      subtitulo.innerHTML += ` ${nombre}`;
      subtitulo.style.textTransform = "uppercase";
      link.style.color = "#E51B3E";
    } else {
      subtitulo.innerText += " Invitado";
    }

    Swal.fire({
      title: "¿Desea colocar un fondo de pantalla?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si por favor",
      denyButtonText: `No gracias`,
    }).then((result) => {
      if (result.isConfirmed) {
        document.body.classList.add("fondo");
      } else if (result.isDenied) {
        Swal.fire("Bueno, no te enojes");
      }
      paragraphs.forEach((element, index) => {
        index % 2 === 0
          ? element.classList.add("destacadoPar")
          : element.classList.add("destacadoImpar");
      });
    });
  })
  .catch((error) => console.log(error));
