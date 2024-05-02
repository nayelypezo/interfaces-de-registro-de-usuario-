document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Aquí podrías agregar la lógica de registro de usuario
  
  // Muestra el mensaje de registro exitoso
  var message = document.getElementById('message');
  message.textContent = "¡Usuario registrado exitosamente!";
  message.style.display = "block"; // Mostrar el mensaje

  setTimeout(function() {
    message.style.display = "none"; // Ocultar el mensaje después de 3 segundos
  }, 3000);
});
