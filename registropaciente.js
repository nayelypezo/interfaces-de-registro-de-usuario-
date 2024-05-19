function registrarNuevoPaciente() {
  var nombreCompleto = document.getElementById("nombreCompleto").value;
  var cedula = document.getElementById("cedula").value;
  var edad = document.getElementById("edad").value;
  var facultad = document.getElementById("facultad").value;
  var genero = document.getElementById("genero").value;
  var observaciones = document.getElementById("observaciones").value;
  var asistencia = document.getElementById("asistencia").value;

  // Restablecer los mensajes de restricción
  document.getElementById("nombreCompleto").setCustomValidity('');
  document.getElementById("cedula").setCustomValidity('');
  document.getElementById("facultad").setCustomValidity('');
 
  // Validar que los campos requeridos no estén vacíos
  if (nombreCompleto === "" || cedula === "" || edad === "" || facultad === "" || genero === "") {
      alert("Por favor, completa todos los campos obligatorios.");
      return; // Detener la ejecución si hay campos vacíos
  }

  // Validar el campo nombreCompleto
  if (/\d/.test(nombreCompleto)) {
      document.getElementById("nombreCompleto").setCustomValidity('El nombre no puede contener números.');
  }

  // Validar el campo cedula
  if (isNaN(cedula)) {
      document.getElementById("cedula").setCustomValidity('La cédula solo puede contener números.');
  }

  // Validar el campo facultad
  if (!/^[A-Za-z\s]+$/.test(facultad)) {
      document.getElementById("facultad").setCustomValidity('El nombre de la facultad solo puede contener letras.');
  }

  // Si hay algún mensaje de restricción, mostrarlo
  var invalidInputs = document.querySelectorAll(':invalid');
  if (invalidInputs.length > 0) {
      invalidInputs.forEach(input => {
          input.reportValidity();
      });
      return;
  }
  document.getElementById("register-form").style.display = "none";
            document.getElementById("success-message").style.display = "block";
            return false; // Evitar que el formulario se envíe realmente

  function mostrarMensajeSuperior(mensaje) {
    var mensajeSuperior = document.getElementById("mensajeSuperior");
    mensajeSuperior.textContent = mensaje;
    mensajeSuperior.style.display = "block"; // Mostrar el mensaje
    // Desaparecer el mensaje después de 20 segundos
    setTimeout(function() {
        mensajeSuperior.style.display = "none"; // Ocultar el mensaje
    }, 250000); // 20 segundos en milisegundos

   
}
}

  



