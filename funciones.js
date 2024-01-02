function Validacion() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const email = document.getElementById("email").value;
  const vC =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //alert ("Esta es tu información: "+ nombre+", "+ telefono+ ", "+direccion+", "+email);

  //se realiza la validación
  if (nombre.length > 30) {
    alert("El nombre registrado supera los 30 caracteres");
  } else if (telefono.length != 10) {
    alert("El número telefonico se debe indicar a 10 digitos");
  } else if (direccion.length > 100) {
    alert("La dirección indicada debe ser menor a 100 caracteres");
  } else if (vC.test(email)) {
    alert(
      "Gracias por tu mensaje, revisaremos tu información y pronto estaremos en contacto contigo"
    );
    return true;
  } else {
    alert("El correo electronico es incorrecto");
    return false;
  }
}
