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

const animals = {
  elefante: {
    id: "elefante",
    category: "terrestres",
    name: "Elefante",
    icon: "🐘",
    image: `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE/elefante.jpg`,
    habitatImage: `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE/habitat.png`,
    audio: `${INSUMOS}/1ANIMALES TERRESTRES/ELEFANTE/elefante.mp3`,
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
    intro: "El mono es curioso y juguetón. Usa sus manos y su cola para moverse entre las ramas.",
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
    intro: "El castor tiene dientes fuertes. Usa ramas y barro para construir su casa en el agua.",
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
const toast = document.querySelector("#toast");
const animalAudio = document.querySelector("#animal-audio");
const buttonSound = new Audio(`${INSUMOS}/sonidobotones.mp3`);
const puzzleMusic = new Audio(`${INSUMOS}/musica de fondo.mp3`);

buttonSound.preload = "auto";
buttonSound.volume = 0.2;
puzzleMusic.preload = "auto";
puzzleMusic.loop = true;
puzzleMusic.volume = 0.09;

const storageKey = "mundo-animal-v1";
const defaultProgress = {
  visited: [],
  favorites: [],
  puzzles: [],
  quizBest: 0,
  effects: true,
};

let progress = loadProgress();
let activeAudioId = null;
let toastTimer = null;
let lastFocusedElement = null;
let puzzleState = null;
let quizState = null;
let carouselIndex = 0;
let pointerStartX = null;
let pointerDragStarted = false;
let puzzleCelebrationTimer = null;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...defaultProgress,
      ...saved,
      visited: Array.isArray(saved?.visited) ? saved.visited : [],
      favorites: Array.isArray(saved?.favorites) ? saved.favorites : [],
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
  updateHeaderControls();
}

function uniqueAdd(list, value) {
  return list.includes(value) ? list : [...list, value];
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

function updateHeaderControls() {
  const effectsButton = document.querySelector("#toggle-effects");
  const progressLabel = document.querySelector("#header-progress");
  if (effectsButton) {
    effectsButton.setAttribute("aria-pressed", String(progress.effects));
    effectsButton.innerHTML = progress.effects
      ? '<span aria-hidden="true">🔔</span><span>Efectos</span>'
      : '<span aria-hidden="true">🔕</span><span>Silencio</span>';
  }
  if (progressLabel) {
    progressLabel.textContent = `${progress.visited.length}/${Object.keys(animals).length}`;
  }
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

function animalCard(animal) {
  const visited = progress.visited.includes(animal.id);
  const favorite = progress.favorites.includes(animal.id);
  return `
    <button class="animal-card ${visited ? "is-visited" : ""}" type="button" data-animal="${animal.id}">
      <div class="animal-card-media">
        ${imageMarkup(animal)}
        <span class="card-badge is-ready">${visited ? "Descubierto" : "Descubrir"}</span>
        ${favorite ? '<span class="favorite-badge" aria-label="Favorito">★</span>' : ""}
      </div>
      <div class="animal-card-body">
        <div>
          <h3>${animal.name}</h3>
          <span>${animal.audio ? "Tiene sonido" : "Sonido pendiente"}</span>
        </div>
        <span class="animal-card-arrow" aria-hidden="true">→</span>
      </div>
    </button>
  `;
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
    setCarouselIndex(carouselIndex + (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1));
  }, { passive: false });

  carousel.addEventListener("pointerdown", (event) => {
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

function renderDashboardHome() {
  document.body.className = "is-home";
  document.title = "Mundo Animal · Aprende jugando";
  const total = Object.keys(animals).length;
  const favorites = progress.favorites.map((id) => animals[id]).filter(Boolean);

  app.innerHTML = `
    <section class="page-shell home-dashboard">
      <section class="welcome-hero">
        <div class="welcome-copy">
          <p class="eyebrow">Una aventura para pequeños exploradores</p>
          <h1>Descubre el <span>mundo animal</span></h1>
          <p>Observa, escucha, juega y aprende con ${total} animales de seis ambientes diferentes.</p>
          <div class="hero-actions">
            <button class="primary-button" type="button" data-random-animal>
              <span aria-hidden="true">✦</span> Sorpréndeme
            </button>
            <button class="secondary-button" type="button" data-start-quiz="all">
              <span aria-hidden="true">?</span> Adivina el animal
            </button>
          </div>
        </div>
        <div class="progress-orb" aria-label="${progress.visited.length} de ${total} animales descubiertos">
          <strong>${progress.visited.length}</strong>
          <span>de ${total}</span>
          <small>descubiertos</small>
        </div>
      </section>

      <section class="explorer-tools" aria-labelledby="search-title">
        <div>
          <p class="eyebrow">Busca por su nombre</p>
          <h2 id="search-title">¿A quién quieres conocer?</h2>
        </div>
        <label class="animal-search">
          <span aria-hidden="true">⌕</span>
          <span class="sr-only">Buscar un animal</span>
          <input id="animal-search" type="search" placeholder="Escribe: tigre, rana, orca…" autocomplete="off" />
        </label>
        <div class="search-results" id="search-results" hidden></div>
      </section>

      <section class="home-section" aria-labelledby="categories-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Seis mundos para explorar</p>
            <h2 id="categories-title">Elige una categoría</h2>
          </div>
        </div>
        <div class="category-grid">
          ${categories.map((category) => {
            const discovered = category.animals.filter((id) => progress.visited.includes(id)).length;
            return `
              <button
                class="category-card"
                style="--category-color:${category.color}"
                type="button"
                data-category="${category.id}"
              >
                <span class="category-card-icon" aria-hidden="true">${category.icon}</span>
                <span class="category-card-images" aria-hidden="true">
                  <img src="${category.previews[0]}" alt="" loading="lazy" />
                  <img src="${category.previews[1]}" alt="" loading="lazy" />
                </span>
                <span class="category-card-copy">
                  <strong>${category.name}</strong>
                </span>
                <span class="category-card-arrow" aria-hidden="true">→</span>
              </button>
            `;
          }).join("")}
        </div>
      </section>

      ${favorites.length ? `
        <section class="home-section" aria-labelledby="favorites-title">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Tu colección</p>
              <h2 id="favorites-title">Animales favoritos</h2>
            </div>
          </div>
          <div class="animal-grid compact-animal-grid">
            ${favorites.map(animalCard).join("")}
          </div>
        </section>
      ` : ""}
    </section>
  `;

  app.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#categoria/${button.dataset.category}`));
  });
  app.querySelectorAll("[data-animal]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#animal/${button.dataset.animal}`));
  });
  app.querySelector("[data-random-animal]").addEventListener("click", goToRandomAnimal);
  app.querySelector("[data-start-quiz]").addEventListener("click", () => openQuizModal());

  const input = app.querySelector("#animal-search");
  const results = app.querySelector("#search-results");
  input.addEventListener("input", () => renderSearchResults(input.value, results));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      input.value = "";
      renderSearchResults("", results);
    }
  });
  focusPageHeading();
}

