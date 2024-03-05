export const loadMenupage = () => { 
  const contentContainer = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = 'Smokeys';
  contentContainer.appendChild(title);

  const headline = document.createElement('h2');
  headline.textContent = 'Menu';
  contentContainer.appendChild(headline);

  const image = document.createElement('img');
  image.src = '..//dist/images/menu.jpg';
  contentContainer.appendChild(image);

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  const item1 = document.createElement('div');
  const item2 = document.createElement('div');
  const item3 = document.createElement('div');
  const item4 = document.createElement('div');

  item1.innerHTML = `<p>Chicken Tikka</p>
  <p>£10.95</p>`;
  item2.innerHTML = `<p>Naan Bread</p>
  <p>£4.95</p>`;
  item3.innerHTML = `<p>Onion Bhaji</p>
  <p>£6.95</p>`;
  item4.innerHTML = `<p>Mint Chutney</p>
  <p>£2.95</p>`;

  menuContainer.appendChild(item1);
  menuContainer.appendChild(item2);
  menuContainer.appendChild(item3);
  menuContainer.appendChild(item4);

  contentContainer.appendChild(menuContainer);
}