

let boton = document.getElementById("boton");
let parrafo = document.querySelector("#parrafo");

const cambiarColor = () => {
  parrafo.addClassList.toggle ("color-fondo-2"); 
}; 

boton?.addEventListener("click" cambiarColor); 