function renderSearchResults(value, container) {
  const query = value.trim().toLocaleLowerCase("es");
  if (!query) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  const matches = Object.values(animals).filter((animal) =>
    animal.name.toLocaleLowerCase("es").includes(query),
  );
  container.hidden = false;
  container.innerHTML = matches.length
    ? matches.slice(0, 8).map((animal) => `
        <button type="button" data-animal="${animal.id}">
          <img src="${animal.image}" alt="" />
          <span><strong>${animal.name}</strong><small>${categoryById(animal.category).name}</small></span>
          <span aria-hidden="true">→</span>
        </button>
      `).join("")
    : '<p>No encontramos ese animal. Prueba con otro nombre.</p>';
  container.querySelectorAll("[data-animal]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#animal/${button.dataset.animal}`));
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
              <span class="animal-card-arrow" aria-hidden="true">→</span>
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
  focusPageHeading();
}

function renderExtendedCategory(category) {
  document.body.className = "is-category";
  document.title = `${category.name} · Mundo Animal`;
  const categoryAnimals = category.animals.map((id) => animals[id]);
  const discovered = category.animals.filter((id) => progress.visited.includes(id)).length;

  app.innerHTML = `
    <section class="page-shell">
      <div class="category-hero-layout">
        <button class="category-back-button" type="button" data-go-home aria-label="Volver al inicio">
          <span class="back-arrow" aria-hidden="true"></span>
        </button>
        <header class="category-hero" style="--category-color:${category.color}">
          <div class="category-hero-copy">
            <p class="eyebrow">${category.icon} Colección para explorar</p>
            <h1>${category.name}</h1>
            <p>${category.description}</p>
            <div class="category-meta">
              <span>${discovered} descubiertos</span>
              <button type="button" data-start-quiz="${category.id}">Jugar cuestionario</button>
            </div>
          </div>
        </header>
      </div>
      <div class="section-heading">
        <div>
          <p class="eyebrow">Toca una tarjeta</p>
          <h2>¿A quién conoceremos?</h2>
        </div>
      </div>
      <div class="animal-grid">${categoryAnimals.map(animalCard).join("")}</div>
    </section>
  `;
  app.querySelector("[data-go-home]").addEventListener("click", () => navigate("#inicio"));
  app.querySelector("[data-start-quiz]").addEventListener("click", () => openQuizModal(category.id));
  app.querySelectorAll("[data-animal]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#animal/${button.dataset.animal}`));
  });
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
            <button class="fact-card" type="button" data-action="habitat" aria-label="Ver dónde viven ${animalNameInPlural(animal)}">
              <span class="fact-icon" aria-hidden="true">⌂</span>
              <span><strong>¿Dónde viven ${animalNameInPlural(animal)}?</strong><small>Descubre su hábitat</small></span>
            </button>
            <button class="fact-card" type="button" data-action="food" aria-label="Ver qué comen ${animalNameInPlural(animal)}">
              <span class="fact-icon" aria-hidden="true">●</span>
              <span><strong>¿Qué comen ${animalNameInPlural(animal)}?</strong><small>Mira sus alimentos</small></span>
            </button>
          </div>
          <button class="sound-button" type="button" data-action="sound" data-animal="${animal.id}" aria-pressed="false" ${animal.audio ? "" : "disabled"}>
            <span aria-hidden="true">♪</span>
            ${animal.audio ? "Escuchar sonido" : "Sonido próximamente"}
          </button>
          <button class="primary-button puzzle-launch" type="button" data-action="puzzle">
            <span aria-hidden="true">▦</span> Armar rompecabezas
          </button>
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
  focusPageHeading();
}

