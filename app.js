"use strict";

const INSUMOS = "insumos";

function makeFoods(folder, names, extensions = "png") {
  const extensionList = Array.isArray(extensions)
    ? extensions
    : Array.from({ length: names.length }, () => extensions);

  return names.map((name, index) => ({
    name,
    image: `${folder}/COMIDA/alimento_${String(index + 1).padStart(2, "0")}.${extensionList[index]}`,
  }));
}

const ANIMAL_NAMES_IN_PLURAL = {
  elefante: "los elefantes",
  gato: "los gatos",
  jirafa: "las jirafas",
  leon: "los leones",
  mono: "los monos",
  oso: "los osos",
  perro: "los perros",
  tigre: "los tigres",
  avestruz: "los avestruces",
  buho: "los búhos",
  condor: "los cóndores",
  aguila: "las águilas",
  cocodrilo: "los cocodrilos",
  rana: "las ranas",
  serpiente: "las serpientes",
  tortuga: "las tortugas",
  abeja: "las abejas",
  arana: "las arañas",
  hormiga: "las hormigas",
  mariposa: "las mariposas",
  ballena_azul: "las ballenas azules",
  delfin: "los delfines",
  orca: "las orcas",
  pulpo: "los pulpos",
  tiburon: "los tiburones",
  castor: "los castores",
  nutria: "las nutrias",
  salmon: "los salmones",
  trucha: "las truchas",
};

function animalNameInPlural(animal) {
  return ANIMAL_NAMES_IN_PLURAL[animal.id];
}

function makeNarration(folder) {
  return {
    entry: `${folder}/audios/01_descripcion.mp3`,
    habitat: `${folder}/audios/02_habitat.mp3`,
    food: `${folder}/audios/03_alimentacion.mp3`,
  };
}

const ACTION_ICONS = {
  sound: `
    <svg class="action-icon-svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M8 24h13L36 11v42L21 40H8Z" fill="currentColor" />
      <path d="M43 23c5 5 5 13 0 18M49 16c10 9 10 23 0 32" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    </svg>`,
  muted: `
    <svg class="action-icon-svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M8 24h13L36 11v42L21 40H8Z" fill="currentColor" />
      <path d="m43 23 14 18M57 23 43 41" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    </svg>`,
  pause: `
    <svg class="action-icon-svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect x="14" y="10" width="14" height="44" rx="4" fill="currentColor" />
      <rect x="36" y="10" width="14" height="44" rx="4" fill="currentColor" />
    </svg>`,
  puzzle: `
    <svg class="action-icon-svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M8 8h19v8a6 6 0 1 0 12 0V8h17v19h-8a6 6 0 1 0 0 12h8v17H39v-8a6 6 0 1 0-12 0v8H8V39h8a6 6 0 1 0 0-12H8Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" />
    </svg>`,
};

const AUDIO_CONTROL_ICONS = {
  stop: `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect x="14" y="14" width="36" height="36" rx="7" fill="currentColor" />
    </svg>`,
  replay: `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M16 19V8L5 19l11 11V19c17-7 34 5 32 22-1 9-8 16-17 18" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="m27 25 16 10-16 10Z" fill="currentColor" />
    </svg>`,
  volumeDown: `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M8 25h11l14-12v38L19 39H8Z" fill="currentColor" />
      <path d="M41 25c5 4 5 10 0 14" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
      <path d="M44 52h15" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
    </svg>`,
  volumeUp: `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M6 25h10l13-12v38L16 39H6Z" fill="currentColor" />
      <path d="M37 24c5 5 5 11 0 16M44 18c9 8 9 20 0 28" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
      <path d="M51 47v12M45 53h12" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    </svg>`,
};

function audioControlsMarkup(placement = "navigation") {
  return `
    <div class="audio-control-bar ${placement}-audio-controls" role="group" aria-label="Controles de audio">
      <button class="audio-control-button audio-playback-button" type="button" data-audio-control="toggle-playback" aria-label="Detener todos los sonidos" title="Detener">
        ${AUDIO_CONTROL_ICONS.stop}
      </button>
      <button class="audio-control-button audio-volume-down-button" type="button" data-audio-control="volume-down" aria-label="Bajar el volumen" title="Bajar volumen">
        ${AUDIO_CONTROL_ICONS.volumeDown}
      </button>
      <button class="audio-control-button audio-volume-up-button" type="button" data-audio-control="volume-up" aria-label="Subir el volumen" title="Subir volumen">
        ${AUDIO_CONTROL_ICONS.volumeUp}
      </button>
    </div>
  `;
}

