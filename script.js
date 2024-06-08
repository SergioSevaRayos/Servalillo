document.addEventListener("DOMContentLoaded", function () {
    // Crear una nueva instancia de DataSet
    var items = new vis.DataSet([
        { id: 1, content: '<img src="media/calendario.png" alt="Imagen 1">', start: '1979-01-01' },
        { id: 2, content: '<img src="media/sergio.png" alt="Imagen 1" alt="Imagen 2">', start: '1990-01-01' },
        { id: 3, content: '<img src="media/gota-removebg-preview.png" alt="Imagen 1" alt="Imagen 3">', start: '2000-01-01' },
        { id: 4, content: '<img src="media/camion-removebg-preview.png" alt="Imagen 1" alt="Imagen 4">', start: '2010-01-01' },
        { id: 5, content: '<img src="media/logoServalillo.png" alt="Imagen 1" alt="Imagen 5">', start: '2020-01-01' }
    ]);

    // Opciones para la timeline
    var options = {
        width: '100%',
        height: '400px',
        stack: false,
        showCurrentTime: true,
        moveable: true, // Permite mover la timeline con el ratón o el dedo
        zoomable: false, // No permite hacer zoom en la timeline con el scroll del ratón
        horizontalScroll: true, // Permite el desplazamiento horizontal
        verticalScroll: false, // Desactiva el desplazamiento vertical
        zoomKey: 'ctrlKey', // Habilita el zoom solo cuando se presiona la tecla Ctrl
        wheel: false, // Desactiva el desplazamiento con la rueda del ratón
        start: new Date('1970-01-01'), // Establece el inicio de la escala de tiempo
        end: new Date('2024-01-01'), // Establece el fin de la escala de tiempo
        min: new Date('1975-01-01'), // Establece el límite mínimo de la escala de tiempo
        max: new Date('2040-01-01'), // Establece el límite máximo de la escala de tiempo
        timeAxis: { // Ajuste de la escala de tiempo
            scale: 'year', // Escala de tiempo a nivel de año
            step: window.innerWidth < 768 ? 10 : 10 // Intervalo de 20 años en móvil, 5 años en PC
        },
        // Aquí va el código CSS personalizado para las imágenes
        // Puedes agregar estilos adicionales según sea necesario
        template: function (item) {
            const date = new Date(item.start);
            const year = date.getFullYear(); // Extraer el año
            return `
            <div class="custom-item">
                ${item.content}
                <div class="date-label">${year}</div> <!-- Mostrar solo el año -->
            </div>`;
        }
    };

    // Crear la timeline
    var container = document.getElementById('timeline');
    var timeline = new vis.Timeline(container, items, options);

    // Variables para el estado de arrastre
    var isDragging = false;

    // Evento para comenzar el arrastre
    container.addEventListener('mousedown', function () {
        isDragging = true;
    });

    // Evento para terminar el arrastre
    container.addEventListener('mouseup', function () {
        isDragging = false;
    });

    // Evento para mover la línea de tiempo
    container.addEventListener('mousemove', function (event) {
        if (isDragging) {
            event.preventDefault();
        }
    });

    // Permitir el scroll de la página cuando no se está arrastrando
    container.addEventListener('wheel', function (event) {
        if (!isDragging) {
            return; // Permitir el scroll de la página
        }
        event.preventDefault(); // Evitar el scroll de la página si se está arrastrando
    });
});