function renderExtendedAnimal(animal) {
  document.body.className = "is-animal";
  document.title = `${animal.name} · Mundo Animal`;
  const category = categoryById(animal.category);
  progress.visited = uniqueAdd(progress.visited, animal.id);
  saveProgress();
  const isFavorite = progress.favorites.includes(animal.id);
  const categoryIndex = category.animals.indexOf(animal.id);
  const previous = animals[category.animals[(categoryIndex - 1 + category.animals.length) % category.animals.length]];
  const next = animals[category.animals[(categoryIndex + 1) % category.animals.length]];

  app.innerHTML = `
    <section class="page-shell animal-page">
      <div class="category-hero-layout">
        <button class="category-back-button" type="button" data-back-category aria-label="Regresar a ${category.name}">
          <span class="back-arrow" aria-hidden="true"></span>
        </button>
        <header class="category-hero" style="--category-color:${category.color}">
          <div class="category-hero-copy">
            <h1>${animal.name}</h1>
          </div>
        </header>
        <button class="category-back-button category-home-button" type="button" data-go-home aria-label="Volver al inicio">
          <span class="category-home-icon" aria-hidden="true">⌂</span>
        </button>
      </div>

      <article class="detail-layout">
        <button class="animal-portrait" type="button" data-image="${animal.image}" data-image-alt="${animal.name}">
          <img src="${animal.image}" alt="${animal.name}, imagen principal" />
          <span class="portrait-label"><strong>${animal.icon}</strong><span>Toca para ampliar</span></span>
        </button>
        <div class="detail-copy">
          <div class="animal-chips">
            <span>${category.icon} ${category.name}</span>
            <span>🍽 ${animal.foods.length} alimentos</span>
            <span>${animal.audio ? "♪ Con sonido" : "♪ Sonido pendiente"}</span>
          </div>
          <p class="detail-intro">${animal.intro}</p>
          <div class="fact-grid">
            <button class="fact-card" type="button" data-action="habitat">
              <span class="fact-icon" aria-hidden="true">⌂</span>
              <span><strong>¿Dónde viven ${animalNameInPlural(animal)}?</strong><small>Descubre su hábitat</small></span>
            </button>
            <button class="fact-card" type="button" data-action="food">
              <span class="fact-icon" aria-hidden="true">●</span>
              <span><strong>¿Qué comen ${animalNameInPlural(animal)}?</strong><small>Mira sus alimentos</small></span>
            </button>
          </div>
          <div class="animal-actions">
            <button class="sound-button" type="button" data-action="sound" data-animal="${animal.id}" aria-pressed="false" ${animal.audio ? "" : "disabled"}>
              <span aria-hidden="true">♪</span> ${animal.audio ? "Escuchar sonido" : "Sonido próximamente"}
            </button>
            <button class="primary-button puzzle-launch" type="button" data-action="puzzle">
              <span aria-hidden="true">▦</span> Armar rompecabezas
            </button>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-action="favorite" aria-pressed="${isFavorite}">
              <span aria-hidden="true">${isFavorite ? "★" : "☆"}</span>
              ${isFavorite ? "En mis favoritos" : "Guardar favorito"}
            </button>
          </div>
        </div>
      </article>

      <nav class="animal-neighbors" aria-label="Otros animales de ${category.name}">
        <button type="button" data-animal-neighbor="${previous.id}">
          <span aria-hidden="true">←</span><img src="${previous.image}" alt="" /><span><small>Anterior</small><strong>${previous.name}</strong></span>
        </button>
        <button type="button" data-animal-neighbor="${next.id}">
          <span><small>Siguiente</small><strong>${next.name}</strong></span><img src="${next.image}" alt="" /><span aria-hidden="true">→</span>
        </button>
      </nav>
    </section>
  `;

  app.querySelector("[data-back-category]").addEventListener("click", () => navigate(`#categoria/${category.id}`));
  app.querySelector("[data-go-home]").addEventListener("click", () => navigate("#inicio"));
  app.querySelector('[data-action="habitat"]').addEventListener("click", () => openHabitatModal(animal));
  app.querySelector('[data-action="food"]').addEventListener("click", () => openFoodModal(animal));
  app.querySelector('[data-action="puzzle"]').addEventListener("click", () => openPuzzleModal(animal));
  app.querySelector('[data-action="sound"]').addEventListener("click", () => toggleAnimalSound(animal));
  app.querySelector('[data-action="favorite"]').addEventListener("click", () => toggleFavorite(animal));
  app.querySelector("[data-image]").addEventListener("click", () => openImageModal(animal.image, animal.name));
  app.querySelectorAll("[data-animal-neighbor]").forEach((button) => {
    button.addEventListener("click", () => navigate(`#animal/${button.dataset.animalNeighbor}`));
  });
  focusPageHeading();
}

