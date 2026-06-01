console.log("Script cargado correctamente");

const botones = document.querySelectorAll(".btn-proyecto");

console.log(botones);

console.log(document.getElementById("modalProyecto"));

const modal = new bootstrap.Modal(
    document.getElementById("modalProyecto")
);

botones.forEach(boton => {

    boton.addEventListener("click", function(e){

        e.preventDefault();

        document.getElementById("modalTitulo").textContent =
            this.dataset.titulo;

        document.getElementById("modalDescripcion").innerHTML =
            this.dataset.descripcion;

        const imagenes =
            this.dataset.imagenes.split(",");

        const carouselContenido =
            document.getElementById("carouselContenido");

        carouselContenido.innerHTML = "";

        imagenes.forEach((imagen, index) => {

            carouselContenido.innerHTML += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${imagen}"
                        class="d-block w-100 rounded"
                        alt="Captura del proyecto">
                </div>
            `;

        });

        document.getElementById("modalTecnologias").textContent =
            this.dataset.tecnologias;

        document.getElementById("modalGithub").href =
            this.dataset.github;

        modal.show();

    });

});