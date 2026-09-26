const COURSE_A2 = {
  id: "a2",
  level: "A2",
  title: "Camino A2",
  hours: "60–80",
  summary: "Tell what happened, ask for things properly, compare, and talk about plans. Builds on the A1 course.",
  goal: "Reach CEFR A2: handle routine situations and talk about the past, the present, and simple plans.",
  ui: {
    homeKicker: "Self-paced Spanish",
    homeTitle: "From A1 to A2.",
    homeLead: "You can already survive in Spanish. This course is the next step: say what happened, describe how things used to be, use pronouns and commands, compare, and talk about plans. About 60–80 hours if you speak out loud and do every exercise.",
    navHow: "How to reach A2",
    navExam: "Final A2 exam",
    howKicker: "Method",
    howTitle: "How to actually reach A2",
    howLead: "A2 means you can keep a simple conversation going: what you did, what you need, and what you are going to do. People still help you, but you are no longer stuck at hello.",
    howCanDoTitle: "What A2 speakers can do",
    howCanDo: [
      "Say what they did yesterday, last weekend, or on a trip",
      "Describe habits and scenes in the past",
      "Say what they have already done, and what they have never done",
      "Ask someone to do something, directly or politely",
      "Compare prices, places, and people",
      "Give a reason, a purpose, and a simple plan",
      "Write a short message about the past or about plans"
    ],
    howTimeTitle: "A realistic timetable",
    howTimeHtml: "After A1, Instituto Cervantes-style A2 is roughly another 90–120 classroom hours. Alone, plan <strong>60–80 focused hours</strong>.",
    howTimeItems: [
      "<strong>45 minutes a day for about 12 weeks</strong> — the steady path",
      "<strong>90 minutes a day for about 6 weeks</strong> — faster",
      "One unit every 5–7 days: lesson → say the dialogue out loud → practice → quiz (75% to pass)"
    ],
    howRulesTitle: "Rules that make this work",
    howRules: [
      "Say every new verb form out loud. The past is a sound, not a chart you stare at.",
      "Do the practice set, then the quiz without notes. The quiz is a situation, not a copy of the drill.",
      "After each unit, record yourself doing the can-do list on the unit page.",
      "Pass all 10 quizzes and the final exam at 75% or higher.",
      "Then do the speaking and writing prompts without a translator. That is A2 in real life."
    ],
    howNote: "Start this course after A1: present tense, <em>ser / estar</em>, <em>gustar</em>, and <em>ir a + infinitive</em> are assumed. International Spanish again: <em>tú</em> and <em>ustedes</em>. <em>Vosotros</em> stays in the tables because you will see it in Spain. Answers accept accents with or without marks.",
    examKicker: "DELE-style checkpoint",
    examTitle: "Final A2 exam",
    examLead: "{n} scored items covering the whole course. 75% is a pass. Then do the speaking and writing tasks out loud or on paper. Those are not auto-scored on purpose.",
    examPassKicker: "A2 reached",
    examFailKicker: "Not yet",
    examPass: "That is A2 on the grammar and vocabulary this course teaches. Finish the speaking and writing prompts to make it real.",
    examFail: "Below 75%. Revisit the weakest units, then retake. Do not skip the missed items.",
    verbLead: "A2 adds the past and a simple future. Type the form for the person and the tense on the card.",
    verbListTitle: "All A2 verbs in this trainer",
    phraseKicker: "Carry these",
    phraseLead: "Lines you need once you can do more than order a coffee. Tap ▶ and copy the melody."
  },
  units: [
    {
      id: "u1",
      num: 1,
      title: "Ayer",
      subtitle: "The regular past: what you did",
      hours: "6–7",
      canDo: [
        "Say what you did yesterday with regular -ar, -er, and -ir verbs",
        "Use ayer, anoche, el lunes, and la semana pasada",
        "Tell a short sequence: primero, luego, después",
        "Put a reflexive verb in the past: me levanté"
      ],
      lessons: [
        {
          id: "u1l1",
          title: "The preterite endings",
          blocks: [
            { type: "p", html: "The <em>pretérito indefinido</em> is for a finished action in the past. You know when it happened, and it is over. Take off <em>-ar / -er / -ir</em> and add these endings. The accent on <em>yo</em> and <em>él</em> is doing real work: <em>hablé</em> is the past, <em>hable</em> is not." },
            { type: "table", caption: "Regular preterite", headers: ["", "hablar", "comer", "vivir"], rows: [
              ["yo", "hablé", "comí", "viví"],
              ["tú", "hablaste", "comiste", "viviste"],
              ["él / ella / usted", "habló", "comió", "vivió"],
              ["nosotros", "hablamos", "comimos", "vivimos"],
              ["vosotros", "hablasteis", "comisteis", "vivisteis"],
              ["ellos / ustedes", "hablaron", "comieron", "vivieron"]
            ]},
            { type: "note", html: "<strong>Same spelling, two tenses.</strong> <em>Hablamos</em> and <em>vivimos</em> look like the present. The time word decides: <em>hoy hablamos</em> is now, <em>ayer hablamos</em> is the past. <em>-er</em> and <em>-ir</em> share endings except <em>nosotros</em>: <em>comimos</em> vs <em>vivimos</em>." },
            { type: "vocab", title: "Useful regular verbs", items: [
              { es: "hablar", en: "to speak" },
              { es: "estudiar", en: "to study" },
              { es: "trabajar", en: "to work" },
              { es: "comprar", en: "to buy" },
              { es: "llegar", en: "to arrive" },
              { es: "comer", en: "to eat" },
              { es: "beber", en: "to drink" },
              { es: "escribir", en: "to write" },
              { es: "recibir", en: "to receive" },
              { es: "abrir", en: "to open" }
            ]}
          ]
        },
        {
          id: "u1l2",
          title: "When, and in what order",
          blocks: [
            { type: "vocab", title: "Time markers for a finished past", items: [
              { es: "ayer", en: "yesterday" },
              { es: "anteayer", en: "the day before yesterday" },
              { es: "anoche", en: "last night" },
              { es: "el lunes", en: "on Monday" },
              { es: "el fin de semana pasado", en: "last weekend" },
              { es: "la semana pasada", en: "last week" },
              { es: "hace dos días", en: "two days ago" },
              { es: "primero", en: "first" },
              { es: "luego", en: "then" },
              { es: "después", en: "afterwards" }
            ]},
            { type: "table", caption: "levantarse — preterite", headers: ["", "form"], rows: [
              ["yo", "me levanté"],
              ["tú", "te levantaste"],
              ["él / ella", "se levantó"],
              ["nosotros", "nos levantamos"],
              ["ellos / ustedes", "se levantaron"]
            ]},
            { type: "note", html: "The pronoun stays in front: <em>me levanté</em>, not <em>levantéme</em>. The accent stays on the verb. Same pattern for <em>me duché, me acosté</em>." },
            { type: "dialogue", title: "What did you do yesterday?", lines: [
              { who: "Nuria", es: "¿Qué hiciste ayer?", en: "What did you do yesterday?", side: "a" },
              { who: "Mateo", es: "Por la mañana trabajé. Por la tarde estudié español.", en: "In the morning I worked. In the afternoon I studied Spanish.", side: "b" },
              { who: "Nuria", es: "¿Y anoche?", en: "And last night?", side: "a" },
              { who: "Mateo", es: "Cené con Ana y después vimos una serie. Me acosté tarde.", en: "I had dinner with Ana and afterwards we watched a series. I went to bed late.", side: "b" },
              { who: "Nuria", es: "Yo llegué a casa y escribí un correo.", en: "I got home and wrote an email.", side: "a" }
            ]},
            { type: "p", html: "<em>Hiciste</em> and <em>vimos</em> are irregular. You will drill them in the next unit. For now, notice the shape of the conversation: a time word, a finished action, then <em>después</em>." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the preterite of hablar.", pairs: [["hablé", "I spoke"], ["hablaste", "you spoke"], ["habló", "he/she spoke"], ["hablamos", "we spoke"], ["hablaron", "they spoke"]] },
        { type: "match", q: "Match the preterite of comer.", pairs: [["comí", "I ate"], ["comiste", "you ate"], ["comió", "he/she ate"], ["comimos", "we ate"], ["comieron", "they ate"]] },
        { type: "match", q: "Match the time words.", pairs: [["ayer", "yesterday"], ["anoche", "last night"], ["la semana pasada", "last week"], ["hace dos días", "two days ago"], ["después", "afterwards"], ["primero", "first"]] },
        { type: "type", q: "yo (hablar) in the preterite", answers: ["hablé"] },
        { type: "type", q: "tú (comer) in the preterite", answers: ["comiste"] },
        { type: "type", q: "ella (vivir) in the preterite", answers: ["vivió"] },
        { type: "type", q: "I got up. (levantarse)", answers: ["me levanté"] },
        { type: "type", q: "last night", answers: ["anoche"] },
        { type: "type", q: "last week", answers: ["la semana pasada"] },
        { type: "mc", q: "«Ayer yo ___ una carta.» (escribir)", options: ["escribí", "escribo", "escribía", "he escrito"], answer: 0 },
        { type: "mc", q: "«Ellos ___ en casa anoche.» (comer)", options: ["comen", "comieron", "comían", "comimos"], answer: 1 },
        { type: "mc", q: "«Tú ___ tarde el lunes.» (llegar)", options: ["llego", "llegas", "llegaste", "llegaba"], answer: 2 },
        { type: "mc", q: "Which form is the preterite of nosotros + vivir?", options: ["vivemos", "vivimos", "vivíamos", "viven"], answer: 1 },
        { type: "mc", q: "Which pair is the same word in the present and the preterite?", options: ["como / comí", "hablo / hablé", "hablamos / hablamos", "vivo / viví"], answer: 2 },
        { type: "mc", q: "«___ me duché y luego desayuné.»", options: ["Primero", "Anoche siempre", "Nunca", "Todos los días"], answer: 0 },
        { type: "tf", q: "Habló needs the accent. Without it, it is not the él preterite.", answer: true },
        { type: "tf", q: "The preterite pronoun of a reflexive verb goes after the verb: levantéme.", answer: false, explain: "It stays in front: me levanté." },
        { type: "order", q: "Build: Yesterday I spoke with Marta.", words: ["Marta", "con", "hablé", "Ayer"], answer: "Ayer hablé con Marta" }
      ],
      quiz: [
        { type: "mc", q: "A coworker asks what you did last night. You studied. You say:", options: ["Anoche estudio.", "Anoche estudié.", "Anoche estudiaba.", "Anoche voy a estudiar."], answer: 1 },
        { type: "mc", q: "Which preterite sentence is wrong?", options: ["Ella trabajó el lunes.", "Nosotros comimos pizza.", "Tú escribiste un correo.", "Yo comió a las dos."], answer: 3 },
        { type: "mc", q: "You want to say the actions in order: first coffee, then work. Which word starts the sequence?", options: ["Después", "Primero", "Anoche", "Siempre"], answer: 1 },
        { type: "mc", q: "«La semana pasada ellos ___ en Sevilla.» (vivir)", options: ["viven", "vivían", "vivieron", "viviste"], answer: 2 },
        { type: "mc", q: "You got up, showered, and left. Which sentence fits the middle step?", options: ["Me duché.", "Me ducho ahora.", "Me duchaba de niño.", "Voy a ducharme mañana."], answer: 0 },
        { type: "mc", q: "A friend says «Llegué a las diez». The action is:", options: ["a habit", "happening right now", "finished", "a plan for tomorrow"], answer: 2 },
        { type: "mc", q: "Which time expression does not belong with a finished past?", options: ["ayer", "hace tres días", "todos los días", "el año pasado"], answer: 2 },
        { type: "mc", q: "«¿___ compraste el pan?»", options: ["Dónde", "Qué tal", "Cuántos años", "De nada"], answer: 0 },
        { type: "mc", q: "Two people, one finished meal. The verb is:", options: ["comemos", "comimos", "comí", "comes"], answer: 1 },
        { type: "mc", q: "You wrote three emails yesterday. You say:", options: ["Escribo tres correos.", "Escribí tres correos.", "Escribía tres correos cada día.", "Voy a escribir tres correos."], answer: 1 },
        { type: "mc", q: "«Después» in a story means:", options: ["before anything else", "afterwards", "never", "every morning"], answer: 1 },
        { type: "tf", q: "Hablamos can be present or preterite. Ayer makes it the past.", answer: true },
        { type: "tf", q: "Comiste is the yo form of comer.", answer: false, explain: "Comiste is tú. Yo is comí." },
        { type: "tf", q: "Me acosté tarde means I went to bed late, and the action is finished.", answer: true },
        { type: "type", q: "Translate: Last night I studied Spanish.", answers: ["anoche estudié español"] },
        { type: "type", q: "Translate: She worked on Monday.", answers: ["ella trabajó el lunes", "trabajó el lunes"] },
        { type: "type", q: "Translate: We ate at a restaurant.", answers: ["comimos en un restaurante"] },
        { type: "type", q: "Translate: They lived in Mexico.", answers: ["ellos vivieron en México", "vivieron en México"] },
        { type: "type", q: "Translate: First I had breakfast and then I worked.", answers: ["primero desayuné y luego trabajé"] },
        { type: "order", q: "Build: I arrived home and wrote an email.", words: ["correo", "un", "escribí", "y", "casa", "a", "Llegué"], answer: "Llegué a casa y escribí un correo" }
      ]
    },
    {
      id: "u2",
      num: 2,
      title: "Fue así",
      subtitle: "Irregular preterite, and a trip",
      hours: "7",
      canDo: [
        "Use the preterite of ir, ser, hacer, ver, tener, estar, poder, and decir",
        "Tell a short travel story with a problem and a result",
        "Hear the three irregular families: u-stem, i-stem, and j-stem"
      ],
      lessons: [
        {
          id: "u2l1",
          title: "The verbs you cannot avoid",
          blocks: [
            { type: "p", html: "A handful of verbs refuse the regular endings. Learn these as chunks. <em>Ir</em> and <em>ser</em> are twins in this tense: only the sentence tells them apart." },
            { type: "table", caption: "ir and ser — same forms", headers: ["", "ir / ser"], rows: [
              ["yo", "fui"],
              ["tú", "fuiste"],
              ["él / ella / usted", "fue"],
              ["nosotros", "fuimos"],
              ["vosotros", "fuisteis"],
              ["ellos / ustedes", "fueron"]
            ]},
            { type: "table", caption: "hacer and ver", headers: ["", "hacer", "ver"], rows: [
              ["yo", "hice", "vi"],
              ["tú", "hiciste", "viste"],
              ["él / ella / usted", "hizo", "vio"],
              ["nosotros", "hicimos", "vimos"],
              ["vosotros", "hicisteis", "visteis"],
              ["ellos / ustedes", "hicieron", "vieron"]
            ]},
            { type: "note", html: "<em>Vi</em> and <em>vio</em> have no accent. <em>Hizo</em> has a <em>z</em>, not a <em>c</em>: the <em>c</em> would sound wrong before <em>o</em>. <em>Fui al médico</em> is <em>ir</em>. <em>La película fue aburrida</em> is <em>ser</em>." }
          ]
        },
        {
          id: "u2l2",
          title: "Three families",
          blocks: [
            { type: "p", html: "Most other irregulars fall into a family. The endings are the same inside the family, and none of these forms take an accent." },
            { type: "table", caption: "u-stem — tener, estar, poder", headers: ["", "tener", "estar", "poder"], rows: [
              ["yo", "tuve", "estuve", "pude"],
              ["tú", "tuviste", "estuviste", "pudiste"],
              ["él", "tuvo", "estuvo", "pudo"],
              ["nosotros", "tuvimos", "estuvimos", "pudimos"],
              ["ellos", "tuvieron", "estuvieron", "pudieron"]
            ]},
            { type: "table", caption: "i-stem and j-stem", headers: ["", "querer", "venir", "decir"], rows: [
              ["yo", "quise", "vine", "dije"],
              ["tú", "quisiste", "viniste", "dijiste"],
              ["él", "quiso", "vino", "dijo"],
              ["nosotros", "quisimos", "vinimos", "dijimos"],
              ["ellos", "quisieron", "vinieron", "dijeron"]
            ]},
            { type: "note", html: "<strong>The j-stem trap:</strong> <em>dijeron</em> and <em>trajeron</em>, never <em>dijieron</em>. <em>Poner</em> follows <em>tener</em>: <em>puse, pusiste, puso</em>. <em>No pude</em> means I tried and failed, or I was not able. <em>No quise</em> often means I refused." },
            { type: "vocab", title: "On a trip", items: [
              { es: "el viaje", en: "the trip" },
              { es: "la maleta", en: "the suitcase" },
              { es: "el hotel", en: "the hotel" },
              { es: "perder el tren", en: "to miss the train" },
              { es: "sacar fotos", en: "to take photos" },
              { es: "hacer la maleta", en: "to pack" },
              { es: "¿qué tal el viaje?", en: "how was the trip?" },
              { es: "al final", en: "in the end" }
            ]}
          ]
        },
        {
          id: "u2l3",
          title: "A weekend away",
          blocks: [
            { type: "dialogue", title: "Back from Granada", lines: [
              { who: "Inés", es: "¿Qué tal el viaje? ¿Adónde fuiste?", en: "How was the trip? Where did you go?", side: "a" },
              { who: "Raúl", es: "Fui a Granada con Lara. Hizo buen tiempo.", en: "I went to Granada with Lara. The weather was good.", side: "b" },
              { who: "Inés", es: "¿Y el hotel?", en: "And the hotel?", side: "a" },
              { who: "Raúl", es: "Tuvimos un problema: no había habitación. Al final estuvimos en otro hotel.", en: "We had a problem: there was no room. In the end we stayed in another hotel.", side: "b" },
              { who: "Inés", es: "¿Pudiste ver la Alhambra?", en: "Were you able to see the Alhambra?", side: "a" },
              { who: "Raúl", es: "Sí. La vimos el sábado y saqué muchas fotos.", en: "Yes. We saw it on Saturday and I took lots of photos.", side: "b" }
            ]},
            { type: "p", html: "<em>No había</em> is the imperfect, the tense of the next two units. Here it is just the background: the room was not there. The things you did — <em>fui, tuvimos, estuvimos, vimos</em> — are preterite." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match ir / ser in the preterite.", pairs: [["fui", "I went / I was"], ["fuiste", "you went / you were"], ["fue", "he went / it was"], ["fuimos", "we went / we were"], ["fueron", "they went / they were"]] },
        { type: "match", q: "Match hacer in the preterite.", pairs: [["hice", "I did / made"], ["hiciste", "you did / made"], ["hizo", "he did / made"], ["hicimos", "we did / made"], ["hicieron", "they did / made"]] },
        { type: "match", q: "Match these trip words.", pairs: [["la maleta", "suitcase"], ["el viaje", "trip"], ["el hotel", "hotel"], ["sacar fotos", "to take photos"], ["al final", "in the end"], ["perder el tren", "to miss the train"]] },
        { type: "type", q: "yo (ir) in the preterite", answers: ["fui"] },
        { type: "type", q: "él (hacer) in the preterite", answers: ["hizo"] },
        { type: "type", q: "yo (tener) in the preterite", answers: ["tuve"] },
        { type: "type", q: "ella (estar) in the preterite", answers: ["estuvo"] },
        { type: "type", q: "yo (ver) in the preterite", answers: ["vi"] },
        { type: "type", q: "last year", answers: ["el año pasado"] },
        { type: "mc", q: "«Ayer ___ al museo.» (yo, ir)", options: ["fui", "fue", "iba", "voy"], answer: 0 },
        { type: "mc", q: "«Ellos ___ la maleta por la noche.» (hacer)", options: ["hacieron", "hicieron", "hizieron", "hacían"], answer: 1 },
        { type: "mc", q: "«No ___ entrar: la puerta estaba cerrada.» (yo, poder)", options: ["pude", "pudo", "puedo", "podía"], answer: 0 },
        { type: "mc", q: "«¿Qué ___ tú?» (decir)", options: ["deciste", "dijiste", "dijisteis", "dices"], answer: 1 },
        { type: "mc", q: "Which form of decir is wrong?", options: ["dije", "dijo", "dijeron", "dijieron"], answer: 3 },
        { type: "mc", q: "«La fiesta ___ un desastre.» (ser)", options: ["fui", "fue", "era un plan", "es ayer"], answer: 1 },
        { type: "tf", q: "Vi and vio are written with no accent.", answer: true },
        { type: "tf", q: "Ir and ser have different preterite forms.", answer: false, explain: "They share every form: fui, fuiste, fue, fuimos, fuisteis, fueron." },
        { type: "order", q: "Build: We went to Barcelona.", words: ["Barcelona", "a", "Fuimos"], answer: "Fuimos a Barcelona" }
      ],
      quiz: [
        { type: "mc", q: "You got back from a trip this morning. A friend asks where you went. You say:", options: ["Voy a Granada.", "Fui a Granada.", "Iba a Granada cada año.", "He ido ahora mismo siempre."], answer: 1 },
        { type: "mc", q: "The hotel had no room. Which verb reports the finished problem?", options: ["Tuvimos un problema.", "Tenemos un problema mañana.", "Teníamos un problema cada verano.", "Hay un problema ahora."], answer: 0 },
        { type: "mc", q: "Which sentence uses ser, not ir?", options: ["Fui al aeropuerto a las seis.", "Fuimos en tren.", "El viaje fue largo.", "¿Adónde fuiste?"], answer: 2 },
        { type: "mc", q: "You packed last night. You say:", options: ["Hago la maleta.", "Hice la maleta.", "Hizo la maleta.", "Hacía la maleta todos los días."], answer: 1 },
        { type: "mc", q: "You tried the museum and the door was shut. You say:", options: ["No puedo entrar.", "No pude entrar.", "No podía de niño.", "No puedo ayer."], answer: 1 },
        { type: "mc", q: "«Ella ___ que no.» (decir, preterite)", options: ["dijo", "dijió", "decía", "dice"], answer: 0 },
        { type: "mc", q: "Which one is not a preterite?", options: ["estuve", "estuviste", "estaba", "estuvieron"], answer: 2 },
        { type: "mc", q: "You saw the cathedral on Saturday. You say:", options: ["Veo la catedral.", "Vi la catedral.", "Veía la catedral cada domingo.", "He visto la catedral mañana."], answer: 1 },
        { type: "mc", q: "«Vinieron mis padres» means:", options: ["my parents are coming", "my parents came", "my parents used to come", "my parents want to come"], answer: 1 },
        { type: "mc", q: "Someone asks «¿Qué tal el viaje?» They want:", options: ["the price of a ticket", "how the trip went", "your job", "the time"], answer: 1 },
        { type: "mc", q: "Which irregular preterite sentence is wrong?", options: ["Puse la maleta en el taxi.", "Dijeron la verdad.", "Hicieron fotos.", "Yo hizé la reserva."], answer: 3 },
        { type: "tf", q: "No quise often means I refused, not just that I lacked a wish in general.", answer: true },
        { type: "tf", q: "Hizo is spelled with a c: hico.", answer: false, explain: "It is hizo, with z. Hicieron keeps the c because e follows." },
        { type: "tf", q: "Estuvimos is the nosotros preterite of estar.", answer: true },
        { type: "type", q: "Translate: I went to the museum.", answers: ["fui al museo"] },
        { type: "type", q: "Translate: She packed.", answers: ["ella hizo la maleta", "hizo la maleta"] },
        { type: "type", q: "Translate: We had a problem.", answers: ["tuvimos un problema"] },
        { type: "type", q: "Translate: Where did you go yesterday? (tú)", answers: ["¿adónde fuiste ayer?", "adónde fuiste ayer"] },
        { type: "type", q: "Translate: We saw a film.", answers: ["vimos una película"] },
        { type: "order", q: "Build: In the end I was at home.", words: ["casa", "en", "estuve", "final", "Al"], answer: "Al final estuve en casa" }
      ]
    },
    {
      id: "u3",
      num: 3,
      title: "Antes",
      subtitle: "The imperfect: how things used to be",
      hours: "6–7",
      canDo: [
        "Describe habits in the past",
        "Set a scene: age, time, weather, and what a place was like",
        "Use the imperfect of ser, ir, and ver"
      ],
      lessons: [
        {
          id: "u3l1",
          title: "Used to, and was …-ing",
          blocks: [
            { type: "p", html: "The <em>imperfecto</em> is the other past. It does not cut an action off. It is what you used to do, what was going on, or what something was like. Only three verbs are irregular. Everything else is regular, and <em>-er</em> and <em>-ir</em> share one set of endings." },
            { type: "table", caption: "Imperfect endings", headers: ["", "hablar", "comer / vivir"], rows: [
              ["yo", "hablaba", "comía / vivía"],
              ["tú", "hablabas", "comías / vivías"],
              ["él / ella / usted", "hablaba", "comía / vivía"],
              ["nosotros", "hablábamos", "comíamos / vivíamos"],
              ["vosotros", "hablabais", "comíais / vivíais"],
              ["ellos / ustedes", "hablaban", "comían / vivían"]
            ]},
            { type: "table", caption: "Only three irregulars", headers: ["", "ser", "ir", "ver"], rows: [
              ["yo", "era", "iba", "veía"],
              ["tú", "eras", "ibas", "veías"],
              ["él", "era", "iba", "veía"],
              ["nosotros", "éramos", "íbamos", "veíamos"],
              ["ellos", "eran", "iban", "veían"]
            ]},
            { type: "note", html: "The accent in <em>-er / -ir</em> is on the <em>í</em>: <em>comía, comíamos</em>. For <em>-ar</em>, only <em>nosotros</em> has one: <em>hablábamos</em>. <em>Yo</em> and <em>él</em> look the same: <em>hablaba, era, iba</em>." }
          ]
        },
        {
          id: "u3l2",
          title: "Habits, age, weather, the clock",
          blocks: [
            { type: "p", html: "Use the imperfect for what was normal, not for a single finished event. Also use it for age, the time, and the weather when they are the background of a story." },
            { type: "vocab", title: "Words that like the imperfect", items: [
              { es: "antes", en: "before / in the past" },
              { es: "de niño / de niña", en: "as a child" },
              { es: "cuando era pequeño", en: "when I was little" },
              { es: "siempre", en: "always" },
              { es: "todos los días", en: "every day" },
              { es: "a menudo", en: "often" },
              { es: "normalmente", en: "normally" },
              { es: "mientras", en: "while" },
              { es: "en aquella época", en: "at that time" },
              { es: "ya no", en: "not anymore" }
            ]},
            { type: "dialogue", title: "When I was ten", lines: [
              { who: "Elena", es: "¿Dónde vivías de niña?", en: "Where did you live as a little girl?", side: "a" },
              { who: "Sofía", es: "Vivía en Lima con mis abuelos. La casa era pequeña.", en: "I lived in Lima with my grandparents. The house was small.", side: "b" },
              { who: "Elena", es: "¿Qué hacías los sábados?", en: "What did you do on Saturdays?", side: "a" },
              { who: "Sofía", es: "Siempre iba al parque y jugaba con mis primos. A veces veíamos películas.", en: "I always went to the park and played with my cousins. Sometimes we watched films.", side: "b" },
              { who: "Elena", es: "Yo era muy tímida. No hablaba mucho.", en: "I was very shy. I didn't talk much.", side: "a" }
            ]},
            { type: "note", html: "Set phrases: <em>tenía 10 años</em>, <em>eran las tres</em>, <em>hacía calor</em>, <em>llovía</em>. You are not reporting one finished rainstorm yet. You are painting the scene." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the imperfect of hablar.", pairs: [["hablaba", "I / he used to speak"], ["hablabas", "you used to speak"], ["hablábamos", "we used to speak"], ["hablaban", "they used to speak"]] },
        { type: "match", q: "Match the imperfect of ir and ser.", pairs: [["era", "I / he was"], ["eras", "you were"], ["iba", "I / he used to go"], ["íbamos", "we used to go"], ["iban", "they used to go"], ["eran", "they were"]] },
        { type: "match", q: "Match the scene words.", pairs: [["antes", "in the past"], ["de niño", "as a boy"], ["siempre", "always"], ["mientras", "while"], ["a menudo", "often"], ["ya no", "not anymore"]] },
        { type: "type", q: "yo (ser) in the imperfect", answers: ["era"] },
        { type: "type", q: "yo (ir) in the imperfect", answers: ["iba"] },
        { type: "type", q: "tú (hablar) in the imperfect", answers: ["hablabas"] },
        { type: "type", q: "ella (comer) in the imperfect", answers: ["comía"] },
        { type: "type", q: "nosotros (ver) in the imperfect", answers: ["veíamos"] },
        { type: "type", q: "as a child (a boy speaking)", answers: ["de niño"] },
        { type: "mc", q: "«De niña yo ___ en un pueblo.» (vivir)", options: ["viví", "vivía", "vivo", "viviré"], answer: 1 },
        { type: "mc", q: "«Nosotros ___ al colegio andando.» (ir, habit)", options: ["fuimos", "íbamos", "vamos ayer", "iremos"], answer: 1 },
        { type: "mc", q: "«Mi abuelo ___ profesor.» (ser, what he was)", options: ["fue", "era", "es", "ha sido"], answer: 1 },
        { type: "mc", q: "«___ las ocho y hacía frío.»", options: ["Fueron", "Eran", "Son ayer", "Están"], answer: 1 },
        { type: "mc", q: "Which word pushes you toward the imperfect, not a single event?", options: ["ayer a las tres", "de repente", "todos los días", "el lunes pasado"], answer: 2 },
        { type: "mc", q: "«Tú ___ la tele por la tarde.» (ver, habit)", options: ["viste", "veías", "ves", "verás"], answer: 1 },
        { type: "tf", q: "Yo and él share the form hablaba.", answer: true },
        { type: "tf", q: "The imperfect of hay is hubo.", answer: false, explain: "Hubo is a finished there was. The imperfect, for a scene, is había." },
        { type: "order", q: "Build: Before, I lived in Cádiz.", words: ["Cádiz", "en", "vivía", "yo", "Antes"], answer: "Antes yo vivía en Cádiz" }
      ],
      quiz: [
        { type: "mc", q: "Someone asks what you used to do after school. You say:", options: ["Ayer jugué al fútbol.", "Siempre jugaba al fútbol.", "Mañana voy a jugar.", "He jugado al fútbol hoy."], answer: 1 },
        { type: "mc", q: "You describe your old flat, not one afternoon in it. You say:", options: ["El piso era oscuro.", "El piso fue oscuro a las cinco.", "El piso está oscuro ayer.", "El piso ha sido oscuro el martes."], answer: 0 },
        { type: "mc", q: "Which sentence is a habit, not one event?", options: ["El sábado fui al cine.", "De niño iba al cine cada domingo.", "Anoche vi una película.", "Ayer compré palomitas."], answer: 1 },
        { type: "mc", q: "«Cuando ___ pequeña, no me gustaba la sopa.»", options: ["fui", "era", "estuve", "soy ayer"], answer: 1 },
        { type: "mc", q: "The clock in a story, as background: it was quarter past four.", options: ["Fueron las cuatro y cuarto.", "Eran las cuatro y cuarto.", "Son las cuatro y cuarto.", "Están las cuatro."], answer: 1 },
        { type: "mc", q: "Which form is nosotros of hablar in the imperfect?", options: ["hablaba", "hablábamos", "hablaban", "hablasteis"], answer: 1 },
        { type: "mc", q: "«Ya no vivo allí» contrasted with the past means:", options: ["I have never lived there", "I don't live there anymore", "I am moving tomorrow", "I lived there yesterday only"], answer: 1 },
        { type: "mc", q: "Which line is the weather as a scene, not one finished storm?", options: ["Ayer llovió todo el día.", "Llovía y hacía viento.", "Llovió el 3 de mayo.", "Ha llovido esta semana."], answer: 1 },
        { type: "mc", q: "«Mis primos ___ en la misma calle.» (vivir, in those years)", options: ["vivieron el martes", "vivían", "viven ayer", "viviste"], answer: 1 },
        { type: "mc", q: "You and your sister used to walk to school. You say:", options: ["Fuimos andando el lunes.", "Íbamos andando.", "Vamos andando.", "Iremos andando."], answer: 1 },
        { type: "mc", q: "«Tenía doce años» tells you:", options: ["my age now", "how old I was then", "the date of my birthday party", "that I turned twelve yesterday"], answer: 1 },
        { type: "tf", q: "Íbamos is the nosotros imperfect of ir.", answer: true },
        { type: "tf", q: "A single finished action with ayer normally takes the imperfect.", answer: false, explain: "Ayer plus one finished action takes the preterite. The imperfect is for habits, descriptions, and background." },
        { type: "tf", q: "Veía is the imperfect of ver, and it is regular in that tense.", answer: true },
        { type: "type", q: "Translate: When I was a child I played in the street.", answers: ["cuando era niño jugaba en la calle", "de niño jugaba en la calle"] },
        { type: "type", q: "Translate: She lived in Lima.", answers: ["ella vivía en Lima", "vivía en Lima"] },
        { type: "type", q: "Translate: We used to go to the park.", answers: ["íbamos al parque"] },
        { type: "type", q: "Translate: It was hot.", answers: ["hacía calor"] },
        { type: "type", q: "Translate: It was three o'clock.", answers: ["eran las tres"] },
        { type: "order", q: "Build: My grandmother was very kind.", words: ["amable", "muy", "era", "abuela", "Mi"], answer: "Mi abuela era muy amable" }
      ]
    },
    {
      id: "u4",
      num: 4,
      title: "Aquella noche",
      subtitle: "Preterite and imperfect in the same story",
      hours: "7",
      canDo: [
        "Choose the preterite for a finished event and the imperfect for the background",
        "Tell a short story with mientras and de repente",
        "Keep habits in the imperfect and one-off events in the preterite"
      ],
      lessons: [
        {
          id: "u4l1",
          title: "The scene and the event",
          blocks: [
            { type: "p", html: "A story needs both pasts. The imperfect is the film running in the background. The preterite is what happens to interrupt it, or the event you are counting as done." },
            { type: "table", caption: "Which past?", headers: ["Imperfect", "Preterite"], rows: [
              ["habit: siempre desayunaba", "one time: ayer desayuné"],
              ["description: la casa era grande", "a change: la casa fue un desastre esa noche"],
              ["background: llovía", "the event: de repente sonó el teléfono"],
              ["time and age: eran las dos, tenía 20 años", "a completed action: salí, llegué, dije"],
              ["mientras + ongoing", "the thing that cuts in"]
            ]},
            { type: "note", html: "The textbook pair: <em>Dormía cuando sonó el teléfono.</em> <em>Dormía</em> was already going on. <em>Sonó</em> happened once. Same idea: <em>Llovía cuando salí.</em> <em>Caminaba por la calle cuando vi a Lucía.</em>" },
            { type: "vocab", title: "Story glue", items: [
              { es: "de repente", en: "suddenly" },
              { es: "mientras", en: "while" },
              { es: "cuando", en: "when" },
              { es: "en ese momento", en: "at that moment" },
              { es: "entonces", en: "then / so" },
              { es: "al final", en: "in the end" },
              { es: "por eso", en: "that's why" },
              { es: "resulta que", en: "it turns out that" }
            ]}
          ]
        },
        {
          id: "u4l2",
          title: "One evening",
          blocks: [
            { type: "dialogue", title: "The night the lights went out", lines: [
              { who: "Hugo", es: "¿Qué pasó anoche? Te llamé y no contestaste.", en: "What happened last night? I called you and you didn't answer.", side: "a" },
              { who: "Eva", es: "Estaba en casa. Leía en el sofá y llovía mucho.", en: "I was at home. I was reading on the sofa and it was raining hard.", side: "b" },
              { who: "Hugo", es: "¿Y luego?", en: "And then?", side: "a" },
              { who: "Eva", es: "De repente se fue la luz. Busqué una vela, pero no la encontré.", en: "Suddenly the power went out. I looked for a candle, but I didn't find it.", side: "b" },
              { who: "Hugo", es: "Por eso no contestaste.", en: "That's why you didn't answer.", side: "a" },
              { who: "Eva", es: "Sí. Al final me dormí en el sofá.", en: "Yes. In the end I fell asleep on the sofa.", side: "b" }
            ]},
            { type: "p", html: "Read it again and sort the verbs. Background: <em>estaba, leía, llovía</em>. Events: <em>llamé, contestaste, se fue, busqué, encontré, me dormí</em>. If you can sort those, you can tell the story yourself." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the story glue.", pairs: [["de repente", "suddenly"], ["mientras", "while"], ["en ese momento", "at that moment"], ["por eso", "that's why"], ["entonces", "then / so"], ["resulta que", "it turns out that"]] },
        { type: "match", q: "Match each clue to the tense it prefers.", pairs: [["siempre, as a habit", "imperfect for a habit"], ["ayer, one finished time", "preterite for one event"], ["de repente", "preterite for a sudden event"], ["a description of the house", "imperfect for a description"], ["llegué a las seis", "preterite for an arrival"]] },
        { type: "match", q: "Match the background verbs.", pairs: [["llovía", "it was raining"], ["dormía", "I was sleeping"], ["leía", "I was reading"], ["estaba", "I was / it was (state)"], ["hacía frío", "it was cold"]] },
        { type: "type", q: "while I was reading (yo, leer, imperfect)", answers: ["mientras leía"] },
        { type: "type", q: "suddenly", answers: ["de repente"] },
        { type: "type", q: "it was raining (imperfect)", answers: ["llovía"] },
        { type: "type", q: "he arrived (preterite of llegar)", answers: ["llegó"] },
        { type: "type", q: "I was sleeping (yo)", answers: ["dormía"] },
        { type: "type", q: "every day (the habit marker)", answers: ["todos los días"] },
        { type: "mc", q: "«___ cuando llegaste.» (yo, dormir)", options: ["Dormí", "Dormía", "He dormido", "Duermo"], answer: 1 },
        { type: "mc", q: "«De repente ___ el teléfono.» (sonar, one event)", options: ["sonaba siempre", "sonó", "sonaba de niño", "ha sonado cada día"], answer: 1 },
        { type: "mc", q: "«Mientras ella ___, yo cocinaba.» (estudiar)", options: ["estudió", "estudiaba", "estudia", "estudiará"], answer: 1 },
        { type: "mc", q: "Which verb is the event, not the scene?", options: ["Era de noche.", "Llovía.", "Entré en el bar.", "Había poca gente."], answer: 2 },
        { type: "mc", q: "«Ayer ___ un libro.» (comprar, one time)", options: ["compraba", "compré", "compro", "compraba siempre ayer"], answer: 1 },
        { type: "mc", q: "«De pequeño ___ tarde.» (acostarse, habit)", options: ["me acosté", "me acostaba", "me acuesto", "me acostaré"], answer: 1 },
        { type: "tf", q: "Mientras usually introduces something that was already going on.", answer: true },
        { type: "tf", q: "De repente usually introduces the imperfect.", answer: false, explain: "De repente introduces the interruption, so the verb is normally preterite." },
        { type: "order", q: "Build: It was raining when I left.", words: ["salí", "cuando", "Llovía"], answer: "Llovía cuando salí" }
      ],
      quiz: [
        { type: "mc", q: "You were reading and then the doorbell rang once. You say:", options: ["Leía y de repente sonó el timbre.", "Leí cuando sonaba el timbre todos los días.", "Leo y sonó.", "He leído cuando sonaba."], answer: 0 },
        { type: "mc", q: "Which sentence mixes the tenses correctly?", options: ["Dormía cuando sonó el teléfono.", "Dormí cuando sonaba el teléfono.", "He dormido cuando sonó.", "Sonó mientras dormí."], answer: 0 },
        { type: "mc", q: "Last Tuesday, one visit, finished. You say:", options: ["Los martes visitaba a mi tía.", "El martes visité a mi tía.", "Visitaba a mi tía el martes a las cinco en punto una sola acción nueva.", "Visito a mi tía ayer."], answer: 1 },
        { type: "mc", q: "The lights were on, music was playing, and then you left. Which verb is preterite?", options: ["Había luz.", "Sonaba la música.", "Salí.", "Era tarde."], answer: 2 },
        { type: "mc", q: "A habit from childhood, not one Saturday:", options: ["El sábado pasado jugué en el parque.", "De niño jugaba en el parque.", "Ayer jugué una hora.", "Jugué el 2 de mayo."], answer: 1 },
        { type: "mc", q: "«No contesté porque ___ en la ducha.»", options: ["estuve", "estaba", "estoy", "estaré"], answer: 1 },
        { type: "mc", q: "You want the reason after a story. You start with:", options: ["De repente", "Por eso", "Mientras", "Antes de niño"], answer: 1 },
        { type: "mc", q: "Which one is only background weather?", options: ["Llovió cinco minutos y paró.", "Llovía cuando salimos.", "Ayer llovió y se acabó a las tres.", "Llovió el jueves por la tarde una hora."], answer: 1 },
        { type: "mc", q: "«Busqué la vela, pero no la encontré.» Both verbs are:", options: ["imperfect, because it is a story", "preterite, because both actions finished", "present", "future"], answer: 1 },
        { type: "mc", q: "Someone says «Siempre desayunaba en casa». They are talking about:", options: ["this morning only", "what they used to do", "a plan", "a single Tuesday"], answer: 1 },
        { type: "mc", q: "Pick the sentence that cannot be a one-time event.", options: ["Anoche me dormí a las once.", "De repente se fue la luz.", "En aquella época trabajaba de noche.", "Ayer perdí el tren."], answer: 2 },
        { type: "tf", q: "Two verbs can be preterite in a row when both actions are finished events.", answer: true },
        { type: "tf", q: "Era de noche is a finished action you count once.", answer: false, explain: "It sets the scene, so it is imperfect. The events inside the night are preterite." },
        { type: "tf", q: "Llovía cuando salí puts the weather in the imperfect and the leaving in the preterite.", answer: true },
        { type: "type", q: "Translate: She was reading when I arrived.", answers: ["ella leía cuando llegué", "leía cuando llegué"] },
        { type: "type", q: "Translate: I always used to have breakfast at home.", answers: ["siempre desayunaba en casa"] },
        { type: "type", q: "Translate: Yesterday I bought a book.", answers: ["ayer compré un libro"] },
        { type: "type", q: "Translate: While we were sleeping, the phone rang.", answers: ["mientras dormíamos, sonó el teléfono", "mientras dormíamos sonó el teléfono"] },
        { type: "type", q: "Translate: Suddenly it started to rain.", answers: ["de repente empezó a llover"] },
        { type: "order", q: "Build: I was at home when you called.", words: ["llamaste", "cuando", "casa", "en", "Estaba"], answer: "Estaba en casa cuando llamaste" }
      ]
    },
    {
      id: "u5",
      num: 5,
      title: "Ya lo he hecho",
      subtitle: "The present perfect: already, ever, never",
      hours: "6",
      canDo: [
        "Build haber + past participle",
        "Use ya, todavía no, alguna vez, and nunca",
        "Talk about life experience and, in Spain, about today and this week"
      ],
      lessons: [
        {
          id: "u5l1",
          title: "Haber plus the participle",
          blocks: [
            { type: "p", html: "The <em>pretérito perfecto</em> is <em>haber</em> in the present plus a participle. <em>Haber</em> changes with the person. The participle does not: <em>he comido, has comido, ha comido</em>." },
            { type: "table", caption: "haber — present", headers: ["", "haber"], rows: [
              ["yo", "he"],
              ["tú", "has"],
              ["él / ella / usted", "ha"],
              ["nosotros", "hemos"],
              ["vosotros", "habéis"],
              ["ellos / ustedes", "han"]
            ]},
            { type: "table", caption: "Participles", headers: ["Infinitive", "Participle", "Watch this"], rows: [
              ["hablar", "hablado", "regular -ado"],
              ["comer / vivir", "comido / vivido", "regular -ido"],
              ["hacer", "hecho", "irregular"],
              ["ver", "visto", "irregular"],
              ["decir", "dicho", "irregular"],
              ["escribir", "escrito", "irregular"],
              ["poner", "puesto", "irregular"],
              ["volver", "vuelto", "irregular"],
              ["abrir", "abierto", "irregular"],
              ["romper", "roto", "irregular"]
            ]},
            { type: "note", html: "Do not mix <em>haber</em> with <em>tener</em>. <em>He hecho la cama</em> means I have made the bed. <em>Tengo hecho</em> is a different, later pattern. Negative: <em>no he comido</em>. The <em>no</em> goes before <em>haber</em>." }
          ]
        },
        {
          id: "u5l2",
          title: "Already, ever, and the Spain / America split",
          blocks: [
            { type: "vocab", title: "The words that come with this tense", items: [
              { es: "ya", en: "already" },
              { es: "todavía no", en: "not yet" },
              { es: "alguna vez", en: "ever / at some point" },
              { es: "nunca", en: "never" },
              { es: "esta semana", en: "this week" },
              { es: "hoy", en: "today" },
              { es: "¿has estado en…?", en: "have you been to…?" },
              { es: "nunca he estado en…", en: "I have never been to…" }
            ]},
            { type: "p", html: "Two uses. Everywhere: life experience up to now. <em>¿Has estado alguna vez en México? Nunca he comido insectos.</em> In most of Spain, also the recent past that still feels connected to today: <em>Hoy he desayunado tarde. Esta semana he trabajado mucho.</em>" },
            { type: "note", html: "In much of Latin America that recent past is preterite: <em>Hoy desayuné tarde.</em> Both are correct in their place. For a life experience, the perfect is safe on both sides of the Atlantic: <em>He estado en Lisboa dos veces.</em>" },
            { type: "dialogue", title: "Have you ever…?", lines: [
              { who: "Pablo", es: "¿Has estado alguna vez en Oaxaca?", en: "Have you ever been to Oaxaca?", side: "a" },
              { who: "Lina", es: "No, nunca he estado. ¿Y tú?", en: "No, I have never been. And you?", side: "b" },
              { who: "Pablo", es: "Sí, he ido dos veces. He comido mole y he visto Monte Albán.", en: "Yes, I have been twice. I have eaten mole and I have seen Monte Albán.", side: "a" },
              { who: "Lina", es: "Yo todavía no he hecho la maleta para este viaje.", en: "I still haven't packed for this trip.", side: "b" },
              { who: "Pablo", es: "Yo ya he hecho la reserva.", en: "I have already booked.", side: "a" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match haber.", pairs: [["he", "I have"], ["has", "you have"], ["ha", "he/she has"], ["hemos", "we have"], ["han", "they have"]] },
        { type: "match", q: "Match the irregular participles.", pairs: [["hecho", "done / made"], ["visto", "seen"], ["dicho", "said"], ["escrito", "written"], ["puesto", "put"], ["roto", "broken"]] },
        { type: "match", q: "Match the perfect markers.", pairs: [["ya", "already"], ["todavía no", "not yet"], ["alguna vez", "ever"], ["nunca", "never"], ["esta semana", "this week"], ["hoy", "today"]] },
        { type: "type", q: "I have eaten. (yo)", answers: ["he comido"] },
        { type: "type", q: "you have seen (tú)", answers: ["has visto"] },
        { type: "type", q: "she has said", answers: ["ha dicho"] },
        { type: "type", q: "we have been (estar)", answers: ["hemos estado"] },
        { type: "type", q: "ever / at some point", answers: ["alguna vez"] },
        { type: "type", q: "not yet", answers: ["todavía no"] },
        { type: "mc", q: "«Yo ya ___ el correo.» (escribir)", options: ["he escrito", "he escribido", "he escribado", "he escribir"], answer: 0 },
        { type: "mc", q: "«¿___ estado en Perú?» (tú)", options: ["Has", "Ha", "He", "Han"], answer: 0 },
        { type: "mc", q: "«Ellos no ___ vuelto.»", options: ["han", "ha", "hemos", "has"], answer: 0 },
        { type: "mc", q: "Which of these participles is not a real form?", options: ["abierto", "vuelto", "hacido", "roto"], answer: 2 },
        { type: "mc", q: "«Todavía no he comido» means:", options: ["I have already eaten", "I have not eaten yet", "I never eat", "I ate yesterday"], answer: 1 },
        { type: "mc", q: "Which sentence is a life experience?", options: ["He estado en Lisboa dos veces.", "Estoy en Lisboa ahora.", "Voy a estar en Lisboa.", "Estaba en Lisboa de niño."], answer: 0 },
        { type: "tf", q: "The participle in he comido does not change for yo or ella.", answer: true },
        { type: "tf", q: "No goes between haber and the participle: he no comido.", answer: false, explain: "No comes first: no he comido." },
        { type: "order", q: "Build: I have seen that film.", words: ["película", "esa", "visto", "He"], answer: "He visto esa película" }
      ],
      quiz: [
        { type: "mc", q: "A friend asks if you have ever tried ceviche. You have. You say:", options: ["Nunca he probado ceviche.", "Sí, he probado ceviche.", "De niño probaba ceviche.", "Pruebo ceviche ahora."], answer: 1 },
        { type: "mc", q: "You still have not packed. You say:", options: ["Ya he hecho la maleta.", "Todavía no he hecho la maleta.", "Hago la maleta ayer.", "Hice la maleta nunca."], answer: 1 },
        { type: "mc", q: "Which question asks about life experience?", options: ["¿Has estado alguna vez en México?", "¿Estás en México ahora?", "¿Vas a estar en México?", "¿Dónde está México?"], answer: 0 },
        { type: "mc", q: "«Hemos ___ la reserva.» (hacer)", options: ["hacido", "hecho", "hacemos", "haciendo"], answer: 1 },
        { type: "mc", q: "In Madrid, talking about breakfast earlier today, a natural line is:", options: ["Hoy he desayunado tarde.", "Hoy desayunaba tarde.", "Hoy desayuno tarde.", "Mañana he desayunado tarde."], answer: 0 },
        { type: "mc", q: "In Mexico City, the same breakfast often sounds like:", options: ["Hoy desayuné tarde.", "Hoy desayunaba tarde.", "Hoy desayuno tarde.", "Mañana desayuné tarde."], answer: 0 },
        { type: "mc", q: "Which participle of escribir is right?", options: ["escribido", "escrito", "escrido", "escribado"], answer: 1 },
        { type: "mc", q: "«Nunca he estado en Japón» means:", options: ["I have been to Japan", "I have never been to Japan", "I am in Japan", "I used to live in Japan"], answer: 1 },
        { type: "mc", q: "The reservation is already done. You say:", options: ["Todavía no he reservado.", "Ya he reservado.", "Reservo mañana.", "Reservaba cada mañana."], answer: 1 },
        { type: "mc", q: "Which present-perfect sentence is wrong?", options: ["Has visto el correo.", "Ha dicho la verdad.", "He puesto las llaves aquí.", "He decido salir."], answer: 3 },
        { type: "mc", q: "«Esta semana he trabajado mucho» connects the work to:", options: ["a habit from childhood", "a period that is still this week", "next year", "a single hour in 1999"], answer: 1 },
        { type: "tf", q: "He, has, and ha are three forms of haber, not of ser.", answer: true },
        { type: "tf", q: "The participle agrees with the person: he comido, has comida.", answer: false, explain: "With haber, the participle stays fixed: has comido, ha comido." },
        { type: "tf", q: "Alguna vez belongs in questions about whether something has happened in your life.", answer: true },
        { type: "type", q: "Translate: I have been to Madrid.", answers: ["he estado en Madrid"] },
        { type: "type", q: "Translate: I have not seen that film.", answers: ["no he visto esa película"] },
        { type: "type", q: "Translate: Have you ever been to Mexico? (tú)", answers: ["¿has estado alguna vez en México?", "has estado alguna vez en México"] },
        { type: "type", q: "Translate: I have not eaten yet.", answers: ["todavía no he comido"] },
        { type: "type", q: "Translate: We have made the reservation.", answers: ["hemos hecho la reserva"] },
        { type: "order", q: "Build: I have never been to Chile.", words: ["Chile", "en", "estado", "he", "Nunca"], answer: "Nunca he estado en Chile" }
      ]
    },
    {
      id: "u6",
      num: 6,
      title: "Se lo dije",
      subtitle: "Object pronouns: it, him, her, them",
      hours: "7",
      canDo: [
        "Replace a thing with lo, la, los, or las",
        "Use le and les for the person who receives something",
        "Combine them: se lo, se la",
        "Put the pronoun before a conjugated verb, or on the end of an infinitive"
      ],
      lessons: [
        {
          id: "u6l1",
          title: "Lo, la, le",
          blocks: [
            { type: "p", html: "Once the noun is already in the conversation, Spanish does not repeat it. A pronoun stands in. Direct object pronouns replace the thing (or person) the verb acts on. Indirect object pronouns mark who receives it." },
            { type: "table", caption: "Direct object — the thing", headers: ["", "pronoun", "example"], rows: [
              ["me", "me", "¿Me llamas?"],
              ["you (tú)", "te", "Te escucho."],
              ["him / it (m.)", "lo", "El libro: lo leo."],
              ["her / it (f.)", "la", "La casa: la veo."],
              ["us", "nos", "Nos invitan."],
              ["you all (Spain)", "os", "Os espero."],
              ["them (m.)", "los", "Los veo."],
              ["them (f.)", "las", "Las compro."]
            ]},
            { type: "table", caption: "Indirect object — who it is for", headers: ["", "pronoun", "example"], rows: [
              ["to me", "me", "Me das el libro."],
              ["to you", "te", "Te escribo."],
              ["to him / her / usted", "le", "Le doy las llaves."],
              ["to us", "nos", "Nos explican la ruta."],
              ["to you all (Spain)", "os", "Os mando el mapa."],
              ["to them / ustedes", "les", "Les compro un regalo."]
            ]},
            { type: "note", html: "In much of Spain you will hear <em>le</em> for a man as a direct object: <em>Le vi</em> (I saw him). Textbooks and most of Latin America use <em>lo vi</em>. Both exist. This course uses <em>lo / la</em> for the direct object and <em>le / les</em> for the recipient. People still need <em>a</em>: <em>Le doy el libro a Ana. La veo a ella.</em>" }
          ]
        },
        {
          id: "u6l2",
          title: "Two pronouns, and where they sit",
          blocks: [
            { type: "p", html: "When both pronouns appear, the person comes first: <em>me lo, te la</em>. But <em>le / les</em> plus <em>lo / la / los / las</em> turns into <em>se</em>: <em>se lo doy</em>, never <em>le lo doy</em>. <em>Se</em> can mean him, her, them, or you (usted)." },
            { type: "table", caption: "Where the pronoun goes", headers: ["Pattern", "Example"], rows: [
              ["before a conjugated verb", "Lo compré. No lo tengo."],
              ["on an infinitive", "Voy a comprarlo. / Lo voy a comprar."],
              ["on a gerund", "Estoy leyéndolo. / Lo estoy leyendo."],
              ["both pronouns", "Te lo mando. Se la di a Luis."]
            ]},
            { type: "note", html: "Both positions are correct with an infinitive: <em>quiero verlo</em> and <em>lo quiero ver</em>. Pick one and be consistent inside a sentence. The accent on <em>leyéndolo</em> keeps the stress where <em>leyendo</em> had it." },
            { type: "dialogue", title: "Can you send it to me?", lines: [
              { who: "Nora", es: "¿Tienes el mapa? ¿Me lo pasas?", en: "Do you have the map? Can you pass it to me?", side: "a" },
              { who: "Óscar", es: "Sí, te lo mando ahora. ¿Se lo mando también a Ana?", en: "Yes, I'll send it to you now. Shall I send it to Ana too?", side: "b" },
              { who: "Nora", es: "Sí, díselo. Ayer se lo pedí y no me contestó.", en: "Yes, tell her. I asked her for it yesterday and she didn't reply.", side: "a" },
              { who: "Óscar", es: "Ya se lo he dicho. No lo encuentra.", en: "I've already told her. She can't find it.", side: "b" }
            ]},
            { type: "p", html: "<em>Díselo</em> is a command plus two pronouns. Commands are the next unit. For now, notice <em>se lo</em>: the map to her." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the direct object pronouns.", pairs: [["lo", "him / it (masculine)"], ["la", "her / it (feminine)"], ["los", "them (masculine)"], ["las", "them (feminine)"], ["nos", "us"], ["te", "you (tú), object"]] },
        { type: "match", q: "Match the indirect object pronouns.", pairs: [["me", "to me"], ["te", "to you"], ["le", "to him / her / usted"], ["les", "to them / ustedes"], ["nos", "to us"]] },
        { type: "match", q: "Match the combinations.", pairs: [["me lo da", "he gives it to me"], ["te la mando", "I send it (f.) to you"], ["se lo dije", "I said it to him/her"], ["se las compré", "I bought them (f.) for him/her"], ["nos escriben", "they write to us"]] },
        { type: "type", q: "I saw it (masculine) yesterday. Use lo.", answers: ["lo vi ayer"] },
        { type: "type", q: "I bought it (feminine). Use la.", answers: ["la compré"] },
        { type: "type", q: "She wrote to me.", answers: ["me escribió", "ella me escribió"] },
        { type: "type", q: "I gave it to him. (se lo)", answers: ["se lo di"] },
        { type: "type", q: "I spoke to them. (les)", answers: ["les hablé"] },
        { type: "type", q: "He called us.", answers: ["nos llamó"] },
        { type: "mc", q: "«El informe está aquí. ¿___ lees?»", options: ["Lo", "La", "Le", "Les"], answer: 0 },
        { type: "mc", q: "«Las entradas son caras. No ___ compro.»", options: ["lo", "la", "los", "las"], answer: 3 },
        { type: "mc", q: "«A Carmen ___ doy las llaves.»", options: ["lo", "la", "le", "les"], answer: 2 },
        { type: "mc", q: "Which combination is correct?", options: ["Le lo dije.", "Se lo dije.", "Lo se dije.", "Les lo dije."], answer: 1 },
        { type: "mc", q: "Both are correct. Which pair?", options: ["Quiero verlo / Lo quiero ver.", "Quiero lo ver / Ver lo quiero.", "Lo quiero verlo.", "Quiero ver lo el libro."], answer: 0 },
        { type: "mc", q: "«No ___ entiendo.» (a male friend, the person)", options: ["lo", "la", "les", "las"], answer: 0 },
        { type: "tf", q: "Se lo can mean I gave it to him, to her, to them, or to you (usted).", answer: true },
        { type: "tf", q: "The object pronoun goes after a simple conjugated verb: compré lo.", answer: false, explain: "It goes before: lo compré. It attaches to an infinitive, a gerund, or an affirmative command." },
        { type: "order", q: "Build: I bought it for you yesterday.", words: ["ayer", "compré", "lo", "Te"], answer: "Te lo compré ayer" }
      ],
      quiz: [
        { type: "mc", q: "The waiter puts down a menu (la carta). You already know the noun. You say you don't need it:", options: ["No la necesito.", "No lo necesito.", "No le necesito.", "No las necesito."], answer: 0 },
        { type: "mc", q: "You are handing your friend his books. You say:", options: ["Te las doy.", "Te lo doy.", "Te los doy.", "Te la doy."], answer: 2 },
        { type: "mc", q: "Ana asked for the address. You sent it to her. You say:", options: ["Le la mandé.", "Se la mandé.", "La se mandé.", "Lo le mandé."], answer: 1 },
        { type: "mc", q: "Which pronoun sentence is wrong?", options: ["Me lo explicaron.", "Te la presento mañana.", "Les voy a escribir.", "Le lo compré."], answer: 3 },
        { type: "mc", q: "You want to see the film, and the pronoun sits on the infinitive. You say:", options: ["Quiero verla.", "Quiero la ver.", "La quiero verla.", "Ver quiero la."], answer: 0 },
        { type: "mc", q: "Two colleagues, ustedes. You write to them often. You say:", options: ["Lo escribo a menudo.", "Les escribo a menudo.", "Las escribo a menudo.", "Se escribo a menudo."], answer: 1 },
        { type: "mc", q: "«Ya se lo he dicho» — se refers to:", options: ["only the speaker", "the person who received the information", "the past tense itself", "a reflexive morning routine"], answer: 1 },
        { type: "mc", q: "The shoes (los zapatos) don't fit. You tell the assistant:", options: ["No las quiero.", "No los quiero.", "No le quiero.", "No lo quiero."], answer: 1 },
        { type: "mc", q: "Someone offers you the salt. A natural request you already heard in the dialogue is:", options: ["¿Me lo pasas?", "¿Lo me pasas?", "¿Pasas me lo?", "¿Me pasas lo?"], answer: 0 },
        { type: "mc", q: "You did not understand the explanation (la explicación). You say:", options: ["No lo entendí.", "No la entendí.", "No le entendí.", "No las entendí."], answer: 1 },
        { type: "mc", q: "«A mis padres ___ compré un regalo.»", options: ["lo", "la", "le", "les"], answer: 3 },
        { type: "tf", q: "With an infinitive, lo quiero ver and quiero verlo are both grammatical.", answer: true },
        { type: "tf", q: "Les becomes se only when a direct object pronoun follows it.", answer: true },
        { type: "tf", q: "La replaces a masculine noun.", answer: false, explain: "La replaces a feminine singular noun. Lo is masculine singular." },
        { type: "type", q: "Translate: I'll give it to you tomorrow. (tú, masculine it)", answers: ["te lo doy mañana"] },
        { type: "type", q: "Translate: I bought it (feminine) for her yesterday.", answers: ["se la compré ayer"] },
        { type: "type", q: "Translate: I don't understand it (masculine).", answers: ["no lo entiendo"] },
        { type: "type", q: "Translate: They want to see us.", answers: ["quieren vernos", "nos quieren ver"] },
        { type: "type", q: "Translate: Tell it to me. (one word, command)", answers: ["dímelo"] },
        { type: "order", q: "Build: I already said it to Luis.", words: ["Luis", "a", "dije", "lo", "se", "Ya"], answer: "Ya se lo dije a Luis" }
      ]
    },
    {
      id: "u7",
      num: 7,
      title: "Hazlo",
      subtitle: "Commands: tú, usted, and don't",
      hours: "6–7",
      canDo: [
        "Give a tú command, affirmative and negative",
        "Use the short irregulars: di, haz, ve, pon, sal, sé, ten, ven",
        "Make a polite usted command",
        "Attach pronouns to an affirmative command and put them before a negative one"
      ],
      lessons: [
        {
          id: "u7l1",
          title: "Tell someone, and tell them not to",
          blocks: [
            { type: "p", html: "A <em>tú</em> command in the affirmative is the same as the él/ella form of the present: <em>hablas → habla</em>, <em>comes → come</em>, <em>escribes → escribe</em>. The negative is a different pattern. Learn it as a pair, not as a theory chapter." },
            { type: "table", caption: "tú commands", headers: ["Infinitive", "Do it", "Don't"], rows: [
              ["hablar", "habla", "no hables"],
              ["comer", "come", "no comas"],
              ["escribir", "escribe", "no escribas"],
              ["cerrar", "cierra", "no cierres"],
              ["pedir", "pide", "no pidas"],
              ["dormir", "duerme", "no duermas"]
            ]},
            { type: "table", caption: "Irregular affirmative tú — learn this list", headers: ["Do it", "Don't", "Infinitive"], rows: [
              ["di", "no digas", "decir"],
              ["haz", "no hagas", "hacer"],
              ["ve", "no vayas", "ir"],
              ["pon", "no pongas", "poner"],
              ["sal", "no salgas", "salir"],
              ["sé", "no seas", "ser"],
              ["ten", "no tengas", "tener"],
              ["ven", "no vengas", "venir"]
            ]},
            { type: "note", html: "The vowel flips in the negative: <em>-ar</em> verbs take <em>e</em> (<em>no hables</em>), <em>-er</em> and <em>-ir</em> take <em>a</em> (<em>no comas, no escribas</em>). <em>Ve</em> is <em>ir</em>. The affirmative of <em>ver</em> is also <em>ve</em>, and the negative is <em>no veas</em>. Context tells them apart: <em>ve a casa</em> is go, <em>ve la película</em> is watch." }
          ]
        },
        {
          id: "u7l2",
          title: "Usted, and pronouns on the command",
          blocks: [
            { type: "p", html: "With <em>usted</em>, affirmative and negative use the same stem. <em>Hable. No hable. Coma. No coma. Escriba. Ponga. Diga.</em> For <em>ustedes</em>, add <em>-n</em>: <em>hablen, pongan, no digan</em>." },
            { type: "table", caption: "Pronouns on commands", headers: ["", "Example"], rows: [
              ["affirmative, attached", "dímelo, cómpralo, siéntate"],
              ["negative, in front", "no me lo digas, no lo compres, no te sientes"],
              ["usted", "dígamelo, no me lo diga"]
            ]},
            { type: "note", html: "Adding a pronoun can force an accent so the stress stays put: <em>compra → cómpralo</em>, <em>di → dime</em> (no accent, the stress already lands in the right place), <em>di + me + lo → dímelo</em>. You do not need every accent on day one. You do need <em>dime, hazlo, no lo hagas</em>." },
            { type: "dialogue", title: "In a shared kitchen", lines: [
              { who: "Rita", es: "Cierra la ventana, por favor. Hace frío.", en: "Close the window, please. It's cold.", side: "a" },
              { who: "Iván", es: "Ahora la cierro. Pon la mesa tú, ¿no?", en: "I'll close it now. You set the table, all right?", side: "b" },
              { who: "Rita", es: "Vale. No comas eso: es para esta noche. Y dime la verdad: ¿has comprado el pan?", en: "OK. Don't eat that: it's for tonight. And tell me the truth: have you bought the bread?", side: "a" },
              { who: "Iván", es: "No. Ve tú, que estás vestido. Ten cuidado, llueve.", en: "No. You go, you're dressed. Be careful, it's raining.", side: "b" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the affirmative tú commands.", pairs: [["habla", "speak"], ["come", "eat"], ["escribe", "write"], ["cierra", "close"], ["abre", "open"], ["escucha", "listen"]] },
        { type: "match", q: "Match the irregular tú commands.", pairs: [["di", "say / tell"], ["haz", "do / make"], ["ve", "go"], ["pon", "put"], ["sal", "leave / go out"], ["ven", "come"]] },
        { type: "match", q: "Match the negative commands.", pairs: [["no hables", "don't speak"], ["no comas", "don't eat"], ["no vayas", "don't go"], ["no digas", "don't say"], ["no salgas", "don't leave"], ["no seas", "don't be"]] },
        { type: "type", q: "Speak more quietly. (tú, affirmative)", answers: ["habla más bajo"] },
        { type: "type", q: "Don't speak. (tú)", answers: ["no hables"] },
        { type: "type", q: "Do the bed / make the bed. (tú, hacer)", answers: ["haz la cama"] },
        { type: "type", q: "Come here. (tú)", answers: ["ven aquí"] },
        { type: "type", q: "Set the table. (tú, poner)", answers: ["pon la mesa"] },
        { type: "type", q: "Tell the truth. (tú, decir, affirmative)", answers: ["di la verdad"] },
        { type: "mc", q: "«___ la puerta, por favor.» (tú, cerrar)", options: ["Cierra", "Cierras", "Cierres", "Cerraste"], answer: 0 },
        { type: "mc", q: "«No ___ eso.» (tú, comer)", options: ["come", "comas", "comes", "comió"], answer: 1 },
        { type: "mc", q: "Which affirmative command is irregular?", options: ["habla", "come", "haz", "escribe"], answer: 2 },
        { type: "mc", q: "«No ___ al centro ahora.» (tú, ir)", options: ["ve", "vayas", "vas", "ir"], answer: 1 },
        { type: "mc", q: "Polite, to a stranger: «___ aquí, por favor.» (usted, poner)", options: ["Pon", "Pone", "Ponga", "Pongas"], answer: 2 },
        { type: "mc", q: "Where does the pronoun go in a negative command?", options: ["attached: no dilo", "in front: no lo digas", "after the subject only", "it disappears"], answer: 1 },
        { type: "tf", q: "The affirmative tú command of a regular verb matches the él form of the present.", answer: true },
        { type: "tf", q: "No hables uses the same form as the affirmative habla.", answer: false, explain: "The negative flips the vowel: no hables. Habla is only the affirmative." },
        { type: "order", q: "Build: Don't speak so loud.", words: ["alto", "tan", "hables", "No"], answer: "No hables tan alto" }
      ],
      quiz: [
        { type: "mc", q: "You want a friend to shut the door. You say:", options: ["Cierras la puerta.", "Cierra la puerta.", "Cerraste la puerta.", "No cierra la puerta."], answer: 1 },
        { type: "mc", q: "The cake is for later. You stop your brother:", options: ["Come eso.", "No comas eso.", "No come eso.", "Comiste eso."], answer: 1 },
        { type: "mc", q: "Which line is a command, not a present statement?", options: ["Tú sales a las ocho.", "Sal a las ocho.", "Tú saliste a las ocho.", "Tú vas a salir."], answer: 1 },
        { type: "mc", q: "You need the irregular «do it». You say:", options: ["Hace los deberes.", "Haz los deberes.", "Hagas los deberes.", "Hiciste los deberes."], answer: 1 },
        { type: "mc", q: "A guest is leaving and you want them to come back. You say:", options: ["Ven mañana.", "Vienes mañana.", "Vengas mañana.", "Viniste mañana."], answer: 0 },
        { type: "mc", q: "At a hotel desk, to the receptionist (usted):", options: ["Pon la maleta aquí.", "Ponga la maleta aquí.", "Pones la maleta aquí.", "Pongas la maleta aquí."], answer: 1 },
        { type: "mc", q: "You want the salt, pronoun attached. You say:", options: ["Pásame la sal.", "Pasa me la sal.", "No me la pases todavía.", "Me pasas la sal."], answer: 0 },
        { type: "mc", q: "Which negative is right?", options: ["No digas eso.", "No di eso.", "No dice eso.", "No decas eso."], answer: 0 },
        { type: "mc", q: "«No lo compres» means:", options: ["buy it", "don't buy it", "you bought it", "I don't buy it"], answer: 1 },
        { type: "mc", q: "You are talking to two guests, ustedes, and you want them to sit down. You say:", options: ["Siéntense.", "Siéntate.", "Se sientan.", "Sentados."], answer: 0 },
        { type: "mc", q: "Which pair is wrong?", options: ["ven / no vengas", "sal / no salgas", "haz / no hagas", "ve / no ves"], answer: 3 },
        { type: "tf", q: "Dime attaches the pronoun because the command is affirmative.", answer: true },
        { type: "tf", q: "No me lo digas puts the pronouns after the verb.", answer: false, explain: "Negative commands keep pronouns in front: no me lo digas." },
        { type: "tf", q: "Ponga is the usted command of poner.", answer: true },
        { type: "type", q: "Translate: Close the door. (tú)", answers: ["cierra la puerta"] },
        { type: "type", q: "Translate: Don't eat that. (tú)", answers: ["no comas eso"] },
        { type: "type", q: "Translate: Tell me the truth. (tú)", answers: ["dime la verdad"] },
        { type: "type", q: "Translate: Put the suitcase here. (usted)", answers: ["ponga la maleta aquí"] },
        { type: "type", q: "Translate: Don't leave now. (tú)", answers: ["no salgas ahora"] },
        { type: "order", q: "Build: Don't buy it. (tú)", words: ["compres", "lo", "No"], answer: "No lo compres" }
      ]
    },
    {
      id: "u8",
      num: 8,
      title: "Mejor que",
      subtitle: "Comparing, and saying what you think",
      hours: "6",
      canDo: [
        "Compare with más, menos, tan… como, mejor, and peor",
        "Make a superlative: el más, la mejor",
        "Give a simple opinion: me parece, creo que"
      ],
      lessons: [
        {
          id: "u8l1",
          title: "More, less, as … as",
          blocks: [
            { type: "p", html: "Comparison in Spanish is a frame you drop words into. The adjective still agrees with the noun: <em>más alta, más altos</em>." },
            { type: "table", caption: "The frames", headers: ["Idea", "Pattern", "Example"], rows: [
              ["more … than", "más + adj + que", "Ana es más alta que Luis."],
              ["less … than", "menos + adj + que", "Este es menos caro que ese."],
              ["as … as", "tan + adj + como", "Es tan alto como su padre."],
              ["more / less of a noun", "más / menos + noun + que", "Tengo más tiempo que tú."],
              ["better / worse", "mejor / peor + que", "Este café es mejor que ese."],
              ["older / younger", "mayor / menor + que", "Soy mayor que mi hermano."]
            ]},
            { type: "note", html: "<em>Mejor</em> and <em>peor</em> do not take <em>más</em>: say <em>mejor</em>, not <em>más mejor</em>. Same for <em>mayor</em> and <em>menor</em> when you mean older and younger. <em>Más grande</em> is size. <em>Mayor</em> is age or importance. <em>Muy</em> goes with adjectives (<em>muy caro</em>). <em>Mucho</em> goes with nouns (<em>mucho dinero</em>) and after verbs (<em>trabajo mucho</em>)." }
          ]
        },
        {
          id: "u8l2",
          title: "The most, and a short opinion",
          blocks: [
            { type: "p", html: "The superlative is the comparative plus <em>el / la / los / las</em>, and the group uses <em>de</em>: <em>el restaurante más barato del barrio</em>. Irregulars: <em>el mejor, la mejor, los peores</em>." },
            { type: "vocab", title: "Opinions you can actually use", items: [
              { es: "me parece…", en: "it seems … to me" },
              { es: "creo que…", en: "I think that…" },
              { es: "no me parece", en: "it doesn't seem so to me" },
              { es: "me parece bien / mal", en: "seems fine / a bad idea to me" },
              { es: "estoy de acuerdo", en: "I agree" },
              { es: "no estoy de acuerdo", en: "I don't agree" },
              { es: "depende", en: "it depends" },
              { es: "prefiero…", en: "I prefer…" }
            ]},
            { type: "note", html: "Skip <em>no creo que sea</em> for now. At A2, <em>no me parece buena idea</em> and <em>prefiero el otro</em> do the same job without a new mood." },
            { type: "dialogue", title: "Which restaurant?", lines: [
              { who: "Ali", es: "¿Dónde comemos? Este sitio es más barato que el de ayer.", en: "Where shall we eat? This place is cheaper than yesterday's.", side: "a" },
              { who: "Bea", es: "Sí, pero aquel es mejor. La comida es más rica.", en: "Yes, but that one is better. The food is tastier.", side: "b" },
              { who: "Ali", es: "También es más caro. Y está tan lejos como el museo.", en: "It's also more expensive. And it's as far as the museum.", side: "a" },
              { who: "Bea", es: "Me parece bien pagar un poco más. Es el mejor del barrio.", en: "Paying a bit more seems fine to me. It's the best in the neighbourhood.", side: "b" },
              { who: "Ali", es: "Vale. Estoy de acuerdo.", en: "OK. I agree.", side: "a" }
            ]}
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the comparison frames.", pairs: [["más… que", "more … than"], ["menos… que", "less … than"], ["tan… como", "as … as"], ["mejor que", "better than"], ["peor que", "worse than"], ["mayor que", "older than"]] },
        { type: "match", q: "Match the opinion lines.", pairs: [["me parece bien", "seems fine to me"], ["creo que sí", "I think so"], ["estoy de acuerdo", "I agree"], ["no estoy de acuerdo", "I disagree"], ["depende", "it depends"], ["prefiero este", "I prefer this one"]] },
        { type: "match", q: "Match muy and mucho.", pairs: [["muy caro", "very expensive"], ["mucho dinero", "a lot of money"], ["trabajo mucho", "I work a lot"], ["muy lejos", "very far"], ["mucha gente", "a lot of people"]] },
        { type: "type", q: "bigger than (más…)", answers: ["más grande que"] },
        { type: "type", q: "less expensive than", answers: ["menos caro que"] },
        { type: "type", q: "as tall as (masculine)", answers: ["tan alto como"] },
        { type: "type", q: "better than that one (masculine)", answers: ["mejor que ese"] },
        { type: "type", q: "the biggest (masculine)", answers: ["el más grande"] },
        { type: "type", q: "worse than this one (masculine)", answers: ["peor que este"] },
        { type: "mc", q: "«Ana es ___ alta que su hermana.»", options: ["más", "tan", "muy", "mucho"], answer: 0 },
        { type: "mc", q: "«Es ___ alto como su padre.»", options: ["más", "tan", "tanto", "muy"], answer: 1 },
        { type: "mc", q: "Which comparison is wrong?", options: ["Este café es mejor.", "Este café es más mejor.", "Este café es peor.", "Este café es el mejor."], answer: 1 },
        { type: "mc", q: "«Tengo ___ tiempo que tú.»", options: ["muy", "más", "tan", "el"], answer: 1 },
        { type: "mc", q: "Superlative, a group: the cheapest restaurant in the neighbourhood.", options: ["el restaurante más barato del barrio", "el restaurante tan barato del barrio", "el restaurante más barato que el barrio", "muy restaurante barato"], answer: 0 },
        { type: "mc", q: "«Hay ___ gente en el mercado.»", options: ["muy", "mucha", "tan", "mejor"], answer: 1 },
        { type: "tf", q: "Mayor que is the usual way to say older than a person.", answer: true },
        { type: "tf", q: "The superlative uses que before the group: el más barato que el barrio.", answer: false, explain: "The group takes de: el más barato del barrio." },
        { type: "order", q: "Build: This one is cheaper than that one.", words: ["ese", "que", "barato", "más", "es", "Este"], answer: "Este es más barato que ese" }
      ],
      quiz: [
        { type: "mc", q: "Two trains. Yours costs less. You say:", options: ["Mi tren es más caro que el tuyo.", "Mi tren es menos caro que el tuyo.", "Mi tren es tan caro como el tuyo.", "Mi tren es el más caro."], answer: 1 },
        { type: "mc", q: "You and your sister are the same height. You say:", options: ["Soy más alta que ella.", "Soy tan alta como ella.", "Soy menos alta que ella.", "Soy la más alta de la familia."], answer: 1 },
        { type: "mc", q: "You like the plan. Which opinion stays inside A2 grammar?", options: ["Me parece buena idea.", "No creo que sea buena idea.", "Sea mejor ir.", "Dudo que venga."], answer: 0 },
        { type: "mc", q: "A friend says the museum is too far. You disagree:", options: ["Estoy de acuerdo.", "No estoy de acuerdo.", "Depende.", "Me parece bien."], answer: 1 },
        { type: "mc", q: "«Es el mejor del menú» means:", options: ["it is better than one item only, with que", "it is the best thing on the menu", "it is as good as the menu", "it is worse than the menu"], answer: 1 },
        { type: "mc", q: "Which muy / mucho sentence is wrong?", options: ["Trabajo mucho.", "Es muy interesante.", "Tengo muy dinero.", "Hay mucha gente."], answer: 2 },
        { type: "mc", q: "Age, not size: you are older than your brother.", options: ["Soy más grande que mi hermano.", "Soy mayor que mi hermano.", "Soy más mayor que mi hermano.", "Soy tan mayor como él."], answer: 1 },
        { type: "mc", q: "You would rather have the other table. You say:", options: ["Prefiero la otra mesa.", "Me parece la otra mesa.", "Estoy de acuerdo con la mesa.", "La otra mesa es para mí."], answer: 0 },
        { type: "mc", q: "«Madrid es más grande que Valencia» compares:", options: ["two cities, Madrid bigger", "Madrid as the biggest in the world", "equal size", "Valencia older than Madrid"], answer: 0 },
        { type: "mc", q: "The frame for equality is:", options: ["más… que", "menos… que", "tan… como", "el más… de"], answer: 2 },
        { type: "mc", q: "«Este libro es peor que ese» means:", options: ["this book is worse than that one", "this book is better", "the books are equal", "this book is the worst in the shop"], answer: 0 },
        { type: "tf", q: "Más mejor is not Spanish. The form is mejor.", answer: true },
        { type: "tf", q: "Tan agrees like an adjective: tana alta.", answer: false, explain: "Tan never changes. The adjective after it agrees: tan alta, tan altos." },
        { type: "tf", q: "Del barrio is de + el, used after a superlative to name the group.", answer: true },
        { type: "type", q: "Translate: Madrid is bigger than Valencia.", answers: ["Madrid es más grande que Valencia"] },
        { type: "type", q: "Translate: This coffee is better than that one.", answers: ["este café es mejor que ese"] },
        { type: "type", q: "Translate: She is as tall as her sister.", answers: ["es tan alta como su hermana", "ella es tan alta como su hermana"] },
        { type: "type", q: "Translate: It is the cheapest restaurant.", answers: ["es el restaurante más barato"] },
        { type: "type", q: "Translate: This book is worse.", answers: ["este libro es peor"] },
        { type: "order", q: "Build: I think this one is better.", words: ["mejor", "es", "este", "que", "Creo"], answer: "Creo que este es mejor" }
      ]
    },
    {
      id: "u9",
      num: 9,
      title: "Por y para",
      subtitle: "Reasons, purpose, and getting somewhere",
      hours: "6–7",
      canDo: [
        "Choose para for purpose, recipient, deadline, and destination",
        "Choose por for reason, exchange, route, and thanks",
        "Buy a ticket, name a platform, and talk about a delay"
      ],
      lessons: [
        {
          id: "u9l1",
          title: "Two words that both mean for",
          blocks: [
            { type: "p", html: "English <em>for</em> splits in two. If you remember only one test, use this: <em>para</em> points forward (a goal, a person, a deadline, a destination). <em>Por</em> looks at the cause, the price, or the path you take through something." },
            { type: "table", caption: "para — forward", headers: ["Use", "Example"], rows: [
              ["purpose", "Estudio para trabajar en España."],
              ["recipient", "Este regalo es para ti."],
              ["deadline", "Lo necesito para el lunes."],
              ["destination", "Salgo para el aeropuerto."],
              ["opinion", "Para mí, es caro."]
            ]},
            { type: "table", caption: "por — cause, price, path", headers: ["Use", "Example"], rows: [
              ["reason", "Llegué tarde por el tráfico."],
              ["exchange / price", "Lo compré por diez euros."],
              ["through / along", "Caminamos por el centro."],
              ["thanks", "Gracias por tu ayuda."],
              ["a bounded stretch of time", "Estuve allí por dos horas."],
              ["means", "Te llamo por teléfono."]
            ]},
            { type: "note", html: "<em>Por la mañana</em> is the time-of-day phrase you already know. It is not the same choice as <em>para</em>. And <em>por dos horas</em> is a finished block of time. How long you have been doing something up to now is the next unit: <em>hace dos años que vivo aquí</em>, not <em>por dos años</em>." }
          ]
        },
        {
          id: "u9l2",
          title: "At the station",
          blocks: [
            { type: "vocab", title: "Travel words", items: [
              { es: "el billete", en: "the ticket" },
              { es: "el billete de ida y vuelta", en: "the return ticket" },
              { es: "la estación", en: "the station" },
              { es: "el andén", en: "the platform" },
              { es: "la salida", en: "the departure / exit" },
              { es: "la llegada", en: "the arrival" },
              { es: "el retraso", en: "the delay" },
              { es: "la reserva", en: "the booking" },
              { es: "facturar", en: "to check in (a bag)" },
              { es: "¿a qué hora sale?", en: "what time does it leave?" }
            ]},
            { type: "dialogue", title: "A delayed train", lines: [
              { who: "Tú", es: "Hola, un billete para Sevilla, por favor. ¿Cuánto cuesta?", en: "Hi, a ticket to Seville, please. How much is it?", side: "b" },
              { who: "Taquilla", es: "Cuarenta euros. El tren sale a las tres por el andén cinco.", en: "Forty euros. The train leaves at three from platform five.", side: "a" },
              { who: "Tú", es: "¿Hay retraso?", en: "Is there a delay?", side: "b" },
              { who: "Taquilla", es: "Sí, por una avería. Sale con veinte minutos de retraso.", en: "Yes, because of a breakdown. It leaves twenty minutes late.", side: "a" },
              { who: "Tú", es: "Gracias por la información. Lo necesito para una reunión.", en: "Thanks for the information. I need it for a meeting.", side: "b" }
            ]},
            { type: "p", html: "Read the two little words in that last line. <em>Gracias por</em> thanks for the information. <em>Para una reunión</em> the purpose. That is the whole unit in one breath." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the para uses.", pairs: [["para aprender", "in order to learn"], ["para ti", "for you (recipient)"], ["para el lunes", "by Monday (deadline)"], ["para el aeropuerto", "heading to the airport"], ["para mí", "in my opinion"]] },
        { type: "match", q: "Match the por uses.", pairs: [["por el tráfico", "because of the traffic"], ["por diez euros", "for ten euros (price)"], ["por el parque", "through the park"], ["gracias por", "thanks for"], ["por teléfono", "by phone"]] },
        { type: "match", q: "Match the station words.", pairs: [["el billete", "ticket"], ["el andén", "platform"], ["el retraso", "delay"], ["la estación", "station"], ["la salida", "departure"], ["la llegada", "arrival"]] },
        { type: "type", q: "in order to learn (para + infinitive)", answers: ["para aprender"] },
        { type: "type", q: "because of the traffic", answers: ["por el tráfico"] },
        { type: "type", q: "thanks for everything", answers: ["gracias por todo"] },
        { type: "type", q: "the ticket", answers: ["el billete"] },
        { type: "type", q: "the platform", answers: ["el andén"] },
        { type: "type", q: "by Monday (deadline)", answers: ["para el lunes"] },
        { type: "mc", q: "«Estudio español ___ trabajar aquí.»", options: ["por", "para", "en", "de"], answer: 1 },
        { type: "mc", q: "«Llegamos tarde ___ la lluvia.»", options: ["para", "por", "hacia el objetivo", "a"], answer: 1 },
        { type: "mc", q: "«Este libro es ___ mi madre.» (she will receive it)", options: ["por", "para", "en", "con"], answer: 1 },
        { type: "mc", q: "«Pagamos veinte euros ___ las entradas.»", options: ["para", "por", "hacia", "según"], answer: 1 },
        { type: "mc", q: "«El tren sale ___ el andén dos.» (from / via that platform)", options: ["para", "por", "para ti", "hacia que"], answer: 1 },
        { type: "mc", q: "Which sentence uses para as a deadline?", options: ["Lo quiero para el viernes.", "Lo compré por diez euros.", "Caminamos por el centro.", "Gracias por tu ayuda."], answer: 0 },
        { type: "tf", q: "Gracias is followed by por, not para.", answer: true },
        { type: "tf", q: "Para mí gives an opinion. Por mí, in this unit's frame, is the same deadline.", answer: false, explain: "Para mí means in my opinion. Por is not the deadline word; para el lunes is." },
        { type: "order", q: "Build: Thanks for your help.", words: ["ayuda", "tu", "por", "Gracias"], answer: "Gracias por tu ayuda" }
      ],
      quiz: [
        { type: "mc", q: "You are explaining why you study Spanish: you want to work here. You say:", options: ["Estudio español por trabajar aquí.", "Estudio español para trabajar aquí.", "Estudio español en trabajar.", "Estudio español de trabajar."], answer: 1 },
        { type: "mc", q: "You were late because of the traffic. You say:", options: ["Llegué tarde para el tráfico.", "Llegué tarde por el tráfico.", "Llegué tarde para llegar.", "Llegué tarde a el tráfico."], answer: 1 },
        { type: "mc", q: "At the ticket window you want Seville as the destination. You say:", options: ["Un billete por Sevilla.", "Un billete para Sevilla.", "Un billete en Sevilla.", "Un billete de Sevilla a mí."], answer: 1 },
        { type: "mc", q: "You paid twelve euros for the book. You say:", options: ["Lo compré para doce euros.", "Lo compré por doce euros.", "Lo compré para el lunes.", "Lo compré en la librería."], answer: 1 },
        { type: "mc", q: "Which thanks is right?", options: ["Gracias para tu ayuda.", "Gracias por tu ayuda.", "Gracias a tu ayuda por.", "Gracias en tu ayuda."], answer: 1 },
        { type: "mc", q: "Which sentence uses por for the platform?", options: ["Sale para el andén cinco.", "Sale por el andén cinco.", "Sale en el andén cinco.", "Sale al andén cinco."], answer: 1 },
        { type: "mc", q: "You need the report by Monday. You say:", options: ["Lo necesito por el lunes.", "Lo necesito para el lunes.", "Lo necesito por el tráfico.", "Lo necesito en el lunes."], answer: 1 },
        { type: "mc", q: "A gift, and your mother is the person who will get it:", options: ["Es por mi madre.", "Es para mi madre.", "Es por diez euros.", "Es de mi madre."], answer: 1 },
        { type: "mc", q: "«Hay veinte minutos de retraso» means:", options: ["the train is twenty minutes late", "the ticket costs twenty minutes", "platform twenty is closed", "you have a twenty-minute purpose"], answer: 0 },
        { type: "mc", q: "Which pair is the right split?", options: ["para = reason, por = purpose", "para = purpose and deadline, por = reason and price", "both always mean through", "para = thanks, por = recipient"], answer: 1 },
        { type: "mc", q: "You walked through the old town, not toward a deadline. You say:", options: ["Caminamos para llegar al centro.", "Caminamos por el centro.", "Lo necesito para el lunes.", "Gracias por caminar."], answer: 1 },
        { type: "tf", q: "Un billete de ida y vuelta is a return ticket.", answer: true },
        { type: "tf", q: "Por dos horas and hace dos años que vivo aquí express the same time idea.", answer: false, explain: "Por dos horas is a finished block of time. Hace dos años que… is how long something has lasted up to now." },
        { type: "tf", q: "Para mí, es caro means in my opinion it is expensive.", answer: true },
        { type: "type", q: "Translate: I study Spanish in order to work here.", answers: ["estudio español para trabajar aquí"] },
        { type: "type", q: "Translate: We walked through the centre.", answers: ["caminamos por el centro"] },
        { type: "type", q: "Translate: The train leaves for Seville.", answers: ["el tren sale para Sevilla"] },
        { type: "type", q: "Translate: Thanks for your help.", answers: ["gracias por tu ayuda"] },
        { type: "type", q: "Translate: It is a gift for my mother.", answers: ["es un regalo para mi madre"] },
        { type: "order", q: "Build: I am leaving for the airport.", words: ["aeropuerto", "el", "para", "Salgo"], answer: "Salgo para el aeropuerto" }
      ]
    },
    {
      id: "u10",
      num: 10,
      title: "El año que viene",
      subtitle: "Future, obligations, and how long",
      hours: "7",
      canDo: [
        "Use the simple future for promises and predictions",
        "Say me gustaría, tengo que, hay que, and deber",
        "Say how long something has lasted with hace… que and desde"
      ],
      lessons: [
        {
          id: "u10l1",
          title: "I will, and I would like",
          blocks: [
            { type: "p", html: "You already make plans with <em>ir a</em>. The simple future is the other tool: a promise, a prediction, or something further off. Add the ending to the whole infinitive. The endings are the same for <em>-ar, -er,</em> and <em>-ir</em>." },
            { type: "table", caption: "Future endings on the infinitive", headers: ["", "hablar", "tener", "hacer"], rows: [
              ["yo", "hablaré", "tendré", "haré"],
              ["tú", "hablarás", "tendrás", "harás"],
              ["él / usted", "hablará", "tendrá", "hará"],
              ["nosotros", "hablaremos", "tendremos", "haremos"],
              ["vosotros", "hablaréis", "tendréis", "haréis"],
              ["ellos / ustedes", "hablarán", "tendrán", "harán"]
            ]},
            { type: "note", html: "A short list of irregular stems, then the same endings: <em>tener → tendr-</em>, <em>hacer → har-</em>, <em>poder → podr-</em>, <em>salir → saldr-</em>, <em>venir → vendr-</em>, <em>decir → dir-</em>, <em>poner → pondr-</em>, <em>saber → sabr-</em>, <em>querer → querr-</em>, <em>haber → habr-</em> (<em>habrá</em> = there will be). <em>Me gustaría</em> plus an infinitive is the polite want: <em>me gustaría vivir en México</em>. Treat it as a chunk. It is softer than <em>quiero</em>." }
          ]
        },
        {
          id: "u10l2",
          title: "Have to, and for how long",
          blocks: [
            { type: "p", html: "Obligation is three chunks. <em>Tengo que estudiar</em>: I personally have to. <em>Hay que reservar</em>: one has to, nobody in particular. <em>Debes descansar</em>: you should. All three take the infinitive." },
            { type: "table", caption: "How long, up to now", headers: ["Pattern", "Example"], rows: [
              ["hace + time + que + present", "Hace tres años que vivo aquí."],
              ["present + desde hace + time", "Vivo aquí desde hace tres años."],
              ["present + desde + a date", "Vivo aquí desde 2022."]
            ]},
            { type: "note", html: "The verb is present, not past. You still live here. <em>Hace tres años que vivía aquí</em> would mean you no longer do, and that is a later contrast. Do not use <em>por tres años</em> for this meaning." },
            { type: "dialogue", title: "Next year", lines: [
              { who: "Clara", es: "¿Qué harás el año que viene?", en: "What will you do next year?", side: "a" },
              { who: "Tomás", es: "Tendré que buscar trabajo. Me gustaría vivir en Valencia.", en: "I will have to look for a job. I would like to live in Valencia.", side: "b" },
              { who: "Clara", es: "¿Cuánto tiempo llevas aquí? Bueno: ¿hace cuánto que vives aquí?", en: "How long have you been here?", side: "a" },
              { who: "Tomás", es: "Hace dos años que vivo en esta ciudad. Antes vivía con mis padres.", en: "I have lived in this city for two years. Before that I lived with my parents.", side: "b" },
              { who: "Clara", es: "Yo saldré en junio. Hay que vender el piso primero.", en: "I will leave in June. The flat has to be sold first.", side: "a" }
            ]},
            { type: "p", html: "If you can tell that story — a past, a length of time, an obligation, and a wish — you are working at A2. The exam asks for exactly those moves." }
          ]
        }
      ],
      practice: [
        { type: "match", q: "Match the future of hablar.", pairs: [["hablaré", "I will speak"], ["hablarás", "you will speak"], ["hablará", "he will speak"], ["hablaremos", "we will speak"], ["hablarán", "they will speak"]] },
        { type: "match", q: "Match the irregular future stems.", pairs: [["tendré", "I will have"], ["haré", "I will do"], ["podré", "I will be able to"], ["saldré", "I will leave"], ["diré", "I will say"], ["habrá", "there will be"]] },
        { type: "match", q: "Match the chunks.", pairs: [["me gustaría", "I would like"], ["tengo que", "I have to"], ["hay que", "one has to / it's necessary"], ["debo", "I should"], ["desde hace", "for (time up to now)"], ["el año que viene", "next year"]] },
        { type: "type", q: "I will speak with you. (yo)", answers: ["hablaré contigo"] },
        { type: "type", q: "I will have time.", answers: ["tendré tiempo"] },
        { type: "type", q: "I would like a tea.", answers: ["me gustaría un té"] },
        { type: "type", q: "I have to leave.", answers: ["tengo que salir"] },
        { type: "type", q: "for two years (the hace chunk, just the time phrase)", answers: ["hace dos años"] },
        { type: "type", q: "one must pay", answers: ["hay que pagar"] },
        { type: "mc", q: "«Mañana te ___.» (yo, llamar, future)", options: ["llamo a", "llamaré", "llamaba", "he llamado"], answer: 1 },
        { type: "mc", q: "«El año que viene ___ en otra ciudad.» (ellos, vivir)", options: ["viven", "vivirán", "vivían", "vivieron"], answer: 1 },
        { type: "mc", q: "Which stem is the future of hacer?", options: ["hacer-", "har-", "hic-", "haz-"], answer: 1 },
        { type: "mc", q: "«___ reservar con tiempo.» (impersonal obligation)", options: ["Tengo que", "Hay que", "Me gustaría", "Haré"], answer: 1 },
        { type: "mc", q: "«Hace un año que ___ aquí.»", options: ["viví", "vivo", "vivía y ya no, in this pattern", "viviré"], answer: 1 },
        { type: "mc", q: "Softer than quiero:", options: ["me gustaría viajar", "tengo que viajar", "hay que viajar", "debo viajar"], answer: 0 },
        { type: "tf", q: "Future endings are added to the infinitive, not to the stem of the present.", answer: true },
        { type: "tf", q: "Hace dos años que vivo aquí uses a past verb because the two years are in the past.", answer: false, explain: "The verb stays in the present: you still live here. Hace names the length of time." },
        { type: "order", q: "Build: Tomorrow I will have time.", words: ["tiempo", "tendré", "Mañana"], answer: "Mañana tendré tiempo" }
      ],
      quiz: [
        { type: "mc", q: "A friend asks about next summer. You have decided you will leave early. You say:", options: ["El año pasado salí temprano.", "El año que viene saldré temprano.", "Hace un año que salgo temprano.", "He salido temprano muchas veces."], answer: 1 },
        { type: "mc", q: "You want something, politely, not as an order. You say:", options: ["Tengo que vivir en México.", "Me gustaría vivir en México.", "Hay que vivir en México.", "Vive en México."], answer: 1 },
        { type: "mc", q: "The flat must be sold, and it is not only your personal duty. You say:", options: ["Tengo que vender el piso.", "Hay que vender el piso.", "Me gustaría vender el piso.", "Vendí el piso."], answer: 1 },
        { type: "mc", q: "Which future form of tener is right for yo?", options: ["teneré", "tendré", "tenré", "tuveré"], answer: 1 },
        { type: "mc", q: "You have lived here since 2022 and you still do. You say:", options: ["Vivo aquí desde 2022.", "Viví aquí en 2022.", "Vivo aquí por 2022.", "Vivía aquí desde 2022."], answer: 0 },
        { type: "mc", q: "«Habrá tormenta» means:", options: ["there was a storm", "there will be a storm", "there is a storm every day", "you should make a storm"], answer: 1 },
        { type: "mc", q: "The exam is tomorrow and it is your job to study. You say:", options: ["Hay que estudiar, pero no yo.", "Tengo que estudiar.", "Me gustaría estudiar, y ya es obligatorio.", "Estudiaré si quiero."], answer: 1 },
        { type: "mc", q: "Which sentence means you still work here, and it has been three years?", options: ["Trabajo aquí por tres años.", "Hace tres años que trabajo aquí.", "Hace tres años trabajé aquí.", "Trabajaré aquí tres años."], answer: 1 },
        { type: "mc", q: "«¿Qué harás?» asks:", options: ["what you used to do", "what you will do", "what you have already done", "what you had to do yesterday"], answer: 1 },
        { type: "mc", q: "You are giving advice, not an order and not a wish. You say:", options: ["Debes descansar.", "Me gustaría descansar.", "Hay que descansar.", "Descansa ahora mismo."], answer: 0 },
        { type: "mc", q: "Which one is not a future form?", options: ["podré", "vendrán", "deciré", "pondré"], answer: 2 },
        { type: "tf", q: "Me gustaría is softer than quiero.", answer: true },
        { type: "tf", q: "Hay que plus a person, hay que yo salir, is the normal pattern.", answer: false, explain: "Hay que takes the infinitive alone. The personal form is tengo que salir." },
        { type: "tf", q: "Desde hace tres años and hace tres años que can say the same thing.", answer: true },
        { type: "type", q: "Translate: I will leave early tomorrow.", answers: ["mañana saldré temprano"] },
        { type: "type", q: "Translate: I would like to live in Mexico.", answers: ["me gustaría vivir en México"] },
        { type: "type", q: "Translate: I have to study tonight.", answers: ["tengo que estudiar esta noche"] },
        { type: "type", q: "Translate: I have lived here for three years.", answers: ["hace tres años que vivo aquí"] },
        { type: "type", q: "Translate: One has to book a table.", answers: ["hay que reservar mesa", "hay que reservar una mesa"] },
        { type: "order", q: "Build: Next year I will have to look for a job.", words: ["trabajo", "buscar", "que", "tendré", "viene", "que", "año", "El"], answer: "El año que viene tendré que buscar trabajo" }
      ]
    }
  ],
  exam: [
    { type: "mc", q: "You are telling a coworker about one finished evening. Which opening is right?", options: ["Anoche estudiaba siempre.", "Anoche estudié.", "Anoche estudio.", "Anoche voy a estudiar."], answer: 1 },
    { type: "type", q: "Translate: Yesterday I spoke with Ana.", answers: ["ayer hablé con Ana"] },
    { type: "mc", q: "«Nosotros ___ la cena y después salimos.» (hacer, one night)", options: ["hacíamos", "hicimos", "hacemos", "haremos"], answer: 1 },
    { type: "mc", q: "Which preterite is spelled wrong?", options: ["dije", "dijo", "dijeron", "dijieron"], answer: 3 },
    { type: "type", q: "Translate: We went to Granada in April.", answers: ["fuimos a Granada en abril"] },
    { type: "mc", q: "«No ___ sacar fotos: no tenía batería.» (yo, poder)", options: ["pude", "puedo", "podré", "pudo"], answer: 0 },
    { type: "tf", q: "The yo preterite of ver is written ví.", answer: false, explain: "It is vi, with no accent. Vio has no accent either." },
    { type: "tf", q: "Ir and ser share the preterite: fui, fuiste, fue.", answer: true },
    { type: "type", q: "Translate: When I was young I lived with my parents.", answers: ["cuando era joven vivía con mis padres"] },
    { type: "mc", q: "A habit, years ago, not one Saturday:", options: ["El sábado pasado fui al mercado.", "De niño iba al mercado con mi padre.", "Ayer fui al mercado.", "He ido al mercado hoy."], answer: 1 },
    { type: "mc", q: "«En aquella época la casa ___ pequeña.»", options: ["fue", "era", "estuvo", "es"], answer: 1 },
    { type: "tf", q: "The imperfect is the tense for habits, age, time, and background weather.", answer: true },
    { type: "mc", q: "Pick the sentence that uses both pasts correctly.", options: ["Leía cuando entró Marta.", "Leí cuando entraba Marta.", "He leído cuando entró Marta.", "Leía cuando entraba Marta."], answer: 0 },
    { type: "type", q: "Translate: Last Saturday I visited my grandparents.", answers: ["el sábado pasado visité a mis abuelos"] },
    { type: "mc", q: "«De repente se fue la luz» is:", options: ["a childhood habit", "a sudden finished event", "a plan", "a comparison"], answer: 1 },
    { type: "tf", q: "Mientras dormíamos describes something already going on.", answer: true },
    { type: "type", q: "Translate: I have written three emails.", answers: ["he escrito tres correos"] },
    { type: "mc", q: "«¿Has estado alguna vez en Lisboa?» asks about:", options: ["a plan for Lisbon", "life experience", "a command", "a comparison"], answer: 1 },
    { type: "mc", q: "Which exam participle does not exist?", options: ["hecho", "visto", "decido", "roto"], answer: 2 },
    { type: "tf", q: "He comido means I am eating at this moment.", answer: false, explain: "It is the present perfect: I have eaten. Right now is estoy comiendo or como." },
    { type: "type", q: "Translate: I told Luis (it, to him).", answers: ["se lo dije a Luis"] },
    { type: "mc", q: "The keys are feminine, las llaves. You haven't got them. You say:", options: ["No los tengo.", "No las tengo.", "No le tengo.", "No la tengo."], answer: 1 },
    { type: "mc", q: "Which line is the grammatical one?", options: ["Le lo mandé.", "Se lo mandé.", "Lo le mandé.", "Les lo mandé."], answer: 1 },
    { type: "tf", q: "Quiero comprarlo and lo quiero comprar are both acceptable.", answer: true },
    { type: "mc", q: "You need a friend to speak more quietly. You say:", options: ["Hablas más bajo.", "Habla más bajo.", "Hablaste más bajo.", "No habla más bajo."], answer: 1 },
    { type: "type", q: "Translate: Don't open the window. (tú)", answers: ["no abras la ventana"] },
    { type: "mc", q: "At reception, usted, you want them to call a taxi:", options: ["Llama un taxi.", "Llame un taxi, por favor.", "Llamas un taxi.", "No llamas un taxi."], answer: 1 },
    { type: "tf", q: "Haz is the affirmative tú command of hacer.", answer: true },
    { type: "mc", q: "Two flats. Yours is smaller. You say:", options: ["Mi piso es más grande que el tuyo.", "Mi piso es menos grande que el tuyo.", "Mi piso es más mejor.", "Mi piso es tan grande que el tuyo."], answer: 1 },
    { type: "type", q: "Translate: This soup is tastier than that one.", answers: ["esta sopa está más rica que esa"] },
    { type: "mc", q: "«Es la mejor cafetería del barrio» means:", options: ["it is better than one café, with que only", "it is the best café in the neighbourhood", "it is as good as the neighbourhood", "it is worse than the neighbourhood"], answer: 1 },
    { type: "tf", q: "Tan… como is the frame for as … as.", answer: true },
    { type: "mc", q: "You are learning Spanish so you can travel. You say:", options: ["Estudio por viajar.", "Estudio para viajar.", "Estudio en viajar.", "Viajo para estudiar."], answer: 1 },
    { type: "type", q: "Translate: I am leaving for the airport.", answers: ["salgo para el aeropuerto"] },
    { type: "mc", q: "You were late because of a delay. You say:", options: ["Llegué tarde para el retraso.", "Llegué tarde por el retraso.", "Llegué tarde para las tres.", "Salgo para el retraso."], answer: 1 },
    { type: "tf", q: "Gracias por tu ayuda is the right thanks.", answer: true },
    { type: "type", q: "Translate: Next year I will study more.", answers: ["el año que viene estudiaré más"] },
    { type: "mc", q: "«Mañana ___ más tiempo.» (yo, tener, future)", options: ["tengo", "tendré", "tuve", "tenía"], answer: 1 },
    { type: "type", q: "Translate: I have worked here for a year.", answers: ["hace un año que trabajo aquí"] },
    { type: "order", q: "Build: I would like a coffee.", words: ["café", "un", "gustaría", "Me"], answer: "Me gustaría un café" }
  ],
  speaking: [
    "Tell a friend what you did yesterday, in five sentences, with times and luego or después.",
    "Tell a short trip story: where you went, one problem, and what you did in the end.",
    "Describe what you used to do on Saturdays as a child. Stay in the imperfect.",
    "Ask someone to pass you something, then say you already told someone else.",
    "Compare two neighbourhoods or two cafés you know, and give an opinion.",
    "Say what you have to do this week, what you would like to do next year, and how long you have lived where you live."
  ],
  writing: [
    "Write 8–10 sentences about last weekend. Use the preterite for what you did and the imperfect once, for the weather or the place.",
    "Write a short message asking a friend for a favour. Use a command or a polite question, and say why with por or para.",
    "Write 6 sentences about your plans and how long you have lived where you live now. Use the future or me gustaría, and hace… que or desde."
  ],
  phrasebook: [
    { group: "What happened", items: [
      { es: "¿Qué hiciste ayer?", en: "What did you do yesterday?" },
      { es: "Ayer trabajé y por la noche salí.", en: "Yesterday I worked and in the evening I went out." },
      { es: "De repente empezó a llover.", en: "Suddenly it started to rain." },
      { es: "Al final todo salió bien.", en: "In the end everything turned out fine." },
      { es: "No pude ir.", en: "I couldn't go." },
      { es: "Te lo dije ayer.", en: "I told you yesterday." }
    ]},
    { group: "Asking for things", items: [
      { es: "¿Me lo pasas?", en: "Can you pass it to me?" },
      { es: "Dímelo, por favor.", en: "Tell me, please." },
      { es: "No te preocupes.", en: "Don't worry." },
      { es: "¿Puedes hablar más bajo?", en: "Can you speak more quietly?" },
      { es: "Llame más tarde, por favor.", en: "Call later, please. (usted)" },
      { es: "¿Me echas una mano?", en: "Can you give me a hand?" }
    ]},
    { group: "Travel", items: [
      { es: "Un billete de ida y vuelta, por favor.", en: "A return ticket, please." },
      { es: "¿De qué andén sale?", en: "Which platform does it leave from?" },
      { es: "¿Hay retraso?", en: "Is there a delay?" },
      { es: "Lo necesito para el viernes.", en: "I need it by Friday." },
      { es: "Gracias por la información.", en: "Thanks for the information." },
      { es: "Llegué tarde por el tráfico.", en: "I was late because of the traffic." }
    ]},
    { group: "Plans and opinions", items: [
      { es: "Me gustaría reservar una mesa.", en: "I would like to book a table." },
      { es: "Tengo que salir temprano.", en: "I have to leave early." },
      { es: "Hace dos años que vivo aquí.", en: "I have lived here for two years." },
      { es: "Me parece bien.", en: "That seems fine to me." },
      { es: "Este es mejor que ese.", en: "This one is better than that one." },
      { es: "El año que viene viajaré.", en: "Next year I will travel." }
    ]}
  ],
  verbs: [
    { inf: "hablar", en: "to speak", tense: "pretérito", forms: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"] },
    { inf: "comer", en: "to eat", tense: "pretérito", forms: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"] },
    { inf: "vivir", en: "to live", tense: "pretérito", forms: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"] },
    { inf: "ir / ser", en: "to go / to be", tense: "pretérito", forms: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"] },
    { inf: "hacer", en: "to do / make", tense: "pretérito", forms: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"] },
    { inf: "tener", en: "to have", tense: "pretérito", forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"] },
    { inf: "estar", en: "to be", tense: "pretérito", forms: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"] },
    { inf: "poder", en: "to be able to", tense: "pretérito", forms: ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"] },
    { inf: "decir", en: "to say", tense: "pretérito", forms: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"] },
    { inf: "hablar", en: "to speak", tense: "imperfecto", forms: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"] },
    { inf: "comer", en: "to eat", tense: "imperfecto", forms: ["comía", "comías", "comía", "comíamos", "comíais", "comían"] },
    { inf: "ser", en: "to be", tense: "imperfecto", forms: ["era", "eras", "era", "éramos", "erais", "eran"] },
    { inf: "ir", en: "to go", tense: "imperfecto", forms: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"] },
    { inf: "comer", en: "to eat", tense: "perfecto", forms: ["he comido", "has comido", "ha comido", "hemos comido", "habéis comido", "han comido"] },
    { inf: "hablar", en: "to speak", tense: "futuro", forms: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"] },
    { inf: "tener", en: "to have", tense: "futuro", forms: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"] },
    { inf: "hacer", en: "to do / make", tense: "futuro", forms: ["haré", "harás", "hará", "haremos", "haréis", "harán"] }
  ]
};