const animals = {
  elefante: {
    id: "elefante",
    category: "terrestres",
    name: "Elefante",
    icon: "🐘",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE/elefante.jpg`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE/elefante.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE`),
    intro: "El elefante es muy grande. Su larga trompa le sirve para beber, oler y agarrar cosas.",
    habitatText: "Los elefantes viven en lugares cálidos de África y Asia, cerca de árboles y agua.",
    foodText: "Los elefantes comen pasto, hojas, frutas, corteza y raíces.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE`,
      ["Pasto", "Hojas", "Frutas", "Corteza", "Raíces"],
      ["png", "jpg", "jpg", "png", "png"],
    ),
  },
  gato: {
    id: "gato",
    category: "terrestres",
    name: "Gato",
    icon: "🐈",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/GATO/gato.png`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/GATO/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/GATO/gato.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/GATO`),
    intro: "El gato es ágil y curioso. Sus bigotes lo ayudan a moverse sin chocar.",
    habitatText: "Los gatos viven con las personas, en casas donde pueden descansar y jugar.",
    foodText: "Los gatos comen pollo, salmón, carne, croquetas y alimento húmedo.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/GATO`,
      ["Pollo", "Salmón", "Carne", "Croquetas", "Alimento húmedo"],
    ),
  },
  jirafa: {
    id: "jirafa",
    category: "terrestres",
    name: "Jirafa",
    icon: "🦒",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/JIRAFA/jirafa.png`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/JIRAFA/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/JIRAFA/jirafa.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/JIRAFA`),
    intro: "La jirafa es muy alta. Su largo cuello la ayuda a alcanzar las hojas de los árboles.",
    habitatText: "Las jirafas viven en lugares abiertos de África, donde hay árboles altos.",
    foodText: "Las jirafas comen hojas, brotes, flores, vainas y frutas.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/JIRAFA`,
      ["Hojas", "Brotes", "Flores", "Vainas", "Frutas"],
    ),
  },
  leon: {
    id: "leon",
    category: "terrestres",
    name: "León",
    icon: "🦁",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/LEÓN/leon.jpg`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/LEÓN/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/LEÓN/leon.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/LEÓN`),
    intro: "El león es un gato salvaje muy grande. Su fuerte rugido se escucha desde muy lejos.",
    habitatText: "Los leones viven en lugares abiertos de África, con mucho pasto y pocos árboles.",
    foodText: "Los leones comen cebras, búfalos, jirafas, ñus y antílopes.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/LEÓN`,
      ["Cebra", "Búfalo", "Jirafa", "Ñu", "Antílope"],
      ["png", "png", "png", "jpg", "png"],
    ),
  },
  mono: {
    id: "mono",
    category: "terrestres",
    name: "Mono",
    icon: "🐒",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/MONO/mono.png`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/MONO/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/MONO/mono.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/MONO`),
    intro: "El mono es curioso y juguetón. Utiliza sus manos y su cola para moverse entre las ramas.",
    habitatText: "Los monos viven en selvas y bosques cálidos, entre muchos árboles.",
    foodText: "Los monos comen plátanos, papayas, mangos, insectos y hojas.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/MONO`,
      ["Plátano", "Papaya", "Mango", "Insectos", "Hojas"],
    ),
  },
  oso: {
    id: "oso",
    category: "terrestres",
    name: "Oso",
    icon: "🐻",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/OSO/oso.png`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/OSO/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/OSO/oso.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/OSO`),
    intro: "El oso es grande y fuerte. Su nariz lo ayuda a encontrar comida desde muy lejos.",
    habitatText: "Los osos viven en bosques, montañas y lugares fríos.",
    foodText: "Los osos comen frutas, peces, miel, nueces, semillas, plantas y raíces.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/OSO`,
      ["Frutas", "Peces", "Miel", "Nueces y semillas", "Plantas y raíces"],
    ),
  },
  perro: {
    id: "perro",
    category: "terrestres",
    name: "Perro",
    icon: "🐕",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/PERRO/perro.png`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/PERRO/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/PERRO/perro.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/PERRO`),
    intro: "El perro es un amigo cariñoso y juguetón. Puede aprender sonidos y gestos de las personas.",
    habitatText: "Los perros viven con las personas, en casas con espacio para jugar.",
    foodText: "Los perros comen croquetas, alimento húmedo, carne cocida, arroz, avena y frutas.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/PERRO`,
      ["Croquetas", "Alimento húmedo", "Carne cocida", "Arroz y avena", "Frutas"],
    ),
  },
  tigre: {
    id: "tigre",
    category: "terrestres",
    name: "Tigre",
    icon: "🐅",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/TIGRE/tigre.png`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/TIGRE/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/TIGRE/tigre.mp3`,
    narration: makeNarration(`${INSUMOS}/1ANIMALES TERRESTRES/TIGRE`),
    intro: "El tigre es un gato salvaje muy grande. Sus rayas lo ayudan a esconderse entre las plantas.",
    habitatText: "Los tigres viven en selvas y bosques de Asia, cerca del agua.",
    foodText: "Los tigres comen venados, jabalíes y búfalos.",
    foods: makeFoods(
      `${INSUMOS}/1ANIMALES TERRESTRES/TIGRE`,
      ["Venado", "Jabalí", "Búfalo"],
    ),
  },
  avestruz: {
    id: "avestruz",
    category: "aves",
    name: "Avestruz",
    icon: "🪶",
    image: `${INSUMOS}/2AVES/AVESTRUZ/avestruz.png`,
    habitatImage: `${INSUMOS}/2AVES/AVESTRUZ/habitat.png`,
    audio: null,
    narration: makeNarration(`${INSUMOS}/2AVES/AVESTRUZ`),
    intro: "El avestruz es el ave más grande. No vuela, pero corre muy rápido con sus largas patas.",
    habitatText: "Los avestruces viven en lugares abiertos y cálidos de África.",
    foodText: "Los avestruces comen pasto, hojas, semillas, frutas, saltamontes y lagartijas.",
    foods: [
      ["Pasto", "CA1.PNG"],
      ["Hojas", "CA2.PNG"],
      ["Semillas", "CA3.PNG"],
      ["Frutas", "CA4.PNG"],
      ["Saltamontes", "CA5.PNG"],
      ["Lagartija", "CA6.PNG"],
    ].map(([name, file]) => ({ name, image: `${INSUMOS}/2AVES/AVESTRUZ/COMIDA/${file}` })),
  },
  buho: {
    id: "buho",
    category: "aves",
    name: "Búho",
    icon: "🦉",
    image: `${INSUMOS}/2AVES/BÚHO/imagen.png`,
    habitatImage: `${INSUMOS}/2AVES/BÚHO/habitat.png`,
    audio: `${INSUMOS}/2AVES/BÚHO/búho.mp3`,
    narration: makeNarration(`${INSUMOS}/2AVES/BÚHO`),
    intro: "El búho puede ver en la oscuridad. Vuela en silencio y gira mucho la cabeza para mirar.",
    habitatText: "Los búhos viven en bosques. Descansan en árboles, cuevas o nidos.",
    foodText: "Los búhos comen peces, ranas, lagartijas, conejos y ratones.",
    foods: [
      ["Pez", "1784644619109.png"],
      ["Rana", "1784644620880.png"],
      ["Lagartija", "1784644622460.png"],
      ["Conejo", "1784644624044.png"],
      ["Ratón", "1784644626188.png"],
    ].map(([name, file]) => ({ name, image: `${INSUMOS}/2AVES/BÚHO/Imagen de comida/${file}` })),
  },
  condor: {
    id: "condor",
    category: "aves",
    name: "Cóndor",
    icon: "🦅",
    image: `${INSUMOS}/2AVES/CÓNDOR/condor.png`,
    habitatImage: `${INSUMOS}/2AVES/CÓNDOR/habitad coordillerade los andes.png`,
    audio: `${INSUMOS}/2AVES/CÓNDOR/CÓNDOR.mp3`,
    narration: makeNarration(`${INSUMOS}/2AVES/CÓNDOR`),
    intro: "El cóndor es un ave muy grande. Abre sus enormes alas y vuela muy alto.",
    habitatText: "Los cóndores viven en las montañas de los Andes, cerca de rocas muy altas.",
    foodText: "Los cóndores comen vicuñas, venados, peces, llamas, alpacas y aves que ya murieron.",
    foods: [
      ["Vicuña", "ChatGPT Image 23 jul 2026, 08_58_32 p.m. 1.png"],
      ["Venado", "ChatGPT Image 23 jul 2026, 08_58_32 p.m. 2.png"],
      ["Peces", "ChatGPT Image 23 jul 2026, 08_58_32 p.m. 3.png"],
      ["Llamas y alpacas", "ChatGPT Image 23 jul 2026, 08_58_32 p.m..png"],
      ["Aves", "ChatGPT Image 23 jul 2026, 09_03_16 p.m.5.png"],
    ].map(([name, file]) => ({ name, image: `${INSUMOS}/2AVES/CÓNDOR/Imagen de comida/${file}` })),
  },
  aguila: {
    id: "aguila",
    category: "aves",
    name: "Águila",
    icon: "🦅",
    image: `${INSUMOS}/2AVES/ÁGUILA/imagen.png`,
    habitatImage: `${INSUMOS}/2AVES/ÁGUILA/habitad.png`,
    audio: `${INSUMOS}/2AVES/ÁGUILA/ÁGUILA.mp3`,
    narration: makeNarration(`${INSUMOS}/2AVES/ÁGUILA`),
    intro: "El águila es fuerte y vuela muy rápido. Puede ver animales pequeños desde muy lejos.",
    habitatText: "Las águilas viven en montañas y bosques. Hacen sus nidos en lugares altos.",
    foodText: "Las águilas comen liebres, serpientes, peces, conejos, lagartijas y ardillas.",
    foods: [
      ["Liebre", "ChatGPT Image.png"],
      ["Serpiente", "ChatGPT Image_(1).png"],
      ["Pez", "ChatGPT Image_(2).png"],
      ["Conejo", "ChatGPT Image_(3).png"],
      ["Lagartija", "ChatGPT Image_(4).png"],
      ["Ardilla", "ChatGPT Image_.png"],
    ].map(([name, file]) => ({ name, image: `${INSUMOS}/2AVES/ÁGUILA/3. Comida/${file}` })),
  },
  cocodrilo: {
    id: "cocodrilo",
    category: "reptiles",
    name: "Cocodrilo",
    icon: "🐊",
    image: `${INSUMOS}/3REPTILES Y ANFIBIOS/COCODRILO/cocodrilo.jpeg`,
    habitatImage: `${INSUMOS}/3REPTILES Y ANFIBIOS/COCODRILO/habitat.png`,
    audio: `${INSUMOS}/3REPTILES Y ANFIBIOS/COCODRILO/cocodrilo.mp3`,
    narration: makeNarration(`${INSUMOS}/3REPTILES Y ANFIBIOS/COCODRILO`),
    intro: "El cocodrilo es grande, fuerte y nada muy bien. Puede esconder casi todo su cuerpo bajo el agua.",
    habitatText: "Los cocodrilos viven en ríos, lagos y pantanos de lugares cálidos.",
    foodText: "Los cocodrilos comen peces, aves, cangrejos, tortugas y otros animales.",
    foods: makeFoods(
      `${INSUMOS}/3REPTILES Y ANFIBIOS/COCODRILO`,
      ["Peces", "Aves", "Cangrejos", "Tortugas", "Otros animales"],
    ),
  },
  rana: {
    id: "rana",
    category: "reptiles",
    name: "Rana",
    icon: "🐸",
    image: `${INSUMOS}/3REPTILES Y ANFIBIOS/RANA/rana.png`,
    habitatImage: `${INSUMOS}/3REPTILES Y ANFIBIOS/RANA/habitat.png`,
    audio: `${INSUMOS}/3REPTILES Y ANFIBIOS/RANA/rana.mp3`,
    narration: makeNarration(`${INSUMOS}/3REPTILES Y ANFIBIOS/RANA`),
    intro: "Cuando nace, la rana es un renacuajo. Después le crecen patas y aprende a saltar.",
    habitatText: "Las ranas viven cerca del agua, en charcos, lagunas y ríos.",
    foodText: "Las ranas comen moscas, mosquitos, grillos, gusanos y escarabajos.",
    foods: makeFoods(
      `${INSUMOS}/3REPTILES Y ANFIBIOS/RANA`,
      ["Moscas", "Mosquitos", "Grillos", "Gusanos", "Escarabajos"],
    ),
  },
  serpiente: {
    id: "serpiente",
    category: "reptiles",
    name: "Serpiente",
    icon: "🐍",
    image: `${INSUMOS}/3REPTILES Y ANFIBIOS/SERPIENTE/serpiente.png`,
    habitatImage: `${INSUMOS}/3REPTILES Y ANFIBIOS/SERPIENTE/habitat.png`,
    audio: `${INSUMOS}/3REPTILES Y ANFIBIOS/SERPIENTE/serpiente.mp3`,
    narration: makeNarration(`${INSUMOS}/3REPTILES Y ANFIBIOS/SERPIENTE`),
    intro: "La serpiente no tiene patas. Se mueve por el suelo y usa su lengua para oler.",
    habitatText: "Las serpientes viven en bosques, desiertos, campos y también cerca del agua.",
    foodText: "Las serpientes comen ratones, huevos, ranas, aves y lagartijas.",
    foods: makeFoods(
      `${INSUMOS}/3REPTILES Y ANFIBIOS/SERPIENTE`,
      ["Ratones", "Huevos", "Ranas", "Aves", "Lagartijas"],
      ["jpg", "jpg", "jpg", "jpg", "png"],
    ),
  },
  tortuga: {
    id: "tortuga",
    category: "reptiles",
    name: "Tortuga",
    icon: "🐢",
    image: `${INSUMOS}/3REPTILES Y ANFIBIOS/TORTUGA/tortuga.png`,
    habitatImage: `${INSUMOS}/3REPTILES Y ANFIBIOS/TORTUGA/habitat.png`,
    audio: `${INSUMOS}/3REPTILES Y ANFIBIOS/TORTUGA/tortuga.mp3`,
    narration: makeNarration(`${INSUMOS}/3REPTILES Y ANFIBIOS/TORTUGA`),
    intro: "La tortuga tiene un caparazón duro que protege su cuerpo. Camina despacio.",
    habitatText: "Las tortugas pueden vivir en la tierra, en ríos, lagunas o en el mar.",
    foodText: "Las tortugas comen plantas, frutas, algas, insectos y animalitos del agua.",
    foods: makeFoods(
      `${INSUMOS}/3REPTILES Y ANFIBIOS/TORTUGA`,
      ["Plantas", "Frutas", "Algas", "Insectos", "Animalitos del agua"],
    ),
  },
  abeja: {
    id: "abeja",
    category: "insectos",
    name: "Abeja",
    icon: "🐝",
    image: `${INSUMOS}/4INSECTOS/ABEJA/abeja.png`,
    habitatImage: `${INSUMOS}/4INSECTOS/ABEJA/habitat.png`,
    audio: `${INSUMOS}/4INSECTOS/ABEJA/abeja.mp3`,
    narration: makeNarration(`${INSUMOS}/4INSECTOS/ABEJA`),
    intro: "La abeja vuela de flor en flor. Al hacerlo, ayuda a que nazcan nuevas plantas.",
    habitatText: "Las abejas viven cerca de muchas flores, en jardines, campos y bosques. Sus casas se llaman colmenas.",
    foodText: "Las abejas comen néctar, polen, partes de flores y miel. También toman agua.",
    foods: makeFoods(
      `${INSUMOS}/4INSECTOS/ABEJA`,
      ["Néctar", "Polen", "Flores", "Miel", "Agua"],
    ),
  },
  arana: {
    id: "arana",
    category: "insectos",
    name: "Araña",
    icon: "🕷️",
    image: `${INSUMOS}/4INSECTOS/ARAÑA/araña.png`,
    habitatImage: `${INSUMOS}/4INSECTOS/ARAÑA/habitat.png`,
    audio: `${INSUMOS}/4INSECTOS/ARAÑA/araña.mp3`,
    narration: makeNarration(`${INSUMOS}/4INSECTOS/ARAÑA`),
    intro: "La araña tiene ocho patas. Muchas pueden hacer redes de seda.",
    habitatText: "Las arañas viven en jardines, bosques y rincones tranquilos.",
    foodText: "Las arañas comen moscas, mosquitos, polillas, grillos e insectos.",
    foods: makeFoods(
      `${INSUMOS}/4INSECTOS/ARAÑA`,
      ["Moscas", "Mosquitos", "Polillas", "Grillos", "Insectos"],
    ),
  },
  hormiga: {
    id: "hormiga",
    category: "insectos",
    name: "Hormiga",
    icon: "🐜",
    image: `${INSUMOS}/4INSECTOS/HORMIGA/hormiga.png`,
    habitatImage: `${INSUMOS}/4INSECTOS/HORMIGA/habitat.png`,
    audio: `${INSUMOS}/4INSECTOS/HORMIGA/hormiga.mp3`,
    narration: makeNarration(`${INSUMOS}/4INSECTOS/HORMIGA`),
    intro: "La hormiga es pequeña y muy fuerte. Trabaja en equipo con otras hormigas.",
    habitatText: "Las hormigas viven en casas bajo tierra llamadas hormigueros.",
    foodText: "Las hormigas comen semillas, frutas, néctar, hongos e insectos.",
    foods: makeFoods(
      `${INSUMOS}/4INSECTOS/HORMIGA`,
      ["Semillas", "Frutas", "Néctar", "Hongos", "Insectos"],
    ),
  },
  mariposa: {
    id: "mariposa",
    category: "insectos",
    name: "Mariposa",
    icon: "🦋",
    image: `${INSUMOS}/4INSECTOS/MARIPOSA/mariposa.png`,
    habitatImage: `${INSUMOS}/4INSECTOS/MARIPOSA/habitat.png`,
    audio: `${INSUMOS}/4INSECTOS/MARIPOSA/mariposa.mp3`,
    narration: makeNarration(`${INSUMOS}/4INSECTOS/MARIPOSA`),
    intro: "La mariposa tiene alas de muchos colores. Antes de volar, fue una oruga.",
    habitatText: "Las mariposas viven en jardines, campos y bosques donde hay flores.",
    foodText: "Las mariposas toman néctar, jugo de frutas, savia, jugo de flores y agua.",
    foods: makeFoods(
      `${INSUMOS}/4INSECTOS/MARIPOSA`,
      ["Néctar", "Fruta", "Savia", "Flores", "Agua"],
      ["jpg", "jpg", "webp", "jpg", "webp"],
    ),
  },
  ballena_azul: {
    id: "ballena_azul",
    category: "marinos",
    name: "Ballena azul",
    icon: "🐋",
    image: `${INSUMOS}/5ACUATICOS Y MARINOS/BALLENA AZUL/ballena_azul.png`,
    habitatImage: `${INSUMOS}/5ACUATICOS Y MARINOS/BALLENA AZUL/habitat.png`,
    audio: `${INSUMOS}/5ACUATICOS Y MARINOS/BALLENA AZUL/ballena_azul.mp3`,
    narration: makeNarration(`${INSUMOS}/5ACUATICOS Y MARINOS/BALLENA AZUL`),
    intro: "La ballena azul es el animal más grande del mundo. Sube a la superficie para respirar aire.",
    habitatText: "Las ballenas azules viven en los grandes océanos y viajan muy lejos.",
    foodText: "Las ballenas azules comen kril.",
    foods: makeFoods(
      `${INSUMOS}/5ACUATICOS Y MARINOS/BALLENA AZUL`,
      ["Kril"],
    ),
  },
  delfin: {
    id: "delfin",
    category: "marinos",
    name: "Delfín",
    icon: "🐬",
    image: `${INSUMOS}/5ACUATICOS Y MARINOS/DELFIN/delfin.png`,
    habitatImage: `${INSUMOS}/5ACUATICOS Y MARINOS/DELFIN/habitat.png`,
    audio: `${INSUMOS}/5ACUATICOS Y MARINOS/DELFIN/delfin.mp3`,
    narration: makeNarration(`${INSUMOS}/5ACUATICOS Y MARINOS/DELFIN`),
    intro: "El delfín es juguetón e inteligente. Habla con otros delfines usando sonidos.",
    habitatText: "Los delfines viven en mares y océanos. Algunos viven en ríos grandes.",
    foodText: "Los delfines comen peces, calamares y camarones.",
    foods: makeFoods(
      `${INSUMOS}/5ACUATICOS Y MARINOS/DELFIN`,
      ["Peces", "Calamares", "Camarones"],
    ),
  },
  orca: {
    id: "orca",
    category: "marinos",
    name: "Orca",
    icon: "🐋",
    image: `${INSUMOS}/5ACUATICOS Y MARINOS/ORCA/orca.png`,
    habitatImage: `${INSUMOS}/5ACUATICOS Y MARINOS/ORCA/habitat.png`,
    audio: `${INSUMOS}/5ACUATICOS Y MARINOS/ORCA/orca.mp3`,
    narration: makeNarration(`${INSUMOS}/5ACUATICOS Y MARINOS/ORCA`),
    intro: "La orca es un delfín muy grande. Vive y aprende junto a su familia.",
    habitatText: "Las orcas viven en océanos de todo el mundo, incluso en aguas muy frías.",
    foodText: "Las orcas comen ballenas, leones marinos, focas, pingüinos y peces.",
    foods: makeFoods(
      `${INSUMOS}/5ACUATICOS Y MARINOS/ORCA`,
      ["Ballenas", "Leones marinos", "Focas", "Pingüinos", "Peces"],
      "jpg",
    ),
  },
  pulpo: {
    id: "pulpo",
    category: "marinos",
    name: "Pulpo",
    icon: "🐙",
    image: `${INSUMOS}/5ACUATICOS Y MARINOS/PULPO/pulpo.png`,
    habitatImage: `${INSUMOS}/5ACUATICOS Y MARINOS/PULPO/habitat.png`,
    audio: `${INSUMOS}/5ACUATICOS Y MARINOS/PULPO/pulpo.mp3`,
    narration: makeNarration(`${INSUMOS}/5ACUATICOS Y MARINOS/PULPO`),
    intro: "El pulpo tiene ocho brazos y tres corazones. Puede cambiar de color para esconderse.",
    habitatText: "Los pulpos viven bajo el mar, entre rocas y cuevas.",
    foodText: "Los pulpos comen caracoles, almejas, mejillones, camarones y cangrejos.",
    foods: makeFoods(
      `${INSUMOS}/5ACUATICOS Y MARINOS/PULPO`,
      ["Caracoles", "Almejas", "Mejillones", "Camarones", "Cangrejos"],
    ),
  },
  tiburon: {
    id: "tiburon",
    category: "marinos",
    name: "Tiburón",
    icon: "🦈",
    image: `${INSUMOS}/5ACUATICOS Y MARINOS/TIBURON/tiburon.png`,
    habitatImage: `${INSUMOS}/5ACUATICOS Y MARINOS/TIBURON/habitat.png`,
    audio: `${INSUMOS}/5ACUATICOS Y MARINOS/TIBURON/tiburon.mp3`,
    narration: makeNarration(`${INSUMOS}/5ACUATICOS Y MARINOS/TIBURON`),
    intro: "El tiburón es un pez grande y buen nadador. Tiene muchas filas de dientes.",
    habitatText: "Los tiburones viven en mares y océanos. Algunos nadan cerca de la costa y otros muy profundo.",
    foodText: "Los tiburones comen calamares, cangrejos, peces, focas y camarones.",
    foods: makeFoods(
      `${INSUMOS}/5ACUATICOS Y MARINOS/TIBURON`,
      ["Calamar", "Cangrejo", "Pez", "Foca", "Camarón"],
    ),
  },
  castor: {
    id: "castor",
    category: "agua-dulce",
    name: "Castor",
    icon: "🦫",
    image: `${INSUMOS}/6AGUA DULCE/CASTOR/castor.png`,
    habitatImage: `${INSUMOS}/6AGUA DULCE/CASTOR/habitat.png`,
    audio: `${INSUMOS}/6AGUA DULCE/CASTOR/castor.mp3`,
    narration: makeNarration(`${INSUMOS}/6AGUA DULCE/CASTOR`),
    intro: "El castor tiene dientes fuertes. Utiliza ramas y barro para construir su casa en el agua.",
    habitatText: "Los castores viven junto a ríos y lagos, cerca de muchos árboles.",
    foodText: "Los castores comen corteza, ramas, hojas, raíces y plantas del agua.",
    foods: makeFoods(
      `${INSUMOS}/6AGUA DULCE/CASTOR`,
      ["Corteza", "Ramas", "Hojas", "Raíces", "Plantas del agua"],
    ),
  },
  nutria: {
    id: "nutria",
    category: "agua-dulce",
    name: "Nutria",
    icon: "🦦",
    image: `${INSUMOS}/6AGUA DULCE/NUTRIA/nutria.png`,
    habitatImage: `${INSUMOS}/6AGUA DULCE/NUTRIA/habitat.jpg`,
    audio: `${INSUMOS}/6AGUA DULCE/NUTRIA/nutria.mp3`,
    narration: makeNarration(`${INSUMOS}/6AGUA DULCE/NUTRIA`),
    intro: "La nutria nada y juega muy bien. Su pelo grueso la mantiene caliente.",
    habitatText: "Las nutrias viven en ríos y lagos, en lugares con mucha agua y plantas.",
    foodText: "Las nutrias comen peces, cangrejos, caracoles y animales del agua.",
    foods: makeFoods(
      `${INSUMOS}/6AGUA DULCE/NUTRIA`,
      ["Peces", "Cangrejos", "Caracoles", "Animales del agua"],
      ["jpg", "jpg", "jpg", "png"],
    ),
  },
  salmon: {
    id: "salmon",
    category: "agua-dulce",
    name: "Salmón",
    icon: "🐟",
    image: `${INSUMOS}/6AGUA DULCE/SALMON/salmon.png`,
    habitatImage: `${INSUMOS}/6AGUA DULCE/SALMON/habitat.png`,
    audio: `${INSUMOS}/6AGUA DULCE/SALMON/salmon.mp3`,
    narration: makeNarration(`${INSUMOS}/6AGUA DULCE/SALMON`),
    intro: "El salmón es un pez fuerte. Puede nadar contra la corriente y saltar sobre el agua.",
    habitatText: "Los salmones viven una parte de su vida en ríos fríos y otra parte en el mar.",
    foodText: "Los salmones comen insectos, camarones, larvas, peces y animalitos del agua.",
    foods: makeFoods(
      `${INSUMOS}/6AGUA DULCE/SALMON`,
      ["Insectos", "Camarones", "Larvas", "Peces", "Animalitos del agua"],
    ),
  },
  trucha: {
    id: "trucha",
    category: "agua-dulce",
    name: "Trucha",
    icon: "🐟",
    image: `${INSUMOS}/6AGUA DULCE/TRUCHA/trucha.jpg`,
    habitatImage: `${INSUMOS}/6AGUA DULCE/TRUCHA/habitat.png`,
    audio: null,
    narration: makeNarration(`${INSUMOS}/6AGUA DULCE/TRUCHA`),
    intro: "La trucha es un pez rápido y ágil. Su cuerpo tiene pequeñas manchas.",
    habitatText: "Las truchas viven en ríos, arroyos y lagos con agua fría y limpia.",
    foodText: "Las truchas comen insectos, larvas, gusanos, camarones y peces.",
    foods: makeFoods(
      `${INSUMOS}/6AGUA DULCE/TRUCHA`,
      ["Insectos", "Larvas", "Gusanos", "Camarones", "Peces"],
    ),
  },
};

