// Obtener referencias a los elementos
const dropdown = document.getElementById('dropdown');
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const opciones = document.querySelectorAll('.dropdown__item');

let seleccionActual = null;

// Al hacer clic en el botón, alterna la visibilidad del menú
toggle.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Al hacer clic en una opción
opciones.forEach(opcion => {
  opcion.addEventListener('click', () => {
    // Actualizar texto seleccionado
    toggle.textContent = opcion.textContent;

    // Marcar visualmente la selección
    opciones.forEach(o => o.classList.remove('selected'));
    opcion.classList.add('selected');

    // Cerrar el menú
    dropdown.classList.remove('open');
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (evento) => {
  if (!dropdown.contains(evento.target)) {
    dropdown.classList.remove('open');
  }
});
