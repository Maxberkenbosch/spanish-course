# Camino A1 — beginner Spanish

A complete **CEFR A1** Spanish course. When you finish the units, pass the quizzes, and pass the final exam, you will be at A1: you can introduce yourself, handle everyday needs, and have a simple conversation if the other person speaks slowly.

## Open the course

Open `index.html` in a browser (double-click it, or drag it into Chrome / Safari / Firefox). No install, no account.

Progress is saved in that browser on this computer.

## Do the course on your phone

The course is a plain static site, so publishing it is enough to study on a phone.

1. Push this folder to GitHub.
2. In the repository, go to **Settings → Pages**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`, and save. (Pages needs a public repository unless you have a paid plan.)
3. After a minute the course is live at `https://<your-user>.github.io/<repo>/`. Open that link on the phone.
4. Add it to the home screen so it opens like an app, without a browser bar:
   - **iPhone (Safari):** Share → *Add to Home Screen*
   - **Android (Chrome):** ⋮ → *Add to home screen*

Once a page has loaded, everything is cached and **the whole course works offline** — on a plane, on the metro, anywhere. Only the ▶ pronunciation button can need a connection, because some phones stream their Spanish voice.

Two people can each use their own phone: progress lives on the device, so nobody overwrites anybody. That also means progress does not sync between phones, and clearing browser data resets it.

When a phone has internet, it loads the latest files from the URL. Open the app once online after you push and both phones see the new version. Offline they keep the last copy they successfully downloaded.

## What you will be able to do

- Greet people, spell your name, and use *tú* / *usted*
- Talk about who you are, your family, work, and daily routine
- Tell the time and use days and dates
- Order food and say what you like
- Ask for directions and shop for clothes
- Talk about weather and weekend plans

Grammar covered: *ser / estar / tener / hay*, regular present tense, key irregulars (*ir, hacer, querer, poder*), reflexives, *gustar*, articles, adjectives, possessives, demonstratives, question words, and *ir a + infinitive*.

## How to study

A1 is about **50–70 hours** of real work.

1. Do the units in order.
2. Play every ▶ button and repeat out loud.
3. Finish the practice set, then the unit quiz (75% to pass).
4. Use **Verb trainer** for 5 minutes a day.
5. Take the **Final A1 exam**. Then do the speaking and writing prompts without a translator.

Daily plan that works: **45 minutes a day for about 10 weeks**, or 90 minutes a day for 5 weeks.

### Practice and quiz do different jobs

**Practice** drills the machinery: pairing words with their meaning, verb endings, articles, and short answers. Repeat it as often as you like.

**Quiz** is the checkpoint. Every item puts you in a situation ("you step on someone's foot in the metro"), asks you to spot a wrong sentence, or asks for a whole sentence in Spanish. Nothing is copied from the practice set, so a good score means you can actually use the unit rather than remember the drill.

If you edit the exercises, run `node tools/check-course.mjs`. It fails if practice, quiz and the exam start repeating each other, or if an item is broken (answer index out of range, scrambled sentence that cannot be rebuilt, and so on).

## Course map

| Unit | Topic |
| --- | --- |
| 1 Hola | Sounds, greetings, names |
| 2 Yo soy | *Ser*, countries, jobs, numbers 0–100 |
| 3 Mi gente | Family, *tener*, possessives, *hay* |
| 4 ¿Cómo eres? | Descriptions, *ser* vs *estar* |
| 5 Qué hora es | Clock, days, months |
| 6 Mi día | Present tense, routines, questions |
| 7 Buen provecho | Food, *gustar*, restaurant |
| 8 En la ciudad | Places, directions, *ir a* |
| 9 De compras | Clothes, prices, *este / esa* |
| 10 Tiempo libre | Hobbies, weather, plans |

This course teaches international Spanish. *Vosotros* is shown for Spain; *ustedes* is the form to use if you are unsure.
