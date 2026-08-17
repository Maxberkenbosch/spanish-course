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
        { type: "mc", q: "It is 9:00 in the morning. What do you say?", options: ["Buenas noches", "Buenos días", "Buenas tardes", "Hasta mañana"], answer: 1 },
        { type: "mc", q: "Someone says «Gracias». You answer:", options: ["Por favor", "Perdón", "De nada", "Adiós"], answer: 2 },
        { type: "mc", q: "Which greeting is formal?", options: ["¿Qué tal?", "¿Cómo estás?", "¿Cómo está usted?", "Nos vemos"], answer: 2 },
        { type: "type", q: "Translate: My name is Marta.", answers: ["me llamo marta"] },
        { type: "type", q: "Translate: What's your name? (informal)", answers: ["como te llamas", "como te llamas?"] },
        { type: "type", q: "Translate: Nice to meet you.", answers: ["mucho gusto"] },
        { type: "tf", q: "The letter h in hola is pronounced like English h.", answer: false, explain: "h is silent. Hola sounds like «ola»." },
        { type: "tf", q: "Ñ is a separate letter, as in España.", answer: true },
        { type: "order", q: "Put this goodbye in order:", words: ["luego", "Hasta"], answer: "Hasta luego" },
        { type: "type", q: "How do you say «I don't understand»?", answers: ["no entiendo"] }
      ],
      quiz: [
        { type: "mc", q: "It is 16:30. Which greeting fits?", options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana"], answer: 1 },
        { type: "mc", q: "You arrive at a dinner at 21:00. Best greeting:", options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"], answer: 2 },
        { type: "mc", q: "Someone says «Gracias». The natural reply is:", options: ["Por favor", "De nada", "Perdón", "Igualmente"], answer: 1 },
        { type: "mc", q: "You bump into someone. You say:", options: ["De nada", "Hasta luego", "Perdón", "Mucho gusto"], answer: 2 },
        { type: "mc", q: "To ask an older stranger their name:", options: ["¿Cómo te llamas?", "¿Qué tal?", "¿Cómo se llama usted?", "Me llamo usted"], answer: 2 },
        { type: "mc", q: "«¿Cómo estás?» is for:", options: ["tú only", "usted only", "both equally", "ellos"], answer: 0 },
        { type: "tf", q: "The h in hola is pronounced like English h.", answer: false, explain: "h is silent. Hola sounds like «ola»." },
        { type: "tf", q: "«Usted» uses the same verb form as él/ella.", answer: true },
        { type: "type", q: "Translate: My name is Carmen.", answers: ["me llamo carmen"] },
        { type: "type", q: "Translate: What's your name? (informal)", answers: ["como te llamas", "como te llamas?"] },
        { type: "type", q: "Translate: What's your name? (formal)", answers: ["como se llama usted", "como se llama", "como se llama usted?"] },
        { type: "type", q: "Translate: Nice to meet you.", answers: ["mucho gusto"] },
        { type: "type", q: "Translate: I don't understand.", answers: ["no entiendo"] },
        { type: "type", q: "Translate: More slowly, please.", answers: ["mas despacio por favor", "más despacio, por favor", "mas despacio, por favor"] },
        { type: "type", q: "Write: see you tomorrow", answers: ["hasta manana", "hasta mañana"] },
        { type: "order", q: "Build: How are you? (formal)", words: ["está", "usted", "Cómo", "¿", "?"], answer: "¿ Cómo está usted ?" }
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
        { type: "mc", q: "«Tú ___ de Colombia.»", options: ["soy", "eres", "es", "somos"], answer: 1 },
        { type: "mc", q: "«Nosotros ___ estudiantes.»", options: ["sois", "son", "somos", "eres"], answer: 2 },
        { type: "type", q: "Write the number 16 in Spanish.", answers: ["dieciseis", "dieciséis"] },
        { type: "type", q: "Write the number 42 in Spanish.", answers: ["cuarenta y dos"] },
        { type: "type", q: "Translate: I am 30 years old.", answers: ["tengo 30 anos", "tengo treinta anos", "tengo 30 años", "tengo treinta años"] },
        { type: "mc", q: "Choose the correct article: ___ casa", options: ["el", "la", "un", "los"], answer: 1 },
        { type: "mc", q: "A woman from Spain is:", options: ["español", "española", "España", "españoles"], answer: 1 },
        { type: "type", q: "Translate: I am a teacher. (woman)", answers: ["soy profesora"] },
        { type: "tf", q: "You normally say «Soy un estudiante» in Spanish.", answer: false, explain: "After ser, drop the article: Soy estudiante." },
        { type: "order", q: "Build: Where are you from?", words: ["dónde", "eres", "de", "¿", "?"], answer: "¿ de dónde eres ?" }
      ],
      quiz: [
        { type: "type", q: "yo (ser)", answers: ["soy"] },
        { type: "type", q: "tú (ser)", answers: ["eres"] },
        { type: "type", q: "nosotros (ser)", answers: ["somos"] },
        { type: "type", q: "vosotros (ser)", answers: ["sois"] },
        { type: "type", q: "ustedes (ser)", answers: ["son"] },
        { type: "mc", q: "«Usted ___ de Colombia.»", options: ["eres", "es", "sois", "somos"], answer: 1 },
        { type: "mc", q: "A woman from Spain is:", options: ["español", "española", "España", "españoles"], answer: 1 },
        { type: "mc", q: "Best sentence for a female teacher:", options: ["Soy una profesora.", "Soy profesora.", "Estoy profesora.", "Tengo profesora."], answer: 1 },
        { type: "mc", q: "«___ casa» (the house)", options: ["el", "la", "los", "un"], answer: 1 },
        { type: "mc", q: "«___ problema» (the problem — exception)", options: ["la", "el", "una", "las"], answer: 1 },
        { type: "tf", q: "Age uses ser: «Soy 28 años.»", answer: false, explain: "Age uses tener: Tengo 28 años." },
        { type: "type", q: "Write 16 in Spanish.", answers: ["dieciseis", "dieciséis"] },
        { type: "type", q: "Write 22 in Spanish.", answers: ["veintidos", "veintidós"] },
        { type: "type", q: "Write 58 in Spanish.", answers: ["cincuenta y ocho"] },
        { type: "type", q: "Write 99 in Spanish.", answers: ["noventa y nueve"] },
        { type: "type", q: "Translate: I am from Mexico.", answers: ["soy de mexico", "soy de méxico"] },
        { type: "type", q: "Translate: We are students.", answers: ["somos estudiantes"] },
        { type: "type", q: "Translate: I am 30 years old.", answers: ["tengo 30 anos", "tengo treinta anos", "tengo 30 años", "tengo treinta años"] },
        { type: "type", q: "Ask someone's age (informal).", answers: ["cuantos anos tienes", "cuántos años tienes", "cuantos años tienes"] },
        { type: "order", q: "Build: Where are you from? (tú)", words: ["dónde", "eres", "de", "¿", "?"], answer: "¿ de dónde eres ?" }
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
        { type: "type", q: "«Sister» in Spanish (with article):", answers: ["la hermana"] },
        { type: "type", q: "yo (tener)", answers: ["tengo"] },
        { type: "type", q: "tú (tener)", answers: ["tienes"] },
        { type: "mc", q: "«___ dos sillas en la cocina.»", options: ["Es", "Hay", "Tengo", "Son"], answer: 1 },
        { type: "mc", q: "«___ hermanos son altos.» (my)", options: ["Mi", "Mis", "Tu", "Su"], answer: 1 },
        { type: "type", q: "Translate: I have two brothers.", answers: ["tengo dos hermanos"] },
        { type: "type", q: "Translate: I am hungry.", answers: ["tengo hambre"] },
        { type: "tf", q: "«Su» can mean his, her, your, or their.", answer: true },
        { type: "mc", q: "Age: «Ella ___ 12 años.»", options: ["es", "tiene", "hay", "son"], answer: 1 },
        { type: "order", q: "Build: I don't have children.", words: ["hijos", "tengo", "No"], answer: "No tengo hijos" }
      ],
      quiz: [
        { type: "type", q: "yo (tener)", answers: ["tengo"] },
        { type: "type", q: "tú (tener)", answers: ["tienes"] },
        { type: "type", q: "usted (tener)", answers: ["tiene"] },
        { type: "type", q: "nosotros (tener)", answers: ["tenemos"] },
        { type: "type", q: "ellos (tener)", answers: ["tienen"] },
        { type: "mc", q: "«Ella ___ 12 años.»", options: ["es", "está", "tiene", "hay"], answer: 2 },
        { type: "mc", q: "«___ dos sillas en la cocina.»", options: ["Es", "Están", "Hay", "Tienen"], answer: 2 },
        { type: "mc", q: "«___ hermanos son altos.» (my)", options: ["Mi", "Mis", "Tu", "Su"], answer: 1 },
        { type: "mc", q: "«Tenemos ___ casa.» (our house)", options: ["nuestro", "nuestra", "nuestros", "nuestras"], answer: 1 },
        { type: "mc", q: "«Estos son ___ padres.» (our)", options: ["nuestro", "nuestra", "nuestros", "nuestras"], answer: 2 },
        { type: "mc", q: "One brother + one sister =", options: ["dos hermanas", "dos hermanos", "dos hermano", "un hermanos"], answer: 1 },
        { type: "tf", q: "Hay becomes han with a plural noun.", answer: false, explain: "Hay never changes: Hay un gato. Hay dos gatos." },
        { type: "tf", q: "«Su» can mean his, her, your (usted), or their.", answer: true },
        { type: "type", q: "Translate: I have two brothers.", answers: ["tengo dos hermanos"] },
        { type: "type", q: "Translate: I don't have children.", answers: ["no tengo hijos"] },
        { type: "type", q: "Translate: There is a dog.", answers: ["hay un perro"] },
        { type: "type", q: "Translate: I am hungry.", answers: ["tengo hambre"] },
        { type: "type", q: "Translate: I am cold.", answers: ["tengo frio", "tengo frío"] },
        { type: "type", q: "Do you have siblings? (tú)", answers: ["tienes hermanos", "tienes hermanos?"] },
        { type: "order", q: "Build: She has a sister.", words: ["una", "tiene", "hermana", "Ella"], answer: "Ella tiene una hermana" }
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
        { type: "mc", q: "«María es ___ .» (tall, woman)", options: ["alto", "alta", "altos", "altas"], answer: 1 },
        { type: "mc", q: "«Los libros son ___ .» (easy → fácil)", options: ["fácil", "fáciles", "fácilas", "fácilos"], answer: 1 },
        { type: "mc", q: "Location: «El banco ___ en la plaza.»", options: ["es", "está", "hay", "tiene"], answer: 1 },
        { type: "mc", q: "Profession: «Tú ___ camarero.»", options: ["estás", "eres", "estoy", "hay"], answer: 1 },
        { type: "type", q: "yo (estar)", answers: ["estoy"] },
        { type: "type", q: "Translate: I am tired. (man)", answers: ["estoy cansado"] },
        { type: "type", q: "Translate: She is kind.", answers: ["ella es amable", "es amable"] },
        { type: "tf", q: "«Estoy aburrido» means you are a boring person.", answer: false, explain: "That would be Soy aburrido. Estoy aburrido = I am bored." },
        { type: "mc", q: "«¿Cómo ___ tu hermana?» (what's she like)", options: ["está", "es", "hay", "tiene"], answer: 1 },
        { type: "type", q: "Translate: Where is the bathroom?", answers: ["donde esta el bano", "dónde está el baño", "donde esta el baño"] }
      ],
      quiz: [
        { type: "type", q: "yo (estar)", answers: ["estoy"] },
        { type: "type", q: "tú (estar)", answers: ["estas", "estás"] },
        { type: "type", q: "nosotros (estar)", answers: ["estamos"] },
        { type: "type", q: "ustedes (estar)", answers: ["estan", "están"] },
        { type: "mc", q: "«María es ___ .» (tall)", options: ["alto", "alta", "altos", "altas"], answer: 1 },
        { type: "mc", q: "«Mis hermanas son ___ .» (fun)", options: ["divertido", "divertida", "divertidos", "divertidas"], answer: 3 },
        { type: "mc", q: "«Los exámenes son ___ .» (fácil)", options: ["fácil", "fáciles", "fácilas", "fácilos"], answer: 1 },
        { type: "mc", q: "What's she like (personality): «¿Cómo ___ tu hermana?»", options: ["está", "es", "hay", "tiene"], answer: 1 },
        { type: "mc", q: "How is she right now: «¿Cómo ___ tu hermana hoy?»", options: ["es", "está", "hay", "son"], answer: 1 },
        { type: "mc", q: "Profession: «Tú ___ camarero.»", options: ["estás", "eres", "estoy", "hay"], answer: 1 },
        { type: "mc", q: "Location: «El banco ___ en la plaza.»", options: ["es", "está", "hay", "son"], answer: 1 },
        { type: "mc", q: "«El museo ___ cerrado.»", options: ["es", "está", "son", "hay"], answer: 1 },
        { type: "mc", q: "«Hoy yo ___ enferma.»", options: ["soy", "estoy", "tengo", "hay"], answer: 1 },
        { type: "tf", q: "«Estoy aburrido» means you are a boring person.", answer: false, explain: "Estoy aburrido = I am bored. Soy aburrido = I am boring." },
        { type: "tf", q: "Ser is the usual verb for where people and things are.", answer: false, explain: "Use estar for location." },
        { type: "type", q: "Translate: I am tired. (man)", answers: ["estoy cansado"] },
        { type: "type", q: "Translate: I am tired. (woman)", answers: ["estoy cansada"] },
        { type: "type", q: "Translate: She is kind.", answers: ["ella es amable", "es amable"] },
        { type: "type", q: "Translate: He is from Argentina.", answers: ["el es de argentina", "él es de argentina", "es de argentina"] },
        { type: "type", q: "Translate: Where is the bathroom?", answers: ["donde esta el bano", "dónde está el baño", "donde esta el baño"] }
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
        { type: "mc", q: "3:00 →", options: ["Es la tres", "Son las tres", "Es las tres", "Son la tres"], answer: 1 },
        { type: "mc", q: "1:15 →", options: ["Es la una y cuarto", "Son las una y cuarto", "Es la una y media", "Son las dos menos cuarto"], answer: 0 },
        { type: "type", q: "Write Saturday in Spanish.", answers: ["sabado", "sábado"] },
        { type: "type", q: "Write Wednesday in Spanish.", answers: ["miercoles", "miércoles"] },
        { type: "mc", q: "«La tienda abre ___ lunes.» (every Monday)", options: ["el", "los", "la", "las"], answer: 1 },
        { type: "type", q: "Translate: What time is it?", answers: ["que hora es", "qué hora es"] },
        { type: "type", q: "summer (with article)", answers: ["el verano"] },
        { type: "tf", q: "Spanish days of the week are capitalized.", answer: false },
        { type: "mc", q: "7:45 is commonly:", options: ["las siete y cuarenta y cinco only", "las ocho menos cuarto", "la una y media", "mediodía"], answer: 1 },
        { type: "type", q: "Translate: at 8 in the evening", answers: ["a las ocho de la noche"] }
      ],
      quiz: [
        { type: "mc", q: "3:00 →", options: ["Es la tres", "Son las tres", "Es las tres", "Son la tres"], answer: 1 },
        { type: "mc", q: "1:00 →", options: ["Son las una", "Es la una", "Es las una", "Son la una"], answer: 1 },
        { type: "mc", q: "1:15 →", options: ["Es la una y cuarto", "Son las una y cuarto", "Es la una y media", "Son las dos menos cuarto"], answer: 0 },
        { type: "mc", q: "5:30 →", options: ["las cinco y cuarto", "las cinco y media", "las seis menos cuarto", "es la cinco"], answer: 1 },
        { type: "mc", q: "7:45 is commonly:", options: ["las siete y cuarenta y cinco only", "las ocho menos cuarto", "la una y media", "mediodía"], answer: 1 },
        { type: "mc", q: "Ask the clock time:", options: ["¿A qué hora es?", "¿Qué hora es?", "¿Cuándo es?", "¿Qué día es?"], answer: 1 },
        { type: "mc", q: "Ask when an event starts: «¿___ hora es la película?»", options: ["Qué", "A qué", "Cuál", "Cómo"], answer: 1 },
        { type: "mc", q: "Every Monday the shop opens: «abre ___ lunes.»", options: ["el", "los", "la", "las"], answer: 1 },
        { type: "tf", q: "Spanish days of the week are capitalized.", answer: false, explain: "Write lunes, martes… not Lunes." },
        { type: "tf", q: "«Es la una» is used only for 1 o'clock.", answer: true },
        { type: "type", q: "Wednesday in Spanish", answers: ["miercoles", "miércoles"] },
        { type: "type", q: "Thursday in Spanish", answers: ["jueves"] },
        { type: "type", q: "Saturday in Spanish", answers: ["sabado", "sábado"] },
        { type: "type", q: "January", answers: ["enero"] },
        { type: "type", q: "August", answers: ["agosto"] },
        { type: "type", q: "summer (with article)", answers: ["el verano"] },
        { type: "type", q: "weekend (with article)", answers: ["el fin de semana"] },
        { type: "type", q: "Translate: on Fridays (habit)", answers: ["los viernes"] },
        { type: "type", q: "Translate: at 8 in the evening", answers: ["a las ocho de la noche"] },
        { type: "type", q: "My birthday is May 3. Start with: Mi cumpleaños es…", answers: ["mi cumpleanos es el 3 de mayo", "mi cumpleaños es el 3 de mayo", "mi cumpleaños es el tres de mayo"] }
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
        { type: "type", q: "tú (hablar)", answers: ["hablas"] },
        { type: "type", q: "nosotros (comer)", answers: ["comemos"] },
        { type: "type", q: "ella (vivir)", answers: ["vive"] },
        { type: "type", q: "yo (levantarse) — two words", answers: ["me levanto"] },
        { type: "mc", q: "«¿___ vives?»", options: ["Qué", "Dónde", "Quién", "Cuánto"], answer: 1 },
        { type: "type", q: "yo (ir)", answers: ["voy"] },
        { type: "type", q: "tú (querer)", answers: ["quieres"] },
        { type: "type", q: "Translate: I never work on Sunday.", answers: ["nunca trabajo el domingo", "no trabajo nunca el domingo"] },
        { type: "mc", q: "«¿___ no comes carne?» (why)", options: ["Porque", "Por qué", "Qué", "Cómo"], answer: 1 },
        { type: "order", q: "Build: We want to eat.", words: ["comer", "queremos"], answer: "queremos comer" }
      ],
      quiz: [
        { type: "type", q: "tú (hablar)", answers: ["hablas"] },
        { type: "type", q: "nosotros (comer)", answers: ["comemos"] },
        { type: "type", q: "ella (vivir)", answers: ["vive"] },
        { type: "type", q: "ustedes (trabajar)", answers: ["trabajan"] },
        { type: "type", q: "vosotros (hablar)", answers: ["hablais", "habláis"] },
        { type: "type", q: "yo (hacer)", answers: ["hago"] },
        { type: "type", q: "tú (querer)", answers: ["quieres"] },
        { type: "type", q: "ella (poder)", answers: ["puede"] },
        { type: "type", q: "yo (ir)", answers: ["voy"] },
        { type: "type", q: "ellos (ir)", answers: ["van"] },
        { type: "type", q: "yo (levantarse) — two words", answers: ["me levanto"] },
        { type: "type", q: "tú (acostarse) — two words", answers: ["te acuestas"] },
        { type: "mc", q: "«¿___ vives?»", options: ["Qué", "Dónde", "Quién", "Cuánto"], answer: 1 },
        { type: "mc", q: "«¿___ estudias español?» (when)", options: ["Dónde", "Cuándo", "Quién", "Cuál"], answer: 1 },
        { type: "mc", q: "«¿___ no comes carne?» (why)", options: ["Porque", "Por qué", "Qué", "Cómo"], answer: 1 },
        { type: "tf", q: "«Porque» asks a question.", answer: false, explain: "Por qué = why. Porque = because." },
        { type: "type", q: "Translate: I get up at 8.", answers: ["me levanto a las 8", "me levanto a las ocho"] },
        { type: "type", q: "Translate: I never work on Sunday.", answers: ["nunca trabajo el domingo", "no trabajo nunca el domingo"] },
        { type: "type", q: "Translate: Do you speak Spanish? (tú)", answers: ["hablas espanol", "hablas español", "hablas español?"] },
        { type: "order", q: "Build: We want to eat.", words: ["comer", "queremos"], answer: "queremos comer" }
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
        { type: "mc", q: "«Me ___ el chocolate.»", options: ["gusta", "gustan", "gusto", "gustas"], answer: 0 },
        { type: "mc", q: "«Me ___ las naranjas.»", options: ["gusta", "gustan", "gusto", "quieren"], answer: 1 },
        { type: "type", q: "Translate: I like coffee.", answers: ["me gusta el cafe", "me gusta el café"] },
        { type: "type", q: "Translate: I don't like meat.", answers: ["no me gusta la carne"] },
        { type: "type", q: "How do you ask for the bill?", answers: ["la cuenta por favor", "la cuenta, por favor"] },
        { type: "mc", q: "Water is:", options: ["la agua", "el agua", "los agua", "un agua fría only"], answer: 1 },
        { type: "type", q: "chicken (with article)", answers: ["el pollo"] },
        { type: "tf", q: "«Me gusto» is the normal way to say I like something.", answer: false, explain: "That means I like myself. Use me gusta + thing." },
        { type: "type", q: "Translate: I want a beer.", answers: ["quiero una cerveza"] },
        { type: "order", q: "Build: We like fish.", words: ["gusta", "el", "Nos", "pescado"], answer: "Nos gusta el pescado" }
      ],
      quiz: [
        { type: "mc", q: "«Me ___ el chocolate.»", options: ["gusta", "gustan", "gusto", "gustas"], answer: 0 },
        { type: "mc", q: "«Me ___ las naranjas.»", options: ["gusta", "gustan", "gusto", "quieren"], answer: 1 },
        { type: "mc", q: "«A ella ___ gusta el té.»", options: ["me", "te", "le", "nos"], answer: 2 },
        { type: "mc", q: "«A nosotros ___ gusta el cine.»", options: ["me", "les", "le", "nos"], answer: 3 },
        { type: "mc", q: "«A ellos ___ gustan los tacos.»", options: ["le", "les", "nos", "me"], answer: 1 },
        { type: "mc", q: "«¿___ croissants?»", options: ["Es", "Está", "Hay", "Tiene"], answer: 2 },
        { type: "mc", q: "Water is written:", options: ["la agua", "el agua", "los agua", "un aguas"], answer: 1 },
        { type: "tf", q: "«Me gusto el café» is the normal way to say you like coffee.", answer: false, explain: "Me gusto = I like myself. Say Me gusta el café." },
        { type: "tf", q: "Activities use gusta, not gustan: Me gusta viajar.", answer: true },
        { type: "type", q: "Translate: I like coffee.", answers: ["me gusta el cafe", "me gusta el café"] },
        { type: "type", q: "Translate: I like apples. (las manzanas)", answers: ["me gustan las manzanas"] },
        { type: "type", q: "Translate: I don't like meat.", answers: ["no me gusta la carne"] },
        { type: "type", q: "Translate: I want a beer.", answers: ["quiero una cerveza"] },
        { type: "type", q: "Translate: For me, a salad.", answers: ["para mi una ensalada", "para mí, una ensalada", "para mi, una ensalada"] },
        { type: "type", q: "Ask for the bill.", answers: ["la cuenta por favor", "la cuenta, por favor"] },
        { type: "type", q: "Enjoy your meal.", answers: ["buen provecho"] },
        { type: "type", q: "chicken (with article)", answers: ["el pollo"] },
        { type: "type", q: "breakfast (with article)", answers: ["el desayuno"] },
        { type: "order", q: "Build: We like fish.", words: ["gusta", "el", "Nos", "pescado"], answer: "Nos gusta el pescado" },
        { type: "order", q: "Build: I don't like spicy food. (el picante)", words: ["gusta", "el", "me", "No", "picante"], answer: "No me gusta el picante" }
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
        { type: "mc", q: "«Voy ___ museo.»", options: ["a el", "al", "a la", "en"], answer: 1 },
        { type: "mc", q: "«Voy ___ estación.»", options: ["al", "a el", "a la", "de la"], answer: 2 },
        { type: "mc", q: "Introduce a place: «___ un parque en el centro.»", options: ["Está", "Es", "Hay", "Va"], answer: 2 },
        { type: "mc", q: "Locate a known place: «El hotel ___ cerca.»", options: ["hay", "está", "es", "tiene"], answer: 1 },
        { type: "type", q: "on the left", answers: ["a la izquierda"] },
        { type: "type", q: "pharmacy (with article)", answers: ["la farmacia"] },
        { type: "type", q: "Translate: I am going to the park.", answers: ["voy al parque"] },
        { type: "type", q: "How do I get to…?", answers: ["como llego a", "cómo llego a"] },
        { type: "tf", q: "«Hay el museo a la derecha» is the natural way to locate the museum.", answer: false, explain: "Say El museo está a la derecha. Hay introduces something new." },
        { type: "order", q: "Build: The bank is next to the hotel.", words: ["lado", "al", "del", "El", "está", "banco", "hotel"], answer: "El banco está al lado del hotel" }
      ],
      quiz: [
        { type: "mc", q: "«Voy ___ museo.»", options: ["a el", "al", "a la", "en"], answer: 1 },
        { type: "mc", q: "«Voy ___ estación.»", options: ["al", "a el", "a la", "de la"], answer: 2 },
        { type: "mc", q: "«Voy ___ farmacia.»", options: ["al", "a el", "a la", "en la"], answer: 2 },
        { type: "mc", q: "Introduce a place: «___ un parque en el centro.»", options: ["Está", "Es", "Hay", "Va"], answer: 2 },
        { type: "mc", q: "Locate a known place: «El hotel ___ cerca.»", options: ["hay", "está", "es", "tiene"], answer: 1 },
        { type: "mc", q: "«¿___ un banco por aquí?»", options: ["Está", "Hay", "Es", "Va"], answer: 1 },
        { type: "mc", q: "«El parque está ___ del museo y el hotel.»", options: ["al lado", "entre", "todo recto", "aquí"], answer: 1 },
        { type: "tf", q: "a + el = al", answer: true },
        { type: "tf", q: "«Hay el museo a la derecha» is the natural way to locate the museum.", answer: false, explain: "Say El museo está a la derecha. Hay introduces something new." },
        { type: "type", q: "yo (ir)", answers: ["voy"] },
        { type: "type", q: "nosotros (ir)", answers: ["vamos"] },
        { type: "type", q: "ustedes (ir)", answers: ["van"] },
        { type: "type", q: "on the left", answers: ["a la izquierda"] },
        { type: "type", q: "on the right", answers: ["a la derecha"] },
        { type: "type", q: "straight ahead (Spain-style)", answers: ["todo recto"] },
        { type: "type", q: "pharmacy (with article)", answers: ["la farmacia"] },
        { type: "type", q: "Translate: I am going to the park.", answers: ["voy al parque"] },
        { type: "type", q: "Translate: We are going to the restaurant.", answers: ["vamos al restaurante"] },
        { type: "type", q: "Translate: Where is the station?", answers: ["donde esta la estacion", "dónde está la estación"] },
        { type: "type", q: "How do I get to…?", answers: ["como llego a", "cómo llego a"] }
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
        { type: "type", q: "shoes (with article)", answers: ["los zapatos"] },
        { type: "mc", q: "«¿Cuánto ___ esta falda?»", options: ["cuestan", "cuesta", "vale ellos", "son"], answer: 1 },
        { type: "mc", q: "«¿Cuánto ___ los zapatos?»", options: ["cuesta", "cuestan", "es", "hay"], answer: 1 },
        { type: "type", q: "Write 500 in Spanish (masculine).", answers: ["quinientos"] },
        { type: "mc", q: "This dress (near you, feminine):", options: ["este vestido", "esta vestido", "ese vestido", "aquel camisa"], answer: 0 },
        { type: "type", q: "Translate: It's very expensive. (masculine thing)", answers: ["es muy caro"] },
        { type: "type", q: "I'll take it. (common shop phrase)", answers: ["me lo llevo"] },
        { type: "tf", q: "Cien is used in 100 and also in 125.", answer: false, explain: "100 = cien. 125 = ciento veinticinco." },
        { type: "type", q: "Translate: Can I pay by card?", answers: ["puedo pagar con tarjeta", "puedo pagar con tarjeta?"] },
        { type: "order", q: "Build: I prefer this one (masc.).", words: ["este", "Prefiero"], answer: "Prefiero este" }
      ],
      quiz: [
        { type: "mc", q: "«¿Cuánto ___ esta falda?»", options: ["cuestan", "cuesta", "valen", "son"], answer: 1 },
        { type: "mc", q: "«¿Cuánto ___ los zapatos?»", options: ["cuesta", "cuestan", "es", "hay"], answer: 1 },
        { type: "mc", q: "This dress (near me):", options: ["este vestido", "esta vestido", "ese camisa", "estas vestido"], answer: 0 },
        { type: "mc", q: "«___ pantalones son baratos.» (these)", options: ["Este", "Esta", "Estos", "Esa"], answer: 2 },
        { type: "mc", q: "«___ camisa es cara.» (that one near you)", options: ["Este", "Esta", "Esa", "Aquel"], answer: 2 },
        { type: "mc", q: "«La chaqueta es ___ .» (cheap)", options: ["barato", "barata", "caro", "caros"], answer: 1 },
        { type: "mc", q: "«El abrigo es ___ .» (expensive)", options: ["caro", "cara", "barata", "caros"], answer: 0 },
        { type: "tf", q: "Pantalones is plural even for one pair.", answer: true },
        { type: "tf", q: "You say ciento euros for 100 euros.", answer: false, explain: "100 before a noun is cien: cien euros. 125 is ciento veinticinco." },
        { type: "type", q: "Write 200 (masculine).", answers: ["doscientos"] },
        { type: "type", q: "Write 500 (masculine).", answers: ["quinientos"] },
        { type: "type", q: "Write 1,000.", answers: ["mil"] },
        { type: "type", q: "How much does it cost? (one thing)", answers: ["cuanto cuesta", "cuánto cuesta"] },
        { type: "type", q: "T-shirt (with article)", answers: ["la camiseta"] },
        { type: "type", q: "shoes (with article)", answers: ["los zapatos"] },
        { type: "type", q: "size (with article)", answers: ["la talla"] },
        { type: "type", q: "Translate: It's very expensive. (masculine thing)", answers: ["es muy caro"] },
        { type: "type", q: "Translate: I'll take it.", answers: ["me lo llevo"] },
        { type: "type", q: "Translate: I'm just looking.", answers: ["solo miro", "sólo miro"] },
        { type: "type", q: "Translate: Can I pay by card?", answers: ["puedo pagar con tarjeta", "puedo pagar con tarjeta?"] }
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
        { type: "type", q: "Translate: What's the weather like?", answers: ["que tiempo hace", "qué tiempo hace"] },
        { type: "type", q: "it's cold", answers: ["hace frio", "hace frío"] },
        { type: "type", q: "it's raining", answers: ["llueve"] },
        { type: "mc", q: "«El domingo ___ a viajar.» (yo)", options: ["voy", "va", "vamos", "van"], answer: 0 },
        { type: "type", q: "Translate: We are going to eat.", answers: ["vamos a comer"] },
        { type: "type", q: "to play football", answers: ["jugar al futbol", "jugar al fútbol"] },
        { type: "mc", q: "«Yo ___ al tenis los sábados.»", options: ["juego", "juega", "toco", "hago"], answer: 0 },
        { type: "tf", q: "«Hace sol» uses hacer, not ser.", answer: true },
        { type: "type", q: "Translate: What are you going to do? (tú)", answers: ["que vas a hacer", "qué vas a hacer"] },
        { type: "order", q: "Build: I'm going to study.", words: ["estudiar", "a", "Voy"], answer: "Voy a estudiar" }
      ],
      quiz: [
        { type: "mc", q: "«¿Qué ___ a hacer mañana?» (tú)", options: ["voy", "vas", "va", "vamos"], answer: 1 },
        { type: "mc", q: "«El sábado yo ___ a viajar.»", options: ["voy", "vas", "va", "vamos"], answer: 0 },
        { type: "mc", q: "«El sábado nosotros ___ a bailar.»", options: ["voy", "vas", "vamos", "van"], answer: 2 },
        { type: "mc", q: "«Ellos ___ a comer en un restaurante.»", options: ["va", "vamos", "van", "voy"], answer: 2 },
        { type: "mc", q: "«Yo ___ al tenis los sábados.»", options: ["juego", "juega", "toco", "hago"], answer: 0 },
        { type: "mc", q: "Guitar: «Yo ___ la guitarra.»", options: ["juego", "toco", "hago", "voy"], answer: 1 },
        { type: "tf", q: "«Hace sol» uses hacer, not ser.", answer: true },
        { type: "tf", q: "For A1 plans, use ir a + infinitive, not the future tense.", answer: true },
        { type: "type", q: "What's the weather like?", answers: ["que tiempo hace", "qué tiempo hace"] },
        { type: "type", q: "it's hot (weather)", answers: ["hace calor"] },
        { type: "type", q: "it's cold (weather)", answers: ["hace frio", "hace frío"] },
        { type: "type", q: "it's sunny", answers: ["hace sol"] },
        { type: "type", q: "it's raining", answers: ["llueve"] },
        { type: "type", q: "it's cloudy", answers: ["esta nublado", "está nublado"] },
        { type: "type", q: "to play football", answers: ["jugar al futbol", "jugar al fútbol"] },
        { type: "type", q: "to go to the cinema", answers: ["ir al cine"] },
        { type: "type", q: "Translate: We are going to eat.", answers: ["vamos a comer"] },
        { type: "type", q: "Translate: I am going to study.", answers: ["voy a estudiar"] },
        { type: "type", q: "Translate: What are you going to do? (tú)", answers: ["que vas a hacer", "qué vas a hacer"] },
        { type: "type", q: "Translate: I like to travel.", answers: ["me gusta viajar"] }
      ]
    }
  ],
  exam: [
    { type: "mc", q: "You meet a classmate at 10:00. You say:", options: ["Buenas noches", "Buenos días", "Hasta mañana", "La cuenta"], answer: 1, topic: "Greetings" },
    { type: "type", q: "Write: My name is Laura.", answers: ["me llamo laura"], topic: "Identity" },
    { type: "type", q: "yo (ser)", answers: ["soy"], topic: "Ser" },
    { type: "type", q: "ustedes (ser)", answers: ["son"], topic: "Ser" },
    { type: "type", q: "Write 18 in Spanish.", answers: ["dieciocho"], topic: "Numbers" },
    { type: "type", q: "Write 73 in Spanish.", answers: ["setenta y tres"], topic: "Numbers" },
    { type: "mc", q: "«___ hermana tiene 15 años.»", options: ["Mi", "Mis", "Tu s", "Nuestros"], answer: 0, topic: "Family" },
    { type: "type", q: "tú (tener)", answers: ["tienes"], topic: "Tener" },
    { type: "mc", q: "«___ un parque cerca de mi casa.»", options: ["Está", "Hay", "Es", "Son"], answer: 1, topic: "Hay" },
    { type: "mc", q: "Personality: «Carlos ___ muy simpático.»", options: ["está", "es", "hay", "tiene"], answer: 1, topic: "Ser vs estar" },
    { type: "mc", q: "Right now: «Carlos ___ cansado.»", options: ["es", "está", "hay", "son"], answer: 1, topic: "Ser vs estar" },
    { type: "type", q: "yo (estar)", answers: ["estoy"], topic: "Estar" },
    { type: "mc", q: "2:30 →", options: ["Es la dos y media", "Son las dos y media", "Son las tres menos cuarto", "Es medianoche"], answer: 1, topic: "Time" },
    { type: "type", q: "Friday in Spanish", answers: ["viernes"], topic: "Calendar" },
    { type: "type", q: "nosotros (hablar)", answers: ["hablamos"], topic: "Present" },
    { type: "type", q: "ella (comer)", answers: ["come"], topic: "Present" },
    { type: "type", q: "Translate: I get up at 7.", answers: ["me levanto a las 7", "me levanto a las siete"], topic: "Routine" },
    { type: "type", q: "yo (ir)", answers: ["voy"], topic: "Irregulars" },
    { type: "type", q: "yo (hacer)", answers: ["hago"], topic: "Irregulars" },
    { type: "mc", q: "«¿___ vives?»", options: ["Qué", "Dónde", "Cuándo", "Quién"], answer: 1, topic: "Questions" },
    { type: "mc", q: "«Me ___ las fresas.»", options: ["gusta", "gustan", "gusto", "quiero"], answer: 1, topic: "Gustar" },
    { type: "type", q: "Translate: I don't like fish.", answers: ["no me gusta el pescado"], topic: "Gustar" },
    { type: "type", q: "Ask for the bill.", answers: ["la cuenta por favor", "la cuenta, por favor"], topic: "Restaurant" },
    { type: "mc", q: "«Voy ___ farmacia.»", options: ["al", "a el", "a la", "en la"], answer: 2, topic: "City" },
    { type: "type", q: "on the right", answers: ["a la derecha"], topic: "Directions" },
    { type: "mc", q: "«El museo ___ al lado del parque.»", options: ["hay", "está", "es", "va"], answer: 1, topic: "Location" },
    { type: "type", q: "How much does it cost?", answers: ["cuanto cuesta", "cuánto cuesta"], topic: "Shopping" },
    { type: "mc", q: "«___ zapatos son caros.» (these)", options: ["Este", "Esta", "Estos", "Esa"], answer: 2, topic: "Demonstratives" },
    { type: "type", q: "it's raining", answers: ["llueve"], topic: "Weather" },
    { type: "type", q: "Translate: We are going to travel.", answers: ["vamos a viajar"], topic: "Plans" },
    { type: "mc", q: "«Tengo 40 ___ .»", options: ["ser", "años", "estar", "hay"], answer: 1, topic: "Age" },
    { type: "type", q: "Translate: Where are you from? (tú)", answers: ["de donde eres", "de dónde eres"], topic: "Identity" },
    { type: "mc", q: "«Nosotras ___ estudiantes.»", options: ["sois", "somos", "son", "eres"], answer: 1, topic: "Ser" },
    { type: "type", q: "never", answers: ["nunca"], topic: "Frequency" },
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