const categories = [
  {
    id: "terrestres",
    name: "Animales terrestres",
    icon: "🐾",
    color: "#56d6a3",
    description: "Grandes, pequeños, veloces o tranquilos: descubre animales que viven sobre la tierra.",
    animals: ["elefante", "gato", "jirafa", "leon", "mono", "oso", "perro", "tigre"],
  },
  {
    id: "aves",
    name: "Aves",
    icon: "🪶",
    color: "#54c8f3",
    description: "Conoce aves sorprendentes, sus plumas, sus vuelos y los lugares donde viven.",
    animals: ["avestruz", "buho", "condor", "aguila"],
  },
  {
    id: "reptiles",
    name: "Reptiles y anfibios",
    icon: "🦎",
    color: "#a8d94f",
    description: "Explora animales que reptan, saltan, nadan y se adaptan a ambientes increíbles.",
    animals: ["cocodrilo", "rana", "serpiente", "tortuga"],
  },
  {
    id: "insectos",
    name: "Insectos y arácnidos",
    icon: "🦋",
    color: "#ffac46",
    description: "Acércate a un pequeño gran mundo de alas, antenas, patas, redes y colores.",
    animals: ["abeja", "arana", "hormiga", "mariposa"],
  },
  {
    id: "marinos",
    name: "Acuáticos y marinos",
    icon: "🐋",
    color: "#438df4",
    description: "Sumérgete para conocer animales que viven en mares y océanos.",
    animals: ["ballena_azul", "delfin", "orca", "pulpo", "tiburon"],
  },
  {
    id: "agua-dulce",
    name: "Agua dulce",
    icon: "🦦",
    color: "#8d78ec",
    description: "Ríos, lagos y humedales esconden animales fascinantes.",
    animals: ["castor", "nutria", "salmon", "trucha"],
  },
].map((category) => ({
  ...category,
  previews: category.animals.slice(0, 2).map((id) => animals[id].image),
}));

