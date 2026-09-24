// Graded readers. A story is a little book: chapters you turn one at a time, each
// chapter a few paragraphs, each paragraph a list of sentences so a tapped word can
// show the sentence it came from.
//
// Stories only lean on grammar from the units named in STORY_LEVELS. Verbs outside
// those units may appear when the plot needs them; the gloss always names the
// infinitive, so a new form reads as input rather than as untaught grammar.
//
// After editing, run `node tools/check-stories.mjs` — it lists every word with no meaning.

const STORY_LEVELS = [
  { level: 1, title: "First steps", after: 3, words: [400, 1000], note: "The house, the family, numbers and colours. Ser / estar / tener / hay plus everyday present-tense verbs." },
  { level: 2, title: "My day", after: 6, words: [700, 1400], note: "Routines, reflexive verbs, telling the time, asking questions." },
  { level: 3, title: "Out and about", after: 8, words: [1000, 2000], note: "Food and gustar, places in town, asking the way." },
  { level: 4, title: "Plans", after: 10, words: [1400, 2800], note: "Weather, hobbies, and ir a + infinitive for the weekend." }
];

// Verb forms carry their infinitive, so a tapped word teaches the whole verb.
const GLOSS = {
  // Articles and determiners
  el: "the (m.)",
  la: "the (f.)",
  los: "the (m. plural)",
  las: "the (f. plural)",
  un: "a (m.)",
  una: "a (f.)",
  mi: "my",
  mis: "my (plural)",
  tu: "your (tú)",
  su: "his / her / their",
  sus: "his / her / their (plural)",
  se: "himself / herself — reflexive (se llama, se levanta)",
  yo: "I",
  todos: "all, every (todos los días = every day)",
  toda: "all, whole (toda la mañana = all morning)",
  muchas: "many (f.)",
  muchos: "many (m.)",
  mucho: "a lot of",
  poco: "a little (un poco de = a bit of)",
  nada: "nothing",
  más: "more",
  otra: "other, another (otra vez = again)",
  vez: "time, occasion (otra vez = again)",
  nueva: "new (f.)",

  // Numbers
  dos: "two",
  tres: "three",
  cuatro: "four",
  ocho: "eight",
  cuántos: "how many",

  // Small words that hold sentences together
  y: "and",
  o: "or",
  no: "no / not",
  pero: "but",
  de: "of / from",
  del: "of the (de + el)",
  en: "in / on / at",
  con: "with",
  para: "for",
  a: "to / at (a las siete = at seven; mira a Ana = looks at Ana)",
  como: "like, as (como siempre = as always)",
  porque: "because",
  también: "also",
  siempre: "always",
  hoy: "today",
  ahora: "now",
  aquí: "here",
  allí: "there",
  cerca: "near (cerca de = close to)",
  debajo: "under (debajo de = underneath)",
  detrás: "behind (detrás de = behind)",
  fuera: "outside",
  ya: "already",

  // Question words
  dónde: "where",
  qué: "what",
  cómo: "how",
  quién: "who",
  cuál: "which",

  // Verbs
  es: "is (identity) — ser",
  son: "they are — ser (son las dos = it is two o'clock)",
  está: "is (place or state) — estar",
  estás: "you are (place or state) — estar",
  estamos: "we are (place or state) — estar",
  están: "they are (place or state) — estar",
  hay: "there is / there are — hay",
  tiene: "has — tener",
  tienen: "they have — tener",
  tengo: "I have — tener",
  llama: "is called — llamarse",
  vive: "lives — vivir",
  busca: "looks for — buscar",
  mira: "looks, watches — mirar",
  dice: "says — decir",
  pregunta: "asks — preguntar; also: a question",
  toma: "drinks, has — tomar",
  trabaja: "works — trabajar",
  sé: "I know — saber (no sé = I don't know)",
  sabe: "knows — saber",

  // People
  personas: "people",
  madre: "mother",
  mamá: "mum",
  padre: "father",
  padres: "parents",
  abuela: "grandmother",
  familia: "family",
  amigo: "friend (m.)",
  vecino: "neighbour",
  hombre: "man",
  niña: "girl",
  niños: "children",
  señora: "Mrs, lady",
  don: "Don — a respectful title before a man's first name",
  clientes: "customers",

  // The house and the street
  casa: "house (en casa = at home)",
  cocina: "kitchen",
  baño: "bathroom",
  dormitorio: "bedroom",
  jardín: "garden",
  calle: "street",
  esquina: "corner",
  tienda: "shop",
  lugar: "place",
  muro: "wall (outside)",
  puerta: "door",
  ventana: "window",
  mesa: "table",
  silla: "chair",
  cama: "bed",
  lámpara: "lamp",
  caja: "box",
  plato: "plate, dish",
  toallas: "towels",
  jabón: "soap",
  libros: "books",
  zapatos: "shoes",
  calcetín: "sock",
  sombrero: "hat",
  pelota: "ball",
  árboles: "trees",
  flores: "flowers",

  // Food and animals
  pan: "bread",
  café: "coffee",
  leche: "milk",
  agua: "water",
  fruta: "fruit",
  manzanas: "apples",
  plátano: "banana",
  arroz: "rice",
  comida: "food",
  cosas: "things",
  gato: "cat",
  gatos: "cats",
  perro: "dog",
  pájaros: "birds",

  // Body, feelings, and other nouns
  años: "years (tiene ocho años = is eight years old)",
  mañana: "morning; tomorrow",
  días: "days",
  sábado: "Saturday",
  ojos: "eyes",
  lengua: "tongue",
  sonrisa: "smile",
  respuesta: "answer",
  secretos: "secrets",
  idea: "idea",
  hambre: "hunger (tener hambre = to be hungry)",
  sueño: "sleepiness (tener sueño = to be sleepy)",

  // Adjectives
  pequeño: "small (m.)",
  pequeña: "small (f.)",
  grande: "big",
  blanco: "white (m.)",
  blanca: "white (f.)",
  negro: "black",
  marrón: "brown",
  rojo: "red",
  verdes: "green (plural)",
  viejo: "old",
  frío: "cold (m.)",
  fría: "cold (f.)",
  tranquilo: "calm, quiet (m.)",
  tranquila: "calm, quiet (f.)",
  triste: "sad",
  contenta: "happy (f.)",
  vacío: "empty",
  simpático: "nice, friendly",
  importante: "important",
  cerrados: "closed (plural)",
  perdido: "lost",
  muy: "very",

  // Routine, clock, and town — shared by the later books
  me: "me (me levanto = I get up)",
  te: "you (te gusta = you like)",
  le: "him / her (le gusta = he or she likes)",
  les: "them (les gusta = they like)",
  nos: "us (nos gusta = we like)",
  mí: "me (a mí = as for me)",
  tú: "you",
  sí: "yes",
  por: "for / in (por la mañana = in the morning; por favor = please)",
  favor: "favour (por favor = please)",
  al: "to the (a + el)",
  todo: "all; straight (todo recto = straight ahead)",
  luego: "then",
  algo: "something (¿algo más? = anything else?)",
  nunca: "never",
  mucha: "much (f.)",
  comer: "to eat",
  sin: "without",
  eso: "that",
  ir: "to go",
  beber: "to drink",

  hermana: "sister",
  oficina: "office",
  trabajo: "work",
  libro: "book",
  español: "Spanish",
  hora: "hour (¿qué hora es? = what time is it?)",
  veces: "times (a veces = sometimes)",
  punto: "dot (en punto = exactly)",
  temprano: "early",
  tarde: "late; afternoon (por la tarde = in the afternoon)",
  noche: "night (por la noche = at night)",
  lunes: "Monday",
  martes: "Tuesday",
  siete: "seven",
  cinco: "five",
  nueve: "nine",
  once: "eleven",
  doce: "twelve",
  veinticinco: "twenty-five",
  veintiocho: "twenty-eight",

  centro: "centre, downtown",
  plaza: "square",
  estación: "station",
  hotel: "hotel",
  banco: "bank",
  farmacia: "pharmacy",
  museo: "museum",
  parque: "park",
  restaurante: "restaurant",
  derecha: "right (a la derecha = on the right)",
  izquierda: "left (a la izquierda = on the left)",
  recto: "straight (todo recto = straight ahead)",
  lado: "side (al lado de = next to)",
  entre: "between",
  lejos: "far (lejos de = far from)",
  delante: "in front (delante de = in front of)",
  perdone: "excuse me (said to a stranger)",
  siga: "go on (usted) — seguir",

  ensalada: "salad",
  pescado: "fish (food)",
  carne: "meat",
  pollo: "chicken",
  queso: "cheese",
  verdura: "vegetables",
  zumo: "juice",
  naranja: "orange",
  carta: "menu",
  camarero: "waiter",
  cuenta: "bill (la cuenta = the bill)",
  hielo: "ice (sin hielo = without ice)",
  rico: "tasty (está rico = it tastes good)",
  caliente: "hot",
  bueno: "good (m.)",
  buena: "good (f.)",
  contento: "happy (m.)",
  manzana: "apple",
  dormitorios: "bedrooms",
  sillas: "chairs",

  levanta: "gets up — levantarse",
  levanto: "I get up — levantarse",
  despierta: "wakes up — despertarse",
  ducha: "showers — ducharse",
  viste: "gets dressed — vestirse",
  desayuno: "I have breakfast — desayunar",
  desayunas: "you have breakfast — desayunar",
  come: "eats — comer",
  comes: "you eat — comer",
  comen: "they eat — comer",
  comemos: "we eat — comer",
  cenan: "they have dinner — cenar",
  abre: "opens — abrir",
  puedo: "I can — poder",
  va: "goes — ir",
  vas: "you go — ir",
  van: "they go — ir",
  voy: "I go — ir",
  vamos: "we go — ir",
  llego: "I get to — llegar",
  llegan: "they arrive — llegar",
  lee: "reads — leer",
  leo: "I read — leer",
  escribe: "writes — escribir",
  escribo: "I write — escribir",
  hago: "I do — hacer",
  hace: "does, makes — hacer",
  haces: "you do — hacer",
  quieres: "you want — querer",
  quiere: "wants — querer",
  quiero: "I want — querer",
  quieren: "they want — querer",
  escucha: "listens — escuchar",
  habla: "speaks — hablar",
  estudia: "studies — estudiar",
  estudio: "I study — estudiar",
  dices: "you say — decir",
  acuesto: "I go to bed — acostarse",
  acuestas: "you go to bed — acostarse",
  miro: "I look — mirar",
  miras: "you look — mirar",
  gusta: "is pleasing — gustar (me gusta = I like)",
  gustan: "are pleasing — gustar (me gustan = I like them)",
  toman: "they drink, they have — tomar",
  estudias: "you study — estudiar",
  trae: "brings — traer",
  buen: "good (buen provecho = enjoy your meal)",
  provecho: "benefit (buen provecho = enjoy your meal)",
  contentos: "happy (plural)",

  // Set phrases
  hola: "hello",
  buenas: "good (buenas tardes = good afternoon)",
  tardes: "afternoons (buenas tardes = good afternoon)",
  gracias: "thank you",
  tal: "how (¿qué tal? = how's it going?)",
  mal: "bad, badly"
};

