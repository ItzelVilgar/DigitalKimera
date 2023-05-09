const logos = {
    "ABAK": "images/Logotiposhechos/ABAK.png",
    "HUNNAB": "images/Logotiposhechos/HUNNAB.png",
    "KING": "images/Logotiposhechos/KING.png",
    "LEON": "images/Logotiposhechos/LEON.png",
    "PREDIAL": "images/Logotiposhechos/PREDIAL.png",
    "SIAAPIB": "images/Logotiposhechos/SIAAPIB.png",
    "SIAU": "images/Logotiposhechos/SIAU.png",
    "VIGMA": "images/Logotiposhechos/VIGMA.png"
  };
  
  const logoArea = document.querySelector('.logo-area');
  logoArea.style.backgroundColor = '#111a1f';
  logoArea.style.paddingTop = '50px';
  logoArea.style.paddingBottom = '50px';
  
  const logoCarousel = document.querySelector('.logo-carousel');
  for (const logo in logos) {
    const logoItem = document.createElement('div');
    logoItem.classList.add('logo-item');
  
    const logoImage = document.createElement('img');
    logoImage.src = logos[logo];
    logoImage.style.minWidth = '50px';
    logoImage.style.maxWidth = '65px';
    logoImage.style.marginLeft = 'auto';
    logoImage.style.marginRight = 'auto';
  
    logoItem.appendChild(logoImage);
    logoCarousel.appendChild(logoItem);
  }
  
  // Clonar todo el conjunto de elementos del carrusel y agregarlo al final
  const logoItems = logoCarousel.querySelectorAll('.logo-item');
  logoCarousel.appendChild(logoItems[0].cloneNode(true));
  logoCarousel.appendChild(logoItems[1].cloneNode(true));
  logoCarousel.appendChild(logoItems[2].cloneNode(true));
  logoCarousel.appendChild(logoItems[3].cloneNode(true));
  logoCarousel.appendChild(logoItems[4].cloneNode(true));
  logoCarousel.appendChild(logoItems[5].cloneNode(true));
  logoCarousel.appendChild(logoItems[6].cloneNode(true));
  logoCarousel.appendChild(logoItems[7].cloneNode(true));
  logoCarousel.appendChild(logoItems[0].cloneNode(true));
  logoCarousel.appendChild(logoItems[1].cloneNode(true));
  logoCarousel.appendChild(logoItems[2].cloneNode(true));
  logoCarousel.appendChild(logoItems[3].cloneNode(true));
  
  console.log("Logo count before cloning:", logoCarousel.children.length);
  
  const companies = Object.keys(logos);
  
  const intervalo = 2000; // 1 segundos
  const duracionTransicion = 2000; // 1 segundo
  let index = 0;
  
  const logoCount = logoCarousel.children.length;
  setInterval(() => {
    index++;
    logoCarousel.style.transition = `transform ${duracionTransicion / 1000}s linear`;
    logoCarousel.style.transform = `translateX(-${index * 20}%)`;
    if (index >= logoCount - 1) {
      setTimeout(() => {
        index = 0;
        logoCarousel.style.transition = 'none';
        logoCarousel.style.transform = `translateX(0)`;
      }, duracionTransicion);
    }
  }, intervalo);
  