const app = document.querySelector("#app");
const modal = document.querySelector("#modal");
const modalPanel = document.querySelector("#modal-panel");
const modalContent = document.querySelector("#modal-content");
const modalAudioToolbar = document.querySelector("#modal-audio-toolbar");
const toast = document.querySelector("#toast");
const animalAudio = document.querySelector("#animal-audio");
const narrationAudio = new Audio();
const buttonSound = new Audio(`${INSUMOS}/sonidobotones.mp3`);
const puzzleMusic = new Audio(`${INSUMOS}/musica de fondo.mp3`);
const puzzleWinSound = new Audio(`${INSUMOS}/sonidowin.mp3`);
const PUZZLE_INSTRUCTION_AUDIO = `${INSUMOS}/04_arma_el_rompecabezas.mp3`;

narrationAudio.preload = "auto";
buttonSound.preload = "auto";
buttonSound.volume = 0.2;
buttonSound.load();
puzzleMusic.preload = "auto";
puzzleMusic.loop = true;
puzzleMusic.volume = 0.09;
puzzleWinSound.preload = "auto";
puzzleWinSound.volume = 0.8;

const storageKey = "mundo-animal-v1";
const audioVolumeStorageKey = "mundo-animal-volume-v1";
const AUDIO_VOLUME_STEP = 0.1;
const defaultProgress = {
  visited: [],
  puzzles: [],
};