function categoryById(id) {
  return categories.find((category) => category.id === id);
}

function goToRandomAnimal() {
  const ids = Object.keys(animals);
  const currentId = window.location.hash.startsWith("#animal/")
    ? window.location.hash.split("/")[1]
    : null;
  const candidates = ids.filter((id) => id !== currentId);
  navigate(`#animal/${candidates[Math.floor(Math.random() * candidates.length)]}`);
}

function toggleFavorite(animal) {
  const isFavorite = progress.favorites.includes(animal.id);
  progress.favorites = isFavorite
    ? progress.favorites.filter((id) => id !== animal.id)
    : [...progress.favorites, animal.id];
  saveProgress();
  const button = app.querySelector('[data-action="favorite"]');
  const nowFavorite = !isFavorite;
  button.classList.toggle("is-favorite", nowFavorite);
  button.setAttribute("aria-pressed", String(nowFavorite));
  button.innerHTML = `<span aria-hidden="true">${nowFavorite ? "★" : "☆"}</span> ${nowFavorite ? "En mis favoritos" : "Guardar favorito"}`;
  showToast(nowFavorite ? `${animal.name} se guardó en favoritos.` : `${animal.name} salió de favoritos.`);
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
  animalAudio.play().then(updateSoundButtons).catch(() => {
    activeAudioId = null;
    updateSoundButtons();
    showToast("No pudimos reproducir este sonido.");
  });
}

function updateSoundButtons() {
  document.querySelectorAll('[data-action="sound"]').forEach((button) => {
    const playing = activeAudioId === button.dataset.animal && !animalAudio.paused;
    button.classList.toggle("is-playing", playing);
    button.setAttribute("aria-pressed", String(playing));
    if (!button.disabled) {
      button.innerHTML = playing
        ? '<span aria-hidden="true">Ⅱ</span> Pausar sonido'
        : '<span aria-hidden="true">♪</span> Escuchar sonido';
    }
  });
}

