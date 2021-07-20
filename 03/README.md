 > :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e10-js-testing` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` JavaScript: Testowanie


W pliku `app.js` znajdziesz funkcję, która nie zawiera żadnych instrukcji. Musisz je dopisać. Sama nazwa funkcji powinna Ci zasugerować co ona robi. Jakie parametry powinna posiadać i jakie dane zwracać.

Twoim zadaniem będzie napisanie implementacji tej funkcji zgodnie z duchem TDD czyli red-green-refactor.

Zastanów się jakie testy musisz po kolei zdefiniować. Następnie napisz pierwszy test, potem zrób `commit` i dopiero wykonaj implementację. W momencie kiedy zadziała robisz kolejny `commit`. Zastanawiasz się na refaktorem kodu. Jeśli go zrobisz to znów wykonujesz `commit` itd. W ten sposób będzie widać jakie elementy wykonywałeś po sobie.

Postaraj się napisać conajmniej 3 testy dla tej funkcji. Możesz skorzystać z poniższej listy podpowiedzi:
- Jeśli losujesz liczbę z przedzialu od 1 do 1 to funkcja zwróci 1
- Jeśli podasz jako argument "nie liczbę" to zostanie wyrzucony błąd 
- Jeśli przedział będzie się wykluczał (podasz, że chcesz liczbę od 4 do 3, a nie od 3 do 4) to również zostanie zgłoszony błąd
- Jeśli przekazane argumenty będą poprawne to sprawdzisz czy wylosowana liczba mieści się w zadanym przedziale.

> **Uwaga!** To zadanie umyślnie łamie regułę [FIRST tj. Repeatable](https://devszczepaniak.pl/testy-jednostkowe-first/), aby lepiej zrozumieć dlaczego jest to tak istotne. Rozwiązaniem tego problemu (czyli losowanie za każdym razem innej wartości) byłoby użycie tzw. [Mocków](https://devenv.pl/jest-sposoby-mockowania/). Jednak ten temat zostanie poruszony w późniejszych materiałach i na chwilę obecną nie będziemy się nim przejmować.

&nbsp;

Jeśli spojrzysz do pliku `package.json` to zobaczysz, że uruchomienie testów dla tego zadania będzie możliwe przy pomocy komendy: `npm run test-03`.

PS. Pamiętaj, aby zainstalować niezbędne paczki poprzez `npm i`.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