let progress = loadProgress();
let activeAudioId = null;
let toastTimer = null;
let lastFocusedElement = null;
let puzzleState = null;
let carouselIndex = 0;
let pointerStartX = null;
let pointerDragStarted = false;
let puzzleCelebrationTimer = null;
let narrationPlaybackId = 0;
let masterVolume = loadMasterVolume();
let lastAudioRequest = null;
let soundInteractionUnlocked = false;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      visited: Array.isArray(saved?.visited) ? saved.visited : [],
      puzzles: Array.isArray(saved?.puzzles) ? saved.puzzles : [],
    };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // La aplicación sigue funcionando aunque el almacenamiento esté bloqueado.
  }
}

function uniqueAdd(list, value) {
  return list.includes(value) ? list : [...list, value];
}

function loadMasterVolume() {
  try {
    const storedVolume = localStorage.getItem(audioVolumeStorageKey);
    if (storedVolume === null) return 1;
    const savedVolume = Number(storedVolume);
    return Number.isFinite(savedVolume) && savedVolume >= 0 && savedVolume <= 1
      ? savedVolume
      : 1;
  } catch {
    return 1;
  }
}

function applyMasterVolume() {
  narrationAudio.volume = masterVolume;
  animalAudio.volume = masterVolume;
  buttonSound.volume = 0.2 * masterVolume;
  puzzleMusic.volume = 0.09 * masterVolume;
  puzzleWinSound.volume = 0.8 * masterVolume;
}

function anyManagedAudioIsPlaying() {
  return [narrationAudio, animalAudio, buttonSound, puzzleMusic, puzzleWinSound]
    .some((audio) => !audio.paused && !audio.ended);
}

function updateGlobalAudioControls() {
  const volumePercent = Math.round(masterVolume * 100);
  const isPlaying = anyManagedAudioIsPlaying();
  document.querySelectorAll(".audio-control-bar").forEach((controls) => {
    controls.style.setProperty("--audio-volume-level", masterVolume);
    controls.dataset.volume = String(volumePercent);
  });
  document.querySelectorAll('[data-audio-control="toggle-playback"]').forEach((button) => {
    const label = isPlaying ? "Detener todos los sonidos" : "Escuchar otra vez";
    button.disabled = !isPlaying && !lastAudioRequest;
    button.classList.toggle("is-replay", !isPlaying);
    button.innerHTML = isPlaying ? AUDIO_CONTROL_ICONS.stop : AUDIO_CONTROL_ICONS.replay;
    button.setAttribute("aria-label", label);
    button.title = isPlaying ? "Detener" : "Escuchar otra vez";
  });
  document.querySelectorAll('[data-audio-control="volume-down"]').forEach((button) => {
    button.disabled = masterVolume <= 0;
    button.setAttribute("aria-label", `Bajar el volumen. Volumen actual ${volumePercent} por ciento`);
  });
  document.querySelectorAll('[data-audio-control="volume-up"]').forEach((button) => {
    button.disabled = masterVolume >= 1;
    button.setAttribute("aria-label", `Subir el volumen. Volumen actual ${volumePercent} por ciento`);
  });
}

function setMasterVolume(nextVolume) {
  masterVolume = Math.round(Math.min(1, Math.max(0, nextVolume)) * 10) / 10;
  applyMasterVolume();
  try {
    localStorage.setItem(audioVolumeStorageKey, String(masterVolume));
  } catch {
    // El control sigue funcionando aunque el almacenamiento esté bloqueado.
  }
  updateGlobalAudioControls();
  showToast(masterVolume === 0 ? "Sonido apagado" : `Volumen ${Math.round(masterVolume * 100)}%`);
}

function stopAllAudio() {
  stopNarration();
  pauseAnimalAudio();
  buttonSound.pause();
  buttonSound.currentTime = 0;
  stopPuzzleMusic();
  stopPuzzleWinSound();
  updateGlobalAudioControls();
}

function replayLastAudio() {
  if (!lastAudioRequest) {
    showToast("Todavía no hay un audio para repetir.");
    return;
  }
  if (lastAudioRequest.type === "narration") {
    if (puzzleState && !puzzleState.complete) startPuzzleMusic();
    playNarrationSequence(lastAudioRequest.sources, false);
    return;
  }

  stopNarration();
  pauseAnimalAudio();
  animalAudio.src = lastAudioRequest.src;
  animalAudio.currentTime = 0;
  activeAudioId = lastAudioRequest.animalId;
  animalAudio.play().then(() => {
    updateSoundButtons();
    updateGlobalAudioControls();
  }).catch(() => {
    activeAudioId = null;
    updateSoundButtons();
    updateGlobalAudioControls();
    showToast("No pudimos reproducir este sonido.");
  });
}

function handleAudioControl(action) {
  if (action === "toggle-playback") {
    if (anyManagedAudioIsPlaying()) stopAllAudio();
    else replayLastAudio();
  }
  else if (action === "volume-down") setMasterVolume(masterVolume - AUDIO_VOLUME_STEP);
  else if (action === "volume-up") setMasterVolume(masterVolume + AUDIO_VOLUME_STEP);
}

function navigate(hash) {
  if (window.location.hash === hash) renderRoute();
  else window.location.hash = hash;
}

function pauseAnimalAudio() {
  animalAudio.pause();
  animalAudio.currentTime = 0;
  activeAudioId = null;
  updateSoundButtons();
  updateGlobalAudioControls();
}

function stopNarration() {
  narrationPlaybackId += 1;
  narrationAudio.onended = null;
  narrationAudio.pause();
  narrationAudio.currentTime = 0;
  updateGlobalAudioControls();
}

function playNarrationSequence(sources, remember = true) {
  const queue = sources.filter(Boolean);
  if (!queue.length) return;
  if (remember) lastAudioRequest = { type: "narration", sources: [...queue] };
  stopNarration();
  pauseAnimalAudio();
  buttonSound.pause();
  buttonSound.currentTime = 0;
  const playbackId = narrationPlaybackId;
  let index = 0;

  const playNext = () => {
    if (playbackId !== narrationPlaybackId || index >= queue.length) {
      narrationAudio.onended = null;
      updateGlobalAudioControls();
      return;
    }
    narrationAudio.src = queue[index];
    narrationAudio.currentTime = 0;
    index += 1;
    narrationAudio.play().then(updateGlobalAudioControls).catch(() => {
      narrationAudio.onended = null;
      updateGlobalAudioControls();
    });
  };

  narrationAudio.onended = playNext;
  playNext();
}

function stopPuzzleMusic() {
  puzzleMusic.pause();
  puzzleMusic.currentTime = 0;
}

function startPuzzleMusic() {
  if (!puzzleState || puzzleState.complete || document.hidden) return;
  puzzleMusic.currentTime = 0;
  puzzleMusic.play().catch(() => {});
}

function stopPuzzleWinSound() {
  puzzleWinSound.pause();
  puzzleWinSound.currentTime = 0;
}

