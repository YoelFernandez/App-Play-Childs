"use strict";

const categories = [
  {
    id: "terrestres",
    name: "Animales terrestres",
    icon: "🐾",
    color: "#64e6b5",
    enabled: false,
    description: "Conoce a los animales que caminan, corren y juegan sobre la tierra.",
    previews: [
      "insumos/1. ANIMALES TERRESTRES/GATO/GATO.png",
      "insumos/1. ANIMALES TERRESTRES/LEÓN/LEÓN.jpg",
    ],
    animals: ["gato", "jirafa", "leon", "mono", "oso", "perro", "tigre"],
  },
  {
    id: "aves",
    name: "Aves",
    icon: "🪶",
    color: "#57d4ff",
    enabled: true,
    description: "Descubre aves sorprendentes, sus plumas y los lugares donde viven.",
    previews: [
      "insumos/2AVES/AVESTRUZ/avestruz.png",
      "insumos/2AVES/ÁGUILA/imagen.png",
    ],
    animals: ["avestruz", "buho", "condor", "aguila"],
  },
  {
    id: "reptiles",
    name: "Reptiles y anfibios",
    icon: "🦎",
    color: "#c7f15b",
    enabled: false,
    description: "Muy pronto conocerás a quienes reptan, saltan y cambian de piel.",
    previews: [],
    animals: [],
  },
  {
    id: "insectos",
    name: "Insectos",
    icon: "🦋",
    color: "#ffb84d",
    enabled: false,
    description: "Explora un pequeño gran mundo de alas, antenas, patas y muchos colores.",
    previews: [
      "insumos/4. INSECTOS/MARIPOSA/MARIPOSA.jpg",
      "insumos/4. INSECTOS/ARAÑA/ARAÑA.png",
    ],
    animals: ["arana", "hormiga", "mariposa"],
  },
  {
    id: "marinos",
    name: "Acuáticos y marinos",
    icon: "🐋",
    color: "#4fb4ff",
    enabled: false,
    description: "Pronto nos sumergiremos para explorar la vida en el océano.",
    previews: [],
    animals: [],
  },
  {
    id: "agua-dulce",
    name: "Agua dulce",
    icon: "🦦",
    color: "#b69cff",
    enabled: false,
    description: "Ríos y lagos esconden animales increíbles que conoceremos pronto.",
    previews: [],
    animals: [],
  },
];

