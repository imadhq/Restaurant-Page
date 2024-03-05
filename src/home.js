export const loadHomepage = () => { 
  const contentContainer = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = 'Smokeys';
  contentContainer.appendChild(title);

  const headline = document.createElement('h2');
  headline.textContent = 'Welcome to Smokeys, where flavour comes first.';
  contentContainer.appendChild(headline);

  const image = document.createElement('img');
  image.src = '..//dist/images/home.jpg';
  contentContainer.appendChild(image);

  const infoText = document.createElement('h2');
  infoText.textContent = 'At Smokeys, we bring you flavour, aesthetics and great vibes. Our menu is packed with unique asian fusion dishes.';
  contentContainer.appendChild(infoText);

  const contactUs = document.createElement('h2');
  contactUs.textContent = 'Contact us to book a table.';
  contentContainer.appendChild(contactUs);
}