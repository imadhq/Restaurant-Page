export const loadAboutpage = () => { 
  const contentContainer = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = 'Smokeys';
  contentContainer.appendChild(title);

  const headline = document.createElement('h2');
  headline.textContent = 'Contact Us';
  contentContainer.appendChild(headline);

  const image = document.createElement('img');
  image.src = '..//dist/images/about.jpg';
  contentContainer.appendChild(image);

  const address = document.createElement('h2');
  address.textContent = 'Location: 291 Oxford St, London, W1C 2DT';
  contentContainer.appendChild(address);

  const contactInfo = document.createElement('h2');
  contactInfo.textContent = 'Phone: 020 7946 0097 | Email: contact@smokeys.com';
  contentContainer.appendChild(contactInfo);
}