const animals = {
  gato: {
    id: "gato",
    category: "terrestres",
    name: "Gato",
    icon: "🐈",
    ready: true,
    image: "insumos/1. ANIMALES TERRESTRES/GATO/GATO.png",
    intro:
      "El gato es ágil, curioso y muy observador. Puede saltar con suavidad y usa sus bigotes para conocer lo que hay a su alrededor.",
    habitatText:
      "Muchos gatos viven con las personas en hogares seguros, con un lugar cómodo para dormir, jugar y descansar.",
    habitatImage:
      "insumos/1. ANIMALES TERRESTRES/GATO/HABITAT_GATO.png",
    foodText:
      "El gato necesita comida especial para felinos y siempre debe tener agua fresca. La leche no es una buena bebida para todos los gatos.",
    foods: [
      {
        name: "Agua fresca",
        image:
          "insumos/1. ANIMALES TERRESTRES/GATO/ALIMENTACION/ALIMENTO_001.png",
      },
    ],
    audio:
      "insumos/1. ANIMALES TERRESTRES/GATO/GATO.mp3",
  },
  jirafa: {
    id: "jirafa",
    category: "terrestres",
    name: "Jirafa",
    icon: "🦒",
    ready: false,
    image: null,
  },
  leon: {
    id: "leon",
    category: "terrestres",
    name: "León",
    icon: "🦁",
    ready: true,
    image:
      "insumos/1. ANIMALES TERRESTRES/LEÓN/LEÓN.jpg",
    intro:
      "El león es un felino fuerte y sociable. Vive en grupos llamados manadas y su rugido puede escucharse desde muy lejos.",
    habitatText:
      "Los leones viven principalmente en sabanas: grandes llanuras con pastos, árboles dispersos y lugares donde encontrar agua.",
    habitatImage:
      "insumos/1. ANIMALES TERRESTRES/LEÓN/HABITAT_LEÓN.jpg",
    foodText:
      "El león es carnívoro y se alimenta de carne. Las imágenes de su alimentación todavía no están disponibles en los insumos.",
    foods: [],
    audio: "insumos/1. ANIMALES TERRESTRES/LEÓN/LEÓN.mp3",
  },
  mono: {
    id: "mono",
    category: "terrestres",
    name: "Mono",
    icon: "🐒",
    ready: false,
    image: "insumos/1. ANIMALES TERRESTRES/MONO/MONO.jpg",
  },
  oso: {
    id: "oso",
    category: "terrestres",
    name: "Oso",
    icon: "🐻",
    ready: false,
    image:
      "insumos/1. ANIMALES TERRESTRES/OSO/OSO.png",
  },
  perro: {
    id: "perro",
    category: "terrestres",
    name: "Perro",
    icon: "🐕",
    ready: false,
    image: null,
  },
  tigre: {
    id: "tigre",
    category: "terrestres",
    name: "Tigre",
    icon: "🐅",
    ready: false,
    image: null,
  },
  avestruz: {
    id: "avestruz",
    category: "aves",
    name: "Avestruz",
    icon: "🪶",
    ready: true,
    image: "insumos/2AVES/AVESTRUZ/avestruz.png",
    intro:
      "El avestruz es el ave más grande del mundo. No puede volar, pero sus largas y fuertes patas le permiten correr muy rápido.",
    habitatText:
      "El avestruz vive en sabanas y zonas abiertas de África, donde puede correr y observar grandes distancias.",
    habitatImage: "insumos/2AVES/AVESTRUZ/habitat.png",
    foodText:
      "El avestruz come principalmente plantas, semillas, frutos y flores. A veces también prueba pequeños insectos.",
    foods: [
      {
        name: "Pasto",
        image: "insumos/2AVES/AVESTRUZ/COMIDA/CA1.PNG",
      },
      { name: "Hojas", image: "insumos/2AVES/AVESTRUZ/COMIDA/CA2.PNG" },
      { name: "Semillas", image: "insumos/2AVES/AVESTRUZ/COMIDA/CA3.PNG" },
      { name: "Frutos silvestres", image: "insumos/2AVES/AVESTRUZ/COMIDA/CA4.PNG" },
      { name: "Saltamontes", image: "insumos/2AVES/AVESTRUZ/COMIDA/CA5.PNG" },
      { name: "Lagartija", image: "insumos/2AVES/AVESTRUZ/COMIDA/CA6.PNG" },
    ],
    audio: null,
  },
  buho: {
    id: "buho",
    category: "aves",
    name: "Búho",
    icon: "🦉",
    ready: true,
    image: "insumos/2AVES/BÚHO/imagen.png",
    intro:
      "El búho ve muy bien cuando hay poca luz y puede volar casi sin hacer ruido. Gira su cabeza para observar todo a su alrededor.",
    habitatText:
      "Muchos búhos viven en bosques y descansan en árboles, huecos o nidos protegidos durante el día.",
    habitatImage: "insumos/2AVES/BÚHO/habitat.png",
    foodText:
      "El búho es cazador. Según su tamaño y especie, puede alimentarse de pequeños animales como ratones, ranas, conejos, lagartijas y peces.",
    foods: [
      { name: "Pez", image: "insumos/2AVES/BÚHO/Imagen de comida/1784644619109.png" },
      { name: "Rana", image: "insumos/2AVES/BÚHO/Imagen de comida/1784644620880.png" },
      { name: "Lagartija", image: "insumos/2AVES/BÚHO/Imagen de comida/1784644622460.png" },
      { name: "Conejo", image: "insumos/2AVES/BÚHO/Imagen de comida/1784644624044.png" },
      { name: "Ratón", image: "insumos/2AVES/BÚHO/Imagen de comida/1784644626188.png" },
    ],
    audio: "insumos/2AVES/BÚHO/búho.mp3",
  },
  condor: {
    id: "condor",
    category: "aves",
    name: "Cóndor",
    icon: "🦅",
    ready: true,
    image: "insumos/2AVES/CÓNDOR/condor.png",
    intro:
      "El cóndor andino es un ave enorme que planea usando las corrientes de aire. Sus grandes alas le permiten recorrer largas distancias con poco esfuerzo.",
    habitatText:
      "Vive en montañas, valles y acantilados de la cordillera de los Andes, donde encuentra lugares altos para descansar y anidar.",
    habitatImage:
      "insumos/2AVES/CÓNDOR/habitad coordillerade los andes.png",
    foodText:
      "El cóndor es carroñero: se alimenta de animales que ya han muerto. Así ayuda a mantener limpia la naturaleza.",
    foods: [
      {
        name: "Restos de vicuña",
        image:
          "insumos/2AVES/CÓNDOR/Imagen de comida/ChatGPT Image 23 jul 2026, 08_58_32 p.m. 1.png",
      },
      {
        name: "Restos de venado",
        image:
          "insumos/2AVES/CÓNDOR/Imagen de comida/ChatGPT Image 23 jul 2026, 08_58_32 p.m. 2.png",
      },
      {
        name: "Peces",
        image:
          "insumos/2AVES/CÓNDOR/Imagen de comida/ChatGPT Image 23 jul 2026, 08_58_32 p.m. 3.png",
      },
    ],
    audio: "insumos/2AVES/CÓNDOR/CÓNDOR.mp3",
  },
  aguila: {
    id: "aguila",
    category: "aves",
    name: "Águila",
    icon: "🦅",
    ready: true,
    image: "insumos/2AVES/ÁGUILA/imagen.png",
    intro:
      "El águila es un ave rapaz fuerte y veloz. Su excelente vista, su pico curvo y sus poderosas garras le ayudan a encontrar y atrapar su alimento.",
    habitatText:
      "Las águilas viven en montañas, bosques y acantilados. Construyen sus nidos en lugares altos y tranquilos desde donde pueden observar grandes distancias.",
    habitatImage: "insumos/2AVES/ÁGUILA/habitad.png",
    foodText:
      "El águila es carnívora. Según su especie y el lugar donde vive, puede cazar pequeños mamíferos, peces, serpientes y lagartijas.",
    foods: [
      { name: "Liebre", image: "insumos/2AVES/ÁGUILA/3. Comida/ChatGPT Image.png" },
      { name: "Serpiente", image: "insumos/2AVES/ÁGUILA/3. Comida/ChatGPT Image_(1).png" },
      { name: "Pez", image: "insumos/2AVES/ÁGUILA/3. Comida/ChatGPT Image_(2).png" },
      { name: "Conejo", image: "insumos/2AVES/ÁGUILA/3. Comida/ChatGPT Image_(3).png" },
      { name: "Lagartija", image: "insumos/2AVES/ÁGUILA/3. Comida/ChatGPT Image_(4).png" },
      { name: "Ardilla", image: "insumos/2AVES/ÁGUILA/3. Comida/ChatGPT Image_.png" },
    ],
    audio: "insumos/2AVES/ÁGUILA/ÁGUILA.mp3",
  },
  arana: {
    id: "arana",
    category: "insectos",
    name: "Araña",
    icon: "🕷️",
    ready: true,
    image:
      "insumos/4. INSECTOS/ARAÑA/ARAÑA.png",
    intro:
      "La araña es un arácnido de ocho patas, no un insecto. Muchas construyen telarañas y ayudan a controlar pequeños insectos.",
    habitatText:
      "Las arañas viven en jardines, bosques, campos y rincones protegidos. Buscan lugares tranquilos donde puedan esconderse o tejer su red.",
    habitatImage:
      "insumos/4. INSECTOS/ARAÑA/HABITAT_ARAÑA.png",
    foodText:
      "La mayoría de las arañas cazan pequeños insectos y otros animalitos. Su alimentación ayuda a mantener el equilibrio de la naturaleza.",
    foods: [
      { name: "Mosca", image: "insumos/4. INSECTOS/ARAÑA/ALIMENTACION/ALIMENTO_013.png" },
      { name: "Mosquito", image: "insumos/4. INSECTOS/ARAÑA/ALIMENTACION/ALIMENTO_014.png" },
      { name: "Grillo", image: "insumos/4. INSECTOS/ARAÑA/ALIMENTACION/ALIMENTO_015.png" },
      { name: "Polilla", image: "insumos/4. INSECTOS/ARAÑA/ALIMENTACION/ALIMENTO_016.png" },
      { name: "Hormiga", image: "insumos/4. INSECTOS/ARAÑA/ALIMENTACION/ALIMENTO_017.png" },
    ],
    audio:
      "insumos/4. INSECTOS/ARAÑA/ARAÑA.mp3",
  },
  hormiga: {
    id: "hormiga",
    category: "insectos",
    name: "Hormiga",
    icon: "🐜",
    ready: true,
    image:
      "insumos/4. INSECTOS/HORMIGA/HORMIGA.jpg",
    intro:
      "La hormiga es pequeña, fuerte y muy trabajadora. Vive en colonias donde cada integrante coopera para cuidar el hormiguero.",
    habitatText:
      "Las hormigas construyen hormigueros bajo tierra, en troncos o entre pequeñas grietas. Forman caminos para buscar alimento y volver a casa.",
    habitatImage:
      "insumos/4. INSECTOS/HORMIGA/HABITAT_HORMIGA.png",
    foodText:
      "Según su especie, las hormigas comen semillas, frutas, néctar, hongos y sustancias dulces. También guardan alimento para compartirlo.",
    foods: [
      {
        name: "Néctar de flores",
        image:
          "insumos/4. INSECTOS/HORMIGA/ALIMENTACION/ALIMENTO_001.png",
      },
      {
        name: "Miel",
        image:
          "insumos/4. INSECTOS/HORMIGA/ALIMENTACION/ALIMENTO_002.png",
      },
      {
        name: "Semillas",
        image:
          "insumos/4. INSECTOS/HORMIGA/ALIMENTACION/ALIMENTO_003.png",
      },
      {
        name: "Hongos",
        image:
          "insumos/4. INSECTOS/HORMIGA/ALIMENTACION/ALIMENTO_004.png",
      },
      {
        name: "Frutas",
        image:
          "insumos/4. INSECTOS/HORMIGA/ALIMENTACION/ALIMENTO_005.png",
      },
    ],
    audio: "insumos/4. INSECTOS/HORMIGA/HORMIGA.mp3",
  },
  mariposa: {
    id: "mariposa",
    category: "insectos",
    name: "Mariposa",
    icon: "🦋",
    ready: true,
    image: "insumos/4. INSECTOS/MARIPOSA/MARIPOSA.jpg",
    intro:
      "La mariposa es un insecto de alas coloridas. Antes de volar fue una oruga y pasó un tiempo transformándose dentro de una crisálida.",
    habitatText:
      "Las mariposas viven donde encuentran flores y plantas, como jardines, bosques, praderas y zonas cercanas al agua.",
    habitatImage: "insumos/4. INSECTOS/MARIPOSA/HABITAT_MARIPOSA.jpg",
    foodText:
      "Muchas mariposas beben néctar con su larga trompa. Algunas también aprovechan frutas maduras y la savia de los árboles.",
    foods: [
      { name: "Néctar de flores", image: "insumos/4. INSECTOS/MARIPOSA/ALIMENTACION/ALIMENTO_001.jpg" },
      { name: "Fruta madura", image: "insumos/4. INSECTOS/MARIPOSA/ALIMENTACION/ALIMENTO_004.jpg" },
      { name: "Savia de árboles", image: "insumos/4. INSECTOS/MARIPOSA/ALIMENTACION/ALIMENTO_005.webp" },
    ],
    audio: "insumos/4. INSECTOS/MARIPOSA/MARIPOSA.mp3",
  },
};

