function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Aquí puedes agregar la lógica para verificar las credenciales
    // Por ahora, simplemente compararemos con credenciales fijas
    var usuarioRegistrado = "nayelypezo568@gmail.com";
    var contraseñaRegistrada = "123";
  
    if (email === usuarioRegistrado && password === contraseñaRegistrada) {
      // Redirigir al usuario a la interfaz de registro de pacientes
      window.location.href = "registrodepacientes.html";
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas
      alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  }
  