function playPuzzleWinSound() {
  puzzleWinSound.currentTime = 0;
  puzzleWinSound.play().catch(() => {});
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

function playButtonSound() {
  buttonSound.currentTime = 0;
  buttonSound.play().catch(() => {});
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function imageMarkup(animal, className = "") {
  return `<img class="${className}" src="${animal.image}" alt="${animal.name}" loading="lazy" />`;
}

function focusPageHeading() {
  requestAnimationFrame(() => {
    const heading = app.querySelector("h1");
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  });
}

function renderHome() {
  document.body.className = "is-home";
  document.querySelector(".site-header").hidden = false;
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
          ${soundInteractionUnlocked ? "" : `
            <div class="sound-start-overlay">
              <button class="sound-start-button" type="button" data-enable-sound>
                <strong>¡Empezar!</strong>
              </button>
            </div>
          `}
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

  app.querySelector("#orbit-items").innerHTML = categories.map((category, index) => `
    <button
      class="orbit-item"
      style="--node-color:${category.color}"
      type="button"
      data-category-index="${index}"
      aria-label="Seleccionar ${category.name}"
    >
      <span class="orbit-preview">
        <span class="orbit-preview-images" aria-hidden="true">
          <img src="${category.previews[0]}" alt="" />
          <img src="${category.previews[1] || category.previews[0]}" alt="" />
        </span>
      </span>
      <span class="orbit-name">${category.name}</span>
    </button>
  `).join("");

  app.querySelector("#carousel-dots").innerHTML = categories.map((category, index) => `
    <button
      class="dot"
      type="button"
      data-category-index="${index}"
      aria-label="Ir a ${category.name}"
    ></button>
  `).join("");

  updateCarousel();
  bindCarouselEvents();
  app.querySelector("[data-enable-sound]")?.addEventListener("click", (event) => {
    soundInteractionUnlocked = true;
    playButtonSound();
    event.currentTarget.closest(".sound-start-overlay")?.remove();
    app.querySelector("#category-carousel")?.focus({ preventScroll: true });
  });
  focusPageHeading();
}

function updateCarousel() {
  const selectedCategory = categories[carouselIndex];
  app.querySelectorAll(".orbit-item").forEach((button, index) => {
    let position = (index - carouselIndex + categories.length) % categories.length;
    if (position > categories.length / 2) position -= categories.length;
    button.dataset.position = String(position);
    button.setAttribute("aria-current", String(index === carouselIndex));
  });

  app.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === carouselIndex);
    dot.setAttribute("aria-current", String(index === carouselIndex));
  });

  const focusCard = app.querySelector("#focus-card");
  focusCard.style.setProperty("--focus-color", selectedCategory.color);
  focusCard.innerHTML = `
    <div class="focus-images" aria-hidden="true">
      <img src="${selectedCategory.previews[0]}" alt="" />
      <img src="${selectedCategory.previews[1] || selectedCategory.previews[0]}" alt="" />
    </div>
    <div class="focus-copy">
      <h2>${selectedCategory.name}</h2>
      <button class="primary-button" type="button" data-explore-category="${selectedCategory.id}" aria-label="Entrar a ${selectedCategory.name}">
        ¡Vamos!
      </button>
    </div>
  `;
}

function setCarouselIndex(index) {
  carouselIndex = (index + categories.length) % categories.length;
  updateCarousel();
}

function bindCarouselEvents() {
  const carousel = app.querySelector("#category-carousel");

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
    if (explore) navigate(`#categoria/${explore.dataset.exploreCategory}`);
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
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(`#categoria/${categories[carouselIndex].id}`);
    }
  });

  carousel.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaX) < 8 && Math.abs(event.deltaY) < 8) return;
    event.preventDefault();
    if (!soundInteractionUnlocked) return;
    playButtonSound();
    setCarouselIndex(carouselIndex + (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1));
  }, { passive: false });

  carousel.addEventListener("pointerdown", (event) => {
    if (!soundInteractionUnlocked) return;
    if (!event.isPrimary || event.button !== 0) return;
    pointerStartX = event.clientX;
    pointerDragStarted = false;
    carousel.classList.add("is-dragging");
  });
  carousel.addEventListener("pointermove", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    carousel.style.setProperty("--drag-offset", `${Math.max(-70, Math.min(70, distance * 0.22))}px`);
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
      playButtonSound();
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
  document.body.className = "is-category";
  document.querySelector(".site-header").hidden = true;
  document.title = `${category.name} · Mundo Animal`;
  const categoryAnimals = category.animals.map((id) => animals[id]);

  app.innerHTML = `
    <section class="page-shell">
      <div class="category-hero-layout">
        <button class="category-back-button" type="button" data-go-home aria-label="Volver a las categorías">
          <span class="back-arrow" aria-hidden="true"></span>
        </button>
        <header class="category-hero" style="--category-color:${category.color}">
          <div class="category-hero-copy">
            <h1>${category.name}</h1>
          </div>
        </header>
        <button class="category-back-button category-home-button" type="button" data-category-home aria-label="Volver al inicio">
          <span class="category-home-icon" aria-hidden="true">⌂</span>
        </button>
      </div>
      <div class="animal-grid">
        ${categoryAnimals.map((animal) => `
          <button class="animal-card" type="button" data-animal="${animal.id}" aria-label="Conocer a ${animal.name}">
            <div class="animal-card-media">
              ${imageMarkup(animal)}
            </div>
            <div class="animal-card-body">
              <h3>${animal.name}</h3>
              <span class="animal-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 64 64" focusable="false">
                  <path d="M10 32h40M37 18l14 14-14 14" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `;

  app.querySelector("[data-go-home]").addEventListener("click", () => navigate("#inicio"));
  app.querySelector("[data-category-home]").addEventListener("click", () => navigate("#inicio"));
  app.querySelectorAll("[data-animal]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#animal/${button.dataset.animal}`));
  });
  updateGlobalAudioControls();
  focusPageHeading();
}

function renderAnimal(animal) {
  document.body.className = "is-animal";
  document.querySelector(".site-header").hidden = true;
  document.title = `${animal.name} · Mundo Animal`;
  const category = categoryById(animal.category);
  progress.visited = uniqueAdd(progress.visited, animal.id);
  saveProgress();

  app.innerHTML = `
    <section class="page-shell">
      <div class="category-hero-layout">
        <button class="category-back-button" type="button" data-back-category aria-label="Regresar a ${category.name}">
          <span class="back-arrow" aria-hidden="true"></span>
        </button>
        <header class="category-hero" style="--category-color:${category.color}">
          <div class="category-hero-copy">
            <h1>${animal.name}</h1>
            ${audioControlsMarkup("navigation")}
          </div>
        </header>
        <button class="category-back-button category-home-button" type="button" data-go-home aria-label="Volver al inicio">
          <span class="category-home-icon" aria-hidden="true">⌂</span>
        </button>
      </div>

      <article class="detail-layout">
        <div class="animal-portrait">
          <img src="${animal.image}" alt="${animal.name}, imagen principal" />
        </div>
        <div class="detail-copy">
          <p class="detail-intro">${animal.intro}</p>
          <div class="fact-grid">
            <button class="fact-card" type="button" data-action="habitat"
              ${animal.narration ? "data-narration-click" : ""}
              aria-label="Ver dónde viven ${animalNameInPlural(animal)}">
              <strong>¿Dónde viven ${animalNameInPlural(animal)}?</strong>
            </button>
            <button class="fact-card" type="button" data-action="food"
              ${animal.narration ? "data-narration-click" : ""}
              aria-label="Ver qué comen ${animalNameInPlural(animal)}">
              <strong>¿Qué comen ${animalNameInPlural(animal)}?</strong>
            </button>
          </div>
          <div class="animal-action-buttons">
            <button class="sound-button icon-only-action" type="button" data-action="sound" data-animal="${animal.id}"
              aria-label="${animal.audio ? `Escuchar el sonido de ${animal.name}` : `Sonido de ${animal.name} no disponible`}"
              aria-pressed="false" ${animal.audio ? "" : "disabled"}>
              <span class="action-icon" aria-hidden="true">${animal.audio ? ACTION_ICONS.sound : ACTION_ICONS.muted}</span>
            </button>
            <button class="primary-button puzzle-launch icon-only-action" type="button" data-action="puzzle" aria-label="Armar el rompecabezas de ${animal.name}">
              <span class="action-icon" aria-hidden="true">${ACTION_ICONS.puzzle}</span>
            </button>
          </div>
        </div>
      </article>
    </section>
  `;

  app.querySelector("[data-back-category]").addEventListener("click", () => navigate(`#categoria/${category.id}`));
  app.querySelector("[data-go-home]").addEventListener("click", () => navigate("#inicio"));
  app.querySelector('[data-action="habitat"]').addEventListener("click", () => openHabitatModal(animal));
  app.querySelector('[data-action="food"]').addEventListener("click", () => openFoodModal(animal));
  app.querySelector('[data-action="puzzle"]').addEventListener("click", () => openPuzzleModal(animal));
  app.querySelector('[data-action="sound"]').addEventListener("click", () => toggleAnimalSound(animal));
  updateGlobalAudioControls();
  if (animal.narration) {
    playNarrationSequence([animal.narration.entry]);
  }
  focusPageHeading();
}

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function toggleAnimalSound(animal) {
  if (!animal.audio) return;
  if (activeAudioId === animal.id && !animalAudio.paused) {
    animalAudio.pause();
    return;
  }
  if (activeAudioId !== animal.id) {
    animalAudio.src = animal.audio;
    activeAudioId = animal.id;
  }
  animalAudio.play().then(() => {
    lastAudioRequest = { type: "animal", src: animal.audio, animalId: animal.id };
    updateSoundButtons();
    updateGlobalAudioControls();
  }).catch(() => {
    activeAudioId = null;
    updateSoundButtons();
    updateGlobalAudioControls();
    showToast("No pudimos reproducir este sonido.");
  });
}