const app = document.querySelector("#app");
const modal = document.querySelector("#modal");
const modalPanel = document.querySelector("#modal-panel");
const modalContent = document.querySelector("#modal-content");
const audioPlayer = document.querySelector("#animal-audio");
const toast = document.querySelector("#toast");
const buttonSoundPlayer = new Audio("insumos/sonidobotones.mp3");
buttonSoundPlayer.preload = "auto";
buttonSoundPlayer.volume = 0.22;
const puzzleMusicPlayer = new Audio("insumos/musica de fondo.mp3");
puzzleMusicPlayer.preload = "auto";
puzzleMusicPlayer.loop = true;
puzzleMusicPlayer.volume = 0.1;

let carouselIndex = 0;
let lastFocusedElement = null;
let activeAudioAnimal = null;
let toastTimer = null;
let puzzleState = null;
let puzzleCelebrationTimer = null;
let pointerStartX = null;
let pointerDragStarted = false;

function imageMarkup(animal, className = "") {
  if (animal.image) {
    return `<img class="${className}" src="${animal.image}" alt="${animal.name}" />`;
  }

  return `
    <div class="image-placeholder ${className}" role="img" aria-label="Imagen de ${animal.name} próximamente">
      <span aria-hidden="true">${animal.icon}</span>
    </div>
  `;
}

function navigate(hash) {
  if (window.location.hash === hash) {
    renderRoute();
    return;
  }
  window.location.hash = hash;
}

function focusPageHeading() {
  requestAnimationFrame(() => {
    const heading = app.querySelector("h1");
    if (!heading) return;
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  });
}

function pauseAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  activeAudioAnimal = null;
  updateSoundButtons();
}

