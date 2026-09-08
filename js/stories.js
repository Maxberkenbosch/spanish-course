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
  se: "himself / herself (part of llamarse)",
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
  a: "to (mira a Ana = looks at Ana)",
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
  son: "they are (identity) — ser",
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
  }
];