function updateSoundButtons() {
  document.querySelectorAll('[data-action="sound"]').forEach((button) => {
    const playing = activeAudioId === button.dataset.animal && !animalAudio.paused;
    const buttonAnimalName = animals[button.dataset.animal]?.name || "el animal";
    button.classList.toggle("is-playing", playing);
    button.setAttribute("aria-pressed", String(playing));
    if (!button.disabled) {
      button.innerHTML = playing
        ? `<span class="action-icon" aria-hidden="true">${ACTION_ICONS.pause}</span>`
        : `<span class="action-icon" aria-hidden="true">${ACTION_ICONS.sound}</span>`;
      button.setAttribute("aria-label", playing
        ? `Pausar el sonido de ${buttonAnimalName}`
        : `Escuchar el sonido de ${buttonAnimalName}`);
    }
  });
}

function openModal(html, onReady) {
  stopNarration();
  pauseAnimalAudio();
  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = html;
  modalAudioToolbar.innerHTML = audioControlsMarkup("modal");
  updateGlobalAudioControls();
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel.scrollTop = 0;
  requestAnimationFrame(() => {
    modal.querySelector(".modal-close").focus();
    onReady?.();
  });
}

function closeModal() {
  stopNarration();
  stopPuzzleMusic();
  stopPuzzleWinSound();
  clearPuzzleCelebration();
  modal.hidden = true;
  modalContent.innerHTML = "";
  modalAudioToolbar.innerHTML = "";
  document.body.classList.remove("modal-open");
  puzzleState = null;

  const [routeName, animalId] = window.location.hash.slice(1).split("/");
  const currentAnimal = routeName === "animal" ? animals[animalId] : null;
  lastAudioRequest = currentAnimal?.narration?.entry
    ? { type: "narration", sources: [currentAnimal.narration.entry] }
    : null;
  updateGlobalAudioControls();

  if (lastFocusedElement instanceof HTMLElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function openHabitatModal(animal) {
  openModal(`
    <div class="habitat-modal">
      <div class="modal-header">
        <h2 id="modal-title">¿Dónde viven ${animalNameInPlural(animal)}?</h2>
        <p>${animal.habitatText}</p>
      </div>
      <img class="habitat-image" src="${animal.habitatImage}" alt="Hábitat de ${animal.name}" />
    </div>
  `);
  if (animal.narration) {
    playNarrationSequence([animal.narration.habitat]);
  }
}

function openFoodModal(animal) {
  openModal(`
    <div class="food-modal">
      <div class="modal-header">
        <h2 id="modal-title">¿Qué comen ${animalNameInPlural(animal)}?</h2>
        <p>${animal.foodText}</p>
      </div>
      <div class="food-grid">
        ${animal.foods.map((food) => `
          <article class="food-card">
            <img src="${food.image}" alt="${food.name}, alimento de ${animal.name}" loading="lazy" />
            <strong>${food.name}</strong>
          </article>
        `).join("")}
      </div>
    </div>
  `);
  if (animal.narration) {
    playNarrationSequence([animal.narration.food]);
  }
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
  pauseAnimalAudio();
  puzzleState = {
    animal,
    tray: shufflePieces(),
    board: [null, null, null, null],
    selected: null,
    dragSelection: null,
    complete: false,
  };

  openModal(`
    <div class="puzzle-shell">
      <div class="modal-header">
        <h2 id="modal-title">Arma a ${animal.name}</h2>
      </div>
      <div class="puzzle-workspace">
        <section class="puzzle-zone puzzle-tray-zone" aria-label="Piezas disponibles">
          <div class="puzzle-tray" id="puzzle-tray"></div>
          <div class="puzzle-success" id="puzzle-success" aria-hidden="true">
            <div class="success-bubble">
              <div class="success-stars" aria-hidden="true">
                <span>★</span><span>★</span><span>★</span>
              </div>
              <strong>¡Lo lograste!</strong>
              <div class="success-actions">
                <button class="success-icon-button success-retry-button" type="button" id="retry-puzzle" aria-label="Jugar otra vez" title="Jugar otra vez">↻</button>
              </div>
            </div>
          </div>
        </section>
        <div class="puzzle-move-demo" aria-hidden="true">
          <span class="puzzle-demo-piece">
            <img class="puzzle-fragment puzzle-fragment-${puzzleState.tray[0]}" src="${animal.image}" alt="" />
          </span>
        </div>
        <section class="puzzle-zone puzzle-board-zone" aria-label="Tablero del rompecabezas">
          <div class="puzzle-board-wrap">
            <div class="puzzle-board" id="puzzle-board" aria-label="Rompecabezas de ${animal.name}"></div>
          </div>
        </section>
      </div>
      <p id="puzzle-status" class="sr-only" aria-live="polite"></p>
    </div>
  `, bindPuzzleEvents);
  startPuzzleMusic();
  playNarrationSequence([PUZZLE_INSTRUCTION_AUDIO]);
}

function renderPuzzleBoard() {
  if (!puzzleState) return;
  const tray = modalContent.querySelector("#puzzle-tray");
  const board = modalContent.querySelector("#puzzle-board");
  if (!tray || !board) return;

  tray.innerHTML = puzzleState.tray.map((piece, index) => {
    const selected = puzzleState.selected?.source === "tray" && puzzleState.selected.index === index;
    return `
      <button class="puzzle-piece ${selected ? "is-selected" : ""}" type="button" draggable="false"
        data-piece-source="tray" data-piece-index="${index}" data-piece-id="${piece}"
        aria-label="Pieza ${piece + 1}${selected ? ", seleccionada" : ""}" aria-pressed="${selected}">
        <img class="puzzle-fragment puzzle-fragment-${piece}" src="${puzzleState.animal.image}" alt="" draggable="false" />
      </button>
    `;
  }).join("");
  if (!puzzleState.tray.length) tray.innerHTML = '<p class="tray-empty">¡Todas las piezas están en el tablero!</p>';

  board.innerHTML = puzzleState.board.map((piece, slotIndex) => {
    const selected = puzzleState.selected?.source === "board" && puzzleState.selected.index === slotIndex;
    return `
      <button class="puzzle-slot ${selected ? "is-selected" : ""}" type="button" draggable="false"
        data-slot-index="${slotIndex}" data-piece-source="board" data-piece-index="${slotIndex}"
        data-piece-id="${piece ?? ""}" aria-label="${piece === null ? `Espacio ${slotIndex + 1}, vacío` : `Pieza ${piece + 1} en el espacio ${slotIndex + 1}`}" aria-pressed="${selected}">
        <span class="slot-guide" aria-hidden="true"></span>
        ${piece === null
          ? `<span class="slot-number" aria-hidden="true">${slotIndex + 1}</span>`
          : `<span class="placed-puzzle-piece" aria-hidden="true"><img class="puzzle-fragment puzzle-fragment-${piece}" src="${puzzleState.animal.image}" alt="" draggable="false" /></span>`}
      </button>
    `;
  }).join("");

  if (puzzleState.complete) {
    board.innerHTML = `<img class="puzzle-complete-image" src="${puzzleState.animal.image}" alt="Rompecabezas completo de ${puzzleState.animal.name}" />`;
  }
  const success = modalContent.querySelector("#puzzle-success");
  success?.classList.toggle("is-visible", puzzleState.complete);
  success?.setAttribute("aria-hidden", String(!puzzleState.complete));
  const hasPlacedPiece = puzzleState.board.some((piece) => piece !== null);
  modalContent.querySelector(".puzzle-move-demo")?.classList.toggle("is-hidden", hasPlacedPiece);
  const puzzleShell = modalContent.querySelector(".puzzle-shell");
  puzzleShell?.classList.toggle("is-awaiting-first-piece", !hasPlacedPiece);
  puzzleShell?.classList.toggle("is-complete", puzzleState.complete);
  positionPuzzleMoveDemo();
}

function positionPuzzleMoveDemo() {
  requestAnimationFrame(() => {
    const demo = modalContent.querySelector(".puzzle-move-demo:not(.is-hidden)");
    const workspace = modalContent.querySelector(".puzzle-workspace");
    const firstPiece = modalContent.querySelector('#puzzle-tray [data-piece-source="tray"]');
    const firstSlot = modalContent.querySelector('#puzzle-board [data-slot-index="0"]');
    const demoPiece = demo?.querySelector(".puzzle-demo-piece");
    if (!demo || !workspace || !firstPiece || !firstSlot || !demoPiece) return;

    const workspaceBox = workspace.getBoundingClientRect();
    const pieceBox = firstPiece.getBoundingClientRect();
    const slotBox = firstSlot.getBoundingClientRect();
    const baseX = workspaceBox.left + workspaceBox.width / 2 + demo.offsetWidth / 2;
    const baseY = workspaceBox.top + workspaceBox.height / 2 + demoPiece.offsetTop + demoPiece.offsetHeight / 2;

    demo.style.setProperty("--demo-start-x", `${pieceBox.left + pieceBox.width / 2 - baseX}px`);
    demo.style.setProperty("--demo-start-y", `${pieceBox.top + pieceBox.height / 2 - baseY}px`);
    demo.style.setProperty("--demo-end-x", `${slotBox.left + slotBox.width / 2 - baseX}px`);
    demo.style.setProperty("--demo-end-y", `${slotBox.top + slotBox.height / 2 - baseY}px`);
  });
}

function placeSelectedPuzzlePiece(slotIndex) {
  if (!puzzleState?.selected || puzzleState.complete) return;
  const selection = puzzleState.selected;
  if (selection.source === "tray") {
    const [piece] = puzzleState.tray.splice(selection.index, 1);
    const displacedPiece = puzzleState.board[slotIndex];
    puzzleState.board[slotIndex] = piece;
    if (displacedPiece !== null) puzzleState.tray.push(displacedPiece);
  } else {
    if (selection.index === slotIndex) {
      returnPuzzlePieceToTray(selection.index);
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
  const status = modalContent.querySelector("#puzzle-status");
  if (puzzleState.complete) {
    stopPuzzleMusic();
    playPuzzleWinSound();
    progress.puzzles = uniqueAdd(progress.puzzles, puzzleState.animal.id);
    saveProgress();
    launchPuzzleCelebration();
    if (status) status.textContent = "¡Lo lograste! Completaste el rompecabezas.";
  } else if (status) {
    status.textContent = "Pieza colocada en el tablero.";
  }
}

function returnPuzzlePieceToTray(slotIndex) {
  if (!puzzleState || puzzleState.board[slotIndex] === null) return;
  puzzleState.tray.push(puzzleState.board[slotIndex]);
  puzzleState.board[slotIndex] = null;
  puzzleState.selected = null;
  puzzleState.dragSelection = null;
  puzzleState.complete = false;
  renderPuzzleBoard();
  const status = modalContent.querySelector("#puzzle-status");
  if (status) status.textContent = "La pieza volvió a la bandeja.";
}

function resetPuzzle() {
  if (!puzzleState) return;
  clearPuzzleCelebration();
  stopPuzzleWinSound();
  puzzleState.tray = shufflePieces();
  puzzleState.board = [null, null, null, null];
  puzzleState.selected = null;
  puzzleState.dragSelection = null;
  puzzleState.complete = false;
  renderPuzzleBoard();
  startPuzzleMusic();
}

function bindPuzzleEvents() {
  renderPuzzleBoard();
  const workspace = modalContent.querySelector(".puzzle-workspace");
  const tray = modalContent.querySelector("#puzzle-tray");
  const board = modalContent.querySelector("#puzzle-board");
  let pointerDrag = null;
  let suppressPuzzleClick = false;

  tray.addEventListener("click", (event) => {
    if (suppressPuzzleClick) return;
    const piece = event.target.closest('[data-piece-source="tray"]');
    if (!piece || !puzzleState) return;
    const index = Number(piece.dataset.pieceIndex);
    const alreadySelected = puzzleState.selected?.source === "tray" && puzzleState.selected.index === index;
    puzzleState.selected = alreadySelected ? null : { source: "tray", index, piece: Number(piece.dataset.pieceId) };
    renderPuzzleBoard();
  });

  board.addEventListener("click", (event) => {
    if (suppressPuzzleClick) return;
    const slot = event.target.closest("[data-slot-index]");
    if (!slot || !puzzleState) return;
    const slotIndex = Number(slot.dataset.slotIndex);
    if (puzzleState.selected) {
      placeSelectedPuzzlePiece(slotIndex);
    } else if (puzzleState.board[slotIndex] !== null) {
      puzzleState.selected = { source: "board", index: slotIndex, piece: puzzleState.board[slotIndex] };
      renderPuzzleBoard();
    }
  });

  workspace.addEventListener("pointerdown", (event) => {
    const piece = event.target.closest("[data-piece-source]");
    if (!piece || !puzzleState || piece.dataset.pieceId === "") return;
    pointerDrag = {
      pointerId: event.pointerId,
      source: piece.dataset.pieceSource,
      index: Number(piece.dataset.pieceIndex),
      piece: Number(piece.dataset.pieceId),
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      origin: piece,
      ghost: null,
    };
    piece.setPointerCapture?.(event.pointerId);
  });

  workspace.addEventListener("pointermove", (event) => {
    if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;
    const distance = Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY);
    if (!pointerDrag.moved && distance < 8) return;
    event.preventDefault();
    if (!pointerDrag.ghost) {
      pointerDrag.moved = true;
      pointerDrag.ghost = pointerDrag.origin.cloneNode(true);
      pointerDrag.ghost.classList.add("puzzle-drag-ghost");
      pointerDrag.ghost.removeAttribute("aria-label");
      pointerDrag.ghost.setAttribute("aria-hidden", "true");
      document.body.append(pointerDrag.ghost);
    }
    pointerDrag.ghost.style.left = `${event.clientX}px`;
    pointerDrag.ghost.style.top = `${event.clientY}px`;
  });

  workspace.addEventListener("pointerup", (event) => {
    if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;
    const drag = pointerDrag;
    pointerDrag = null;
    drag.origin.releasePointerCapture?.(event.pointerId);
    if (!drag.moved) return;
    event.preventDefault();
    drag.ghost?.remove();
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const slot = target?.closest("[data-slot-index]");
    const overTray = target?.closest(".puzzle-tray-zone");
    suppressPuzzleClick = true;
    window.setTimeout(() => { suppressPuzzleClick = false; }, 0);
    if (slot) {
      puzzleState.selected = { source: drag.source, index: drag.index, piece: drag.piece };
      placeSelectedPuzzlePiece(Number(slot.dataset.slotIndex));
    } else if (overTray && drag.source === "board") {
      returnPuzzlePieceToTray(drag.index);
    } else {
      puzzleState.selected = null;
      puzzleState.dragSelection = null;
      renderPuzzleBoard();
    }
  });

  workspace.addEventListener("pointercancel", () => {
    pointerDrag?.ghost?.remove();
    pointerDrag = null;
  });
  modalContent.querySelector("#retry-puzzle").addEventListener("click", resetPuzzle);
}

function renderRoute() {
  closeModal();
  pauseAnimalAudio();
  const hash = window.location.hash.replace(/^#/, "") || "inicio";
  const [route, id] = hash.split("/");
  if (route === "categoria" && categoryById(id)) {
    renderCategory(categoryById(id));
  } else if (route === "animal" && animals[id]) {
    renderAnimal(animals[id]);
  } else {
    if (hash !== "inicio") history.replaceState(null, "", "#inicio");
    renderHome();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("#brand-home").addEventListener("click", () => navigate("#inicio"));
document.querySelector("#header-home").addEventListener("click", () => navigate("#inicio"));

document.addEventListener("click", (event) => {
  const control = event.target.closest("[data-audio-control]");
  if (!control || control.disabled) return;
  handleAudioControl(control.dataset.audioControl);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled || button.matches('[data-action="sound"], [data-action="puzzle"], [data-audio-control], [data-enable-sound]') || button.hasAttribute("data-narration-click")) return;
  playButtonSound();
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
  const focusable = [...modalPanel.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.hidden);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

animalAudio.addEventListener("play", updateSoundButtons);
animalAudio.addEventListener("pause", updateSoundButtons);
animalAudio.addEventListener("ended", () => {
  activeAudioId = null;
  updateSoundButtons();
});

[narrationAudio, animalAudio, buttonSound, puzzleMusic, puzzleWinSound].forEach((audio) => {
  audio.addEventListener("play", updateGlobalAudioControls);
  audio.addEventListener("pause", updateGlobalAudioControls);
  audio.addEventListener("ended", updateGlobalAudioControls);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopNarration();
    pauseAnimalAudio();
    puzzleMusic.pause();
    puzzleWinSound.pause();
  } else if (puzzleState && !puzzleState.complete && !modal.hidden) {
    puzzleMusic.play().catch(() => {});
  }
});

document.addEventListener("error", (event) => {
  if (!(event.target instanceof HTMLImageElement)) return;
  const image = event.target;
  const fallback = document.createElement("div");
  fallback.className = `image-placeholder ${image.className}`;
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", image.alt || "Imagen no disponible");
  fallback.innerHTML = '<span aria-hidden="true">✦</span>';
  image.replaceWith(fallback);
}, true);

window.addEventListener("hashchange", renderRoute);

applyMasterVolume();
if (!window.location.hash) history.replaceState(null, "", "#inicio");
renderRoute();
