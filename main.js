// Variables para almacenar los datos del usuario
var userData = {
    nombre: '',
    email: '',
    telefono: '',
    mascotas: 1
};

// Pasos del asist
var currentStep = 1;

// Obtener referencias a los elementos HTML
var step1Form = document.getElementById("step1Form");
var step2Form = document.getElementById("step2Form");
var summaryContent = document.getElementById("summaryContent");
var generateSummaryButton = document.getElementById("generateSummaryButton");

generateSummaryButton.addEventListener("click", function() {
    // Generar y mostrar el resumen
    generarResumen();

    // Habilitar la exportación a PDF
    habilitarExportarPDF();
});

function generarResumen() {
    // Actualizar userData con los datos del formulario
    userData.nombre = step1Form.elements.nombre.value;
    userData.email = step1Form.elements.email.value;
    userData.telefono = step2Form.elements.telefono.value;
    userData.mascotas = step2Form.elements.mascotas.value;

    // Genera el resumen con los datos recopilados
    var resumen = "Nombre: " + userData.nombre + "<br>";
    resumen += "Correo Electrónico: " + userData.email + "<br>";
    resumen += "Teléfono: " + userData.telefono + "<br>";
    resumen += "Cantidad de Mascotas: " + userData.mascotas + "<br>";

    summaryContent.innerHTML = resumen;
}

function habilitarExportarPDF() {
    // Mostrar el botón de exportar a PDF
    var exportButton = document.createElement("button");
    exportButton.innerText = "Exportar a PDF";
    exportButton.addEventListener("click", function() {
        // Generar y descargar el PDF
        generarPDF();
    });
    summaryContent.appendChild(exportButton);
}

function generarPDF() {
    var doc = new jsPDF();
    doc.text(10, 10, "Resumen del formulario:");
    doc.text(10, 20, "Nombre: " + userData.nombre);
    doc.text(10, 30, "Correo Electrónico: " + userData.email);
    doc.text(10, 40, "Teléfono: " + userData.telefono);
    doc.text(10, 50, "Cantidad de Mascotas: " + userData.mascotas);

    // Guardar el PDF con un nombre específico
    doc.save("resumen_formulario.pdf");
}