function updateSoundButtons() {
  document.querySelectorAll('[data-action="sound"]').forEach((button) => {
    const isPlaying =
      activeAudioAnimal === button.dataset.animal && !audioPlayer.paused;
    button.classList.toggle("is-playing", isPlaying);
    button.setAttribute("aria-pressed", String(isPlaying));
    button.innerHTML = isPlaying
      ? '<span aria-hidden="true">Ⅱ</span> Pausar sonido'
      : '<span aria-hidden="true">♪</span> Escuchar sonido';
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function renderHome() {
  document.body.classList.add("is-home");
  document.body.classList.remove("is-category");
  document.body.classList.remove("is-animal");
  document.querySelector(".site-header").hidden = false;
  document.querySelector("#brand-home").hidden = false;
  document.title = "Mundo Animal · Aprende jugando";
  app.innerHTML = `
    <section class="page-shell">
      <section class="carousel-section" aria-labelledby="category-selector-title">
        <h1 class="sr-only" id="category-selector-title">Elige una categoría de animales</h1>
        <div
          class="carousel"
          id="category-carousel"
          tabindex="0"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Categorías de animales"
        >
          <div class="orbit-items" id="orbit-items"></div>
          <article class="focus-card" id="focus-card"></article>
          <div class="carousel-controls">
            <button class="round-control" type="button" data-carousel="prev" aria-label="Categoría anterior">←</button>
            <div class="dots" id="carousel-dots" aria-label="Posición en el carrusel"></div>
            <button class="round-control" type="button" data-carousel="next" aria-label="Categoría siguiente">→</button>
          </div>
        </div>
      </section>
    </section>
  `;

  const orbit = document.querySelector("#orbit-items");
  orbit.innerHTML = categories
    .map(
      (category, index) => {
        const preview = category.previews.length
          ? `
            <span class="orbit-preview-images" aria-hidden="true">
              <img src="${category.previews[0]}" alt="" />
              <img src="${category.previews[1] || category.previews[0]}" alt="" />
            </span>
          `
          : `
            <span class="orbit-preview-icon" aria-hidden="true">${category.icon}</span>
          `;

        return `
          <button
            class="orbit-item"
            style="--node-color: ${category.color}"
            type="button"
            data-category-index="${index}"
            aria-label="Seleccionar ${category.name}"
          >
            <span class="orbit-preview">${preview}</span>
            <span class="orbit-name">${category.name}</span>
            <span class="orbit-secondary-status">
              ${category.enabled ? "Lista para explorar" : "Nuevos animales en camino"}
            </span>
          </button>
        `;
      },
    )
    .join("");

  document.querySelector("#carousel-dots").innerHTML = categories
    .map(
      (category, index) => `
        <button
          class="dot"
          type="button"
          data-category-index="${index}"
          aria-label="Ir a ${category.name}"
        ></button>
      `,
    )
    .join("");

  updateCarousel();
  bindCarouselEvents();
  focusPageHeading();
}

function updateCarousel() {
  const selectedCategory = categories[carouselIndex];
  document.querySelectorAll(".orbit-item").forEach((button, index) => {
    let position = (index - carouselIndex + categories.length) % categories.length;
    if (position > categories.length / 2) position -= categories.length;
    button.dataset.position = String(position);
    button.setAttribute("aria-current", String(index === carouselIndex));
  });

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === carouselIndex);
    dot.setAttribute("aria-current", String(index === carouselIndex));
  });

  const focusCard = document.querySelector("#focus-card");
  const visuals = selectedCategory.previews.length
    ? `
      <div class="focus-images" aria-hidden="true">
        <img src="${selectedCategory.previews[0]}" alt="" />
        <img src="${selectedCategory.previews[1] || selectedCategory.previews[0]}" alt="" />
      </div>
    `
    : `
      <div class="category-large-icon" aria-hidden="true">${selectedCategory.icon}</div>
    `;

  focusCard.style.setProperty("--focus-color", selectedCategory.color);
  focusCard.innerHTML = `
    ${visuals}
    <div class="focus-copy">
      <h2>${selectedCategory.name}</h2>
      <span class="focus-status">
        ${selectedCategory.enabled ? "Lista para explorar" : "Nuevos animales en camino"}
      </span>
      <button
        class="primary-button"
        type="button"
        data-explore-category="${selectedCategory.id}"
        ${selectedCategory.enabled ? "" : "disabled"}
      >
        ${selectedCategory.enabled ? "Explorar" : "Próximamente"}
        <span aria-hidden="true">${selectedCategory.enabled ? "→" : "✦"}</span>
      </button>
    </div>
  `;
}

function setCarouselIndex(index) {
  carouselIndex = (index + categories.length) % categories.length;
  updateCarousel();
}

function bindCarouselEvents() {
  const carousel = document.querySelector("#category-carousel");

  carousel.addEventListener("click", (event) => {
    const indexButton = event.target.closest("[data-category-index]");
    if (indexButton) {
      setCarouselIndex(Number(indexButton.dataset.categoryIndex));
      return;
    }

    const control = event.target.closest("[data-carousel]");
    if (control) {
      setCarouselIndex(carouselIndex + (control.dataset.carousel === "next" ? 1 : -1));
      return;
    }

    const explore = event.target.closest("[data-explore-category]");
    if (explore && !explore.disabled) {
      navigate(`#categoria/${explore.dataset.exploreCategory}`);
    }
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setCarouselIndex(carouselIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      setCarouselIndex(carouselIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setCarouselIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setCarouselIndex(categories.length - 1);
    }
  });

  carousel.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaX) < 8 && Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      setCarouselIndex(carouselIndex + (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1));
    },
    { passive: false },
  );

  carousel.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    pointerStartX = event.clientX;
    pointerDragStarted = false;
    carousel.classList.add("is-dragging");
  });

  carousel.addEventListener("pointermove", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    const visualOffset = Math.max(-70, Math.min(70, distance * 0.22));
    carousel.style.setProperty("--drag-offset", `${visualOffset}px`);

    if (!pointerDragStarted && Math.abs(distance) >= 12) {
      pointerDragStarted = true;
      carousel.setPointerCapture?.(event.pointerId);
    }
  });

  carousel.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (pointerDragStarted && Math.abs(distance) >= 45) {
      setCarouselIndex(carouselIndex + (distance < 0 ? 1 : -1));
    }
    pointerDragStarted = false;
    carousel.classList.remove("is-dragging");
    carousel.style.removeProperty("--drag-offset");
  });

  carousel.addEventListener("pointercancel", () => {
    pointerStartX = null;
    pointerDragStarted = false;
    carousel.classList.remove("is-dragging");
    carousel.style.removeProperty("--drag-offset");
  });
}

