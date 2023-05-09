const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".opcion"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});
/// Obtener el elemento del menú
const menu = document.querySelector('.select-menu');

// Obtener el div que quieres mostrar/ocultar
const cotizacion = document.querySelector('#CotUXUI');

// Agregar un event listener al menú
menu.addEventListener('click', (event) => {
  // Obtener la opción seleccionada
  const opcionSeleccionada = event.target.closest('.opcion');

  if (opcionSeleccionada) {
    // Ocultar todos los divs de cotización
    document.querySelectorAll('.content').forEach((div) => {
      div.style.display = 'none';
    });

    // Mostrar solo el div correspondiente a la opción seleccionada
    const target = opcionSeleccionada.dataset.target;
    document.querySelector(`#${target}`).style.display = 'block';
  }
});



//FORMULARIO 1//
function guardar (){
let Correo = document.getElementById('Correo').value;
let Nombre_Proyecto = document.getElementById('nombre-proyecto').value;
let Publico = document.getElementById('publico-objetivo').value;
let Requisitos = document.getElementById('Requisitos').value;
let Resultado = document.getElementById('resultado-esperado').value;
let Caracteristicas = document.getElementById('c-principales').value;
let Especificacion = document.getElementById('Especificacion').value;


let inputValues = {
  "Nombre": Nombre_Proyecto,
  "Publico": Publico,
  "Requisitos": Requisitos,
  "Resultado": Resultado,
  "Caracteristicas": Caracteristicas,
  "Especificacion": Especificacion
};

  // Guardar datos en localStorage
  localStorage.setItem('inputValues', JSON.stringify(inputValues));

  // Recuperar datos de localStorage
  let datos = JSON.parse(localStorage.getItem('datos')) || [];
  console.log(inputValues);
  datos.push(inputValues);
  console.log(datos);
  localStorage.setItem('datos', JSON.stringify(datos));

  document.getElementById('nombre-proyecto').value = ''
  document
}
