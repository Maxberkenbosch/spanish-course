const COURSE = {
  title: "Camino A1",
  hours: "50–70",
  goal: "Reach CEFR A1: survive everyday Spanish when people speak slowly and clearly.",
  units: [
    {
      id: "u1",
      num: 1,
      title: "Hola",
      subtitle: "Sounds, greetings, and first phrases",
      hours: "5–6",
      canDo: [
        "Greet people at different times of day and say goodbye",
        "Spell your name and ask someone theirs",
        "Use please, thank you, and sorry",
        "Tell informal tú from polite usted"
      ],
      lessons: [
        {
          id: "u1l1",
          title: "The sound of Spanish",
          blocks: [
            { type: "p", html: "Spanish spelling is honest: once you know the sounds, you can read almost any word. Learn these first and everything later gets easier. Vowels are short and clean — never like English diphthongs." },
            { type: "table", caption: "The five vowels", headers: ["Letter", "Sounds like", "Example"], rows: [
              ["a", "father", "casa (house)"],
              ["e", "bet", "mesa (table)"],
              ["i", "see", "sí (yes)"],
              ["o", "more (short)", "hola (hello)"],
              ["u", "food", "tú (you)"]
            ]},
            { type: "table", caption: "Letters that surprise English speakers", headers: ["Letter", "Sound", "Example"], rows: [
              ["j / g+e,i", "harsh h, like Scottish loch", "José, gente"],
              ["ñ", "canyon", "España, niño"],
              ["ll", "y in yes (most places)", "me llamo"],
              ["rr / r at start", "rolled r", "perro, Rosa"],
              ["h", "silent", "hola, hotel"],
              ["z / c+e,i", "th in Spain; s in Latin America", "gracias, cinco"],
              ["v", "like a soft b", "vamos"],
              ["qu", "k (the u is silent)", "queso"]
            ]},
            { type: "note", html: "<strong>Stress:</strong> if there is an accent mark, stress that syllable: <em>teléfono, café, fácil</em>. If not, stress the last syllable when the word ends in a consonant (except n or s), otherwise the second-to-last: <em>hotel, hablas</em>." },
            { type: "vocab", title: "Say these out loud", items: [
              { es: "hola", en: "hello" },
              { es: "adiós", en: "goodbye" },
              { es: "sí", en: "yes" },
              { es: "no", en: "no" },
              { es: "por favor", en: "please" },
              { es: "gracias", en: "thank you" },
              { es: "de nada", en: "you're welcome" },
              { es: "perdón", en: "sorry / excuse me" },
              { es: "con permiso", en: "excuse me (passing through)" },
              { es: "no entiendo", en: "I don't understand" }
            ]}
          ]
        },
        {
          id: "u1l2",
          title: "Hello, goodbye, and being polite",
          blocks: [
            { type: "p", html: "Spanish changes the greeting with the time of day. <em>Buenos días</em> until lunch, <em>buenas tardes</em> from afternoon until dark, <em>buenas noches</em> at night — also used when arriving or leaving in the evening." },
            { type: "vocab", title: "Greetings and farewells", items: [
              { es: "buenos días", en: "good morning" },
              { es: "buenas tardes", en: "good afternoon" },
              { es: "buenas noches", en: "good evening / good night" },
              { es: "¿qué tal?", en: "how's it going?" },
              { es: "¿cómo estás?", en: "how are you? (informal)" },
              { es: "¿cómo está usted?", en: "how are you? (formal)" },
              { es: "bien", en: "well" },
              { es: "muy bien", en: "very well" },
              { es: "más o menos", en: "so-so" },
              { es: "mal", en: "badly / not well" },
              { es: "hasta luego", en: "see you later" },
              { es: "hasta mañana", en: "see you tomorrow" },
              { es: "nos vemos", en: "see you" },
              { es: "mucho gusto", en: "nice to meet you" },
              { es: "igualmente", en: "likewise" }
            ]},
            { type: "note", html: "<strong>Tú vs usted.</strong> Use <em>tú</em> with friends, family, classmates, and people your age. Use <em>usted</em> with strangers who are older, in shops or offices, or whenever you want extra respect. In much of Latin America, <em>usted</em> is more common. The verb changes: <em>¿cómo estás?</em> / <em>¿cómo está?</em>" },
            { type: "dialogue", title: "Two people meet", lines: [
              { who: "Ana", es: "¡Hola! Buenos días. ¿Qué tal?", en: "Hi! Good morning. How's it going?", side: "a" },
              { who: "Luis", es: "Bien, gracias. ¿Y tú?", en: "Fine, thanks. And you?", side: "b" },
              { who: "Ana", es: "Muy bien. Me llamo Ana. ¿Cómo te llamas?", en: "Very well. My name is Ana. What's your name?", side: "a" },
              { who: "Luis", es: "Me llamo Luis. Mucho gusto.", en: "My name is Luis. Nice to meet you.", side: "b" },
              { who: "Ana", es: "Igualmente. Hasta luego.", en: "Likewise. See you later.", side: "a" }
            ]}
          ]
        },
        {
          id: "u1l3",
          title: "What's your name?",
          blocks: [
            { type: "p", html: "The verb <em>llamarse</em> means “to be called.” You need a little pronoun stuck to it: <em>me, te, se, nos</em>." },
            { type: "table", caption: "llamarse — present", headers: ["Spanish", "English"], rows: [
              ["me llamo", "my name is / I am called"],
              ["te llamas", "your name is (tú)"],
              ["se llama", "his/her/your (usted) name is"],
              ["nos llamamos", "our names are"],
              ["se llaman", "their / your (ustedes) names are"]
            ]},
            { type: "vocab", title: "Useful questions", items: [
              { es: "¿Cómo te llamas?", en: "What's your name? (tú)" },
              { es: "¿Cómo se llama usted?", en: "What's your name? (formal)" },
              { es: "¿Cómo se escribe?", en: "How do you spell it?" },
              { es: "¿Puede repetir, por favor?", en: "Can you repeat, please?" },
              { es: "más despacio, por favor", en: "more slowly, please" },
              { es: "¿habla inglés?", en: "do you speak English?" },
              { es: "un poco", en: "a little" },
              { es: "¿de dónde eres?", en: "where are you from? (tú)" }
            ]},
            { type: "p", html: "The Spanish alphabet names are useful for spelling. <em>a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, ye, zeta</em>. W is <em>uve doble</em> or <em>doble u</em>." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the courtesy words.", pairs: [["gracias", "thank you"], ["por favor", "please"], ["de nada", "you're welcome"], ["perdón", "sorry / excuse me"], ["con permiso", "may I get past"], ["no entiendo", "I don't understand"]] },
        { type: "match", q: "Match each way to say goodbye.", pairs: [["adiós", "goodbye"], ["hasta luego", "see you later"], ["hasta mañana", "see you tomorrow"], ["nos vemos", "see you around"]] },
        { type: "match", q: "Match the answers to «¿Cómo estás?»", pairs: [["muy bien", "very well"], ["bien", "fine"], ["más o menos", "so-so"], ["mal", "bad"]] },
        { type: "type", q: "good morning", answers: ["buenos días"] },
        { type: "type", q: "good afternoon", answers: ["buenas tardes"] },
        { type: "type", q: "good evening / good night", answers: ["buenas noches"] },
        { type: "type", q: "Nice to meet you.", answers: ["mucho gusto"] },
        { type: "type", q: "Likewise. (answer to «mucho gusto»)", answers: ["igualmente"] },
        { type: "type", q: "a little (bit)", answers: ["un poco"] },
        { type: "type", q: "Fill in the llamarse form: «Me ___ Ana.»", answers: ["llamo"] },
        { type: "type", q: "Fill in the llamarse form: «¿Cómo te ___?»", answers: ["llamas"] },
        { type: "mc", q: "Which llamarse form goes with usted?", options: ["me llamo", "te llamas", "se llama", "nos llamamos"], answer: 2 },
        { type: "mc", q: "In hola, the letter h is:", options: ["like English h", "silent", "like Spanish j", "like g"], answer: 1 },
        { type: "mc", q: "The ñ in España sounds like:", options: ["plain n", "ny, as in canyon", "m", "ng"], answer: 1 },
        { type: "mc", q: "Which word has the stress on the last syllable?", options: ["hablas", "gracias", "hotel", "noches"], answer: 2 },
        { type: "tf", q: "Spanish vowels each keep one short, clean sound.", answer: true },
        { type: "tf", q: "In fácil the accent mark shows which syllable is stressed.", answer: true },
        { type: "order", q: "Build: My name is Marta.", words: ["Marta", "llamo", "Me"], answer: "Me llamo Marta" }
      ],
      quiz: [
        { type: "mc", q: "You arrive at a friend's house at 21:00. You say:", options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana"], answer: 2 },
        { type: "mc", q: "It is 14:00 and you walk into a shop. You say:", options: ["Buenos días", "Buenas tardes", "Buenas noches", "Nos vemos"], answer: 1 },
        { type: "mc", q: "You step on someone's foot in the metro. You say:", options: ["De nada", "Perdón", "Mucho gusto", "Hasta luego"], answer: 1 },
        { type: "mc", q: "You need to squeeze past someone in a doorway. You say:", options: ["Con permiso", "De nada", "Igualmente", "Más o menos"], answer: 0 },
        { type: "mc", q: "The shop assistant hands you your bag and says «Gracias». You answer:", options: ["Por favor", "De nada", "Perdón", "Un poco"], answer: 1 },
        { type: "mc", q: "You are introduced to your friend's grandmother. You ask her name:", options: ["¿Cómo te llamas?", "¿Cómo se llama usted?", "¿Qué tal?", "¿Cómo se escribe?"], answer: 1 },
        { type: "mc", q: "A classmate asks «¿Cómo estás?» You slept badly but you are okay. You answer:", options: ["Muy bien", "Más o menos", "Mucho gusto", "Igualmente"], answer: 1 },
        { type: "mc", q: "The receptionist is talking too fast for you. You say:", options: ["No entiendo nada", "Más despacio, por favor", "¿Habla inglés?", "Con permiso"], answer: 1 },
        { type: "mc", q: "You heard a name but not clearly, and you want it letter by letter. You ask:", options: ["¿Puede repetir, por favor?", "¿Cómo se escribe?", "¿Cómo estás?", "¿De dónde eres?"], answer: 1 },
        { type: "mc", q: "Someone says «Mucho gusto» to you. The natural reply is:", options: ["De nada", "Por favor", "Igualmente", "Hasta luego"], answer: 2 },
        { type: "mc", q: "Which sentence about names is wrong?", options: ["Me llamo Ana", "¿Cómo te llamas?", "Me llamas Ana", "¿Cómo se llama usted?"], answer: 2 },
        { type: "mc", q: "You are leaving and you will see the person tomorrow. You say:", options: ["Hasta mañana", "Buenas noches", "Mucho gusto", "Con permiso"], answer: 0 },
        { type: "tf", q: "«¿Cómo está usted?» is a good question for a stranger much older than you.", answer: true },
        { type: "tf", q: "«Buenas noches» is only for leaving, never for arriving.", answer: false, explain: "It works for both: you can greet someone with it at night and use it on the way out." },
        { type: "tf", q: "Choosing tú or usted changes the verb form as well as the pronoun.", answer: true },
        { type: "type", q: "Translate: Good afternoon, my name is Carmen.", answers: ["buenas tardes, me llamo Carmen"] },
        { type: "type", q: "Translate: Hello, how are you? (informal)", answers: ["hola, ¿cómo estás?", "hola, qué tal"] },
        { type: "type", q: "Translate: I'm fine, thank you.", answers: ["bien, gracias", "estoy bien, gracias", "muy bien, gracias"] },
        { type: "type", q: "Translate: Sorry, I don't understand.", answers: ["perdón, no entiendo"] },
        { type: "order", q: "Build: How are you? (formal)", words: ["usted", "está", "Cómo"], answer: "Cómo está usted" }
      ]
    },
    {
      id: "u2",
      num: 2,
      title: "Yo soy",
      subtitle: "Who you are: origin, work, and numbers",
      hours: "6",
      canDo: [
        "Say who you are, where you are from, and what you do",
        "Use ser in the present tense",
        "Count from 0 to 100 and give your age and phone number",
        "Use el/la and un/una"
      ],
      lessons: [
        {
          id: "u2l1",
          title: "Ser — to be (identity)",
          blocks: [
            { type: "p", html: "<em>Ser</em> is the verb for who you are: name, nationality, profession, personality, time, and origin. Memorize it now. You will use it every day." },
            { type: "table", caption: "ser — present", headers: ["Pronoun", "ser", "English"], rows: [
              ["yo", "soy", "I am"],
              ["tú", "eres", "you are"],
              ["él / ella / usted", "es", "he/she/you (formal) is"],
              ["nosotros / nosotras", "somos", "we are"],
              ["vosotros / vosotras", "sois", "you all are (Spain)"],
              ["ellos / ellas / ustedes", "son", "they / you all are"]
            ]},
            { type: "note", html: "In Latin America people say <em>ustedes son</em> for “you all,” not <em>vosotros sois</em>. This course teaches both; use <em>ustedes</em> if you are unsure." },
            { type: "vocab", title: "Identity phrases", items: [
              { es: "yo soy", en: "I am" },
              { es: "¿de dónde eres?", en: "where are you from?" },
              { es: "soy de…", en: "I am from…" },
              { es: "¿a qué te dedicas?", en: "what do you do for work?" },
              { es: "soy estudiante", en: "I am a student" },
              { es: "soy profesor / profesora", en: "I am a teacher" },
              { es: "no soy…", en: "I am not…" },
              { es: "¿eres de España?", en: "are you from Spain?" }
            ]}
          ]
        },
        {
          id: "u2l2",
          title: "Countries, nationalities, jobs",
          blocks: [
            { type: "p", html: "Nationalities are adjectives: they agree in gender. A man is <em>español</em>, a woman is <em>española</em>. Many end in <em>-o/-a</em>. Ones ending in <em>-e</em> or a consonant often stay the same: <em>estadounidense, canadiense</em>." },
            { type: "vocab", title: "Places and people", items: [
              { es: "España", en: "Spain" },
              { es: "México", en: "Mexico" },
              { es: "Argentina", en: "Argentina" },
              { es: "Colombia", en: "Colombia" },
              { es: "Estados Unidos", en: "United States" },
              { es: "el Reino Unido", en: "the United Kingdom" },
              { es: "español / española", en: "Spanish" },
              { es: "mexicano / mexicana", en: "Mexican" },
              { es: "estadounidense", en: "American (US)" },
              { es: "británico / británica", en: "British" },
              { es: "el / la médico", en: "doctor" },
              { es: "el / la ingeniero/a", en: "engineer" },
              { es: "el / la camarero/a", en: "waiter / waitress" },
              { es: "el / la abogado/a", en: "lawyer" }
            ]},
            { type: "note", html: "Spanish usually drops «a/an» before a profession after ser: <em>Soy profesora</em>, not <em>soy una profesora</em> — unless you add extra information: <em>Soy una profesora de Madrid</em>." },
            { type: "dialogue", title: "At a language school", lines: [
              { who: "Pablo", es: "Hola, soy Pablo. ¿De dónde eres?", en: "Hi, I'm Pablo. Where are you from?", side: "a" },
              { who: "Eva", es: "Soy de Londres. Soy británica. ¿Y tú?", en: "I'm from London. I'm British. And you?", side: "b" },
              { who: "Pablo", es: "Soy de México. Soy ingeniero.", en: "I'm from Mexico. I'm an engineer.", side: "a" },
              { who: "Eva", es: "Yo soy estudiante.", en: "I'm a student.", side: "b" }
            ]}
          ]
        },
        {
          id: "u2l3",
          title: "Numbers 0–100 and articles",
          blocks: [
            { type: "p", html: "Learn 0–15 by heart. 16–29 are glued together: <em>dieciséis, veintidós</em>. From 30, you say <em>treinta y uno</em>." },
            { type: "table", caption: "0–20", headers: ["n", "Spanish", "n", "Spanish"], rows: [
              ["0", "cero", "11", "once"],
              ["1", "uno / una", "12", "doce"],
              ["2", "dos", "13", "trece"],
              ["3", "tres", "14", "catorce"],
              ["4", "cuatro", "15", "quince"],
              ["5", "cinco", "16", "dieciséis"],
              ["6", "seis", "17", "diecisiete"],
              ["7", "siete", "18", "dieciocho"],
              ["8", "ocho", "19", "diecinueve"],
              ["9", "nueve", "20", "veinte"],
              ["10", "diez", "21", "veintiuno"]
            ]},
            { type: "table", caption: "Tens", headers: ["n", "Spanish"], rows: [
              ["30", "treinta"], ["40", "cuarenta"], ["50", "cincuenta"],
              ["60", "sesenta"], ["70", "setenta"], ["80", "ochenta"],
              ["90", "noventa"], ["100", "cien"]
            ]},
            { type: "vocab", title: "Age and contact", items: [
              { es: "¿cuántos años tienes?", en: "how old are you?" },
              { es: "tengo 28 años", en: "I am 28 years old" },
              { es: "¿cuál es tu número de teléfono?", en: "what's your phone number?" },
              { es: "mi número es…", en: "my number is…" }
            ]},
            { type: "p", html: "<strong>Articles.</strong> Every noun is masculine or feminine. <em>el / los</em> = the (m), <em>la / las</em> = the (f). <em>un / unos</em> = a/some (m), <em>una / unas</em> = a/some (f). Typical clue: nouns ending in <em>-o</em> are masculine (<em>el libro</em>), <em>-a</em> feminine (<em>la casa</em>). Exceptions exist: <em>el día, la mano, el mapa, el problema</em>." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the countries.", pairs: [["España", "Spain"], ["México", "Mexico"], ["Argentina", "Argentina"], ["Colombia", "Colombia"], ["Estados Unidos", "the United States"], ["el Reino Unido", "the United Kingdom"]] },
        { type: "match", q: "Match the jobs.", pairs: [["el médico", "doctor"], ["el ingeniero", "engineer"], ["el camarero", "waiter"], ["el abogado", "lawyer"], ["la profesora", "teacher"], ["el estudiante", "student"]] },
        { type: "type", q: "yo (ser)", answers: ["soy"] },
        { type: "type", q: "tú (ser)", answers: ["eres"] },
        { type: "type", q: "nosotros (ser)", answers: ["somos"] },
        { type: "type", q: "ellos / ustedes (ser)", answers: ["son"] },
        { type: "type", q: "Write 16 in Spanish.", answers: ["dieciséis"] },
        { type: "type", q: "Write 21 in Spanish.", answers: ["veintiuno"] },
        { type: "type", q: "Write 42 in Spanish.", answers: ["cuarenta y dos"] },
        { type: "type", q: "Write 70 in Spanish.", answers: ["setenta"] },
        { type: "type", q: "Write 100 in Spanish.", answers: ["cien"] },
        { type: "mc", q: "A woman from Spain is:", options: ["español", "española", "espana", "españo"], answer: 1 },
        { type: "mc", q: "A man from Mexico is:", options: ["mexicana", "mexicano", "México", "mexicanos"], answer: 1 },
        { type: "mc", q: "Which article goes with casa?", options: ["el", "la", "los", "un"], answer: 1 },
        { type: "mc", q: "Which article goes with problema?", options: ["la", "el", "las", "una"], answer: 1 },
        { type: "mc", q: "«Nosotros ___ estudiantes.»", options: ["sois", "son", "somos", "eres"], answer: 2 },
        { type: "tf", q: "After ser you normally drop «un / una» before a job: «Soy profesora».", answer: true },
        { type: "order", q: "Build: I am from Colombia.", words: ["Colombia", "de", "Soy"], answer: "Soy de Colombia" }
      ],
      quiz: [
        { type: "mc", q: "You are from Argentina. Someone asks «¿De dónde eres?» You answer:", options: ["Soy de Argentina", "Estoy de Argentina", "Soy Argentina", "Tengo de Argentina"], answer: 0 },
        { type: "mc", q: "Ana comes from Spain. Complete: «Ana ___ española.»", options: ["soy", "eres", "es", "son"], answer: 2 },
        { type: "mc", q: "One of these job sentences is wrong. Which one?", options: ["Soy profesora", "Soy una profesora de Madrid", "Soy un profesora", "Es ingeniero"], answer: 2 },
        { type: "mc", q: "Which sentence correctly says that a woman is British?", options: ["Es británico", "Es británica", "Son británica", "Eres británico"], answer: 1 },
        { type: "mc", q: "Someone asks «¿A qué te dedicas?» They want to know:", options: ["where you live", "your job", "your age", "your name"], answer: 1 },
        { type: "mc", q: "The bill says 33 euros. Which is 33?", options: ["trece", "treinta", "treinta y tres", "tres y treinta"], answer: 2 },
        { type: "mc", q: "Which answer fits «¿Cuántos años tienes?»", options: ["Soy 28 años", "Tengo 28 años", "Estoy 28 años", "Son 28 años"], answer: 1 },
        { type: "mc", q: "You are talking to a client you call usted. Complete: «¿___ usted de México?»", options: ["Eres", "Es", "Soy", "Son"], answer: 1 },
        { type: "mc", q: "Which sentence uses the wrong form of ser?", options: ["Nosotros somos de México", "Vosotros sois estudiantes", "Ellos es abogados", "Yo soy camarero"], answer: 2 },
        { type: "mc", q: "Which article is correct: «___ mano»?", options: ["el", "la", "los", "un"], answer: 1 },
        { type: "mc", q: "Which nationality does not change for a woman?", options: ["español", "mexicano", "estadounidense", "británico"], answer: 2 },
        { type: "tf", q: "Nationalities work like adjectives, so they change ending for men and women.", answer: true },
        { type: "tf", q: "«Soy estudiante» is wrong; you must say «Soy un estudiante».", answer: false, explain: "«Soy estudiante» is the normal form. You only add un / una when you say more about it." },
        { type: "tf", q: "Usted takes the same ser form as él and ella.", answer: true },
        { type: "type", q: "Translate: I am a teacher and I am from Colombia. (woman)", answers: ["soy profesora y soy de Colombia", "soy profesora y de Colombia"] },
        { type: "type", q: "Translate: We are students.", answers: ["somos estudiantes", "nosotros somos estudiantes"] },
        { type: "type", q: "Translate: She is 30 years old.", answers: ["tiene 30 años", "ella tiene 30 años", "tiene treinta años"] },
        { type: "type", q: "Translate: Are you from Spain? (tú)", answers: ["¿eres de España?", "eres de España"] },
        { type: "type", q: "Translate: I am not a waiter.", answers: ["no soy camarero"] },
        { type: "order", q: "Build: Where are you from? (tú)", words: ["eres", "dónde", "De"], answer: "De dónde eres" }
      ]
    },
    {
      id: "u3",
      num: 3,
      title: "Mi gente",
      subtitle: "Family, tener, and possessives",
      hours: "5–6",
      canDo: [
        "Talk about your family and pets",
        "Use tener for possession and age",
        "Say this is my / your / our…",
        "Use hay to say there is / there are"
      ],
      lessons: [
        {
          id: "u3l1",
          title: "Family words",
          blocks: [
            { type: "vocab", title: "La familia", items: [
              { es: "la madre", en: "mother" },
              { es: "el padre", en: "father" },
              { es: "los padres", en: "parents" },
              { es: "el hermano / la hermana", en: "brother / sister" },
              { es: "el hijo / la hija", en: "son / daughter" },
              { es: "el abuelo / la abuela", en: "grandfather / grandmother" },
              { es: "el tío / la tía", en: "uncle / aunt" },
              { es: "el primo / la prima", en: "cousin" },
              { es: "el marido / la mujer", en: "husband / wife" },
              { es: "el novio / la novia", en: "boyfriend / girlfriend" },
              { es: "el perro / el gato", en: "dog / cat" },
              { es: "la familia", en: "family" }
            ]},
            { type: "p", html: "Plural of mixed groups is masculine: one brother + one sister = <em>dos hermanos</em>. <em>Los padres</em> can mean “parents,” not only “fathers.”" }
          ]
        },
        {
          id: "u3l2",
          title: "Tener and hay",
          blocks: [
            { type: "p", html: "<em>Tener</em> means “to have.” Age uses tener, not ser: <em>Tengo 20 años</em>." },
            { type: "table", caption: "tener — present", headers: ["Pronoun", "tener"], rows: [
              ["yo", "tengo"],
              ["tú", "tienes"],
              ["él / ella / usted", "tiene"],
              ["nosotros/as", "tenemos"],
              ["vosotros/as", "tenéis"],
              ["ellos / ellas / ustedes", "tienen"]
            ]},
            { type: "vocab", title: "With tener", items: [
              { es: "tengo un hermano", en: "I have a brother" },
              { es: "no tengo hijos", en: "I don't have children" },
              { es: "¿tienes hermanos?", en: "do you have siblings?" },
              { es: "tengo hambre", en: "I am hungry" },
              { es: "tengo sed", en: "I am thirsty" },
              { es: "tengo frío / calor", en: "I am cold / hot" },
              { es: "tengo que…", en: "I have to…" }
            ]},
            { type: "p", html: "<em>Hay</em> means “there is / there are.” It does not change for plural. <em>Hay un gato. Hay dos gatos. No hay café.</em>" }
          ]
        },
        {
          id: "u3l3",
          title: "This is my sister — possessives",
          blocks: [
            { type: "p", html: "Short possessives go before the noun and agree with the <em>thing owned</em>, not the owner. <em>Mi casa, mis casas</em> — even if you are a man or a woman." },
            { type: "table", caption: "Possessives", headers: ["Owner", "Singular", "Plural"], rows: [
              ["my", "mi", "mis"],
              ["your (tú)", "tu", "tus"],
              ["his/her/your (usted)", "su", "sus"],
              ["our", "nuestro / nuestra", "nuestros / nuestras"],
              ["your (vosotros)", "vuestro / vuestra", "vuestros / vuestras"],
              ["their / your (ustedes)", "su", "sus"]
            ]},
            { type: "dialogue", title: "Showing a photo", lines: [
              { who: "Nora", es: "Esta es mi familia. Estos son mis padres.", en: "This is my family. These are my parents.", side: "a" },
              { who: "Omar", es: "¿Tienes hermanos?", en: "Do you have siblings?", side: "b" },
              { who: "Nora", es: "Sí, tengo una hermana. Se llama Lola. Tiene 19 años.", en: "Yes, I have a sister. Her name is Lola. She is 19.", side: "a" },
              { who: "Omar", es: "Yo no tengo hermanos. Tengo un gato.", en: "I don't have siblings. I have a cat.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the close family.", pairs: [["la madre", "mother"], ["el padre", "father"], ["la hermana", "sister"], ["el hijo", "son"], ["la abuela", "grandmother"], ["el tío", "uncle"]] },
        { type: "match", q: "Match the rest of the household.", pairs: [["el primo", "cousin"], ["el marido", "husband"], ["la mujer", "wife"], ["el novio", "boyfriend"], ["el perro", "dog"], ["el gato", "cat"]] },
        { type: "type", q: "yo (tener)", answers: ["tengo"] },
        { type: "type", q: "tú (tener)", answers: ["tienes"] },
        { type: "type", q: "nosotros (tener)", answers: ["tenemos"] },
        { type: "type", q: "ellos / ustedes (tener)", answers: ["tienen"] },
        { type: "type", q: "my brothers (possessive + noun)", answers: ["mis hermanos"] },
        { type: "type", q: "our house", answers: ["nuestra casa"] },
        { type: "type", q: "I'm hungry.", answers: ["tengo hambre"] },
        { type: "type", q: "I'm thirsty.", answers: ["tengo sed"] },
        { type: "mc", q: "«___ tres sillas en la cocina.» (there are)", options: ["Tienen", "Hay", "Son", "Están"], answer: 1 },
        { type: "mc", q: "«Mi madre ___ dos hermanas.»", options: ["tengo", "tienes", "tiene", "tenemos"], answer: 2 },
        { type: "mc", q: "«___ padres son de México.» (my)", options: ["Mi", "Mis", "Nuestro", "Tu"], answer: 1 },
        { type: "mc", q: "«sus libros» can mean:", options: ["only his books", "only their books", "his, her or their books", "our books"], answer: 2 },
        { type: "mc", q: "Which possessive fits: «___ familia es grande.» (our)", options: ["Nuestro", "Nuestra", "Nuestros", "Nuestras"], answer: 1 },
        { type: "tf", q: "Mi becomes mis before a plural noun.", answer: true },
        { type: "tf", q: "«Tengo que» means «I have to».", answer: true },
        { type: "order", q: "Build: I don't have children.", words: ["hijos", "tengo", "No"], answer: "No tengo hijos" }
      ],
      quiz: [
        { type: "mc", q: "You want to say there is a dog in the house. You say:", options: ["Tengo un perro en la casa", "Hay un perro en la casa", "Es un perro en la casa", "Está un perro en la casa"], answer: 1 },
        { type: "mc", q: "Which sentence mixes up tener and hay?", options: ["Tengo dos hermanos", "Hay dos hermanos en mi familia", "Tengo hambre", "Hay hambre"], answer: 3 },
        { type: "mc", q: "You are pointing at your friend's sister in a photo. You say:", options: ["mi hermana", "tu hermana", "su hermana", "nuestra hermana"], answer: 2 },
        { type: "mc", q: "It is 35 degrees outside. You say:", options: ["Tengo frío", "Tengo calor", "Tengo sed", "Soy caliente"], answer: 1 },
        { type: "mc", q: "Which sentence has a possessive mistake?", options: ["Mi hermana es alta", "Mis hermana es alta", "Nuestros padres son profesores", "Tus primos son de Lima"], answer: 1 },
        { type: "mc", q: "«Mi tía ___ que trabajar.»", options: ["tengo", "tiene", "tienen", "hay"], answer: 1 },
        { type: "mc", q: "You use hay when you want to:", options: ["say who owns something", "say that something exists", "describe a person", "say where you are from"], answer: 1 },
        { type: "mc", q: "Out of context, «la mujer» can mean:", options: ["only wife", "only woman", "wife or woman", "girlfriend"], answer: 2 },
        { type: "mc", q: "How do you ask a friend whether they have brothers or sisters?", options: ["¿Hay hermanos?", "¿Tienes hermanos?", "¿Tiene hermanos?", "¿Eres hermanos?"], answer: 1 },
        { type: "mc", q: "«Nosotros ___ un gato y dos perros.»", options: ["tengo", "tienes", "tenemos", "tienen"], answer: 2 },
        { type: "tf", q: "Hay becomes «han» before a plural noun.", answer: false, explain: "Hay never changes: hay un libro, hay dos libros." },
        { type: "tf", q: "For feeling cold, Spanish says «tengo frío», not «soy frío».", answer: true },
        { type: "tf", q: "Nuestro agrees with the thing owned, not with the owner.", answer: true },
        { type: "type", q: "Translate: I have two brothers and one sister.", answers: ["tengo dos hermanos y una hermana"] },
        { type: "type", q: "Translate: There are three cats in the house.", answers: ["hay tres gatos en la casa"] },
        { type: "type", q: "Translate: My grandmother is from Argentina.", answers: ["mi abuela es de Argentina"] },
        { type: "type", q: "Translate: Do you have children? (tú)", answers: ["¿tienes hijos?", "tienes hijos"] },
        { type: "type", q: "Translate: My parents have a dog.", answers: ["mis padres tienen un perro"] },
        { type: "type", q: "Translate: She is thirsty.", answers: ["tiene sed", "ella tiene sed"] },
        { type: "order", q: "Build: How many brothers and sisters do you have? (tú)", words: ["tienes", "hermanos", "Cuántos"], answer: "Cuántos hermanos tienes" }
      ]
    },
    {
      id: "u4",
      num: 4,
      title: "¿Cómo eres?",
      subtitle: "Describe people and use ser vs estar",
      hours: "6",
      canDo: [
        "Describe appearance and personality",
        "Make adjectives agree in gender and number",
        "Choose ser or estar for identity vs state/location",
        "Name basic colors"
      ],
      lessons: [
        {
          id: "u4l1",
          title: "Adjectives must match",
          blocks: [
            { type: "p", html: "An adjective copies the noun: <em>un chico alto, una chica alta, chicos altos, chicas altas</em>. If it ends in <em>-e</em> or a consonant, gender often stays the same: <em>inteligente, joven, fácil</em>. Plural: add <em>-s</em> or <em>-es</em> (<em>jóvenes, fáciles</em>)." },
            { type: "vocab", title: "Appearance", items: [
              { es: "alto / alta", en: "tall" },
              { es: "bajo / baja", en: "short (height)" },
              { es: "joven", en: "young" },
              { es: "mayor", en: "older" },
              { es: "rubio / rubia", en: "blond" },
              { es: "moreno / morena", en: "dark-haired" },
              { es: "delgado / delgada", en: "slim" },
              { es: "pelo corto / largo", en: "short / long hair" },
              { es: "los ojos azules", en: "blue eyes" },
              { es: "guapo / guapa", en: "good-looking" }
            ]},
            { type: "vocab", title: "Personality", items: [
              { es: "simpático / simpática", en: "nice, friendly" },
              { es: "serio / seria", en: "serious" },
              { es: "divertido / divertida", en: "fun" },
              { es: "tímido / tímida", en: "shy" },
              { es: "trabajador / trabajadora", en: "hard-working" },
              { es: "perezoso / perezosa", en: "lazy" },
              { es: "inteligente", en: "intelligent" },
              { es: "amable", en: "kind" }
            ]},
            { type: "vocab", title: "Colors", items: [
              { es: "blanco / negro", en: "white / black" },
              { es: "rojo / azul / verde", en: "red / blue / green" },
              { es: "amarillo / naranja", en: "yellow / orange" },
              { es: "gris / rosa / marrón", en: "grey / pink / brown" }
            ]}
          ]
        },
        {
          id: "u4l2",
          title: "Ser or estar?",
          blocks: [
            { type: "p", html: "Both mean “to be,” but they are not interchangeable. A1 rule of thumb:" },
            { type: "table", caption: "Split the job", headers: ["ser", "estar"], rows: [
              ["who / what something is", "how something is right now"],
              ["origin, profession, personality", "location"],
              ["time and dates", "feelings and temporary states"],
              ["material, possession", "result of a change (abierto, cerrado)"]
            ]},
            { type: "table", caption: "estar — present", headers: ["Pronoun", "estar"], rows: [
              ["yo", "estoy"],
              ["tú", "estás"],
              ["él / ella / usted", "está"],
              ["nosotros/as", "estamos"],
              ["vosotros/as", "estáis"],
              ["ellos / ellas / ustedes", "están"]
            ]},
            { type: "vocab", title: "States with estar", items: [
              { es: "estoy bien / mal", en: "I am well / unwell" },
              { es: "estoy cansado / cansada", en: "I am tired" },
              { es: "estoy enfermo / enferma", en: "I am sick" },
              { es: "está abierto / cerrado", en: "it is open / closed" },
              { es: "¿dónde está el baño?", en: "where is the bathroom?" },
              { es: "Madrid está en España", en: "Madrid is in Spain" }
            ]},
            { type: "note", html: "Compare: <em>Ana es seria</em> (that's her personality) vs <em>Ana está seria</em> (she looks serious right now). <em>Soy aburrido</em> = I am a boring person. <em>Estoy aburrido</em> = I am bored." },
            { type: "dialogue", title: "Describing a friend", lines: [
              { who: "Kim", es: "¿Cómo es tu hermano?", en: "What is your brother like?", side: "a" },
              { who: "Raúl", es: "Es alto y moreno. Es muy simpático.", en: "He's tall and dark-haired. He's very friendly.", side: "b" },
              { who: "Kim", es: "¿Dónde está ahora?", en: "Where is he now?", side: "a" },
              { who: "Raúl", es: "Está en casa. Está cansado.", en: "He's at home. He's tired.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the looks.", pairs: [["alto", "tall"], ["bajo", "short"], ["joven", "young"], ["rubio", "blond"], ["moreno", "dark-haired"], ["delgado", "slim"]] },
        { type: "match", q: "Match the personalities.", pairs: [["simpático", "nice"], ["serio", "serious"], ["divertido", "fun"], ["tímido", "shy"], ["trabajador", "hard-working"], ["perezoso", "lazy"]] },
        { type: "match", q: "Match the colours.", pairs: [["rojo", "red"], ["azul", "blue"], ["verde", "green"], ["amarillo", "yellow"], ["negro", "black"], ["blanco", "white"]] },
        { type: "type", q: "yo (estar)", answers: ["estoy"] },
        { type: "type", q: "tú (estar)", answers: ["estás"] },
        { type: "type", q: "nosotros (estar)", answers: ["estamos"] },
        { type: "type", q: "ellos / ustedes (estar)", answers: ["están"] },
        { type: "type", q: "tired (about a woman)", answers: ["cansada"] },
        { type: "type", q: "ill (about a man)", answers: ["enfermo"] },
        { type: "type", q: "closed", answers: ["cerrado"] },
        { type: "mc", q: "«María es ___.» (tall)", options: ["alto", "alta", "altos", "altas"], answer: 1 },
        { type: "mc", q: "«Los libros son ___.» (red)", options: ["rojo", "roja", "rojos", "rojas"], answer: 2 },
        { type: "mc", q: "«El banco ___ en la plaza.»", options: ["es", "está", "hay", "son"], answer: 1 },
        { type: "mc", q: "«Mi hermano ___ inteligente.»", options: ["es", "está", "hay", "tiene"], answer: 0 },
        { type: "mc", q: "«Nosotros ___ cansados.»", options: ["somos", "estamos", "están", "estáis"], answer: 1 },
        { type: "tf", q: "Ser is for lasting qualities, estar for states and places.", answer: true },
        { type: "tf", q: "«Estoy aburrido» means you are a boring person.", answer: false, explain: "It means you feel bored. «Soy aburrido» is the one that calls you boring." },
        { type: "order", q: "Build: My sister is very nice.", words: ["simpática", "muy", "es", "hermana", "Mi"], answer: "Mi hermana es muy simpática" }
      ],
      quiz: [
        { type: "mc", q: "Your friend looks pale and unwell today. You say:", options: ["Eres enfermo", "Estás enfermo", "Tienes enfermo", "Hay enfermo"], answer: 1 },
        { type: "mc", q: "You want to say Ana is a kind person, as a lasting trait:", options: ["Ana está amable", "Ana es amable", "Ana tiene amable", "Ana hay amable"], answer: 1 },
        { type: "mc", q: "Which sentence picks the wrong verb, ser or estar?", options: ["El museo está cerrado", "El museo es cerrado", "Estoy en el museo", "El museo es grande"], answer: 1 },
        { type: "mc", q: "«Las sillas ___ verdes.»", options: ["están", "son", "es", "hay"], answer: 1 },
        { type: "mc", q: "The shop is open right now. You say:", options: ["La tienda es abierta", "La tienda está abierta", "Hay la tienda abierta", "La tienda tiene abierta"], answer: 1 },
        { type: "mc", q: "Which sentence has an agreement mistake?", options: ["Mis hermanas son altas", "Mis hermanas son alto", "Una chica morena", "Los ojos azules"], answer: 1 },
        { type: "mc", q: "«¿Cómo eres?» asks about:", options: ["how you feel today", "what you are like", "where you are", "what you have"], answer: 1 },
        { type: "mc", q: "«¿Cómo estás?» asks about:", options: ["what you are like", "how you feel right now", "your job", "your family"], answer: 1 },
        { type: "mc", q: "«pelo corto» means:", options: ["long hair", "short hair", "dark hair", "blond hair"], answer: 1 },
        { type: "mc", q: "Where a city is located, you use:", options: ["ser", "estar", "tener", "hay"], answer: 1 },
        { type: "tf", q: "Adjectives ending in -e, like inteligente, change ending for men and women.", answer: false, explain: "They stay the same: un chico inteligente, una chica inteligente." },
        { type: "tf", q: "Colours normally come after the noun: «un libro rojo».", answer: true },
        { type: "tf", q: "«Estoy cansado» is about right now, not about your character.", answer: true },
        { type: "type", q: "Translate: My sister is tall and blonde.", answers: ["mi hermana es alta y rubia"] },
        { type: "type", q: "Translate: I am very tired. (man)", answers: ["estoy muy cansado"] },
        { type: "type", q: "Translate: The bank is closed.", answers: ["el banco está cerrado"] },
        { type: "type", q: "Translate: They are hard-working.", answers: ["son trabajadores", "ellos son trabajadores"] },
        { type: "type", q: "Translate: Where is the bathroom?", answers: ["¿dónde está el baño?", "dónde está el baño"] },
        { type: "type", q: "Translate: We are at home.", answers: ["estamos en casa", "nosotros estamos en casa"] },
        { type: "order", q: "Build: My brother is shy.", words: ["tímido", "es", "hermano", "Mi"], answer: "Mi hermano es tímido" }
      ]
    },
    {
      id: "u5",
      num: 5,
      title: "Qué hora es",
      subtitle: "Clock, days, months, and dates",
      hours: "5",
      canDo: [
        "Tell and ask the time",
        "Name days, months, and seasons",
        "Give today's date and your birthday",
        "Talk about opening hours"
      ],
      lessons: [
        {
          id: "u5l1",
          title: "What time is it?",
          blocks: [
            { type: "p", html: "Ask <em>¿Qué hora es?</em> Answer with <em>Es la una</em> (1:00 only) or <em>Son las dos / tres / …</em> Add minutes with <em>y</em>. After half past, you can count toward the next hour with <em>menos</em>." },
            { type: "table", caption: "Clock phrases", headers: ["Time", "Spanish"], rows: [
              ["1:00", "Es la una"],
              ["2:00", "Son las dos"],
              ["3:10", "Son las tres y diez"],
              ["4:15", "Son las cuatro y cuarto"],
              ["5:30", "Son las cinco y media"],
              ["6:45", "Son las siete menos cuarto"],
              ["7:50", "Son las ocho menos diez"],
              ["12:00", "Son las doce / mediodía"],
              ["00:00", "Es medianoche"]
            ]},
            { type: "vocab", title: "Around the clock", items: [
              { es: "¿qué hora es?", en: "what time is it?" },
              { es: "¿a qué hora…?", en: "at what time…?" },
              { es: "a las ocho", en: "at eight" },
              { es: "de la mañana", en: "in the morning" },
              { es: "de la tarde", en: "in the afternoon" },
              { es: "de la noche", en: "at night" },
              { es: "en punto", en: "exactly / on the dot" },
              { es: "temprano / tarde", en: "early / late" }
            ]}
          ]
        },
        {
          id: "u5l2",
          title: "The calendar",
          blocks: [
            { type: "vocab", title: "Days — los días de la semana", items: [
              { es: "lunes", en: "Monday" },
              { es: "martes", en: "Tuesday" },
              { es: "miércoles", en: "Wednesday" },
              { es: "jueves", en: "Thursday" },
              { es: "viernes", en: "Friday" },
              { es: "sábado", en: "Saturday" },
              { es: "domingo", en: "Sunday" },
              { es: "el fin de semana", en: "the weekend" }
            ]},
            { type: "note", html: "Days are not capitalized. To say “on Mondays” use the article: <em>el lunes</em> (one Monday / this Monday) or <em>los lunes</em> (every Monday). There is no separate word for “on.”" },
            { type: "vocab", title: "Months and seasons", items: [
              { es: "enero, febrero, marzo", en: "January, February, March" },
              { es: "abril, mayo, junio", en: "April, May, June" },
              { es: "julio, agosto, septiembre", en: "July, August, September" },
              { es: "octubre, noviembre, diciembre", en: "October, November, December" },
              { es: "la primavera", en: "spring" },
              { es: "el verano", en: "summer" },
              { es: "el otoño", en: "autumn" },
              { es: "el invierno", en: "winter" }
            ]},
            { type: "p", html: "Dates: <em>Hoy es lunes 16 de agosto.</em> Birthdays: <em>Mi cumpleaños es el 3 de mayo.</em> The first of the month is <em>el primero</em>; other days use the number: <em>el dos, el quince</em>." },
            { type: "dialogue", title: "Making a plan", lines: [
              { who: "Iris", es: "¿A qué hora es la clase?", en: "What time is the class?", side: "a" },
              { who: "Nico", es: "Es a las diez de la mañana, los martes.", en: "It's at 10 in the morning, on Tuesdays.", side: "b" },
              { who: "Iris", es: "¿Y hoy qué día es?", en: "And what day is it today?", side: "a" },
              { who: "Nico", es: "Hoy es miércoles 12 de marzo.", en: "Today is Wednesday, March 12.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the weekdays.", pairs: [["lunes", "Monday"], ["martes", "Tuesday"], ["miércoles", "Wednesday"], ["jueves", "Thursday"], ["viernes", "Friday"], ["sábado", "Saturday"]] },
        { type: "match", q: "Match the months.", pairs: [["enero", "January"], ["marzo", "March"], ["mayo", "May"], ["julio", "July"], ["septiembre", "September"], ["diciembre", "December"]] },
        { type: "match", q: "Match the seasons.", pairs: [["la primavera", "spring"], ["el verano", "summer"], ["el otoño", "autumn"], ["el invierno", "winter"]] },
        { type: "type", q: "Sunday", answers: ["domingo", "el domingo"] },
        { type: "type", q: "the weekend", answers: ["el fin de semana"] },
        { type: "type", q: "Wednesday", answers: ["miércoles", "el miércoles"] },
        { type: "type", q: "February", answers: ["febrero"] },
        { type: "type", q: "August", answers: ["agosto"] },
        { type: "type", q: "early", answers: ["temprano"] },
        { type: "mc", q: "3:00 →", options: ["Es la tres", "Son las tres en punto", "Son la tres", "Es las tres"], answer: 1 },
        { type: "mc", q: "1:15 →", options: ["Son la una y cuarto", "Es la una y cuarto", "Es la una y quince en punto", "Son las una y cuarto"], answer: 1 },
        { type: "mc", q: "7:45 is usually:", options: ["Son las siete y cuarenta y cinco", "Son las ocho menos cuarto", "Son las siete menos cuarto", "Es la ocho menos cuarto"], answer: 1 },
        { type: "mc", q: "2:30 →", options: ["Son las dos y media", "Es la dos y media", "Son las dos y medio", "Son las tres menos media"], answer: 0 },
        { type: "mc", q: "«___ ocho de la mañana» (at)", options: ["A la", "A las", "En las", "De las"], answer: 1 },
        { type: "mc", q: "Which season follows el verano?", options: ["la primavera", "el otoño", "el invierno", "el fin de semana"], answer: 1 },
        { type: "tf", q: "Days of the week are written with a capital letter in Spanish.", answer: false, explain: "They are lower case: lunes, martes, miércoles." },
        { type: "tf", q: "«De la tarde» covers roughly midday until dark.", answer: true },
        { type: "order", q: "Build: What time is it?", words: ["es", "hora", "Qué"], answer: "Qué hora es" }
      ],
      quiz: [
        { type: "mc", q: "«¿Qué hora es?» and «¿A qué hora?» are different because:", options: ["the first asks the time now, the second asks when something happens", "they mean the same thing", "the first one is formal", "the second one asks about days"], answer: 0 },
        { type: "mc", q: "Your watch says 9:20 and the sun is up. You say:", options: ["Son las nueve y veinte de la mañana", "Es la nueve y veinte", "Son las nueve y veinte de la noche", "Son las veinte y nueve"], answer: 0 },
        { type: "mc", q: "It is 22:00. Which is right?", options: ["Son las diez de la mañana", "Son las diez de la tarde", "Son las diez de la noche", "Es la diez de la noche"], answer: 2 },
        { type: "mc", q: "It is 17:00. Which is right?", options: ["Son las cinco de la mañana", "Son las cinco de la tarde", "Son las cinco de la noche", "Es la cinco de la tarde"], answer: 1 },
        { type: "mc", q: "Which way of telling the time is wrong?", options: ["Son las una", "Es la una", "Son las dos", "Es la una y media"], answer: 0 },
        { type: "mc", q: "Your class is on Tuesdays and Thursdays. You say:", options: ["los martes y los jueves", "el martes y el jueves de semana", "los martes y los miércoles", "en martes y en jueves"], answer: 0 },
        { type: "mc", q: "Which month comes right after abril?", options: ["marzo", "mayo", "junio", "agosto"], answer: 1 },
        { type: "mc", q: "Which month comes right before noviembre?", options: ["septiembre", "octubre", "diciembre", "enero"], answer: 1 },
        { type: "mc", q: "In Spain, December to February is:", options: ["el verano", "el otoño", "el invierno", "la primavera"], answer: 2 },
        { type: "mc", q: "Which line has a spelling mistake?", options: ["El lunes por la mañana", "Los sábados y los Domingos", "En agosto", "La primavera"], answer: 1 },
        { type: "mc", q: "A friend says «Nos vemos el domingo». That is:", options: ["a weekday", "the weekend", "a month", "a season"], answer: 1 },
        { type: "tf", q: "You use «son las» for every hour except one o'clock.", answer: true },
        { type: "tf", q: "Months are written with a capital letter in Spanish.", answer: false, explain: "Lower case: enero, febrero, marzo." },
        { type: "tf", q: "«Menos cuarto» means quarter past.", answer: false, explain: "«Menos cuarto» is quarter to. «Y cuarto» is quarter past." },
        { type: "type", q: "Translate: It's a quarter past nine.", answers: ["son las nueve y cuarto"] },
        { type: "type", q: "Translate: It's Friday.", answers: ["es viernes"] },
        { type: "type", q: "Translate: See you on Saturday.", answers: ["nos vemos el sábado"] },
        { type: "type", q: "Translate: It's ten to eight.", answers: ["son las ocho menos diez"] },
        { type: "type", q: "Translate: It's one o'clock in the afternoon.", answers: ["es la una de la tarde"] },
        { type: "order", q: "Build: It's a quarter to five.", words: ["cuarto", "menos", "cinco", "las", "Son"], answer: "Son las cinco menos cuarto" }
      ]
    },
    {
      id: "u6",
      num: 6,
      title: "Mi día",
      subtitle: "Present tense, routines, and questions",
      hours: "7",
      canDo: [
        "Conjugate regular -ar, -er, and -ir verbs",
        "Describe a daily routine with reflexive verbs",
        "Ask information questions",
        "Use frequency words: always, never, sometimes"
      ],
      lessons: [
        {
          id: "u6l1",
          title: "Regular present tense",
          blocks: [
            { type: "p", html: "Take off <em>-ar / -er / -ir</em> and add the ending for the person. This is the engine of A1 Spanish." },
            { type: "table", caption: "Endings", headers: ["", "-ar hablar", "-er comer", "-ir vivir"], rows: [
              ["yo", "hablo", "como", "vivo"],
              ["tú", "hablas", "comes", "vives"],
              ["él/usted", "habla", "come", "vive"],
              ["nosotros", "hablamos", "comemos", "vivimos"],
              ["vosotros", "habláis", "coméis", "vivís"],
              ["ellos/ustedes", "hablan", "comen", "viven"]
            ]},
            { type: "vocab", title: "High-frequency regular verbs", items: [
              { es: "hablar", en: "to speak" },
              { es: "trabajar", en: "to work" },
              { es: "estudiar", en: "to study" },
              { es: "escuchar", en: "to listen" },
              { es: "mirar", en: "to watch / look at" },
              { es: "cocinar", en: "to cook" },
              { es: "comer", en: "to eat" },
              { es: "beber", en: "to drink" },
              { es: "leer", en: "to read" },
              { es: "vivir", en: "to live" },
              { es: "escribir", en: "to write" },
              { es: "abrir", en: "to open" }
            ]},
            { type: "p", html: "Negation is simple: put <em>no</em> before the verb. <em>No trabajo los domingos.</em> Questions can be just intonation: <em>¿Hablas español?</em>" }
          ]
        },
        {
          id: "u6l2",
          title: "A normal day — reflexives",
          blocks: [
            { type: "p", html: "Routine verbs often look like <em>levantarse</em>: the <em>se</em> means the action falls on yourself. The pronoun changes: me, te, se, nos, os, se — and it sits before the verb." },
            { type: "table", caption: "levantarse — to get up", headers: ["Spanish", "English"], rows: [
              ["me levanto", "I get up"],
              ["te levantas", "you get up"],
              ["se levanta", "he/she/you get(s) up"],
              ["nos levantamos", "we get up"],
              ["se levantan", "they / you all get up"]
            ]},
            { type: "vocab", title: "Routine", items: [
              { es: "despertarse", en: "to wake up" },
              { es: "levantarse", en: "to get up" },
              { es: "ducharse", en: "to take a shower" },
              { es: "vestirse", en: "to get dressed" },
              { es: "desayunar", en: "to have breakfast" },
              { es: "almorzar / comer", en: "to have lunch" },
              { es: "cenar", en: "to have dinner" },
              { es: "ir al trabajo", en: "to go to work" },
              { es: "volver a casa", en: "to go back home" },
              { es: "acostarse", en: "to go to bed" }
            ]},
            { type: "vocab", title: "How often", items: [
              { es: "siempre", en: "always" },
              { es: "todos los días", en: "every day" },
              { es: "a menudo", en: "often" },
              { es: "a veces", en: "sometimes" },
              { es: "nunca", en: "never" },
              { es: "por la mañana / tarde / noche", en: "in the morning / afternoon / evening" }
            ]},
            { type: "note", html: "<em>Nunca</em> already means never, but Spanish still likes <em>no</em> if nunca comes after the verb: <em>No bebo nunca café</em> or <em>Nunca bebo café</em>." }
          ]
        },
        {
          id: "u6l3",
          title: "Question words and key irregulars",
          blocks: [
            { type: "table", caption: "Question words", headers: ["Spanish", "English"], rows: [
              ["qué", "what"],
              ["quién / quiénes", "who"],
              ["dónde", "where"],
              ["cuándo", "when"],
              ["por qué", "why"],
              ["porque", "because"],
              ["cómo", "how"],
              ["cuál / cuáles", "which"],
              ["cuánto / cuánta / cuántos / cuántas", "how much / how many"]
            ]},
            { type: "p", html: "A few irregular verbs appear in almost every conversation. Learn these four now." },
            { type: "table", caption: "ir, hacer, querer, poder", headers: ["", "ir (go)", "hacer (do/make)", "querer (want)", "poder (can)"], rows: [
              ["yo", "voy", "hago", "quiero", "puedo"],
              ["tú", "vas", "haces", "quieres", "puedes"],
              ["él/usted", "va", "hace", "quiere", "puede"],
              ["nosotros", "vamos", "hacemos", "queremos", "podemos"],
              ["ellos/ustedes", "van", "hacen", "quieren", "pueden"]
            ]},
            { type: "dialogue", title: "A weekday", lines: [
              { who: "Sara", es: "Me levanto a las siete, desayuno y voy al trabajo.", en: "I get up at 7, have breakfast, and go to work.", side: "a" },
              { who: "Diego", es: "¿A qué hora comes?", en: "What time do you have lunch?", side: "b" },
              { who: "Sara", es: "Como a las dos. Por la noche ceno y leo un poco.", en: "I eat at 2. At night I have dinner and read a bit.", side: "a" },
              { who: "Diego", es: "Yo nunca ceno tarde. Me acuesto a las once.", en: "I never eat dinner late. I go to bed at 11.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the everyday verbs.", pairs: [["hablar", "to speak"], ["comer", "to eat"], ["vivir", "to live"], ["beber", "to drink"], ["leer", "to read"], ["escribir", "to write"]] },
        { type: "match", q: "Match the morning routine.", pairs: [["despertarse", "to wake up"], ["levantarse", "to get up"], ["ducharse", "to shower"], ["vestirse", "to get dressed"], ["desayunar", "to have breakfast"], ["acostarse", "to go to bed"]] },
        { type: "match", q: "Match the question words.", pairs: [["qué", "what"], ["quién", "who"], ["dónde", "where"], ["cuándo", "when"], ["por qué", "why"], ["cómo", "how"]] },
        { type: "type", q: "tú (hablar)", answers: ["hablas"] },
        { type: "type", q: "nosotros (comer)", answers: ["comemos"] },
        { type: "type", q: "ella (vivir)", answers: ["vive"] },
        { type: "type", q: "yo (hacer)", answers: ["hago"] },
        { type: "type", q: "yo (ir)", answers: ["voy"] },
        { type: "type", q: "tú (querer)", answers: ["quieres"] },
        { type: "type", q: "yo (poder)", answers: ["puedo"] },
        { type: "type", q: "yo (levantarse) — two words", answers: ["me levanto"] },
        { type: "type", q: "never", answers: ["nunca"] },
        { type: "type", q: "sometimes", answers: ["a veces"] },
        { type: "mc", q: "Which is the nosotros ending for -er verbs?", options: ["-amos", "-emos", "-imos", "-en"], answer: 1 },
        { type: "mc", q: "«¿___ vives?» (where)", options: ["Qué", "Dónde", "Cuándo", "Quién"], answer: 1 },
        { type: "mc", q: "«Yo ___ a las siete.» (despertarse)", options: ["despierto", "me despierto", "te despiertas", "se despierta"], answer: 1 },
        { type: "mc", q: "«Ellos ___ en Madrid.» (vivir)", options: ["vivimos", "vives", "viven", "vive"], answer: 2 },
        { type: "mc", q: "Which one means «we want»?", options: ["quiero", "quieres", "queremos", "quieren"], answer: 2 },
        { type: "tf", q: "Reflexive verbs need me, te, se or nos in front of the verb.", answer: true },
        { type: "order", q: "Build: We want to eat.", words: ["comer", "queremos", "Nosotros"], answer: "Nosotros queremos comer" }
      ],
      quiz: [
        { type: "mc", q: "You want to ask a friend why he doesn't eat meat:", options: ["¿Qué no comes carne?", "¿Por qué no comes carne?", "¿Cuándo no comes carne?", "¿Dónde no comes carne?"], answer: 1 },
        { type: "mc", q: "You get up at seven and shower at a quarter past. Which is right?", options: ["Levanto a las siete y ducho a las siete y cuarto", "Me levanto a las siete y me ducho a las siete y cuarto", "Me levanto a las siete y ducharse a las siete y cuarto", "Se levanto a las siete y se ducho a las siete y cuarto"], answer: 1 },
        { type: "mc", q: "Which sentence puts the reflexive pronoun in the wrong place?", options: ["Me levanto temprano", "Levanto me temprano", "Se acuesta tarde", "Nos duchamos por la mañana"], answer: 1 },
        { type: "mc", q: "You want to ask a friend when she works:", options: ["¿Qué trabajas?", "¿Cuándo trabajas?", "¿Quién trabajas?", "¿Cómo trabajas?"], answer: 1 },
        { type: "mc", q: "«Ella ___ la tele por la noche.» (mirar)", options: ["miro", "miras", "mira", "miran"], answer: 2 },
        { type: "mc", q: "Which sentence means «I never cook»?", options: ["Nunca cocino", "Cocino nunca", "No cocino siempre", "Siempre no cocino"], answer: 0 },
        { type: "mc", q: "Which form of hablar is wrong?", options: ["Nosotros hablamos", "Vosotros habláis", "Ellos hablan", "Yo hablas"], answer: 3 },
        { type: "mc", q: "«Hoy yo no ___ trabajar.» (poder)", options: ["puedo", "puedes", "podemos", "pueden"], answer: 0 },
        { type: "mc", q: "How do you ask a friend what she does in the morning?", options: ["¿Qué haces por la mañana?", "¿Qué hago por la mañana?", "¿Quién hace por la mañana?", "¿Cómo hace por la mañana?"], answer: 0 },
        { type: "mc", q: "«A menudo» means:", options: ["never", "often", "always", "late"], answer: 1 },
        { type: "mc", q: "Which order matches a normal day?", options: ["cenar, almorzar, desayunar", "desayunar, almorzar, cenar", "almorzar, desayunar, cenar", "desayunar, cenar, almorzar"], answer: 1 },
        { type: "tf", q: "-ar, -er and -ir verbs all share the same nosotros ending.", answer: false, explain: "They differ: hablamos, comemos, vivimos." },
        { type: "tf", q: "«Me acuesto a las once» says that you go to bed at eleven.", answer: true },
        { type: "tf", q: "Ir is irregular, so «yo voy» is right and «yo iro» is wrong.", answer: true },
        { type: "type", q: "Translate: I work every day.", answers: ["trabajo todos los días"] },
        { type: "type", q: "Translate: We live in Madrid.", answers: ["vivimos en Madrid", "nosotros vivimos en Madrid"] },
        { type: "type", q: "Translate: She reads in the evening.", answers: ["ella lee por la noche", "lee por la noche"] },
        { type: "type", q: "Translate: I go to work at eight.", answers: ["voy al trabajo a las ocho"] },
        { type: "type", q: "Translate: What do you want to drink? (tú)", answers: ["¿qué quieres beber?", "qué quieres beber"] },
        { type: "order", q: "Build: I always get up early.", words: ["temprano", "levanto", "me", "Siempre"], answer: "Siempre me levanto temprano" }
      ]
    },
    {
      id: "u7",
      num: 7,
      title: "Buen provecho",
      subtitle: "Food, likes, and the restaurant",
      hours: "6",
      canDo: [
        "Name common foods and meals",
        "Say what you like and don't like with gustar",
        "Order in a café or restaurant",
        "Use hay and querer when talking about food"
      ],
      lessons: [
        {
          id: "u7l1",
          title: "On the table",
          blocks: [
            { type: "vocab", title: "Meals and drinks", items: [
              { es: "el desayuno", en: "breakfast" },
              { es: "la comida / el almuerzo", en: "lunch" },
              { es: "la cena", en: "dinner" },
              { es: "el agua", en: "water (feminine, but el)" },
              { es: "el café / el té", en: "coffee / tea" },
              { es: "el vino / la cerveza", en: "wine / beer" },
              { es: "el zumo / el jugo", en: "juice (Spain / LatAm)" },
              { es: "el pan", en: "bread" },
              { es: "la fruta", en: "fruit" },
              { es: "la verdura", en: "vegetables" },
              { es: "la carne", en: "meat" },
              { es: "el pescado", en: "fish" },
              { es: "el pollo", en: "chicken" },
              { es: "el arroz", en: "rice" },
              { es: "la ensalada", en: "salad" },
              { es: "el queso", en: "cheese" }
            ]},
            { type: "note", html: "<em>El agua</em> is feminine: <em>el agua fría, las aguas</em>. Spanish uses <em>el</em> before stressed á- to avoid the double-a sound." }
          ]
        },
        {
          id: "u7l2",
          title: "Me gusta — it is pleasing to me",
          blocks: [
            { type: "p", html: "<em>Gustar</em> is backwards from English. The thing you like is the subject. You are the one it is pleasing to." },
            { type: "table", caption: "The gustar pattern", headers: ["If you like…", "Use", "Example"], rows: [
              ["one thing / an activity", "gusta", "Me gusta el café. Me gusta cocinar."],
              ["several things", "gustan", "Me gustan las manzanas."]
            ]},
            { type: "table", caption: "Who likes it", headers: ["Person", "Phrase"], rows: [
              ["I", "me gusta(n)"],
              ["you (tú)", "te gusta(n)"],
              ["he/she/you formal", "le gusta(n)"],
              ["we", "nos gusta(n)"],
              ["they / you all", "les gusta(n)"]
            ]},
            { type: "p", html: "To make the person crystal-clear, add <em>a mí, a ti, a él, a Ana, a nosotros</em>: <em>A mí me gusta el té, pero a Juan le gusta el café.</em> Negate with <em>no</em>: <em>No me gusta la carne.</em> Stronger: <em>Me encanta / no me gusta nada.</em>" },
            { type: "dialogue", title: "Likes", lines: [
              { who: "Olga", es: "¿Te gusta la comida mexicana?", en: "Do you like Mexican food?", side: "a" },
              { who: "Ben", es: "Sí, me encanta. Me gustan los tacos.", en: "Yes, I love it. I like tacos.", side: "b" },
              { who: "Olga", es: "A mí no me gusta el picante.", en: "I don't like spicy food.", side: "a" },
              { who: "Ben", es: "Pues a mí me gusta mucho.", en: "Well, I like it a lot.", side: "b" }
            ]}
          ]
        },
        {
          id: "u7l3",
          title: "In a restaurant",
          blocks: [
            { type: "vocab", title: "Ordering", items: [
              { es: "la carta / el menú", en: "the menu / set menu" },
              { es: "el camarero / la camarera", en: "waiter / waitress" },
              { es: "quiero…", en: "I want…" },
              { es: "para mí…", en: "for me…" },
              { es: "para beber", en: "to drink" },
              { es: "la cuenta, por favor", en: "the bill, please" },
              { es: "soy vegetariano / vegetariana", en: "I am vegetarian" },
              { es: "sin hielo", en: "without ice" },
              { es: "está rico / riquísimo", en: "it's tasty / delicious" },
              { es: "buen provecho", en: "enjoy your meal" }
            ]},
            { type: "dialogue", title: "At the café", lines: [
              { who: "Camarero", es: "¡Hola! ¿Qué van a tomar?", en: "Hi! What are you going to have?", side: "a" },
              { who: "Tú", es: "Para mí, un café con leche y una tostada.", en: "For me, a coffee with milk and toast.", side: "b" },
              { who: "Amiga", es: "Yo quiero un zumo de naranja. ¿Hay croissants?", en: "I want orange juice. Are there croissants?", side: "a" },
              { who: "Camarero", es: "Sí, hay. ¿Algo más?", en: "Yes, there are. Anything else?", side: "a" },
              { who: "Tú", es: "No, nada más. La cuenta, por favor.", en: "No, nothing else. The bill, please.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the food.", pairs: [["el pan", "bread"], ["la carne", "meat"], ["el pescado", "fish"], ["el pollo", "chicken"], ["el queso", "cheese"], ["el arroz", "rice"]] },
        { type: "match", q: "Match the drinks.", pairs: [["el agua", "water"], ["el vino", "wine"], ["la cerveza", "beer"], ["el zumo", "juice"], ["el café", "coffee"], ["el té", "tea"]] },
        { type: "match", q: "Match these restaurant words.", pairs: [["el desayuno", "breakfast"], ["la cena", "dinner"], ["la ensalada", "salad"], ["la fruta", "fruit"], ["la verdura", "vegetables"], ["la carta", "the menu"]] },
        { type: "type", q: "chicken (with article)", answers: ["el pollo"] },
        { type: "type", q: "the bill", answers: ["la cuenta"] },
        { type: "type", q: "without ice", answers: ["sin hielo"] },
        { type: "type", q: "I'm vegetarian. (woman)", answers: ["soy vegetariana"] },
        { type: "type", q: "Enjoy your meal!", answers: ["buen provecho"] },
        { type: "type", q: "the waitress (with article)", answers: ["la camarera"] },
        { type: "mc", q: "«Me ___ el chocolate.»", options: ["gusta", "gustan", "gusto", "gustas"], answer: 0 },
        { type: "mc", q: "«Me ___ las verduras.»", options: ["gusta", "gustan", "gusto", "gustamos"], answer: 1 },
        { type: "mc", q: "«___ gusta el café.» (to us)", options: ["Me", "Te", "Nos", "Les"], answer: 2 },
        { type: "mc", q: "Which article goes with agua?", options: ["la", "el", "las", "una"], answer: 1 },
        { type: "mc", q: "«¿Qué ___ para beber?» (querer, tú)", options: ["quiero", "quieres", "queremos", "quieren"], answer: 1 },
        { type: "mc", q: "You use gustan when the thing you like is:", options: ["singular", "plural", "masculine", "feminine"], answer: 1 },
        { type: "tf", q: "In «me gusta el pan», el pan is the subject: the bread pleases me.", answer: true },
        { type: "tf", q: "«El agua» is a masculine noun.", answer: false, explain: "It is feminine but takes el: el agua fría, las aguas." },
        { type: "order", q: "Build: I want a beer.", words: ["cerveza", "una", "Quiero"], answer: "Quiero una cerveza" }
      ],
      quiz: [
        { type: "mc", q: "The waiter is taking orders and you want the fish. You say:", options: ["Para mí, el pescado", "Por mí, el pescado", "A mí, el pescado", "Me gusta el pescado, por favor"], answer: 0 },
        { type: "mc", q: "You have finished eating and want to pay. You say:", options: ["La carta, por favor", "La cuenta, por favor", "Buen provecho", "Para beber, por favor"], answer: 1 },
        { type: "mc", q: "Which gustar sentence is wrong?", options: ["Me gusta el café", "Me gustan el café", "Me gustan los cafés", "No me gusta el té"], answer: 1 },
        { type: "mc", q: "Your friend Pedro likes fish. You say:", options: ["A él le gusta el pescado", "A él me gusta el pescado", "A él le gustan el pescado", "Él gusta el pescado"], answer: 0 },
        { type: "mc", q: "«A nosotros ___ gusta el vino.»", options: ["me", "te", "nos", "les"], answer: 2 },
        { type: "mc", q: "You eat no meat at all. You tell the waiter:", options: ["No quiero carne hoy", "Soy vegetariano, no como carne", "No me gusta la carne", "Sin carne, gracias"], answer: 1 },
        { type: "mc", q: "You want water and Spanish bars serve it with ice. You say:", options: ["Un agua sin hielo, por favor", "Un agua con hielo, por favor", "Una agua sin hielo, por favor", "El agua sin hielo, gracias"], answer: 0 },
        { type: "mc", q: "The food is really good. You say:", options: ["Está riquísimo", "Es riquísimo", "Buen provecho", "Soy rico"], answer: 0 },
        { type: "mc", q: "Which sentence uses the wrong article?", options: ["Quiero un café", "Quiero una cerveza", "Quiero el agua fría", "Quiero la agua"], answer: 3 },
        { type: "mc", q: "«Te gustan las verduras» is said to:", options: ["a friend", "a group", "a stranger you call usted", "yourself"], answer: 0 },
        { type: "mc", q: "Which one is a meal, not a drink?", options: ["el zumo", "la cena", "el té", "la cerveza"], answer: 1 },
        { type: "tf", q: "Gustar agrees with the thing that is liked, not with the person who likes it.", answer: true },
        { type: "tf", q: "«Me gusta las verduras» is correct Spanish.", answer: false, explain: "Verduras is plural, so it has to be «me gustan las verduras»." },
        { type: "tf", q: "In a restaurant, «la carta» is the menu you order from.", answer: true },
        { type: "type", q: "Translate: I like coffee.", answers: ["me gusta el café"] },
        { type: "type", q: "Translate: I don't like meat.", answers: ["no me gusta la carne"] },
        { type: "type", q: "Translate: We like fish.", answers: ["nos gusta el pescado"] },
        { type: "type", q: "Translate: I want a salad, please.", answers: ["quiero una ensalada, por favor"] },
        { type: "type", q: "Translate: Do you like wine? (tú)", answers: ["¿te gusta el vino?", "te gusta el vino"] },
        { type: "order", q: "Build: I don't like beer.", words: ["cerveza", "la", "gusta", "me", "No"], answer: "No me gusta la cerveza" }
      ]
    },
    {
      id: "u8",
      num: 8,
      title: "En la ciudad",
      subtitle: "Places, location, and getting around",
      hours: "6",
      canDo: [
        "Name places in town",
        "Say where something is with estar and prepositions",
        "Ask for and understand simple directions",
        "Use ir a + place and hay vs está"
      ],
      lessons: [
        {
          id: "u8l1",
          title: "Places around town",
          blocks: [
            { type: "vocab", title: "Sitios", items: [
              { es: "la calle", en: "street" },
              { es: "la plaza", en: "square" },
              { es: "el centro", en: "center / downtown" },
              { es: "la estación", en: "station" },
              { es: "el aeropuerto", en: "airport" },
              { es: "el hotel", en: "hotel" },
              { es: "el banco", en: "bank" },
              { es: "el supermercado", en: "supermarket" },
              { es: "la farmacia", en: "pharmacy" },
              { es: "el hospital", en: "hospital" },
              { es: "el museo", en: "museum" },
              { es: "el parque", en: "park" },
              { es: "el restaurante", en: "restaurant" },
              { es: "la tienda", en: "shop" },
              { es: "el baño / los servicios", en: "bathroom / restrooms" }
            ]},
            { type: "p", html: "<em>Ir</em> + <em>a</em> + place: <em>Voy al banco. Vamos a la estación.</em> <em>a + el</em> becomes <em>al</em>. <em>a + la</em> stays <em>a la</em>." }
          ]
        },
        {
          id: "u8l2",
          title: "Where is it?",
          blocks: [
            { type: "p", html: "Use <em>hay</em> when you introduce something (“there is a bank”). Use <em>está</em> when you locate a known thing (“the bank is on the left”)." },
            { type: "vocab", title: "Prepositions", items: [
              { es: "en", en: "in / on / at" },
              { es: "a la derecha", en: "on the right" },
              { es: "a la izquierda", en: "on the left" },
              { es: "todo recto / todo derecho", en: "straight ahead" },
              { es: "al lado de", en: "next to" },
              { es: "cerca de / lejos de", en: "near / far from" },
              { es: "delante de / detrás de", en: "in front of / behind" },
              { es: "entre", en: "between" },
              { es: "aquí / allí", en: "here / there" },
              { es: "¿cómo llego a…?", en: "how do I get to…?" }
            ]},
            { type: "dialogue", title: "Lost tourist", lines: [
              { who: "Tú", es: "Perdone, ¿dónde está el museo?", en: "Excuse me, where is the museum?", side: "b" },
              { who: "Local", es: "Está cerca. Siga todo recto y luego a la izquierda.", en: "It's nearby. Go straight and then left.", side: "a" },
              { who: "Tú", es: "¿Hay una farmacia por aquí?", en: "Is there a pharmacy around here?", side: "b" },
              { who: "Local", es: "Sí, hay una al lado del banco.", en: "Yes, there's one next to the bank.", side: "a" },
              { who: "Tú", es: "Muchas gracias.", en: "Thank you very much.", side: "b" }
            ]},
            { type: "note", html: "On the street with strangers, <em>perdone</em> and <em>siga</em> (usted commands) sound natural. With a friend: <em>perdona, sigue todo recto</em>." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match these places.", pairs: [["la estación", "station"], ["el aeropuerto", "airport"], ["la farmacia", "pharmacy"], ["el banco", "bank"], ["el museo", "museum"], ["el parque", "park"]] },
        { type: "match", q: "Match the rest of the town.", pairs: [["la calle", "street"], ["la plaza", "square"], ["el centro", "the centre"], ["la tienda", "shop"], ["el supermercado", "supermarket"], ["el hospital", "hospital"]] },
        { type: "match", q: "Match the directions.", pairs: [["a la derecha", "on the right"], ["a la izquierda", "on the left"], ["todo recto", "straight on"], ["al lado de", "next to"], ["cerca de", "near"], ["lejos de", "far from"]] },
        { type: "type", q: "on the left", answers: ["a la izquierda"] },
        { type: "type", q: "pharmacy (with article)", answers: ["la farmacia"] },
        { type: "type", q: "the toilets (with article)", answers: ["los servicios", "el baño"] },
        { type: "type", q: "here", answers: ["aquí"] },
        { type: "type", q: "between", answers: ["entre"] },
        { type: "type", q: "behind", answers: ["detrás de", "detrás"] },
        { type: "mc", q: "«Voy ___ museo.»", options: ["a el", "al", "a la", "en el"], answer: 1 },
        { type: "mc", q: "«Voy ___ estación.»", options: ["al", "a la", "a el", "en la"], answer: 1 },
        { type: "mc", q: "«___ un parque en el centro.» (there is)", options: ["Está", "Hay", "Es", "Son"], answer: 1 },
        { type: "mc", q: "You already know the hotel. «El hotel ___ cerca.»", options: ["hay", "es", "está", "tiene"], answer: 2 },
        { type: "mc", q: "«El banco está ___ del supermercado.» (next to)", options: ["cerca", "al lado", "lejos", "entre"], answer: 1 },
        { type: "mc", q: "«La farmacia está ___ del hospital.» (in front of)", options: ["detrás", "delante", "entre", "al lado"], answer: 1 },
        { type: "tf", q: "Hay introduces something new; estar says where a known thing is.", answer: true },
        { type: "tf", q: "«Hay el museo a la derecha» is the natural way to locate the museum.", answer: false, explain: "Use estar for a known place: «El museo está a la derecha». Hay never takes el or la." },
        { type: "order", q: "Build: There is a museum in the centre.", words: ["centro", "el", "en", "museo", "un", "Hay"], answer: "Hay un museo en el centro" }
      ],
      quiz: [
        { type: "mc", q: "You ask for directions and hear «Todo recto y a la derecha». You should:", options: ["turn left straight away", "go straight on, then turn right", "go back", "cross the square"], answer: 1 },
        { type: "mc", q: "You have a headache and need medicine. You look for:", options: ["el banco", "la farmacia", "la estación", "el museo"], answer: 1 },
        { type: "mc", q: "You need to catch a train. You go to:", options: ["el aeropuerto", "la estación", "la plaza", "la tienda"], answer: 1 },
        { type: "mc", q: "You need cash. You look for:", options: ["el banco", "el hospital", "el parque", "el restaurante"], answer: 0 },
        { type: "mc", q: "Which sentence mixes up hay and estar?", options: ["Hay un banco en la calle", "El banco está en la calle", "Hay el banco en la calle", "El banco está cerca"], answer: 2 },
        { type: "mc", q: "«Voy ___ aeropuerto.»", options: ["a la", "al", "a el", "en el"], answer: 1 },
        { type: "mc", q: "The restaurant sits with the hotel on one side and the bank on the other:", options: ["El restaurante está entre el hotel y el banco", "El restaurante está al lado el hotel y el banco", "El restaurante está delante del hotel y el banco", "Hay el restaurante entre el hotel y el banco"], answer: 0 },
        { type: "mc", q: "Which one says «far from the centre»?", options: ["cerca del centro", "lejos del centro", "al lado del centro", "en el centro"], answer: 1 },
        { type: "mc", q: "You are telling someone for the first time what is in the square:", options: ["Están dos restaurantes en la plaza", "Hay dos restaurantes en la plaza", "Son dos restaurantes en la plaza", "Hay los dos restaurantes en la plaza"], answer: 1 },
        { type: "mc", q: "«Allí» means:", options: ["here", "over there", "next to", "straight on"], answer: 1 },
        { type: "mc", q: "You want to know the way to the hotel. You ask:", options: ["¿Dónde va el hotel?", "¿Cómo llego al hotel?", "¿Hay el hotel?", "¿Cómo está el hotel?"], answer: 1 },
        { type: "tf", q: "The preposition a joins with el into al: «voy al parque».", answer: true },
        { type: "tf", q: "«A la derecha» and «a la izquierda» mean the same thing.", answer: false, explain: "Derecha is right, izquierda is left." },
        { type: "tf", q: "To say where a named place is, you use estar and not hay.", answer: true },
        { type: "type", q: "Translate: I am going to the park.", answers: ["voy al parque"] },
        { type: "type", q: "Translate: There is a supermarket near here.", answers: ["hay un supermercado cerca de aquí", "hay un supermercado cerca"] },
        { type: "type", q: "Translate: The pharmacy is on the right.", answers: ["la farmacia está a la derecha"] },
        { type: "type", q: "Translate: Where are the toilets?", answers: ["¿dónde están los servicios?", "dónde están los servicios", "dónde está el baño"] },
        { type: "type", q: "Translate: The hotel is next to the station.", answers: ["el hotel está al lado de la estación"] },
        { type: "order", q: "Build: How do I get to the centre?", words: ["centro", "al", "llego", "Cómo"], answer: "Cómo llego al centro" }
      ]
    },
    {
      id: "u9",
      num: 9,
      title: "De compras",
      subtitle: "Clothes, prices, and this / that",
      hours: "5–6",
      canDo: [
        "Shop for clothes and name colors and sizes",
        "Ask prices and understand numbers to 1,000",
        "Use este / esta / estos and quiero / prefiero",
        "Make a simple complaint or exchange request"
      ],
      lessons: [
        {
          id: "u9l1",
          title: "Clothes and numbers that buy things",
          blocks: [
            { type: "vocab", title: "La ropa", items: [
              { es: "la camisa", en: "shirt" },
              { es: "la camiseta", en: "T-shirt" },
              { es: "los pantalones", en: "trousers" },
              { es: "la falda", en: "skirt" },
              { es: "el vestido", en: "dress" },
              { es: "el abrigo", en: "coat" },
              { es: "los zapatos", en: "shoes" },
              { es: "el sombrero", en: "hat" },
              { es: "la talla", en: "size" },
              { es: "grande / mediano / pequeño", en: "large / medium / small" }
            ]},
            { type: "table", caption: "Bigger numbers", headers: ["n", "Spanish"], rows: [
              ["200", "doscientos / doscientas"],
              ["300", "trescientos"],
              ["400", "cuatrocientos"],
              ["500", "quinientos"],
              ["600", "seiscientos"],
              ["700", "setecientos"],
              ["800", "ochocientos"],
              ["900", "novecientos"],
              ["1.000", "mil"],
              ["25 €", "veinticinco euros"]
            ]},
            { type: "p", html: "Hundreds agree with a feminine noun: <em>doscientas camisas</em>. <em>Cien</em> before a noun; <em>ciento</em> in 101–199: <em>cien euros, ciento veinte</em>." }
          ]
        },
        {
          id: "u9l2",
          title: "This one, that one — shopping talk",
          blocks: [
            { type: "table", caption: "Demonstratives", headers: ["", "masc.", "fem.", "plural"], rows: [
              ["this (near me)", "este", "esta", "estos / estas"],
              ["that (near you)", "ese", "esa", "esos / esas"],
              ["that over there", "aquel", "aquella", "aquellos / aquellas"]
            ]},
            { type: "vocab", title: "In the shop", items: [
              { es: "¿cuánto cuesta?", en: "how much does it cost?" },
              { es: "¿cuánto cuestan?", en: "how much do they cost?" },
              { es: "es muy caro / cara", en: "it's very expensive" },
              { es: "es barato / barata", en: "it's cheap" },
              { es: "¿tiene una talla más grande?", en: "do you have a bigger size?" },
              { es: "me lo llevo", en: "I'll take it" },
              { es: "solo miro", en: "I'm just looking" },
              { es: "prefiero este", en: "I prefer this one" },
              { es: "¿puedo pagar con tarjeta?", en: "can I pay by card?" },
              { es: "en efectivo", en: "in cash" }
            ]},
            { type: "dialogue", title: "Buying a shirt", lines: [
              { who: "Tú", es: "Hola, ¿cuánto cuesta esta camisa?", en: "Hi, how much is this shirt?", side: "b" },
              { who: "Dependienta", es: "Cuesta treinta euros. ¿Qué talla quiere?", en: "It costs 30 euros. What size would you like?", side: "a" },
              { who: "Tú", es: "Una talla mediana. Prefiero el color azul.", en: "A medium. I prefer the blue color.", side: "b" },
              { who: "Dependienta", es: "Aquí tiene. ¿Paga con tarjeta?", en: "Here you are. Are you paying by card?", side: "a" },
              { who: "Tú", es: "Sí. Me la llevo. Gracias.", en: "Yes. I'll take it. Thanks.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the clothes.", pairs: [["la camisa", "shirt"], ["la camiseta", "t-shirt"], ["los pantalones", "trousers"], ["la falda", "skirt"], ["el vestido", "dress"], ["el abrigo", "coat"]] },
        { type: "match", q: "Match these shopping words.", pairs: [["los zapatos", "shoes"], ["el sombrero", "hat"], ["la talla", "size"], ["caro", "expensive"], ["barato", "cheap"], ["en efectivo", "in cash"]] },
        { type: "match", q: "Match the numbers.", pairs: [["cien", "100"], ["doscientos", "200"], ["quinientos", "500"], ["setecientos", "700"], ["novecientos", "900"], ["mil", "1000"]] },
        { type: "type", q: "shoes (with article)", answers: ["los zapatos"] },
        { type: "type", q: "Write 500 (masculine).", answers: ["quinientos"] },
        { type: "type", q: "Write 1000.", answers: ["mil"] },
        { type: "type", q: "I'll take it.", answers: ["me lo llevo"] },
        { type: "type", q: "I'm just looking.", answers: ["solo miro"] },
        { type: "type", q: "in cash", answers: ["en efectivo"] },
        { type: "mc", q: "«¿Cuánto ___ esta falda?»", options: ["cuesta", "cuestan", "cuestas", "costar"], answer: 0 },
        { type: "mc", q: "«¿Cuánto ___ los zapatos?»", options: ["cuesta", "cuestan", "cuestas", "costar"], answer: 1 },
        { type: "mc", q: "«___ camisa» (this one, here)", options: ["Este", "Esta", "Estos", "Esas"], answer: 1 },
        { type: "mc", q: "«___ zapatos» (these, here)", options: ["Esta", "Estas", "Estos", "Ese"], answer: 2 },
        { type: "mc", q: "«___ vestido» (that one, a bit further away)", options: ["Este", "Ese", "Esta", "Esos"], answer: 1 },
        { type: "mc", q: "Which is 300?", options: ["tres cientos", "trescientos", "trecientos", "tres cien"], answer: 1 },
        { type: "tf", q: "Cuesta is for one item, cuestan for more than one.", answer: true },
        { type: "tf", q: "In 150, cien becomes ciento: «ciento cincuenta».", answer: true },
        { type: "order", q: "Build: Can I pay by card?", words: ["tarjeta", "con", "pagar", "Puedo"], answer: "Puedo pagar con tarjeta" }
      ],
      quiz: [
        { type: "mc", q: "You like the shirt but it is too tight. You ask:", options: ["¿Tiene una talla más grande?", "¿Cuánto cuesta?", "¿Puedo pagar con tarjeta?", "Me lo llevo"], answer: 0 },
        { type: "mc", q: "The assistant offers help but you are only browsing. You say:", options: ["Me lo llevo", "Solo miro, gracias", "Es muy caro", "En efectivo"], answer: 1 },
        { type: "mc", q: "You have decided to buy the dress. You say:", options: ["Solo miro", "Prefiero este", "Me lo llevo", "Es barato"], answer: 2 },
        { type: "mc", q: "Which question is wrong?", options: ["¿Cuánto cuesta la camisa?", "¿Cuánto cuestan los pantalones?", "¿Cuánto cuestan la falda?", "¿Cuánto cuesta el abrigo?"], answer: 2 },
        { type: "mc", q: "The price tag says 250 €. You read:", options: ["doscientos cincuenta euros", "dos cientos cincuenta euros", "doscientos y cincuenta euros", "dos cincuenta euros"], answer: 0 },
        { type: "mc", q: "You have no cash on you, only a card. You ask:", options: ["¿Puedo pagar en efectivo?", "¿Puedo pagar con tarjeta?", "¿Cuánto cuesta?", "¿Tiene una talla más grande?"], answer: 1 },
        { type: "mc", q: "Which one has a demonstrative mistake?", options: ["Esta camisa", "Este camisa", "Estos zapatos", "Esa falda"], answer: 1 },
        { type: "mc", q: "A t-shirt costs 8 euros. You say:", options: ["Es muy caro", "Es muy barata", "Son muy caros", "Es muy cara"], answer: 1 },
        { type: "mc", q: "«Aquella tienda» means:", options: ["this shop here", "that shop over there", "the shop next to me", "my shop"], answer: 1 },
        { type: "mc", q: "Which one is 900?", options: ["nuevecientos", "novecientos", "nuevocientos", "nueve cien"], answer: 1 },
        { type: "mc", q: "In Spanish, «los pantalones» is:", options: ["plural, for one piece of clothing", "singular", "always two items", "a shirt"], answer: 0 },
        { type: "tf", q: "Talking about la camisa, «es muy cara» is the correct form.", answer: true },
        { type: "tf", q: "«Me lo llevo» means «I'm just looking».", answer: false, explain: "It means «I'll take it». «Solo miro» is «I'm just looking»." },
        { type: "tf", q: "From 200 up, the hundreds agree with a feminine noun: «doscientas camisetas».", answer: true },
        { type: "type", q: "Translate: How much does this shirt cost?", answers: ["¿cuánto cuesta esta camisa?", "cuánto cuesta esta camisa"] },
        { type: "type", q: "Translate: The dress is very expensive.", answers: ["el vestido es muy caro"] },
        { type: "type", q: "Translate: I prefer this one.", answers: ["prefiero este"] },
        { type: "type", q: "Translate: I'll take these shoes.", answers: ["me llevo estos zapatos"] },
        { type: "type", q: "Translate: The trousers are cheap.", answers: ["los pantalones son baratos"] },
        { type: "order", q: "Build: How much do the shoes cost?", words: ["zapatos", "los", "cuestan", "Cuánto"], answer: "Cuánto cuestan los zapatos" }
      ]
    },
    {
      id: "u10",
      num: 10,
      title: "Tiempo libre",
      subtitle: "Hobbies, weather, and future plans",
      hours: "6",
      canDo: [
        "Talk about free time and hobbies",
        "Describe the weather",
        "Make plans with ir a + infinitive",
        "Put A1 Spanish together in a short conversation"
      ],
      lessons: [
        {
          id: "u10l1",
          title: "What do you do for fun?",
          blocks: [
            { type: "vocab", title: "Hobbies", items: [
              { es: "el tiempo libre", en: "free time" },
              { es: "ver la tele", en: "to watch TV" },
              { es: "escuchar música", en: "to listen to music" },
              { es: "leer", en: "to read" },
              { es: "viajar", en: "to travel" },
              { es: "bailar", en: "to dance" },
              { es: "cocinar", en: "to cook" },
              { es: "hacer deporte", en: "to do sport" },
              { es: "correr", en: "to run" },
              { es: "nadar", en: "to swim" },
              { es: "pasear", en: "to go for a walk" },
              { es: "jugar al fútbol", en: "to play football" },
              { es: "ir al cine", en: "to go to the cinema" }
            ]},
            { type: "note", html: "<em>Jugar</em> is irregular: <em>juego, juegas, juega, jugamos, juegan</em>. Use <em>jugar a</em> + sport: <em>juego al tenis</em>. Use <em>tocar</em> for instruments: <em>toco la guitarra</em>." }
          ]
        },
        {
          id: "u10l2",
          title: "What's the weather like?",
          blocks: [
            { type: "p", html: "Weather often uses <em>hace</em> (it makes) or <em>está</em> / <em>hay</em>." },
            { type: "vocab", title: "El tiempo", items: [
              { es: "¿qué tiempo hace?", en: "what's the weather like?" },
              { es: "hace sol", en: "it's sunny" },
              { es: "hace calor", en: "it's hot" },
              { es: "hace frío", en: "it's cold" },
              { es: "hace viento", en: "it's windy" },
              { es: "hace buen / mal tiempo", en: "the weather is good / bad" },
              { es: "está nublado", en: "it's cloudy" },
              { es: "hay niebla", en: "there's fog" },
              { es: "llueve", en: "it rains / it's raining" },
              { es: "nieva", en: "it snows" }
            ]}
          ]
        },
        {
          id: "u10l3",
          title: "I'm going to… — the A1 future",
          blocks: [
            { type: "p", html: "You do not need the fancy future tense yet. <em>Ir a + infinitive</em> covers plans: <em>Voy a estudiar. Vamos a comer. ¿Qué vas a hacer el sábado?</em>" },
            { type: "dialogue", title: "Weekend plans", lines: [
              { who: "Lara", es: "¿Qué vas a hacer el sábado?", en: "What are you going to do on Saturday?", side: "a" },
              { who: "Paz", es: "Por la mañana voy a correr. Por la tarde vamos al cine.", en: "In the morning I'm going to run. In the afternoon we're going to the cinema.", side: "b" },
              { who: "Lara", es: "¿Qué tiempo va a hacer?", en: "What's the weather going to be like?", side: "a" },
              { who: "Paz", es: "Va a hacer sol. ¿Quieres venir?", en: "It's going to be sunny. Do you want to come?", side: "b" },
              { who: "Lara", es: "Sí, me encanta. Hasta el sábado.", en: "Yes, I'd love to. See you Saturday.", side: "a" }
            ]},
            { type: "p", html: "If you can do this conversation slowly — greet, say who you are, talk about family, routine, food, city, shopping, and weekend plans — you are operating at A1. The exam checks exactly that." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the free-time verbs.", pairs: [["bailar", "to dance"], ["nadar", "to swim"], ["correr", "to run"], ["viajar", "to travel"], ["pasear", "to go for a walk"], ["cocinar", "to cook"]] },
        { type: "match", q: "Match these free-time phrases.", pairs: [["ver la tele", "to watch TV"], ["escuchar música", "to listen to music"], ["hacer deporte", "to do sport"], ["jugar al fútbol", "to play football"], ["ir al cine", "to go to the cinema"], ["el tiempo libre", "free time"]] },
        { type: "match", q: "Match the weather.", pairs: [["hace sol", "it's sunny"], ["hace frío", "it's cold"], ["hace viento", "it's windy"], ["está nublado", "it's cloudy"], ["llueve", "it's raining"], ["nieva", "it's snowing"]] },
        { type: "type", q: "it's hot", answers: ["hace calor"] },
        { type: "type", q: "there's fog", answers: ["hay niebla"] },
        { type: "type", q: "the weather is bad", answers: ["hace mal tiempo"] },
        { type: "type", q: "I'm going to eat. (ir a + verb)", answers: ["voy a comer"] },
        { type: "type", q: "We're going to travel. (ir a + verb)", answers: ["vamos a viajar"] },
        { type: "type", q: "She's going to dance. (ir a + verb)", answers: ["va a bailar", "ella va a bailar"] },
        { type: "mc", q: "«Yo ___ al tenis los sábados.» (jugar)", options: ["jugo", "juego", "juegas", "jugamos"], answer: 1 },
        { type: "mc", q: "«¿Qué tiempo ___?»", options: ["es", "está", "hace", "hay"], answer: 2 },
        { type: "mc", q: "«Mañana ___ a nadar.» (yo)", options: ["voy", "vas", "va", "vamos"], answer: 0 },
        { type: "mc", q: "«Ellos ___ a cenar en casa.»", options: ["voy", "vais", "van", "vamos"], answer: 2 },
        { type: "mc", q: "Why does «está nublado» use estar?", options: ["it is a lasting quality", "it describes how the sky is right now", "nublado is a noun", "estar is used for all weather"], answer: 1 },
        { type: "mc", q: "Which one needs no pronoun at all?", options: ["llueve", "corro", "bailamos", "juegas"], answer: 0 },
        { type: "tf", q: "«Hace sol» uses hacer, not ser.", answer: true },
        { type: "tf", q: "For plans in the near future, Spanish uses ir a + the plain verb.", answer: true },
        { type: "order", q: "Build: I'm going to the cinema.", words: ["cine", "al", "Voy"], answer: "Voy al cine" }
      ],
      quiz: [
        { type: "mc", q: "You look out of the window and see rain. You say:", options: ["Hace lluvia", "Llueve", "Está lluvia", "Es lluvia"], answer: 1 },
        { type: "mc", q: "It is 3 degrees outside. You say:", options: ["Hace calor", "Hace frío", "Hace sol", "Tengo frío el tiempo"], answer: 1 },
        { type: "mc", q: "Which weather sentence is wrong?", options: ["Hace sol", "Es sol", "Está nublado", "Hace viento"], answer: 1 },
        { type: "mc", q: "You plan to swim tomorrow. You say:", options: ["Mañana nado a ir", "Mañana voy a nadar", "Mañana voy nadar", "Mañana va a nadar"], answer: 1 },
        { type: "mc", q: "Which sentence is missing the a?", options: ["Voy a comer", "Vas a bailar", "Va a correr", "Voy comer"], answer: 3 },
        { type: "mc", q: "«Nosotros ___ a viajar en agosto.»", options: ["voy", "vas", "vamos", "van"], answer: 2 },
        { type: "mc", q: "«Me gusta hacer deporte» means:", options: ["I do sport every day", "I like doing sport", "I am going to do sport", "I have to do sport"], answer: 1 },
        { type: "mc", q: "Which one is not about the weather?", options: ["hay niebla", "hace viento", "jugar al fútbol", "nieva"], answer: 2 },
        { type: "mc", q: "«Vamos a ver la tele» talks about:", options: ["what we usually do", "what we are going to do", "what we did", "what we like"], answer: 1 },
        { type: "mc", q: "In «juego al fútbol», the verb jugar:", options: ["is fully regular", "changes its stem to jue-", "is really jugir", "never changes"], answer: 1 },
        { type: "mc", q: "A friend asks «¿Qué haces en tu tiempo libre?» They want to know:", options: ["your job", "your hobbies", "the weather", "your plans for tomorrow"], answer: 1 },
        { type: "tf", q: "Llueve and nieva work on their own, with no pronoun in front.", answer: true },
        { type: "tf", q: "«Hace buen tiempo» means the weather is bad.", answer: false, explain: "It means the weather is good. Bad weather is «hace mal tiempo»." },
        { type: "tf", q: "«Voy a jugar» is a plan; «juego» is what you normally do.", answer: true },
        { type: "type", q: "Translate: What's the weather like?", answers: ["¿qué tiempo hace?", "qué tiempo hace"] },
        { type: "type", q: "Translate: We are going to eat at eight.", answers: ["vamos a comer a las ocho"] },
        { type: "type", q: "Translate: What are you going to do on Saturday? (tú)", answers: ["¿qué vas a hacer el sábado?", "qué vas a hacer el sábado"] },
        { type: "type", q: "Translate: I like listening to music.", answers: ["me gusta escuchar música"] },
        { type: "type", q: "Translate: It's cloudy and it's cold.", answers: ["está nublado y hace frío"] },
        { type: "order", q: "Build: I'm going to play football on Sunday.", words: ["domingo", "el", "fútbol", "al", "jugar", "a", "Voy"], answer: "Voy a jugar al fútbol el domingo" }
      ]
    }
  ],
  exam: [
    { type: "mc", q: "You meet a classmate at 10:00. You say:", options: ["Buenas noches", "Buenos días", "Hasta mañana", "La cuenta"], answer: 1, topic: "Greetings" },
    { type: "type", q: "Write: My name is Laura.", answers: ["me llamo laura"], topic: "Identity" },
    { type: "type", q: "Translate: I am from the United Kingdom.", answers: ["soy del Reino Unido"], topic: "Ser" },
    { type: "mc", q: "You are talking to two clients you call ustedes: «¿De dónde ___ ustedes?»", options: ["sois", "son", "somos", "es"], answer: 1, topic: "Ser" },
    { type: "type", q: "Write 18 in Spanish.", answers: ["dieciocho"], topic: "Numbers" },
    { type: "type", q: "Write 73 in Spanish.", answers: ["setenta y tres"], topic: "Numbers" },
    { type: "mc", q: "«___ hermana tiene 15 años.»", options: ["Mi", "Mis", "Tu s", "Nuestros"], answer: 0, topic: "Family" },
    { type: "type", q: "Ask a friend how old they are.", answers: ["¿cuántos años tienes?", "cuántos años tienes"], topic: "Tener" },
    { type: "mc", q: "«___ un parque cerca de mi casa.»", options: ["Está", "Hay", "Es", "Son"], answer: 1, topic: "Hay" },
    { type: "mc", q: "Personality: «Carlos ___ muy simpático.»", options: ["está", "es", "hay", "tiene"], answer: 1, topic: "Ser vs estar" },
    { type: "mc", q: "Right now: «Carlos ___ cansado.»", options: ["es", "está", "hay", "son"], answer: 1, topic: "Ser vs estar" },
    { type: "type", q: "Translate: I am at home and I am ill. (woman)", answers: ["estoy en casa y estoy enferma"], topic: "Estar" },
    { type: "mc", q: "The train leaves at 6:45. Which is right?", options: ["Son las seis y cuarenta y cinco menos cuarto", "Son las siete menos cuarto", "Es la siete menos cuarto", "Son las seis menos cuarto"], answer: 1, topic: "Time" },
    { type: "type", q: "Friday in Spanish", answers: ["viernes"], topic: "Calendar" },
    { type: "type", q: "nosotros (hablar)", answers: ["hablamos"], topic: "Present" },
    { type: "type", q: "ella (comer)", answers: ["come"], topic: "Present" },
    { type: "type", q: "Translate: I get up at 7.", answers: ["me levanto a las 7", "me levanto a las siete"], topic: "Routine" },
    { type: "type", q: "Translate: I go to the cinema on Saturdays.", answers: ["voy al cine los sábados"], topic: "Irregulars" },
    { type: "mc", q: "«¿Qué ___ tú en tu tiempo libre?» (hacer)", options: ["hago", "haces", "hace", "hacen"], answer: 1, topic: "Irregulars" },
    { type: "mc", q: "You want to ask a friend who the man in the photo is:", options: ["¿Qué es este hombre?", "¿Quién es este hombre?", "¿Dónde es este hombre?", "¿Cuándo es este hombre?"], answer: 1, topic: "Questions" },
    { type: "mc", q: "«Me ___ las fresas.»", options: ["gusta", "gustan", "gusto", "quiero"], answer: 1, topic: "Gustar" },
    { type: "type", q: "Translate: I don't like fish.", answers: ["no me gusta el pescado"], topic: "Gustar" },
    { type: "type", q: "Ask for the bill.", answers: ["la cuenta por favor", "la cuenta, por favor"], topic: "Restaurant" },
    { type: "mc", q: "«Voy ___ farmacia.»", options: ["al", "a el", "a la", "en la"], answer: 2, topic: "City" },
    { type: "type", q: "on the right", answers: ["a la derecha"], topic: "Directions" },
    { type: "mc", q: "«El museo ___ al lado del parque.»", options: ["hay", "está", "es", "va"], answer: 1, topic: "Location" },
    { type: "type", q: "How much does it cost?", answers: ["cuanto cuesta", "cuánto cuesta"], topic: "Shopping" },
    { type: "mc", q: "«___ zapatos son caros.» (these)", options: ["Este", "Esta", "Estos", "Esa"], answer: 2, topic: "Demonstratives" },
    { type: "type", q: "it's raining", answers: ["llueve"], topic: "Weather" },
    { type: "type", q: "Translate: They are going to eat at home.", answers: ["van a comer en casa"], topic: "Plans" },
    { type: "mc", q: "«Tengo 40 ___ .»", options: ["ser", "años", "estar", "hay"], answer: 1, topic: "Age" },
    { type: "type", q: "Translate: Where are you from? (tú)", answers: ["de donde eres", "de dónde eres"], topic: "Identity" },
    { type: "mc", q: "«Nosotras ___ estudiantes.»", options: ["sois", "somos", "son", "eres"], answer: 1, topic: "Ser" },
    { type: "mc", q: "«___ trabajo los domingos.» (never)", options: ["Nunca", "Siempre", "A menudo", "Todos los días"], answer: 0, topic: "Frequency" },
    { type: "tf", q: "After ser + profession you usually omit un/una: Soy médico.", answer: true, topic: "Articles" },
    { type: "type", q: "they (poder)", answers: ["pueden"], topic: "Irregulars" },
    { type: "mc", q: "«A nosotros ___ gusta el cine.»", options: ["me", "te", "le", "nos"], answer: 3, topic: "Gustar" },
    { type: "type", q: "Translate: See you tomorrow.", answers: ["hasta manana", "hasta mañana"], topic: "Greetings" },
    { type: "type", q: "I want a coffee.", answers: ["quiero un cafe", "quiero un café"], topic: "Restaurant" },
    { type: "mc", q: "Which sentence is A1-correct?", options: ["Yo es de España.", "Yo soy de España.", "Yo estoy de España.", "Yo hay de España."], answer: 1, topic: "Review" }
  ],
  speaking: [
    "Say hello and introduce yourself: name, age, nationality, and job.",
    "Talk about two people in your family.",
    "Describe your typical morning.",
    "Say three foods you like and one you don't like.",
    "Ask a stranger for the bathroom and a pharmacy.",
    "Talk about the weather today and your plans for the weekend."
  ],
  writing: [
    "Write 6–8 sentences about yourself (name, origin, work or studies, family, and one hobby).",
    "Write a short message to a friend: suggest going to a restaurant, give a day and a time.",
    "Describe your city in 5 sentences: there is / there are, and where two places are."
  ],
  phrasebook: [
    { group: "Survival", items: [
      { es: "No entiendo.", en: "I don't understand." },
      { es: "Más despacio, por favor.", en: "More slowly, please." },
      { es: "¿Puede repetir?", en: "Can you repeat?" },
      { es: "¿Cómo se dice… en español?", en: "How do you say… in Spanish?" },
      { es: "¿Habla inglés?", en: "Do you speak English?" },
      { es: "Estoy perdido / perdida.", en: "I am lost." }
    ]},
    { group: "Politeness", items: [
      { es: "Por favor.", en: "Please." },
      { es: "Gracias. / Muchas gracias.", en: "Thank you. / Thank you very much." },
      { es: "De nada.", en: "You're welcome." },
      { es: "Perdón. / Lo siento.", en: "Excuse me. / I'm sorry." },
      { es: "Con permiso.", en: "Excuse me (passing)." }
    ]},
    { group: "Needs", items: [
      { es: "¿Dónde está el baño?", en: "Where is the bathroom?" },
      { es: "La cuenta, por favor.", en: "The bill, please." },
      { es: "¿Cuánto cuesta?", en: "How much is it?" },
      { es: "Ayuda, por favor.", en: "Help, please." },
      { es: "Necesito un médico.", en: "I need a doctor." },
      { es: "Quiero esto.", en: "I want this." }
    ]}
  ],
  verbs: [
    { inf: "ser", en: "to be (identity)", forms: ["soy", "eres", "es", "somos", "sois", "son"] },
    { inf: "estar", en: "to be (state/place)", forms: ["estoy", "estás", "está", "estamos", "estáis", "están"] },
    { inf: "tener", en: "to have", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] },
    { inf: "ir", en: "to go", forms: ["voy", "vas", "va", "vamos", "vais", "van"] },
    { inf: "hacer", en: "to do / make", forms: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"] },
    { inf: "querer", en: "to want", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
    { inf: "poder", en: "to be able to", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
    { inf: "gustar", en: "to be pleasing", forms: ["me gusta", "te gusta", "le gusta", "nos gusta", "os gusta", "les gusta"] },
    { inf: "hablar", en: "to speak", forms: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"] },
    { inf: "comer", en: "to eat", forms: ["como", "comes", "come", "comemos", "coméis", "comen"] },
    { inf: "vivir", en: "to live", forms: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"] },
    { inf: "levantarse", en: "to get up", forms: ["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"] }
  ]
};
