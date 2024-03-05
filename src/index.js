import { loadHomepage } from "./home.js";
import { loadAboutpage } from "./about.js";
import { loadMenupage } from "./menu.js";

const container = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');

document.addEventListener('DOMContentLoaded', loadHomepage);

homeButton.addEventListener('click', ()=> {
  container.innerHTML = '';
  loadHomepage();
});

menuButton.addEventListener('click', ()=> {
  container.innerHTML = '';
  loadMenupage();
});

aboutButton.addEventListener('click', ()=> {
  container.innerHTML = '';
  loadAboutpage();
});