function openModal(html, onReady) {
  pauseAnimalAudio();
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

function closeModal() {
  stopPuzzleMusic();
  clearPuzzleCelebration();
  modal.hidden = true;
  modalContent.innerHTML = "";
  document.body.classList.remove("modal-open");
  puzzleState = null;
  quizState = null;
  if (lastFocusedElement instanceof HTMLElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
}

function openImageModal(src, alt) {
  openModal(`
    <div class="modal-header">
      <p class="eyebrow">Vista ampliada</p>
      <h2 id="modal-title">${alt}</h2>
    </div>
    <img class="zoomed-resource" src="${src}" alt="${alt}" />
  `);
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
          <button class="food-card" type="button" data-food-image="${food.image}" data-food-name="${food.name}">
            <img src="${food.image}" alt="${food.name}, alimento de ${animal.name}" loading="lazy" />
            <strong>${food.name}</strong>
          </button>
        `).join("")}
      </div>
    </div>
  `, () => {
    modalContent.querySelectorAll("[data-food-image]").forEach((button) => {
      button.addEventListener("click", () => openImageModal(button.dataset.foodImage, button.dataset.foodName));
    });
  });
}

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const random = Math.floor(Math.random() * (index + 1));
    [result[index], result[random]] = [result[random], result[index]];
  }
  return result;
}

function openQuizModal(categoryId = null) {
  const pool = categoryId
    ? categoryById(categoryId).animals.map((id) => animals[id])
    : Object.values(animals);
  quizState = { pool, round: 0, score: 0, total: Math.min(5, pool.length), answered: false };
  openModal('<div class="quiz-shell" id="quiz-shell"></div>', renderQuizQuestion);
}

function renderQuizQuestion() {
  if (!quizState) return;
  if (quizState.round >= quizState.total) {
    progress.quizBest = Math.max(progress.quizBest, quizState.score);
    saveProgress();
    modalContent.innerHTML = `
      <div class="quiz-finish">
        <span aria-hidden="true">🏆</span>
        <h2 id="modal-title">¡Juego terminado!</h2>
        <p>Acertaste <strong>${quizState.score}</strong> de <strong>${quizState.total}</strong>.</p>
        <div>
          <button class="primary-button" type="button" data-quiz-again>Jugar otra vez</button>
          <button class="secondary-button" type="button" data-close-modal>Regresar</button>
        </div>
      </div>
    `;
    modalContent.querySelector("[data-quiz-again]").addEventListener("click", () => {
      quizState.round = 0;
      quizState.score = 0;
      quizState.answered = false;
      renderQuizQuestion();
    });
    return;
  }

  const answer = shuffle(quizState.pool)[0];
  const distractors = shuffle(Object.values(animals).filter((animal) => animal.id !== answer.id)).slice(0, 2);
  quizState.answer = answer;
  quizState.answered = false;
  const options = shuffle([answer, ...distractors]);
  modalContent.innerHTML = `
    <div class="quiz-shell">
      <div class="quiz-topline">
        <span>Pregunta ${quizState.round + 1} de ${quizState.total}</span>
        <span>${quizState.score} aciertos</span>
      </div>
      <div class="modal-header">
        <h2 id="modal-title">¿Qué animal es?</h2>
        <p>Mira con atención y elige su nombre.</p>
      </div>
      <img class="quiz-image" src="${answer.image}" alt="Animal para adivinar" />
      <div class="quiz-options">
        ${options.map((animal) => `<button type="button" data-quiz-answer="${animal.id}">${animal.name}</button>`).join("")}
      </div>
      <p class="quiz-feedback" id="quiz-feedback" aria-live="polite"></p>
    </div>
  `;
  modalContent.querySelectorAll("[data-quiz-answer]").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button));
  });
}