function renderCategory(category) {
  document.body.classList.remove("is-home");
  document.body.classList.add("is-category");
  document.body.classList.remove("is-animal");
  document.querySelector(".site-header").hidden = true;
  document.querySelector("#brand-home").hidden = true;
  document.title = `${category.name} · Mundo Animal`;
  const categoryAnimals = category.animals.map((id) => animals[id]);

  app.innerHTML = `
    <section class="page-shell">
      <div class="page-topline">
        <button class="back-button" type="button" data-go-home>
          <span aria-hidden="true">←</span> Volver a categorías
        </button>
      </div>

      <header class="category-hero">
        <div class="category-hero-copy">
          <p class="eyebrow">Colección para explorar</p>
          <h1>${category.name}</h1>
          <p>${category.description}</p>
        </div>
      </header>

      <div class="section-heading">
        <div>
          <h2>¿A quién conoceremos?</h2>
        </div>
      </div>

      <div class="animal-grid">
        ${categoryAnimals
          .map(
            (animal) => `
              <button class="animal-card" type="button" data-animal="${animal.id}">
                <div class="animal-card-media">
                  ${imageMarkup(animal)}
                  <span class="card-badge ${animal.ready ? "is-ready" : ""}">
                    ${animal.ready ? "Descubrir" : "Vista previa"}
                  </span>
                </div>
                <div class="animal-card-body">
                  <div>
                    <h3>${animal.name}</h3>
                  </div>
                  <span class="animal-card-arrow" aria-hidden="true">→</span>
                </div>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  app.querySelector(".category-hero .eyebrow")?.remove();
  app.querySelector(".section-heading .eyebrow")?.remove();
  app.querySelector(".section-heading h2")?.remove();

  const categoryBackButton = app.querySelector("[data-go-home]");
  const categoryHero = app.querySelector(".category-hero");
  const categoryHeroLayout = document.createElement("div");
  categoryHeroLayout.className = "category-hero-layout";
  categoryBackButton.className = "category-back-button";
  categoryBackButton.innerHTML = '<span class="back-arrow" aria-hidden="true"></span>';
  categoryBackButton.setAttribute("aria-label", "Volver a categorías");
  categoryHero.before(categoryHeroLayout);
  categoryHeroLayout.append(categoryBackButton, categoryHero);
  app.querySelector(".page-topline")?.remove();

  categoryBackButton.addEventListener("click", () => navigate("#inicio"));
  app.querySelectorAll("[data-animal]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#animal/${button.dataset.animal}`));
  });
  focusPageHeading();
}

function addAnimalHeader(pageShell, title, categoryId) {
  const header = document.createElement("header");
  const backButton = document.createElement("button");
  const homeButton = document.createElement("button");

  header.className = "animal-detail-header";
  backButton.className = "animal-nav-button animal-back-button";
  backButton.type = "button";
  backButton.setAttribute("aria-label", "Regresar a la categoría");
  backButton.innerHTML =
    '<span class="animal-back-icon" aria-hidden="true">←</span><span class="button-label">Regresar</span>';
  homeButton.className = "animal-nav-button animal-home-button";
  homeButton.type = "button";
  homeButton.setAttribute("aria-label", "Volver al inicio");
  homeButton.innerHTML = '<span aria-hidden="true">⌂</span>';

  backButton.addEventListener("click", () => navigate(`#categoria/${categoryId}`));
  homeButton.addEventListener("click", () => navigate("#inicio"));

  header.append(backButton, title, homeButton);
  pageShell.prepend(header);
}

