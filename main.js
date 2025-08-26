function descargarPDF() {
  var elemento = document.querySelector(".tarjeta-horario");
  var opciones = {
    margin: 0.5,
    filename: 'Horario_Grado_602.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opciones).from(elemento).save();
}