function answerQuiz(button) {
  if (!quizState || quizState.answered) return;
  quizState.answered = true;
  const correct = button.dataset.quizAnswer === quizState.answer.id;
  if (correct) quizState.score += 1;
  modalContent.querySelectorAll("[data-quiz-answer]").forEach((option) => {
    option.disabled = true;
    if (option.dataset.quizAnswer === quizState.answer.id) option.classList.add("is-correct");
    else if (option === button) option.classList.add("is-wrong");
  });
  const feedback = modalContent.querySelector("#quiz-feedback");
  feedback.innerHTML = correct
    ? `¡Muy bien! Es ${quizState.answer.name}. <span aria-hidden="true">★</span>`
    : `Era ${quizState.answer.name}. ¡Seguimos aprendiendo!`;
  const next = document.createElement("button");
  next.type = "button";
  next.className = "primary-button quiz-next";
  next.textContent = quizState.round + 1 === quizState.total ? "Ver resultado" : "Siguiente pregunta";
  next.addEventListener("click", () => {
    quizState.round += 1;
    renderQuizQuestion();
  });
  feedback.after(next);
}

function openSimplePuzzleModal(animal) {
  puzzleState = {
    animal,
    tray: shuffle([0, 1, 2, 3]),
    board: [null, null, null, null],
    selectedIndex: null,
    selectedBoardIndex: null,
    complete: false,
  };
  openModal(`
    <div class="puzzle-shell">
      <div class="modal-header">
        <p class="eyebrow">Juego de cuatro piezas</p>
        <h2 id="modal-title">Arma a ${animal.name}</h2>
        <p>Arrastra una pieza o tócala y luego elige su espacio. También puedes intercambiar piezas del tablero.</p>
      </div>
      <div class="puzzle-workspace">
        <section class="puzzle-zone puzzle-tray-zone">
          <h3>Piezas</h3>
          <div class="puzzle-tray" id="puzzle-tray"></div>
        </section>
        <section class="puzzle-zone puzzle-board-zone">
          <h3>Tablero</h3>
          <div class="puzzle-board-wrap"><div class="puzzle-board" id="puzzle-board"></div></div>
        </section>
      </div>
      <p class="puzzle-message" id="puzzle-message" aria-live="polite"></p>
      <div class="puzzle-actions">
        <button class="secondary-button" type="button" data-puzzle-reset>↻ Mezclar</button>
        <button class="primary-button" type="button" data-close-modal>Cerrar juego</button>
      </div>
    </div>
  `, () => {
    renderPuzzle();
    modalContent.querySelector("[data-puzzle-reset]").addEventListener("click", resetSimplePuzzle);
    if (progress.effects) puzzleMusic.play().catch(() => {});
  });
}

function puzzlePieceMarkup(piece, trayIndex) {
  const selected = puzzleState.selectedIndex === trayIndex;
  return `
    <button class="puzzle-piece ${selected ? "is-selected" : ""}" type="button" draggable="true" data-tray-index="${trayIndex}" aria-pressed="${selected}">
      <img class="puzzle-fragment puzzle-fragment-${piece}" src="${puzzleState.animal.image}" alt="" />
      <span class="slot-number">${piece + 1}</span>
    </button>
  `;
}

function renderPuzzle() {
  if (!puzzleState) return;
  const tray = modalContent.querySelector("#puzzle-tray");
  const board = modalContent.querySelector("#puzzle-board");
  tray.innerHTML = puzzleState.tray.length
    ? puzzleState.tray.map(puzzlePieceMarkup).join("")
    : '<p class="tray-empty">¡Todas las piezas están en el tablero!</p>';
  board.innerHTML = puzzleState.complete
    ? `<img class="puzzle-complete-image" src="${puzzleState.animal.image}" alt="Rompecabezas completo de ${puzzleState.animal.name}" />`
    : puzzleState.board.map((piece, index) => `
        <button class="puzzle-slot ${puzzleState.selectedBoardIndex === index ? "is-selected" : ""}" type="button" data-slot-index="${index}" aria-label="Espacio ${index + 1}" ${piece === null ? "" : 'draggable="true"'}>
          ${piece === null
            ? `<span class="slot-guide"></span><span class="slot-number">${index + 1}</span>`
            : `<span class="placed-puzzle-piece"><img class="puzzle-fragment puzzle-fragment-${piece}" src="${puzzleState.animal.image}" alt="" /></span>`}
        </button>
      `).join("");
  tray.querySelectorAll("[data-tray-index]").forEach((button) => {
    button.addEventListener("click", () => {
      puzzleState.selectedIndex = Number(button.dataset.trayIndex);
      puzzleState.selectedBoardIndex = null;
      renderPuzzle();
    });
    button.addEventListener("dragstart", (event) => {
      puzzleState.selectedIndex = Number(button.dataset.trayIndex);
      puzzleState.selectedBoardIndex = null;
      event.dataTransfer.setData("text/plain", `tray:${button.dataset.trayIndex}`);
      event.dataTransfer.effectAllowed = "move";
    });
  });
  board.querySelectorAll("[data-slot-index]").forEach((button) => {
    button.addEventListener("click", () => placePuzzlePiece(Number(button.dataset.slotIndex)));
    button.addEventListener("dragstart", (event) => {
      const slotIndex = Number(button.dataset.slotIndex);
      if (puzzleState.board[slotIndex] === null) {
        event.preventDefault();
        return;
      }
      puzzleState.selectedIndex = null;
      puzzleState.selectedBoardIndex = slotIndex;
      event.dataTransfer.setData("text/plain", `board:${slotIndex}`);
      event.dataTransfer.effectAllowed = "move";
    });
    button.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      placePuzzlePiece(Number(button.dataset.slotIndex));
    });
  });
}

