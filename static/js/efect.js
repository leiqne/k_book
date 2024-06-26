function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    (function fade() {
        var val = parseFloat(element.style.opacity);
        if (!((val += 0.1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function fadeOut(element) {
    element.style.opacity = 1;

    (function fade() {
        if ((element.style.opacity -= 0.1) < 0) {
            element.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
}
function toggleIntegrantes() {
    var container = document.getElementsByClassName("integrantes")[0];
    var toggleButton = document.getElementById("toggleButton");

    if (container.style.display === "none" || container.style.display === "") {
        fadeIn(container);
        toggleButton.textContent = "Ver menos";
    } else {
        fadeOut(container);
        toggleButton.textContent = "Ver más";
    }
}
//carrusel 1 con nav dots
document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.querySelector('.slider-contenedor');
    let sliderItems = document.querySelectorAll('.slider-test');
    let dots = document.querySelectorAll('.dot');
    let contador = 0;
    let tamW = sliderItems[0].clientWidth;
    let intervalo = 5000;

    // Clona los elementos para un deslizamiento continuo
    let sliderLength = sliderItems.length;
    for (let i = 0; i < sliderLength; i++) {
        let clone = sliderItems[i].cloneNode(true);
        slider.appendChild(clone);
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(${-tamW * contador}px)`;
        slider.style.transition = 'transform 0.5s ease-in-out';
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === contador % sliderLength) {
                dot.classList.add('active');
            }
        });
    }

    function slides() {
        contador++;
        updateSliderPosition();

        if (contador === sliderItems.length) {
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0px)`;
                contador = 0;
                updateDots();
            }, 500); // Ajusta el tiempo para que coincida con la duración de la transición
        }
    }

    let autoSlide = setInterval(slides, intervalo);
    const nextBtn = document.querySelector('.flecha-der');
    const prevBtn = document.querySelector('.flecha-izq');

    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        slides();
        autoSlide = setInterval(slides, intervalo);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        contador = (contador === 0) ? sliderItems.length - 1 : contador - 1;
        updateSliderPosition();
        autoSlide = setInterval(slides, intervalo);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlide);
            contador = index;
            updateSliderPosition();
            autoSlide = setInterval(slides, intervalo);
        });
    });

    window.addEventListener('resize', () => {
        tamW = sliderItems[0].clientWidth;
        updateSliderPosition();
    });
});
//carrusel 2
document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.querySelector('.carrusel');
    let sliderItems = document.querySelectorAll('.casos-exito');
    let contador = 0;
    let tamW = sliderItems[0].clientWidth;
    let intervalo = 5000;

    // Clona los elementos para un deslizamiento continuo
    let sliderLength = sliderItems.length;
    for (let i = 0; i < sliderLength; i++) {
        let clone = sliderItems[i].cloneNode(true);
        slider.appendChild(clone);
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(${-tamW * contador}px)`;
        slider.style.transition = 'transform 0.5s ease-in-out';
    }

    function slides() {
        contador++;
        updateSliderPosition();

        if (contador === sliderItems.length) {
            setTimeout(() => {
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0px)`;
                contador = 0;
            }, 500); // Ajusta el tiempo para que coincida con la duración de la transición
        }
    }
    let autoSlide = setInterval(slides, intervalo);
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        slides();
        autoSlide = setInterval(slides, intervalo);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        contador = (contador === 0) ? sliderItems.length - 1 : contador - 1;
        updateSliderPosition();
        autoSlide = setInterval(slides, intervalo);
    });

    window.addEventListener('resize', () => {
        tamW = sliderItems[0].clientWidth;
        updateSliderPosition();
    });
});
//acordeon faqs
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".FAQs");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
            const respuesta = faq.querySelector(".respuesta");
            if (faq.classList.contains("active")) {
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            } else {
                respuesta.style.maxHeight = "0";
            }
        });
    });
});
//nav
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.nav1');
    const logo = document.querySelector('.logo');
  
    function handleScroll() {
        const scrollDistance = window.scrollY;

        if (scrollDistance > 0) {
            nav.classList.add('active');
            logo.classList.add('hide'); 
        } else {
            nav.classList.remove('active');
            logo.classList.remove('hide'); 
        }
    }

    window.addEventListener('scroll', handleScroll);

    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }

    handleScroll(); // Ensure nav is styled correctly on load
});

  
  


