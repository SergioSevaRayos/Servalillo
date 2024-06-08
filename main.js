document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.remove("visible");
                entry.target.classList.add("hidden");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Funcionalidad para los botones "Leer más"
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".modal-content .close");

    document.querySelectorAll(".leer-mas").forEach(button => {
        button.addEventListener("click", function() {
            const target = this.getAttribute("data-target");
            let content = "";

            switch (target) {
                case "historia":
                    content = "Desde 1920, Aguas del Servalillo ha sido una fuente confiable de agua potable y no potable en la provincia de Almería. Fundada por la visión de un empresario local que reconoció la necesidad crucial de suministrar agua de calidad a una región árida y exigente, la empresa se estableció con el compromiso de proporcionar soluciones hídricas innovadoras y sostenibles.";
                    break;
                case "mision":
                    content = "Proporcionar agua potable y no potable de calidad, contribuyendo al bienestar de la comunidad y al desarrollo sostenible de la región de Almería.";
                    break;
                case "vision":
                    content = "Ser líderes en el suministro de agua, innovando continuamente para satisfacer las necesidades cambiantes de nuestros clientes y contribuir al cuidado del medio ambiente.";
                    break;
                case "valores":
                    content = "Calidad, confiabilidad, sostenibilidad, responsabilidad social y compromiso con la comunidad.";
                    break;
                case "trayectoria":
                    content = "Explora nuestros inicios";
                    break;
                default:
                    content = "";
            }

            modalText.innerHTML = content;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
});