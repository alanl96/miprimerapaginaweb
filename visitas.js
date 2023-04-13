let currentStep = 1;

function nextStep() {
  if (currentStep === 1) {
    const nameInput = document.getElementById('name-input').value;
    if (nameInput !== '') {
      document.getElementById('name-output').textContent = nameInput;
      document.getElementById('paso1').style.display = 'none';
      document.getElementById('paso2').style.display = 'block';
      currentStep = 2;
    }
  } else if (currentStep === 2) {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput !== '') {
      document.getElementById('email-output').textContent = emailInput;
      document.getElementById('paso2').style.display = 'none';
      document.getElementById('turno').style.display = 'block';
      currentStep = 3;
    }
  }
  else if (currentStep === 3) {
    const turnoSelect = document.getElementById('turno-select').value;
    if (turnoSelect !== '') {
      document.getElementById('turno-output').textContent = turnoSelect;
      document.getElementById('turno').style.display = 'none';
      document.getElementById('paso3').style.display = 'block';
      currentStep = 4;
    }
  }
}

function showAllData() {
  const nameInput = document.getElementById('name-input').value;
  const emailInput = document.getElementById('email-input').value;
  const turnoSelect = document.getElementById('turno-select').value;

  document.getElementById('name-output').textContent = nameInput;
  document.getElementById('email-output').textContent = emailInput;
  document.getElementById('turno-output').textContent = turnoSelect;

  document.getElementById('paso3').style.display = 'block';
}

// Mostrar el primer paso al inicio
document.getElementById('paso1').style.display = 'block';
document.getElementById('paso2').style.display = 'none';
document.getElementById('turno').style.display = 'none';
document.getElementById('paso3').style.display = 'none';


// Agregar event listener al botón de "Exportar a PDF"
$('#export-pdf').click(function() {
    // Obtener el contenido HTML del elemento que queremos exportar
    const content = $('#finform').html();
  
    // Crear un objeto jsPDF y agregar el contenido
    const doc = new jsPDF();
    doc.fromHTML(content);
  
    // Descargar el PDF
    doc.save('informacion.pdf');
  });

  