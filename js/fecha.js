function establecerFechaActual(fechaElement) {
    // Obtener la fecha actual
    var currentDate = new Date();

    // Formatear la fecha como deseado (por ejemplo, "DD/MM/AAAA")
    var formattedDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

    // Establecer el texto del elemento <a> como la fecha formateada
    fechaElement.textContent = formattedDate;
}