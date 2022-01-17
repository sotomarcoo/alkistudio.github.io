const menu = document.querySelector('.menu ');
const btnMenu = document.querySelector('.btnMenu');

const ulMenu = document.querySelector('.ulMenu ');
btnMenu.addEventListener('click', ()=>{
  ulMenu.classList.toggle('active');
  
})

const lis = menu.querySelectorAll('a');


const inicio = lis[0];
const services = lis[1];
const proyectos = lis[2];
const acerca = lis[3];

inicio.addEventListener('click', () => {
  ulMenu.classList.remove('active');
})
services.addEventListener('click', () => {
  ulMenu.classList.remove('active');
})
proyectos.addEventListener('click', () => {
  ulMenu.classList.remove('active');
})

acerca.addEventListener('click', () => {
  ulMenu.classList.toggle('active');
})

const btnContact = document.querySelector('.contacto');

const ulNav = document.querySelector('.ulMenu');