const STORIES = [
  {
    id: "gato",
    title: "El gato de Ana",
    level: 1,
    minutes: 12,
    summary: "Pepe the cat has vanished. Ana searches the kitchen, the street and the shop, while her grandmother sits in the garden saying nothing useful.",
    gloss: {
      ana: "Ana — the girl in the story",
      pepe: "Pepe — Ana's cat",
      marta: "Marta — a girl from Ana's street",
      rufo: "Rufo — Marta's dog",
      luis: "Luis — the neighbour's name",
      rosa: "Rosa — the shopkeeper's name"
    },
    pages: [
      {
        title: "La casa de Ana",
        scene: "🏠",
        paragraphs: [
          { lines: [
            { es: "Ana tiene ocho años.", en: "Ana is eight years old." },
            { es: "Ana vive en una casa pequeña.", en: "Ana lives in a small house." },
            { es: "La casa es blanca y tiene un jardín.", en: "The house is white and has a garden." },
            { es: "En el jardín hay dos árboles y muchas flores.", en: "In the garden there are two trees and many flowers." }
          ]},
          { lines: [
            { es: "En la casa hay cuatro personas: Ana, su madre, su padre y su abuela.", en: "There are four people in the house: Ana, her mother, her father and her grandmother." },
            { es: "También hay un gato.", en: "There is also a cat." },
            { es: "El gato se llama Pepe.", en: "The cat is called Pepe." }
          ]},
          { lines: [
            { es: "Pepe es blanco y negro.", en: "Pepe is white and black." },
            { es: "Pepe es un gato muy tranquilo.", en: "Pepe is a very calm cat." },
            { es: "No es un gato grande.", en: "He is not a big cat." },
            { es: "Es pequeño.", en: "He is small." },
            { es: "Pepe tiene tres años.", en: "Pepe is three years old." }
          ]},
          { lines: [
            { es: "Todos los días Pepe está en el jardín, debajo de la silla de la abuela.", en: "Every day Pepe is in the garden, under the grandmother's chair." },
            { es: "La abuela toma un café en el jardín y Pepe está debajo de la silla.", en: "The grandmother has a coffee in the garden and Pepe is under the chair." }
          ]}
        ]
      },
      {
        title: "¿Dónde está Pepe?",
        scene: "🥛",
        paragraphs: [
          { lines: [
            { es: "Hoy es sábado.", en: "Today is Saturday." },
            { es: "La casa está tranquila.", en: "The house is quiet." }
          ]},
          { lines: [
            { es: "Ana tiene un plato con leche para Pepe.", en: "Ana has a dish of milk for Pepe." },
            { es: "La leche está muy fría.", en: "The milk is very cold." }
          ]},
          { lines: [
            { es: "—Pepe, ¡la leche! —dice Ana.", en: "“Pepe, the milk!” says Ana." }
          ]},
          { lines: [
            { es: "Pero Pepe no está aquí.", en: "But Pepe is not here." },
            { es: "Ana mira debajo de la mesa.", en: "Ana looks under the table." },
            { es: "No hay gato.", en: "There is no cat." },
            { es: "Ana mira detrás de la puerta.", en: "Ana looks behind the door." },
            { es: "No hay gato.", en: "There is no cat." }
          ]},
          { lines: [
            { es: "—Mamá, ¿dónde está mi gato? —pregunta Ana.", en: "“Mum, where is my cat?” asks Ana." },
            { es: "—No sé —dice su madre—. ¿No está en el jardín?", en: "“I don't know,” says her mother. “Isn't he in the garden?”" },
            { es: "—No, no está en el jardín. El jardín está vacío.", en: "“No, he is not in the garden. The garden is empty.”" }
          ]},
          { lines: [
            { es: "Ana está triste.", en: "Ana is sad." },
            { es: "Pepe es su amigo.", en: "Pepe is her friend." }
          ]}
        ]
      },
      {
        title: "La cocina",
        scene: "🍞",
        paragraphs: [
          { lines: [
            { es: "Ana busca en la cocina.", en: "Ana looks in the kitchen." },
            { es: "La cocina es grande y tiene una ventana.", en: "The kitchen is big and has a window." }
          ]},
          { lines: [
            { es: "En la cocina hay pan, café y fruta.", en: "In the kitchen there is bread, coffee and fruit." },
            { es: "En la mesa hay dos manzanas y un plátano.", en: "On the table there are two apples and a banana." },
            { es: "Debajo de la mesa hay una caja.", en: "Under the table there is a box." },
            { es: "En la caja no hay nada.", en: "There is nothing in the box." }
          ]},
          { lines: [
            { es: "—¿Pepe? ¿Estás aquí? —pregunta Ana.", en: "“Pepe? Are you here?” asks Ana." }
          ]},
          { lines: [
            { es: "No hay respuesta.", en: "There is no answer." },
            { es: "En la cocina no hay gato.", en: "There is no cat in the kitchen." }
          ]},
          { lines: [
            { es: "La abuela está en la cocina con un café.", en: "The grandmother is in the kitchen with a coffee." },
            { es: "—Abuela, ¿dónde está Pepe?", en: "“Grandma, where is Pepe?”" },
            { es: "—Tu gato es un gato con secretos —dice la abuela.", en: "“Your cat is a cat with secrets,” says the grandmother." }
          ]},
          { lines: [
            { es: "La abuela tiene una sonrisa muy grande.", en: "The grandmother has a very big smile." }
          ]}
        ]
      },
      {
        title: "El baño y el dormitorio",
        scene: "🧼",
        paragraphs: [
          { lines: [
            { es: "Ana busca en el baño.", en: "Ana looks in the bathroom." },
            { es: "En el baño hay agua, jabón y dos toallas verdes.", en: "In the bathroom there is water, soap and two green towels." },
            { es: "No hay gato.", en: "There is no cat." }
          ]},
          { lines: [
            { es: "Ana busca en su dormitorio.", en: "Ana looks in her bedroom." },
            { es: "En su dormitorio hay una cama, una silla y muchos libros.", en: "In her bedroom there is a bed, a chair and many books." },
            { es: "Debajo de la cama hay tres zapatos y un calcetín rojo.", en: "Under the bed there are three shoes and a red sock." },
            { es: "No hay gato.", en: "There is no cat." }
          ]},
          { lines: [
            { es: "Ana busca en el dormitorio de sus padres.", en: "Ana looks in her parents' bedroom." },
            { es: "Hay una cama muy grande y una lámpara.", en: "There is a very big bed and a lamp." },
            { es: "No hay gato.", en: "There is no cat." }
          ]},
          { lines: [
            { es: "—¡Pepe no está en la casa! —dice Ana.", en: "“Pepe is not in the house!” says Ana." }
          ]}
        ]
      },
      {
        title: "El vecino",
        scene: "👒",
        paragraphs: [
          { lines: [
            { es: "En el jardín hay un muro.", en: "There is a wall in the garden." },
            { es: "Detrás del muro está la casa de don Luis.", en: "Behind the wall is Don Luis's house." },
            { es: "Don Luis es el vecino de la familia.", en: "Don Luis is the family's neighbour." },
            { es: "Es un hombre viejo con un sombrero blanco.", en: "He is an old man with a white hat." }
          ]},
          { lines: [
            { es: "—Buenas tardes, don Luis.", en: "“Good afternoon, Don Luis.”" },
            { es: "—Buenas tardes, Ana. ¿Qué tal?", en: "“Good afternoon, Ana. How's it going?”" },
            { es: "—Mal. Mi gato no está en la casa.", en: "“Bad. My cat is not in the house.”" }
          ]},
          { lines: [
            { es: "—¿Tu gato blanco y negro? En mi jardín hay muchos pájaros, pero hoy no hay gatos.", en: "“Your white and black cat? There are many birds in my garden, but today there are no cats.”" },
            { es: "—Gracias, don Luis.", en: "“Thank you, Don Luis.”" },
            { es: "—De nada, Ana. Los gatos siempre están cerca de la comida. ¡O cerca de una silla!", en: "“You're welcome, Ana. Cats are always near the food. Or near a chair!”" }
          ]}
        ]
      },
      {
        title: "La calle",
        scene: "🐕",
        paragraphs: [
          { lines: [
            { es: "Ana está en la calle.", en: "Ana is in the street." },
            { es: "En la calle hay tres niños con una pelota.", en: "In the street there are three children with a ball." }
          ]},
          { lines: [
            { es: "Marta es una niña de la calle de Ana.", en: "Marta is a girl from Ana's street." },
            { es: "Marta tiene un perro.", en: "Marta has a dog." },
            { es: "El perro se llama Rufo.", en: "The dog is called Rufo." },
            { es: "Rufo es grande y marrón.", en: "Rufo is big and brown." }
          ]},
          { lines: [
            { es: "—Marta, ¿dónde está mi gato? Es blanco y negro y se llama Pepe.", en: "“Marta, where is my cat? He is white and black and he is called Pepe.”" },
            { es: "—No sé, Ana. Rufo y yo estamos aquí con la pelota.", en: "“I don't know, Ana. Rufo and I are here with the ball.”" }
          ]},
          { lines: [
            { es: "Rufo mira a Ana.", en: "Rufo looks at Ana." },
            { es: "Rufo no tiene la respuesta, pero tiene la lengua fuera.", en: "Rufo does not have the answer, but his tongue is hanging out." },
            { es: "Es un perro muy simpático.", en: "He is a very friendly dog." }
          ]},
          { lines: [
            { es: "Ahora Ana está más triste.", en: "Now Ana is sadder." }
          ]}
        ]
      },
      {
        title: "La tienda",
        scene: "🏪",
        paragraphs: [
          { lines: [
            { es: "En la esquina hay una tienda pequeña.", en: "On the corner there is a small shop." },
            { es: "En la tienda hay leche, pan, arroz y muchas cosas más.", en: "In the shop there is milk, bread, rice and many more things." },
            { es: "La señora Rosa trabaja en la tienda.", en: "Mrs Rosa works in the shop." }
          ]},
          { lines: [
            { es: "—Hola, señora Rosa. ¿Está mi gato en la tienda?", en: "“Hello, Mrs Rosa. Is my cat in the shop?”" },
            { es: "—Aquí no hay gatos, Ana. Aquí hay clientes —dice la señora Rosa con una sonrisa—. Pero tengo una idea.", en: "“There are no cats here, Ana. Here there are customers,” says Mrs Rosa with a smile. “But I have an idea.”" }
          ]},
          { lines: [
            { es: "—Los gatos tienen hambre y tienen sueño.", en: "“Cats get hungry and they get sleepy.”" },
            { es: "Un gato con sueño no está en la calle.", en: "“A sleepy cat is not in the street.”" },
            { es: "Un gato con sueño está en casa, en un lugar tranquilo.", en: "“A sleepy cat is at home, in a quiet place.”" }
          ]},
          { lines: [
            { es: "Ana está contenta otra vez.", en: "Ana is happy again." },
            { es: "Tiene una idea nueva.", en: "She has a new idea." }
          ]}
        ]
      },
      {
        title: "Debajo de la silla",
        scene: "🪑",
        paragraphs: [
          { lines: [
            { es: "Ana está en su jardín.", en: "Ana is in her garden." },
            { es: "En el jardín está la abuela con un café.", en: "The grandmother is in the garden with a coffee." },
            { es: "La abuela está tranquila, como siempre.", en: "The grandmother is calm, as always." }
          ]},
          { lines: [
            { es: "—Abuela, tengo una pregunta importante. ¿Qué hay debajo de tu silla?", en: "“Grandma, I have an important question. What is under your chair?”" }
          ]},
          { lines: [
            { es: "La abuela toma un poco de café.", en: "The grandmother takes a little coffee." },
            { es: "—Debajo de mi silla hay un gato blanco y negro —dice la abuela—. Está aquí toda la mañana. Tiene mucho sueño.", en: "“Under my chair there is a white and black cat,” says the grandmother. “He has been here all morning. He is very sleepy.”" }
          ]},
          { lines: [
            { es: "Ana mira debajo de la silla.", en: "Ana looks under the chair." },
            { es: "¡Es Pepe!", en: "It's Pepe!" },
            { es: "Pepe tiene los ojos cerrados.", en: "Pepe has his eyes closed." },
            { es: "Es un gato con secretos, pero no es un gato perdido.", en: "He is a cat with secrets, but he is not a lost cat." }
          ]},
          { lines: [
            { es: "—¡Pepe! ¡La leche está en la cocina! —dice Ana.", en: "“Pepe! The milk is in the kitchen!” says Ana." }
          ]},
          { lines: [
            { es: "Ana está muy contenta.", en: "Ana is very happy." },
            { es: "Ahora la casa está tranquila otra vez, y el plato de leche está vacío.", en: "Now the house is quiet again, and the dish of milk is empty." }
          ]}
        ]
      }
    ],
    vocab: [
      { es: "buscar", en: "to look for" },
      { es: "mirar", en: "to look, to watch" },
      { es: "preguntar", en: "to ask" },
      { es: "no sé", en: "I don't know" },
      { es: "debajo de", en: "under" },
      { es: "detrás de", en: "behind" },
      { es: "cerca de", en: "close to" },
      { es: "tener sueño", en: "to be sleepy" },
      { es: "tener hambre", en: "to be hungry" },
      { es: "tener ocho años", en: "to be eight years old" },
      { es: "el vecino / la vecina", en: "the neighbour" },
      { es: "la tienda", en: "the shop" },
      { es: "vacío / vacía", en: "empty" },
      { es: "triste", en: "sad" },
      { es: "contento / contenta", en: "happy" },
      { es: "otra vez", en: "again" }
    ],
    questions: [
      { type: "mc", q: "¿Cuántos años tiene Ana?", options: ["Ocho", "Tres", "Cuatro"], answer: 0 },
      { type: "mc", q: "¿Quién es Rufo?", options: ["El perro de Marta", "El gato de Ana", "El vecino de la familia"], answer: 0 },
      { type: "mc", q: "¿Dónde trabaja la señora Rosa?", options: ["En la tienda", "En la casa de Ana", "En el jardín de don Luis"], answer: 0 },
      { type: "mc", q: "¿Qué hay debajo de la cama de Ana?", options: ["Tres zapatos y un calcetín", "Una caja", "Un gato con sueño"], answer: 0 },
      { type: "tf", q: "La abuela sabe dónde está Pepe.", answer: true },
      { type: "type", q: "Translate: My cat is not in the house.", answers: ["mi gato no está en la casa"] },
      { type: "order", q: "Build: Where is my cat?", words: ["gato", "Dónde", "mi", "está"], answer: "Dónde está mi gato" }
    ]
  },
  {
    id: "lunes",
    title: "El lunes de Pablo",
    level: 2,
    minutes: 15,
    summary: "Pablo gets up at seven every Monday. This Monday the house is quiet, the clock says nine, and his sister Lucía has a question for every hour of the day.",
    gloss: {
      pablo: "Pablo — the brother in the story",
      lucía: "Lucía — Pablo's sister"
    },
    pages: [
      {
        title: "La casa de Pablo",
        scene: "🏠",
        paragraphs: [
          { lines: [
            { es: "Pablo tiene veintiocho años.", en: "Pablo is twenty-eight." },
            { es: "Pablo vive con su hermana.", en: "Pablo lives with his sister." },
            { es: "Su hermana se llama Lucía.", en: "His sister is called Lucía." },
            { es: "Lucía tiene veinticinco años.", en: "Lucía is twenty-five." }
          ]},
          { lines: [
            { es: "La casa es pequeña y blanca.", en: "The house is small and white." },
            { es: "Está en una calle tranquila.", en: "It is on a quiet street." },
            { es: "En la casa hay una cocina, un baño y dos dormitorios.", en: "In the house there is a kitchen, a bathroom and two bedrooms." },
            { es: "El dormitorio de Pablo es pequeño.", en: "Pablo's bedroom is small." },
            { es: "El dormitorio de Lucía es grande.", en: "Lucía's bedroom is big." },
            { es: "En la cocina hay una mesa y dos sillas.", en: "In the kitchen there is a table and two chairs." }
          ]},
          { lines: [
            { es: "Pablo trabaja en una oficina.", en: "Pablo works in an office." },
            { es: "Todos los días va a la oficina a las ocho.", en: "Every day he goes to the office at eight." },
            { es: "Lucía no trabaja.", en: "Lucía does not work." },
            { es: "Lucía estudia español.", en: "Lucía studies Spanish." },
            { es: "Por la mañana Pablo va a la oficina y Lucía estudia en casa.", en: "In the morning Pablo goes to the office and Lucía studies at home." }
          ]},
          { lines: [
            { es: "Todos los lunes Pablo se levanta a las siete.", en: "Every Monday Pablo gets up at seven." },
            { es: "Lucía nunca se levanta a las siete.", en: "Lucía never gets up at seven." }
          ]},
          { lines: [
            { es: "—Yo me levanto temprano —dice Pablo.", en: "“I get up early,” says Pablo." },
            { es: "—Yo me levanto tarde —dice Lucía—. A las nueve.", en: "“I get up late,” says Lucía. “At nine.”" }
          ]}
        ]
      },
      {
        title: "Las siete",
        scene: "⏰",
        paragraphs: [
          { lines: [
            { es: "Hoy es lunes.", en: "Today is Monday." },
            { es: "Son las siete de la mañana.", en: "It is seven in the morning." },
            { es: "La casa está muy tranquila.", en: "The house is very quiet." }
          ]},
          { lines: [
            { es: "Pablo está en su cama.", en: "Pablo is in his bed." },
            { es: "Tiene mucho sueño.", en: "He is very sleepy." },
            { es: "No se despierta.", en: "He does not wake up." },
            { es: "Tiene los ojos cerrados.", en: "His eyes are closed." }
          ]},
          { lines: [
            { es: "Lucía sí se despierta.", en: "Lucía does wake up." },
            { es: "Lucía se levanta y va a la cocina.", en: "Lucía gets up and goes to the kitchen." },
            { es: "En la cocina toma un café y come pan.", en: "In the kitchen she has a coffee and eats bread." }
          ]},
          { lines: [
            { es: "—¿Pablo? ¿Estás aquí? —pregunta Lucía.", en: "“Pablo? Are you here?” asks Lucía." },
            { es: "No hay respuesta.", en: "There is no answer." },
            { es: "Pablo no está en la cocina.", en: "Pablo is not in the kitchen." },
            { es: "Está en la cama.", en: "He is in bed." }
          ]}
        ]
      },
      {
        title: "Son las nueve",
        scene: "🕘",
        paragraphs: [
          { lines: [
            { es: "Ahora son las nueve.", en: "Now it is nine." },
            { es: "Lucía está en el dormitorio de Pablo.", en: "Lucía is in Pablo's bedroom." },
            { es: "Pablo abre los ojos.", en: "Pablo opens his eyes." }
          ]},
          { lines: [
            { es: "—Pablo, ¿qué hora es? —pregunta Lucía.", en: "“Pablo, what time is it?” asks Lucía." },
            { es: "—No sé —dice Pablo—. ¿Qué hora es?", en: "“I don't know,” says Pablo. “What time is it?”" },
            { es: "—Son las nueve.", en: "“It is nine.”" },
            { es: "—¿Las nueve? Yo me levanto a las siete.", en: "“Nine? I get up at seven.”" }
          ]},
          { lines: [
            { es: "Pablo está triste.", en: "Pablo is sad." },
            { es: "Hoy no va al trabajo.", en: "Today he is not going to work." }
          ]},
          { lines: [
            { es: "—¿Por qué no vas al trabajo? —pregunta Lucía.", en: "“Why aren't you going to work?” asks Lucía." },
            { es: "—Porque son las nueve —dice Pablo—. No puedo ir a la oficina. Voy a la oficina a las ocho.", en: "“Because it is nine,” says Pablo. “I can't go to the office. I go to the office at eight.”" }
          ]},
          { lines: [
            { es: "Lucía tiene una sonrisa.", en: "Lucía has a smile." },
            { es: "—Hoy estás en casa —dice Lucía.", en: "“Today you are at home,” says Lucía." }
          ]}
        ]
      },
      {
        title: "El desayuno",
        scene: "☕",
        paragraphs: [
          { lines: [
            { es: "Pablo se levanta.", en: "Pablo gets up." },
            { es: "Se ducha.", en: "He takes a shower." },
            { es: "Luego se viste.", en: "Then he gets dressed." },
            { es: "Va a la cocina.", en: "He goes to the kitchen." }
          ]},
          { lines: [
            { es: "En la mesa hay pan, leche y fruta.", en: "On the table there is bread, milk and fruit." },
            { es: "También hay una manzana.", en: "There is also an apple." },
            { es: "El café de Lucía está muy caliente.", en: "Lucía's coffee is very hot." }
          ]},
          { lines: [
            { es: "—¿Qué desayunas? —pregunta Lucía.", en: "“What do you have for breakfast?” asks Lucía." },
            { es: "—Siempre desayuno café y pan —dice Pablo.", en: "“I always have coffee and bread,” says Pablo." },
            { es: "—¿Comes fruta por la mañana?", en: "“Do you eat fruit in the morning?”" },
            { es: "—No, nunca —dice Pablo. Nunca come fruta por la mañana.", en: "“No, never,” says Pablo. He never eats fruit in the morning." }
          ]},
          { lines: [
            { es: "—Una manzana todos los días —dice Lucía.", en: "“An apple every day,” says Lucía." },
            { es: "—¿Quieres leche? —pregunta Lucía.", en: "“Do you want milk?” asks Lucía." },
            { es: "—Sí, por favor.", en: "“Yes, please.”" }
          ]},
          { lines: [
            { es: "Pablo toma café con leche y come pan.", en: "Pablo has coffee with milk and eats bread." },
            { es: "No come la manzana.", en: "He does not eat the apple." },
            { es: "La manzana es para Lucía.", en: "The apple is for Lucía." }
          ]}
        ]
      },
      {
        title: "En casa",
        scene: "📖",
        paragraphs: [
          { lines: [
            { es: "Pablo no va a la oficina.", en: "Pablo does not go to the office." },
            { es: "Está en su dormitorio con un libro.", en: "He is in his bedroom with a book." },
            { es: "Lee un poco.", en: "He reads a little." },
            { es: "También escribe.", en: "He also writes." }
          ]},
          { lines: [
            { es: "Lucía estudia en la cocina.", en: "Lucía studies in the kitchen." },
            { es: "Estudia español todos los días.", en: "She studies Spanish every day." }
          ]},
          { lines: [
            { es: "—¿Qué haces? —pregunta Pablo.", en: "“What are you doing?” asks Pablo." },
            { es: "—Estudio —dice Lucía—. ¿Y tú? ¿Qué haces hoy?", en: "“I'm studying,” says Lucía. “And you? What are you doing today?”" },
            { es: "—Leo y escribo. No hago nada más.", en: "“I read and I write. I don't do anything else.”" }
          ]},
          { lines: [
            { es: "—¿A qué hora comes? —pregunta Lucía.", en: "“What time do you eat?” asks Lucía." },
            { es: "—A las dos —dice Pablo.", en: "“At two,” says Pablo." },
            { es: "—¿Y tú?", en: "“And you?”" },
            { es: "—Yo también, a las dos.", en: "“Me too, at two.”" }
          ]},
          { lines: [
            { es: "A veces Pablo escucha a Lucía.", en: "Sometimes Pablo listens to Lucía." },
            { es: "Lucía habla mucho.", en: "Lucía talks a lot." },
            { es: "Pablo habla poco.", en: "Pablo talks little." }
          ]}
        ]
      },
      {
        title: "A las dos",
        scene: "🍚",
        paragraphs: [
          { lines: [
            { es: "Son las dos.", en: "It is two o'clock." },
            { es: "Pablo y Lucía están en la cocina.", en: "Pablo and Lucía are in the kitchen." },
            { es: "Pablo hace arroz.", en: "Pablo makes rice." },
            { es: "En la mesa hay arroz, pan y fruta.", en: "On the table there is rice, bread and fruit." }
          ]},
          { lines: [
            { es: "—¿Qué haces? —pregunta Lucía.", en: "“What are you doing?” asks Lucía." },
            { es: "—Hago arroz. ¿Quieres comer? —dice Pablo.", en: "“I'm making rice. Do you want to eat?” says Pablo." },
            { es: "—Sí. Tengo hambre.", en: "“Yes. I'm hungry.”" }
          ]},
          { lines: [
            { es: "Comen arroz y pan.", en: "They eat rice and bread." },
            { es: "El arroz está muy bueno.", en: "The rice is very good." },
            { es: "Lucía también come una manzana.", en: "Lucía also eats an apple." },
            { es: "Pablo no come fruta.", en: "Pablo does not eat fruit." }
          ]},
          { lines: [
            { es: "—¿Comemos aquí todos los días? —pregunta Lucía.", en: "“Do we eat here every day?” asks Lucía." },
            { es: "—Sí. Tú estudias y yo hago la comida —dice Pablo.", en: "“Yes. You study and I make the food,” says Pablo." }
          ]},
          { lines: [
            { es: "Pablo está contento.", en: "Pablo is happy." },
            { es: "Lucía está contenta.", en: "Lucía is happy." },
            { es: "La cocina está tranquila.", en: "The kitchen is quiet." }
          ]}
        ]
      },
      {
        title: "Por la tarde",
        scene: "🪟",
        paragraphs: [
          { lines: [
            { es: "Por la tarde son las cinco.", en: "In the afternoon it is five o'clock." },
            { es: "Pablo y Lucía toman un café.", en: "Pablo and Lucía have a coffee." },
            { es: "Luego Pablo lee su libro.", en: "Then Pablo reads his book." },
            { es: "Lucía escribe en la cocina.", en: "Lucía writes in the kitchen." }
          ]},
          { lines: [
            { es: "—¿Qué haces por la tarde? —pregunta Lucía.", en: "“What do you do in the afternoon?” asks Lucía." },
            { es: "—Leo. A veces miro por la ventana.", en: "“I read. Sometimes I look out of the window.”" },
            { es: "—¿Miras la calle?", en: "“Do you watch the street?”" },
            { es: "—Sí. Hay niños con una pelota.", en: "“Yes. There are children with a ball.”" }
          ]},
          { lines: [
            { es: "—Yo nunca miro la calle —dice Lucía—. Estudio.", en: "“I never watch the street,” says Lucía. “I study.”" },
            { es: "—¿Siempre estudias? —pregunta Pablo.", en: "“Do you always study?” asks Pablo." },
            { es: "—No siempre. A veces leo. Nunca miro la calle.", en: "“Not always. Sometimes I read. I never watch the street.”" }
          ]},
          { lines: [
            { es: "Pablo quiere ir a la calle.", en: "Pablo wants to go out to the street." },
            { es: "Pero no va.", en: "But he does not go." },
            { es: "Está en casa toda la tarde.", en: "He is at home all afternoon." },
            { es: "Lee, escribe y mira la ventana.", en: "He reads, writes and looks at the window." }
          ]}
        ]
      },
      {
        title: "Por la noche",
        scene: "🌙",
        paragraphs: [
          { lines: [
            { es: "Por la noche Pablo y Lucía cenan.", en: "In the evening Pablo and Lucía have dinner." },
            { es: "Cenan a las nueve.", en: "They have dinner at nine." },
            { es: "Hay pan, arroz y fruta otra vez.", en: "There is bread, rice and fruit again." },
            { es: "Pablo come poco.", en: "Pablo eats a little." },
            { es: "Tiene sueño.", en: "He is sleepy." }
          ]},
          { lines: [
            { es: "—¿A qué hora te acuestas? —pregunta Lucía.", en: "“What time do you go to bed?” asks Lucía." },
            { es: "—Me acuesto a las once —dice Pablo.", en: "“I go to bed at eleven,” says Pablo." },
            { es: "—Yo me acuesto a las doce. Leo por la noche.", en: "“I go to bed at twelve. I read at night.”" }
          ]},
          { lines: [
            { es: "Pablo va a su dormitorio.", en: "Pablo goes to his bedroom." },
            { es: "Son las once en punto.", en: "It is eleven exactly." },
            { es: "—Mañana me levanto a las siete —dice Pablo—. Mañana es martes. Voy a la oficina a las ocho.", en: "“Tomorrow I get up at seven,” says Pablo. “Tomorrow is Tuesday. I go to the office at eight.”" }
          ]},
          { lines: [
            { es: "—Tú siempre dices eso —dice Lucía, con una sonrisa.", en: "“You always say that,” says Lucía, with a smile." }
          ]},
          { lines: [
            { es: "Pablo está en la cama.", en: "Pablo is in bed." },
            { es: "Tiene los ojos cerrados.", en: "His eyes are closed." },
            { es: "La casa está tranquila otra vez.", en: "The house is quiet again." }
          ]}
        ]
      }
    ],
    vocab: [
      { es: "levantarse", en: "to get up" },
      { es: "despertarse", en: "to wake up" },
      { es: "ducharse", en: "to take a shower" },
      { es: "vestirse", en: "to get dressed" },
      { es: "desayunar", en: "to have breakfast" },
      { es: "cenar", en: "to have dinner" },
      { es: "acostarse", en: "to go to bed" },
      { es: "¿qué hora es?", en: "what time is it?" },
      { es: "a las siete", en: "at seven" },
      { es: "en punto", en: "exactly" },
      { es: "por la mañana", en: "in the morning" },
      { es: "por la tarde", en: "in the afternoon" },
      { es: "por la noche", en: "at night" },
      { es: "temprano / tarde", en: "early / late" },
      { es: "siempre / a veces / nunca", en: "always / sometimes / never" },
      { es: "no puedo", en: "I can't" }
    ],
    questions: [
      { type: "mc", q: "¿Cuántos años tiene Pablo?", options: ["Veintiocho", "Veinticinco", "Ocho"], answer: 0 },
      { type: "mc", q: "¿A qué hora se levanta Lucía?", options: ["A las nueve", "A las siete", "A las once"], answer: 0 },
      { type: "mc", q: "¿Qué hora es cuando Pablo abre los ojos?", options: ["Las nueve", "Las siete", "Las cinco"], answer: 0 },
      { type: "mc", q: "¿Qué come Pablo por la mañana?", options: ["Café y pan", "Una manzana", "Arroz"], answer: 0 },
      { type: "tf", q: "Pablo va al trabajo el lunes.", answer: false, explain: "It is nine o'clock, so he stays home. He does not go to the office." },
      { type: "type", q: "Translate: I get up at seven.", answers: ["me levanto a las siete", "yo me levanto a las siete"] },
      { type: "order", q: "Build: What time is it?", words: ["hora", "es", "Qué"], answer: "Qué hora es" }
    ]
  },
  {
    id: "plaza",
    title: "La plaza de Carmen",
    level: 3,
    minutes: 18,
    summary: "Carmen and Mateo are hungry in the square. The restaurant is next to the pharmacy, but the first turn takes them to the museum.",
    gloss: {
      carmen: "Carmen — one of the two friends",
      mateo: "Mateo — Carmen's friend"
    },
    pages: [
      {
        title: "La plaza",
        scene: "🌳",
        paragraphs: [
          { lines: [
            { es: "Carmen está en la plaza.", en: "Carmen is in the square." },
            { es: "La plaza está en el centro.", en: "The square is in the centre." },
            { es: "Hoy es sábado.", en: "Today is Saturday." },
            { es: "La plaza es grande y hay muchas personas.", en: "The square is big and there are many people." }
          ]},
          { lines: [
            { es: "Mateo es un amigo de Carmen.", en: "Mateo is a friend of Carmen's." },
            { es: "Mateo también está en la plaza.", en: "Mateo is in the square too." },
            { es: "Carmen y Mateo están aquí porque quieren comer.", en: "Carmen and Mateo are here because they want to eat." }
          ]},
          { lines: [
            { es: "En el centro hay un banco, una farmacia y un hotel.", en: "In the centre there is a bank, a pharmacy and a hotel." },
            { es: "El banco está a la derecha.", en: "The bank is on the right." },
            { es: "La farmacia está a la izquierda.", en: "The pharmacy is on the left." },
            { es: "El hotel está cerca de la farmacia.", en: "The hotel is near the pharmacy." }
          ]},
          { lines: [
            { es: "—¿Dónde comemos? —pregunta Mateo.", en: "“Where shall we eat?” asks Mateo." },
            { es: "—No sé —dice Carmen—. Hay un restaurante, pero no sé dónde está.", en: "“I don't know,” says Carmen. “There is a restaurant, but I don't know where it is.”" }
          ]}
        ]
      },
      {
        title: "Tengo hambre",
        scene: "🍽️",
        paragraphs: [
          { lines: [
            { es: "Carmen tiene hambre.", en: "Carmen is hungry." },
            { es: "Mateo también tiene hambre.", en: "Mateo is hungry too." },
            { es: "Son las dos.", en: "It is two o'clock." },
            { es: "Quieren comer ahora.", en: "They want to eat now." }
          ]},
          { lines: [
            { es: "—¿Qué te gusta? —pregunta Mateo.", en: "“What do you like?” asks Mateo." },
            { es: "—Me gusta la ensalada —dice Carmen—. También me gusta la fruta.", en: "“I like salad,” says Carmen. “I also like fruit.”" },
            { es: "—¿Te gusta la carne?", en: "“Do you like meat?”" },
            { es: "—No. La carne no me gusta nada.", en: "“No. I don't like meat at all.”" }
          ]},
          { lines: [
            { es: "—A mí me gusta el pescado —dice Mateo.", en: "“I like fish,” says Mateo." },
            { es: "—También me gusta el arroz, y me gusta el pollo.", en: "“I also like rice, and I like chicken.”" },
            { es: "—¿Te gusta la ensalada?", en: "“Do you like salad?”" },
            { es: "—Sí, pero me gusta más el pescado.", en: "“Yes, but I like fish more.”" }
          ]},
          { lines: [
            { es: "A Carmen le gusta la ensalada.", en: "Carmen likes salad." },
            { es: "A Carmen no le gusta la carne.", en: "Carmen does not like meat." },
            { es: "A Mateo le gusta el pescado.", en: "Mateo likes fish." }
          ]},
          { lines: [
            { es: "—Vamos al restaurante —dice Mateo.", en: "“Let's go to the restaurant,” says Mateo." },
            { es: "—Sí. Pero ¿dónde está? —pregunta Carmen.", en: "“Yes. But where is it?” asks Carmen." }
          ]}
        ]
      },
      {
        title: "¿Dónde está el restaurante?",
        scene: "🗺️",
        paragraphs: [
          { lines: [
            { es: "Carmen y Mateo están en la plaza.", en: "Carmen and Mateo are in the square." },
            { es: "Una señora está cerca del banco.", en: "A lady is near the bank." },
            { es: "Carmen pregunta a la señora.", en: "Carmen asks the lady." }
          ]},
          { lines: [
            { es: "—Perdone, ¿dónde está el restaurante?", en: "“Excuse me, where is the restaurant?”" },
            { es: "—Está cerca —dice la señora.", en: "“It is nearby,” says the lady." },
            { es: "—Siga todo recto y luego a la izquierda.", en: "“Go straight on and then left.”" },
            { es: "—El restaurante está al lado de la farmacia.", en: "“The restaurant is next to the pharmacy.”" }
          ]},
          { lines: [
            { es: "—¿Hay una farmacia por aquí? —pregunta Mateo.", en: "“Is there a pharmacy around here?” asks Mateo." },
            { es: "—Sí, hay una a la izquierda —dice la señora—. El hotel también está allí.", en: "“Yes, there is one on the left,” says the lady. “The hotel is there too.”" }
          ]},
          { lines: [
            { es: "—¿Está lejos el restaurante?", en: "“Is the restaurant far?”" },
            { es: "—No. No está lejos. Está muy cerca.", en: "“No. It is not far. It is very near.”" },
            { es: "—Gracias —dice Carmen.", en: "“Thank you,” says Carmen." }
          ]},
          { lines: [
            { es: "—De nada —dice la señora, con una sonrisa.", en: "“You're welcome,” says the lady, with a smile." }
          ]}
        ]
      },
      {
        title: "A la derecha",
        scene: "➡️",
        paragraphs: [
          { lines: [
            { es: "Carmen y Mateo van todo recto.", en: "Carmen and Mateo go straight ahead." },
            { es: "La señora dice: a la izquierda.", en: "The lady says: to the left." },
            { es: "Pero van a la derecha.", en: "But they go to the right." }
          ]},
          { lines: [
            { es: "—¿Es aquí? —pregunta Carmen.", en: "“Is it here?” asks Carmen." },
            { es: "—No sé —dice Mateo—. La farmacia está a la izquierda, no a la derecha.", en: "“I don't know,” says Mateo. “The pharmacy is on the left, not on the right.”" }
          ]},
          { lines: [
            { es: "A la derecha hay una calle pequeña.", en: "On the right there is a small street." },
            { es: "En la calle hay una tienda y muchas personas.", en: "On the street there is a shop and many people." },
            { es: "No hay restaurante.", en: "There is no restaurant." },
            { es: "No hay farmacia.", en: "There is no pharmacy." }
          ]},
          { lines: [
            { es: "—No me gusta la calle —dice Carmen.", en: "“I don't like the street,” says Carmen." },
            { es: "—¿Por qué? —pregunta Mateo.", en: "“Why?” asks Mateo." },
            { es: "—Porque el restaurante no está aquí. Tengo mucha hambre.", en: "“Because the restaurant is not here. I am very hungry.”" }
          ]},
          { lines: [
            { es: "Van más lejos.", en: "They go further." },
            { es: "Ahora no están en la plaza.", en: "Now they are not in the square." }
          ]}
        ]
      },
      {
        title: "El museo",
        scene: "🏛️",
        paragraphs: [
          { lines: [
            { es: "Carmen y Mateo llegan delante de un museo.", en: "Carmen and Mateo arrive in front of a museum." },
            { es: "El museo es grande y blanco.", en: "The museum is big and white." },
            { es: "Está entre el banco y el parque.", en: "It is between the bank and the park." }
          ]},
          { lines: [
            { es: "En el parque hay árboles y flores.", en: "In the park there are trees and flowers." },
            { es: "Hay niños con una pelota.", en: "There are children with a ball." },
            { es: "El parque es tranquilo, pero no es un restaurante.", en: "The park is quiet, but it is not a restaurant." }
          ]},
          { lines: [
            { es: "—El museo está entre el banco y el parque —dice Mateo.", en: "“The museum is between the bank and the park,” says Mateo." },
            { es: "—Aquí no hay restaurante. Aquí no hay comida.", en: "“There is no restaurant here. There is no food here.”" }
          ]},
          { lines: [
            { es: "Un hombre está delante del museo.", en: "A man is in front of the museum." },
            { es: "Mateo pregunta al hombre.", en: "Mateo asks the man." }
          ]},
          { lines: [
            { es: "—Perdone, ¿cómo llego al restaurante?", en: "“Excuse me, how do I get to the restaurant?”" },
            { es: "—El restaurante no está aquí —dice el hombre.", en: "“The restaurant is not here,” says the man." },
            { es: "—Está a la izquierda, al lado de la farmacia. El hotel está cerca.", en: "“It is on the left, next to the pharmacy. The hotel is nearby.”" }
          ]},
          { lines: [
            { es: "—¿Todo recto? —pregunta Carmen.", en: "“Straight ahead?” asks Carmen." },
            { es: "—No. Todo recto no. A la izquierda —dice el hombre.", en: "“No. Not straight ahead. To the left,” says the man." },
            { es: "—Gracias.", en: "“Thank you.”" }
          ]}
        ]
      },
      {
        title: "Al lado de la farmacia",
        scene: "💊",
        paragraphs: [
          { lines: [
            { es: "Ahora Carmen y Mateo van a la izquierda.", en: "Now Carmen and Mateo go to the left." },
            { es: "No van a la derecha.", en: "They do not go to the right." },
            { es: "Van cerca del hotel.", en: "They go near the hotel." }
          ]},
          { lines: [
            { es: "La farmacia está allí.", en: "The pharmacy is there." },
            { es: "Es una farmacia pequeña.", en: "It is a small pharmacy." },
            { es: "Al lado de la farmacia hay un restaurante.", en: "Next to the pharmacy there is a restaurant." }
          ]},
          { lines: [
            { es: "—¡Aquí está! —dice Carmen.", en: "“Here it is!” says Carmen." },
            { es: "—El restaurante está al lado de la farmacia, como dice la señora.", en: "“The restaurant is next to the pharmacy, as the lady says.”" },
            { es: "—Y el hotel está cerca —dice Mateo.", en: "“And the hotel is nearby,” says Mateo." }
          ]},
          { lines: [
            { es: "El restaurante no está lejos.", en: "The restaurant is not far." },
            { es: "No está en el museo.", en: "It is not in the museum." },
            { es: "No está en el parque.", en: "It is not in the park." },
            { es: "Está aquí, entre la farmacia y el hotel.", en: "It is here, between the pharmacy and the hotel." }
          ]},
          { lines: [
            { es: "Carmen está contenta.", en: "Carmen is happy." },
            { es: "Mateo está contento.", en: "Mateo is happy." },
            { es: "Los dos tienen mucha hambre.", en: "They are both very hungry." }
          ]}
        ]
      },
      {
        title: "La carta",
        scene: "📋",
        paragraphs: [
          { lines: [
            { es: "Carmen y Mateo están en el restaurante.", en: "Carmen and Mateo are in the restaurant." },
            { es: "El restaurante es pequeño y tranquilo.", en: "The restaurant is small and quiet." },
            { es: "Hay una mesa cerca de la ventana.", en: "There is a table near the window." },
            { es: "En la mesa hay una carta.", en: "On the table there is a menu." }
          ]},
          { lines: [
            { es: "El camarero es un hombre simpático.", en: "The waiter is a friendly man." },
            { es: "—Hola. ¿Qué quieren comer? —pregunta el camarero.", en: "“Hello. What do you want to eat?” asks the waiter." }
          ]},
          { lines: [
            { es: "En la carta hay pollo, carne, pescado, arroz y ensalada.", en: "On the menu there is chicken, meat, fish, rice and salad." },
            { es: "También hay pan, queso y verdura.", en: "There is also bread, cheese and vegetables." },
            { es: "Carmen lee la carta.", en: "Carmen reads the menu." },
            { es: "Mateo también lee la carta.", en: "Mateo reads the menu too." }
          ]},
          { lines: [
            { es: "—Para mí, una ensalada —dice Carmen—. No quiero carne.", en: "“For me, a salad,” says Carmen. “I don't want meat.”" },
            { es: "—¿La ensalada tiene queso? —pregunta Carmen.", en: "“Does the salad have cheese?” asks Carmen." },
            { es: "—Sí, tiene queso y mucha verdura —dice el camarero.", en: "“Yes, it has cheese and lots of vegetables,” says the waiter." }
          ]},
          { lines: [
            { es: "—Para mí, el pescado y el arroz —dice Mateo.", en: "“For me, the fish and the rice,” says Mateo." },
            { es: "—¿Qué quieren beber? —pregunta el camarero.", en: "“What do you want to drink?” asks the waiter." },
            { es: "—Un agua sin hielo, por favor —dice Carmen.", en: "“A water without ice, please,” says Carmen." },
            { es: "—Un zumo de naranja, por favor —dice Mateo.", en: "“An orange juice, please,” says Mateo." }
          ]},
          { lines: [
            { es: "—¿Algo más?", en: "“Anything else?”" },
            { es: "—No, nada más. Gracias.", en: "“No, nothing else. Thank you.”" }
          ]}
        ]
      },
      {
        title: "Está rico",
        scene: "😋",
        paragraphs: [
          { lines: [
            { es: "El camarero trae la comida.", en: "The waiter brings the food." },
            { es: "—¡Buen provecho! —dice el camarero.", en: "“Enjoy your meal!” says the waiter." },
            { es: "Carmen tiene una ensalada.", en: "Carmen has a salad." },
            { es: "La ensalada tiene queso y verdura.", en: "The salad has cheese and vegetables." },
            { es: "Mateo tiene pescado y arroz.", en: "Mateo has fish and rice." }
          ]},
          { lines: [
            { es: "También hay pan en la mesa.", en: "There is also bread on the table." },
            { es: "Carmen toma agua.", en: "Carmen drinks water." },
            { es: "El agua no tiene hielo.", en: "The water has no ice." },
            { es: "Mateo toma un zumo de naranja.", en: "Mateo drinks an orange juice." }
          ]},
          { lines: [
            { es: "—¿Te gusta la ensalada? —pregunta Mateo.", en: "“Do you like the salad?” asks Mateo." },
            { es: "—Sí. Me gusta mucho. Está muy buena.", en: "“Yes. I like it a lot. It is very good.”" },
            { es: "—¿Y el pescado?", en: "“And the fish?”" },
            { es: "—Está rico —dice Mateo—. Me gusta mucho el pescado.", en: "“It is tasty,” says Mateo. “I like the fish a lot.”" }
          ]},
          { lines: [
            { es: "Carmen no come carne.", en: "Carmen does not eat meat." },
            { es: "No come pollo.", en: "She does not eat chicken." },
            { es: "Come ensalada y pan.", en: "She eats salad and bread." },
            { es: "Mateo come todo el pescado.", en: "Mateo eats all the fish." }
          ]},
          { lines: [
            { es: "—A mí me gusta la comida —dice Carmen.", en: "“I like the food,” says Carmen." },
            { es: "—A mí también —dice Mateo.", en: "“Me too,” says Mateo." },
            { es: "A Carmen y a Mateo les gusta el restaurante.", en: "Carmen and Mateo like the restaurant." }
          ]}
        ]
      },
      {
        title: "La estación",
        scene: "🚉",
        paragraphs: [
          { lines: [
            { es: "Carmen y Mateo no tienen hambre ahora.", en: "Carmen and Mateo are not hungry now." },
            { es: "El plato de Carmen está vacío.", en: "Carmen's plate is empty." },
            { es: "El plato de Mateo también está vacío.", en: "Mateo's plate is empty too." }
          ]},
          { lines: [
            { es: "—La cuenta, por favor —dice Mateo.", en: "“The bill, please,” says Mateo." },
            { es: "El camarero trae la cuenta.", en: "The waiter brings the bill." },
            { es: "—Gracias. La comida está muy buena —dice Carmen.", en: "“Thank you. The food is very good,” says Carmen." },
            { es: "—De nada —dice el camarero.", en: "“You're welcome,” says the waiter." }
          ]},
          { lines: [
            { es: "Ahora quieren ir a la estación.", en: "Now they want to go to the station." },
            { es: "La estación no está en la plaza.", en: "The station is not in the square." },
            { es: "Carmen pregunta al camarero.", en: "Carmen asks the waiter." }
          ]},
          { lines: [
            { es: "—Perdone, ¿cómo llego a la estación?", en: "“Excuse me, how do I get to the station?”" },
            { es: "—Está cerca de la plaza —dice el camarero.", en: "“It is near the square,” says the waiter." },
            { es: "—Todo recto y luego a la derecha. La estación está delante de la plaza.", en: "“Straight ahead and then right. The station is in front of the square.”" },
            { es: "—¿Está lejos?", en: "“Is it far?”" },
            { es: "—No. Está muy cerca. No está lejos.", en: "“No. It is very near. It is not far.”" }
          ]},
          { lines: [
            { es: "Carmen y Mateo están en la calle otra vez.", en: "Carmen and Mateo are in the street again." },
            { es: "Van a la plaza, todo recto.", en: "They go to the square, straight ahead." },
            { es: "Luego van a la derecha, como dice el camarero.", en: "Then they go to the right, as the waiter says." },
            { es: "No van al museo y no van al parque.", en: "They do not go to the museum and they do not go to the park." }
          ]},
          { lines: [
            { es: "La farmacia está a la izquierda, lejos de la estación.", en: "The pharmacy is on the left, far from the station." },
            { es: "La estación está a la derecha, delante de la plaza.", en: "The station is on the right, in front of the square." },
            { es: "El banco también está lejos de la estación.", en: "The bank is also far from the station." },
            { es: "Hay muchas personas delante de la estación.", en: "There are many people in front of the station." },
            { es: "Mateo mira la plaza y Carmen mira la estación.", en: "Mateo looks at the square and Carmen looks at the station." }
          ]},
          { lines: [
            { es: "—¿Es la estación? —pregunta Mateo.", en: "“Is it the station?” asks Mateo." },
            { es: "—Sí, es la estación —dice Carmen—. Está delante de la plaza.", en: "“Yes, it is the station,” says Carmen. “It is in front of the square.”" },
            { es: "Hoy no están en el museo.", en: "Today they are not at the museum." },
            { es: "No están en el parque.", en: "They are not in the park." },
            { es: "Están delante de la estación.", en: "They are in front of the station." }
          ]},
          { lines: [
            { es: "—Ahora sí —dice Carmen.", en: "“Now we've got it,” says Carmen." },
            { es: "Mateo tiene una sonrisa grande.", en: "Mateo has a big smile." },
            { es: "Los dos están contentos.", en: "They are both happy." }
          ]}
        ]
      }
    ],
    vocab: [
      { es: "me gusta / me gustan", en: "I like (one thing / several)" },
      { es: "te gusta", en: "you like" },
      { es: "le gusta", en: "he / she likes" },
      { es: "a la derecha", en: "on the right" },
      { es: "a la izquierda", en: "on the left" },
      { es: "todo recto", en: "straight ahead" },
      { es: "al lado de", en: "next to" },
      { es: "entre", en: "between" },
      { es: "delante de", en: "in front of" },
      { es: "cerca de / lejos de", en: "near / far from" },
      { es: "¿cómo llego a…?", en: "how do I get to…?" },
      { es: "la carta", en: "the menu" },
      { es: "el camarero", en: "the waiter" },
      { es: "la cuenta", en: "the bill" },
      { es: "sin hielo", en: "without ice" },
      { es: "está rico", en: "it tastes good" }
    ],
    questions: [
      { type: "mc", q: "¿Qué le gusta a Carmen?", options: ["La ensalada", "La carne", "El pescado"], answer: 0 },
      { type: "mc", q: "¿Dónde está el restaurante?", options: ["Al lado de la farmacia", "En el museo", "En el banco"], answer: 0 },
      { type: "mc", q: "¿Qué hay entre el banco y el parque?", options: ["El museo", "El restaurante", "La estación"], answer: 0 },
      { type: "mc", q: "¿Qué come Mateo en el restaurante?", options: ["Pescado y arroz", "Una ensalada", "Pollo"], answer: 0 },
      { type: "tf", q: "El restaurante está en el museo.", answer: false, explain: "The museum is between the bank and the park. The restaurant is next to the pharmacy." },
      { type: "type", q: "Translate: I like salad.", answers: ["me gusta la ensalada"] },
      { type: "order", q: "Build: The restaurant is next to the pharmacy.", words: ["farmacia", "la", "de", "lado", "al", "está", "restaurante", "El"], answer: "El restaurante está al lado de la farmacia" }
    ]
  }
];
