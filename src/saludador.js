function saludar(nombre, genero, edad, idioma) 
{
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo = "";

if (idioma === "en") {
    if (horaActual < 12) {
      saludo = "Good morning ";
    } else if (horaActual < 19) {
      saludo = "Good afternoon ";
    } else {
      saludo = "Good evening ";
    }
  } else {
    if (horaActual < 12) {
      saludo = "Buenos dias ";
    } else if (horaActual < 19) {
      saludo = "Buenas tardes ";
    } else {
      saludo = "Buenas noches ";
    }
  }

  let trato = "";
  if (idioma === "en") {
    if (edad > 30) {
      if (genero === "M") {
        trato = "Mr. ";
      } else {
        trato = "Mrs. ";
      }
    } else {
      trato = "Dear ";
    }
  } else {
    if (edad > 30) {
      if (genero === "M") {
        trato = "Sr.";
      } else {
        trato = "Sra. ";
      }
    } else {
      if (genero === "M") {
        trato = "estimado ";
      } else {
        trato = "estimada ";
      }
    }
  }

  return saludo + " " + trato + " " + nombre;
}

export default saludar;