function renderAnimal(animal) {
  document.body.classList.remove("is-home");
  document.body.classList.remove("is-category");
  document.body.classList.add("is-animal");
  document.querySelector(".site-header").hidden = true;
  const category = categories.find((item) => item.id === animal.category);
  document.title = `${animal.name} · Mundo Animal`;

  if (!animal.ready) {
    app.innerHTML = `
      <section class="page-shell">
        <div class="page-topline">
          <button class="back-button" type="button" data-back-category>
            <span aria-hidden="true">←</span> Volver a ${category.name.toLowerCase()}
          </button>
          <span class="crumb">${category.name} / ${animal.name}</span>
        </div>
        <article class="coming-soon">
          <div class="soon-media">${imageMarkup(animal)}</div>
          <div class="soon-copy">
            <p class="eyebrow">Nueva aventura en preparación</p>
            <h1>${animal.name}</h1>
            <p>
              Ya puedes conocer su imagen principal. Muy pronto añadiremos su hábitat,
              alimentación, sonido y rompecabezas.
            </p>
            <button class="primary-button" type="button" data-back-category>
              Ver otros animales <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
      </section>
    `;
    app.querySelector(".page-topline")?.remove();
    addAnimalHeader(
      app.querySelector(".page-shell"),
      app.querySelector(".soon-copy h1"),
      category.id,
    );
    app.querySelectorAll("[data-back-category]").forEach((button) => {
      button.addEventListener("click", () => navigate(`#categoria/${category.id}`));
    });
    focusPageHeading();
    return;
  }

  app.innerHTML = `
    <section class="page-shell">
      <div class="page-topline">
        <button class="back-button" type="button" data-back-category>
          <span aria-hidden="true">←</span> Volver a ${category.name.toLowerCase()}
        </button>
        <span class="crumb">${category.name} / ${animal.name}</span>
      </div>

      <article class="detail-layout">
        <div class="animal-portrait">
          <img src="${animal.image}" alt="${animal.name}, imagen principal" />
        </div>

        <div class="detail-copy">
          <p class="eyebrow">Conoce a este animal</p>
          <h1>${animal.name}</h1>
          <p class="detail-intro">${animal.intro}</p>

          <div class="fact-grid">
            <button class="fact-card" type="button" data-action="habitat">
              <span class="fact-icon" aria-hidden="true">⌂</span>
              <span>
                <strong>Hábitat</strong>
                <small>${animal.habitatText}</small>
              </span>
            </button>
            <button class="fact-card" type="button" data-action="food">
              <span class="fact-icon" aria-hidden="true">●</span>
              <span>
                <strong>Alimentación</strong>
                <small>${animal.foodText}</small>
              </span>
            </button>
          </div>

          <button
            class="sound-button"
            type="button"
            data-action="sound"
            data-animal="${animal.id}"
            aria-pressed="false"
            ${animal.audio ? "" : "disabled"}
          >
            <span aria-hidden="true">♪</span>
            ${animal.audio ? "Escuchar sonido" : "Sonido próximamente"}
          </button>

          <button class="primary-button puzzle-launch" type="button" data-action="puzzle">
            <span aria-hidden="true">▦</span>
            Armar rompecabezas
          </button>
        </div>
      </article>
    </section>
  `;

  app.querySelector(".page-topline")?.remove();
  app.querySelector(".detail-copy .eyebrow")?.remove();
  addAnimalHeader(
    app.querySelector(".page-shell"),
    app.querySelector(".detail-copy h1"),
    category.id,
  );
  app.querySelector('[data-action="habitat"]').addEventListener("click", () => {
    openHabitatModal(animal);
  });
  app.querySelector('[data-action="food"]').addEventListener("click", () => {
    openFoodModal(animal);
  });
  app.querySelector('[data-action="puzzle"]').addEventListener("click", () => {
    openPuzzleModal(animal);
  });
  app.querySelector('[data-action="sound"]').addEventListener("click", () => {
    toggleAnimalSound(animal);
  });

  focusPageHeading();
}

function toggleAnimalSound(animal) {
  if (!animal.audio) return;

  if (activeAudioAnimal === animal.id && !audioPlayer.paused) {
    audioPlayer.pause();
    updateSoundButtons();
    return;
  }

  if (activeAudioAnimal !== animal.id) {
    audioPlayer.src = animal.audio;
    activeAudioAnimal = animal.id;
  }

  audioPlayer
    .play()
    .then(updateSoundButtons)
    .catch(() => {
      activeAudioAnimal = null;
      updateSoundButtons();
      showToast("No pudimos reproducir el sonido en este navegador.");
    });
}

function openModal(html, onReady) {
  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel.scrollTop = 0;
  requestAnimationFrame(() => {
    modal.querySelector(".modal-close").focus();
    onReady?.();
  });
}

function stopPuzzleMusic() {
  puzzleMusicPlayer.pause();
  puzzleMusicPlayer.currentTime = 0;
}

function startPuzzleMusic() {
  if (!puzzleState || puzzleState.complete || document.hidden) return;
  puzzleMusicPlayer.currentTime = 0;
  puzzleMusicPlayer.play().catch(() => {});
}

function clearPuzzleCelebration() {
  document.querySelectorAll(".puzzle-confetti").forEach((element) => element.remove());
  if (puzzleCelebrationTimer) {
    window.clearTimeout(puzzleCelebrationTimer);
    puzzleCelebrationTimer = null;
  }
}

function launchPuzzleCelebration() {
  clearPuzzleCelebration();
  const celebration = document.createElement("div");
  const colors = ["#ffd60a", "#ff4f91", "#42d9c8", "#7c4dff", "#ff8a1f", "#55c950"];

  celebration.className = "puzzle-confetti";
  celebration.setAttribute("aria-hidden", "true");
  celebration.innerHTML = Array.from({ length: 54 }, (_, index) => {
    const left = Math.round(Math.random() * 100);
    const delay = (Math.random() * 0.8).toFixed(2);
    const duration = (2.2 + Math.random() * 1.8).toFixed(2);
    const drift = Math.round(-90 + Math.random() * 180);
    const turn = Math.round(360 + Math.random() * 900);
    const color = colors[index % colors.length];
    return `<i style="--left:${left}%;--delay:${delay}s;--duration:${duration}s;--drift:${drift}px;--turn:${turn}deg;--confetti-color:${color}"></i>`;
  }).join("");

  document.body.append(celebration);
  puzzleCelebrationTimer = window.setTimeout(clearPuzzleCelebration, 4600);
}

