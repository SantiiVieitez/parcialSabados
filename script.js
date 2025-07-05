function validarFormulario() {
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  if (!email.value.includes("@")) {
    alert("Por favor, ingresá un email válido.");
    return false;
  }

  if (mensaje.value.trim() === "") {
    alert("El mensaje no puede estar vacío.");
    return false;
  }

  return true;
}