// Paso 1 Crea una variable que almacene el número de la diapositiva actual (empezando por 0).
let currentSlide = 0;

// Paso 2 Crea una variable para almacenar el intervalo de tiempo entre las diapositivas (por ejemplo, 5000 ms).
const slideInterval = 5000;

// Paso 3 Crea una variable para almacenar el objeto del contenedor de las diapositivas.
const slider = document.getElementById('slider');

// Paso 4 Crea una variable para almacenar un array con los objetos de cada diapositiva.
const slides = [
  {
    title: 'UX\nUI',
    status: 'Diseño de experiencias digitales que mejoran la usabilidad, accesibilidad y satisfacción del usuario.',
    image: 'images/banner/1.jpg'
  },
  {
    title: 'Digital\nMarketing',
    status: 'Estrategias digitales para promocionar tu marca y llegar a más clientes potenciales a través de canales como redes sociales, publicidad online y email marketing.',
    image: 'images/banner/2.jpg'
  },
  {
    title: 'Manual de\nidentidad',
    status: 'Creación de un manual de marca que establece los lineamientos y normas para la correcta aplicación de la identidad visual de tu empresa, incluyendo logotipo, colores, tipografía y otros elementos.',
    image: 'images/banner/3.jpg'
  },
  {
    title: 'Páginas\nweb',
    status: 'Diseño y desarrollo de páginas web personalizadas, adaptadas a las necesidades de tu empresa y optimizadas para buscadores.',
    image: 'images/banner/4.jpg'
  },
  {
    title: 'Fotografia',
    status: 'Servicio de fotografía profesional para productos, eventos, retratos y más.',
    image: 'images/banner/5.jpg'
  },
  {
    title: 'Multimedia',
    status: 'Producción de contenidos multimedia como videos, animaciones, presentaciones y otros recursos visuales para promocionar tu empresa.',
    image: 'images/banner/6.jpg'
  },
  {
    title: 'Ilustración Digital',
    status: 'Creación de ilustraciones únicas y personalizadas, que se adaptan a tus necesidades específicas.',
    image: 'images/banner/7.jpg'
  }

];

// Paso 5 Crea una función para actualizar la diapositiva actual
function updateSlide() {
  const slideTitle = document.getElementById('slide-title');
  const slideStatus = document.getElementById('slide-status');
  const slideImage = document.querySelector('.sliderimg');
  const currentSlideObj = slides[currentSlide];

  slideTitle.textContent = currentSlideObj.title;
  slideStatus.textContent = currentSlideObj.status;
  slideImage.src = currentSlideObj.image;
}


// Paso 6 Crea una función que se ejecute periódicamente y actualice la diapositiva actual.
function startSlideShow() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  }, slideInterval);
}

// Paso 7 Añade eventos a los botones de paginación para cambiar la diapositiva actual.
const paginationButtons = document.querySelectorAll('.buttonslide');

paginationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentSlide = button.dataset.slide;
    updateSlider();
  });
});
// Paso 8 Añade un evento al objeto contenedor de las diapositivas para que la función periódica se detenga cuando el cursor está encima del slider.
function updateSlider() {
    const title = document.getElementById('slide-title');
    const status = document.getElementById('slide-status');
    const sliderImages = document.querySelectorAll('.sliderimg');
    const slideTitle = document.querySelector(`[data-slide-title="${currentSlide}"]`);
    const slideStatus = document.querySelector(`[data-slide-status="${currentSlide}"]`);
    const slideImage = document.querySelector(`.sliderimg:nth-of-type(${parseInt(currentSlide) + 1})`);
  
    // Actualizar título y descripción del slide actual
    title.innerHTML = slideTitle.innerHTML;
    status.innerHTML = slideStatus.innerHTML;
  
    // Mostrar la imagen correspondiente al slide actual y ocultar las demás
    sliderImages.forEach((image) => {
      image.style.display = 'none';
    });
    slideImage.style.display = 'block';
  
    // Actualizar botones de paginación
    paginationButtons.forEach((button) => {
        button.classList.remove('active');
      });
      paginationButtons[currentSlide].classList.add('active');
    }
    