function closeModal() {
  stopPuzzleMusic();
  clearPuzzleCelebration();
  if (modal.hidden) return;
  modal.hidden = true;
  modalContent.innerHTML = "";
  document.body.classList.remove("modal-open");
  puzzleState = null;
  if (lastFocusedElement instanceof HTMLElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function openHabitatModal(animal) {
  const visual = animal.habitatImage
    ? `<img class="habitat-image" src="${animal.habitatImage}" alt="Hábitat del ${animal.name.toLowerCase()}" />`
    : `
      <div class="resource-placeholder">
        <div>
          <span aria-hidden="true">⌂</span>
          <strong>Imagen de hábitat próximamente</strong>
          <p>Este recurso todavía no está disponible en la carpeta de insumos.</p>
        </div>
      </div>
    `;

  openModal(`
    <div class="modal-header">
      <h2 id="modal-title">¿Dónde vive?</h2>
      <p>${animal.habitatText}</p>
    </div>
    ${visual}
  `);
}

function openFoodModal(animal) {
  const visual = animal.foods.length
    ? `
      <div class="food-grid">
        ${animal.foods
          .map(
            (food) => `
              <article class="food-card">
                <img src="${food.image}" alt="${food.name}, alimento del ${animal.name.toLowerCase()}" />
                <strong>${food.name}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
    `
    : `
      <div class="resource-placeholder">
        <div>
          <span aria-hidden="true">●</span>
          <strong>Imágenes de alimentación próximamente</strong>
          <p>La información está lista, pero las imágenes aún no están en los insumos.</p>
        </div>
      </div>
    `;

  openModal(`
    <div class="modal-header">
      <h2 id="modal-title">¿Qué come el ${animal.name.toLowerCase()}?</h2>
      <p>${animal.foodText}</p>
    </div>
    ${visual}
  `);
}

function shufflePieces() {
  const pieces = [0, 1, 2, 3];
  do {
    for (let index = pieces.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [pieces[index], pieces[randomIndex]] = [pieces[randomIndex], pieces[index]];
    }
  } while (pieces.every((piece, index) => piece === index));
  return pieces;
}

function openPuzzleModal(animal) {
  pauseAudio();
  puzzleState = {
    animal,
    tray: shufflePieces(),
    board: [null, null, null, null],
    selected: null,
    dragSelection: null,
    complete: false,
  };

  openModal(
    `
      <div class="puzzle-shell">
        <div class="modal-header">
          <h2 id="modal-title">Arma al ${animal.name.toLowerCase()}</h2>
          <p>Elige una pieza y colócala en su espacio. También puedes arrastrarla.</p>
        </div>
        <div class="puzzle-workspace">
          <section class="puzzle-zone puzzle-tray-zone" aria-label="Piezas disponibles">
            <div class="puzzle-tray" id="puzzle-tray"></div>
            <div class="puzzle-success" id="puzzle-success" aria-hidden="true">
              <div class="success-bubble">
                <span aria-hidden="true">★</span>
                <strong>¡Lo lograste!</strong>
                <div>Completaste el rompecabezas.</div>
                <div class="success-actions">
                  <button class="secondary-button" type="button" id="retry-puzzle">
                    Intentarlo de nuevo
                  </button>
                  <button class="primary-button" type="button" data-close-modal>
                    Regresar
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section class="puzzle-zone puzzle-board-zone" aria-label="Área para armar la imagen">
            <div class="puzzle-board-wrap">
              <div class="puzzle-board" id="puzzle-board" aria-label="Tablero del rompecabezas del ${animal.name.toLowerCase()}"></div>
            </div>
          </section>
        </div>
        <p id="puzzle-status" class="sr-only" aria-live="polite"></p>
        <div class="puzzle-actions">
          <button class="secondary-button" type="button" id="shuffle-puzzle">
            <span aria-hidden="true">↻</span> Mezclar de nuevo
          </button>
          <button class="primary-button" type="button" data-close-modal>
            Cerrar juego
          </button>
        </div>
      </div>
    `,
    bindPuzzleEvents,
  );
  startPuzzleMusic();
}

function renderPuzzleBoard() {
  if (!puzzleState) return;
  const tray = document.querySelector("#puzzle-tray");
  const board = document.querySelector("#puzzle-board");
  if (!tray || !board) return;

  tray.innerHTML = puzzleState.tray
    .map((piece, index) => {
      const selected =
        puzzleState.selected?.source === "tray" && puzzleState.selected.index === index;
      return `
        <button
          class="puzzle-piece ${selected ? "is-selected" : ""}"
          type="button"
          draggable="true"
          data-piece-source="tray"
          data-piece-index="${index}"
          data-piece-id="${piece}"
          aria-label="Pieza ${piece + 1}${selected ? ", seleccionada" : ""}"
          aria-pressed="${selected}"
        >
          <img
            class="puzzle-fragment puzzle-fragment-${piece}"
            src="${puzzleState.animal.image}"
            alt=""
            draggable="false"
          />
        </button>
      `;
    })
    .join("");

  if (!puzzleState.tray.length) {
    tray.innerHTML = '<p class="tray-empty">¡Todas las piezas están en el tablero!</p>';
  }

  board.innerHTML = puzzleState.board
    .map((piece, slotIndex) => {
      const selected =
        puzzleState.selected?.source === "board" &&
        puzzleState.selected.index === slotIndex;
      return `
        <button
          class="puzzle-slot ${selected ? "is-selected" : ""}"
          type="button"
          draggable="${piece !== null}"
          data-slot-index="${slotIndex}"
          data-piece-source="board"
          data-piece-index="${slotIndex}"
          data-piece-id="${piece ?? ""}"
          aria-label="${piece === null ? `Espacio ${slotIndex + 1}, vacío` : `Pieza ${piece + 1} en el espacio ${slotIndex + 1}`}"
          aria-pressed="${selected}"
        >
          <span class="slot-guide" aria-hidden="true"></span>
          ${
            piece === null
              ? `<span class="slot-number" aria-hidden="true">${slotIndex + 1}</span>`
              : `<span
                  class="placed-puzzle-piece"
                  aria-hidden="true"
                >
                  <img
                    class="puzzle-fragment puzzle-fragment-${piece}"
                    src="${puzzleState.animal.image}"
                    alt=""
                    draggable="false"
                  />
                </span>`
          }
        </button>
      `;
    })
    .join("");

  if (puzzleState.complete) {
    board.innerHTML = `
      <img
        class="puzzle-complete-image"
        src="${puzzleState.animal.image}"
        alt="Rompecabezas completado del ${puzzleState.animal.name.toLowerCase()}"
      />
    `;
  }

  const success = document.querySelector("#puzzle-success");
  success?.classList.toggle("is-visible", puzzleState.complete);
  success?.setAttribute("aria-hidden", String(!puzzleState.complete));
  document
    .querySelector(".puzzle-shell")
    ?.classList.toggle("is-complete", puzzleState.complete);
}

function placeSelectedPuzzlePiece(slotIndex) {
  if (!puzzleState?.selected || puzzleState.complete) return;
  const selection = puzzleState.selected;
  const wasComplete = puzzleState.complete;

  if (selection.source === "tray") {
    const [piece] = puzzleState.tray.splice(selection.index, 1);
    const displacedPiece = puzzleState.board[slotIndex];
    puzzleState.board[slotIndex] = piece;
    if (displacedPiece !== null) puzzleState.tray.push(displacedPiece);
  } else {
    if (selection.index === slotIndex) {
      puzzleState.selected = null;
      renderPuzzleBoard();
      return;
    }
    const displacedPiece = puzzleState.board[slotIndex];
    puzzleState.board[slotIndex] = selection.piece;
    puzzleState.board[selection.index] = displacedPiece;
  }

  puzzleState.selected = null;
  puzzleState.dragSelection = null;
  puzzleState.complete = puzzleState.board.every((piece, index) => piece === index);
  renderPuzzleBoard();

  const status = document.querySelector("#puzzle-status");
  if (puzzleState.complete) {
    stopPuzzleMusic();
    if (!wasComplete) launchPuzzleCelebration();
    if (status) status.textContent = "¡Lo lograste! Completaste el rompecabezas.";
  } else if (status) {
    status.textContent = "Pieza colocada en el tablero.";
  }
}

function resetPuzzle() {
  if (!puzzleState) return;
  clearPuzzleCelebration();
  puzzleState.tray = shufflePieces();
  puzzleState.board = [null, null, null, null];
  puzzleState.selected = null;
  puzzleState.dragSelection = null;
  puzzleState.complete = false;
  renderPuzzleBoard();
  startPuzzleMusic();
  const status = document.querySelector("#puzzle-status");
  if (status) status.textContent = "Rompecabezas mezclado de nuevo.";
}

function bindPuzzleEvents() {
  renderPuzzleBoard();
  const workspace = document.querySelector(".puzzle-workspace");
  const tray = document.querySelector("#puzzle-tray");
  const board = document.querySelector("#puzzle-board");
  const shuffleButton = document.querySelector("#shuffle-puzzle");
  const retryButton = document.querySelector("#retry-puzzle");

  tray.addEventListener("click", (event) => {
    const piece = event.target.closest('[data-piece-source="tray"]');
    if (!piece || !puzzleState) return;
    const index = Number(piece.dataset.pieceIndex);
    const alreadySelected =
      puzzleState.selected?.source === "tray" && puzzleState.selected.index === index;
    puzzleState.selected = alreadySelected
      ? null
      : { source: "tray", index, piece: Number(piece.dataset.pieceId) };
    renderPuzzleBoard();
  });

  board.addEventListener("click", (event) => {
    const slot = event.target.closest("[data-slot-index]");
    if (!slot || !puzzleState) return;
    const slotIndex = Number(slot.dataset.slotIndex);

    if (puzzleState.selected) {
      placeSelectedPuzzlePiece(slotIndex);
      return;
    }

    if (puzzleState.board[slotIndex] !== null) {
      puzzleState.selected = {
        source: "board",
        index: slotIndex,
        piece: puzzleState.board[slotIndex],
      };
      renderPuzzleBoard();
    }
  });

  workspace.addEventListener("dragstart", (event) => {
    const piece = event.target.closest("[data-piece-source]");
    if (!piece || !puzzleState || piece.dataset.pieceId === "") return;
    puzzleState.dragSelection = {
      source: piece.dataset.pieceSource,
      index: Number(piece.dataset.pieceIndex),
      piece: Number(piece.dataset.pieceId),
    };
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", piece.dataset.pieceId);
  });

  board.addEventListener("dragover", (event) => {
    if (event.target.closest("[data-slot-index]")) event.preventDefault();
  });

  board.addEventListener("drop", (event) => {
    const slot = event.target.closest("[data-slot-index]");
    if (!slot || !puzzleState?.dragSelection) return;
    event.preventDefault();
    puzzleState.selected = puzzleState.dragSelection;
    placeSelectedPuzzlePiece(Number(slot.dataset.slotIndex));
  });

  shuffleButton.addEventListener("click", resetPuzzle);
  retryButton.addEventListener("click", resetPuzzle);
}

function renderRoute() {
  closeModal();
  pauseAudio();
  const hash = window.location.hash.replace(/^#/, "") || "inicio";
  const [route, id] = hash.split("/");

  if (route === "categoria") {
    const category = categories.find((item) => item.id === id && item.enabled);
    if (category) {
      renderCategory(category);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }

  if (route === "animal" && animals[id]) {
    renderAnimal(animals[id]);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (hash !== "inicio") {
    history.replaceState(null, "", "#inicio");
  }
  renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("#brand-home").addEventListener("click", () => navigate("#inicio"));
document.querySelector("#header-home").addEventListener("click", () => navigate("#inicio"));

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled || button.matches('[data-action="sound"]')) return;

  buttonSoundPlayer.currentTime = 0;
  buttonSoundPlayer.play().catch(() => {});
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = [
    ...modalPanel.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((element) => !element.hidden);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

audioPlayer.addEventListener("play", updateSoundButtons);
audioPlayer.addEventListener("pause", updateSoundButtons);
audioPlayer.addEventListener("ended", () => {
  activeAudioAnimal = null;
  updateSoundButtons();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    puzzleMusicPlayer.pause();
  } else if (puzzleState && !puzzleState.complete && !modal.hidden) {
    puzzleMusicPlayer.play().catch(() => {});
  }
});

window.addEventListener("hashchange", renderRoute);

document.addEventListener(
  "error",
  (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    const image = event.target;
    const fallback = document.createElement("div");
    fallback.className = `image-placeholder ${image.className}`;
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", image.alt || "Recurso próximamente");
    fallback.innerHTML = '<span aria-hidden="true">✦</span>';
    image.replaceWith(fallback);
  },
  true,
);

if (!window.location.hash) {
  history.replaceState(null, "", "#inicio");
}
renderRoute();
