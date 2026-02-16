function saludar(nombre, genero) 
{
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo = "";

  if (horaActual < 12) 
  {
    saludo = "Buenos días";
  } 
  else if (horaActual < 19) 
  {
    saludo = "Buenas tardes";
  } 
  else 
  {
    saludo = "Buenas noches";
  }

  let trato = "";
  if (edad > 30) 
    {
      if (genero === "M") 
        {
      trato = "Sr."; 
      } 
      else 
      {
      trato = "Sra."; 
      }
    } 
    else 
    {
      if (genero === "M") 
      {
        trato = "estimado "; 
      } 
      else 
      {
        trato = "estimada "; 
      }
    }

  return saludo + " " + trato + nombre;
}

export default saludar;