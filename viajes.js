const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const header = document.createElement('header');

const logo = document.createElement('div');
logo.innerHTML = `<img src="imagenes/logo-azul-marino-viajes.jpg" alt="Logo" class="logo">`;
header.appendChild(logo);

const nav = document.createElement('nav');
const navItems = ['Inicio', 'Nosotros', 'Servicios', 'Contacto'];
navItems.forEach(item => {
    const navLink = document.createElement('a');
    navLink.href = '#';
    navLink.textContent = item;
    navLink.classList.add('nav-link');
    nav.appendChild(navLink);
});
header.appendChild(nav);
container.appendChild(header);

const section1 = document.createElement('section');
section1.classList.add('section-flex');

const img1 = document.createElement('img');
img1.src = 'imagenes/puerta.jpg';
img1.alt = 'Imagen 1';
img1.classList.add('image-flex');

const textDiv = document.createElement('div');
textDiv.innerHTML = `
    <h2>Este es el titular del div de texto</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <button class="button-main">Ver más</button>
`;
section1.appendChild(img1);
section1.appendChild(textDiv);
container.appendChild(section1);

const section2 = document.createElement('section');
section2.classList.add('section-standard');
section2.innerHTML = `
    <h2>Este es el titular de la sección 2</h2>
    <img src="imagenes/foto5.jpg" alt="Imagen 2" class="section-image">
`;
container.appendChild(section2);

const section3 = document.createElement('section');
section3.classList.add('section-flex');

const images = ['imagenes/barco.jpg', 'imagenes/kayak.jpeg', 'imagenes/avion.jpg'];
images.forEach(src => {
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Imagen de sección 3';
    img.classList.add('section-image');

    const caption = document.createElement('p');
    caption.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const button = document.createElement('button');
    button.textContent = 'Comprar';
    button.classList.add('button-main');

    imgContainer.appendChild(img);
    imgContainer.appendChild(caption);
    imgContainer.appendChild(button);

    section3.appendChild(imgContainer);
});

container.appendChild(section3);