function placePuzzlePiece(slotIndex) {
  if (!puzzleState) return;
  const message = modalContent.querySelector("#puzzle-message");
  if (puzzleState.selectedIndex === null && puzzleState.selectedBoardIndex === null) {
    if (puzzleState.board[slotIndex] === null) {
      showToast("Primero elige una pieza.");
      return;
    }
    puzzleState.selectedBoardIndex = slotIndex;
    message.textContent = "Ahora toca otro espacio para mover o intercambiar la pieza.";
    renderPuzzle();
    return;
  }

  if (puzzleState.selectedBoardIndex !== null) {
    const originIndex = puzzleState.selectedBoardIndex;
    if (originIndex === slotIndex) {
      puzzleState.selectedBoardIndex = null;
      message.textContent = "Pieza desmarcada.";
      renderPuzzle();
      return;
    }
    [puzzleState.board[originIndex], puzzleState.board[slotIndex]] = [
      puzzleState.board[slotIndex],
      puzzleState.board[originIndex],
    ];
    puzzleState.selectedBoardIndex = null;
    puzzleState.complete = puzzleState.board.every((value, index) => value === index);
    if (puzzleState.complete) {
      finishPuzzle();
    } else {
      message.textContent = "¡Piezas intercambiadas! Sigue probando.";
    }
    renderPuzzle();
    return;
  }

  const [piece] = puzzleState.tray.splice(puzzleState.selectedIndex, 1);
  const displaced = puzzleState.board[slotIndex];
  puzzleState.board[slotIndex] = piece;
  if (displaced !== null) puzzleState.tray.push(displaced);
  puzzleState.selectedIndex = null;
  puzzleState.complete = puzzleState.board.every((value, index) => value === index);
  if (puzzleState.complete) {
    finishPuzzle();
  } else {
    message.textContent = piece === slotIndex ? "¡Esa pieza está en su lugar!" : "Sigue probando.";
  }
  renderPuzzle();
}

function finishPuzzle() {
  stopPuzzleMusic();
  progress.puzzles = uniqueAdd(progress.puzzles, puzzleState.animal.id);
  saveProgress();
  modalContent.querySelector("#puzzle-message").textContent = "¡Lo lograste! Completaste el rompecabezas.";
  showToast("¡Rompecabezas completado!");
}

function resetSimplePuzzle() {
  if (!puzzleState) return;
  puzzleState.tray = shuffle([0, 1, 2, 3]);
  puzzleState.board = [null, null, null, null];
  puzzleState.selectedIndex = null;
  puzzleState.selectedBoardIndex = null;
  puzzleState.complete = false;
  renderPuzzle();
  if (progress.effects) {
    puzzleMusic.currentTime = 0;
    puzzleMusic.play().catch(() => {});
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
  updateHeaderControls();
}

document.querySelector("#brand-home").addEventListener("click", () => navigate("#inicio"));
document.querySelector("#header-home").addEventListener("click", () => navigate("#inicio"));

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled || button.matches('[data-action="sound"]')) return;
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

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseAnimalAudio();
    puzzleMusic.pause();
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

if (!window.location.hash) history.replaceState(null, "", "#inicio");
renderRoute();
