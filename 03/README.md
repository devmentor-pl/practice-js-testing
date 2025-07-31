> :white_check_mark: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e10-js-testing` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._

&nbsp;

# `#03` JavaScript: Testowanie

Twoim zadaniem jest napisanie implementacji funkcji `randomNumber` z pliku `app.js` zgodnie z duchem TDD, czyli red-green-refactor.

Funkcja ta nie zawiera żadnych instrukcji. Dopisz je. Sama nazwa funkcji powinna Ci zasugerować jej zadanie oraz to, jakie parametry powinna ona przyjmować i jakie dane zwracać.

Zastanów się, jakie testy należy po kolei zdefiniować. Następnie:

- napisz pierwszy test, potem zrób `commit` i dopiero wykonaj implementację,
- kiedy implementacja zadziała, zrób kolejny `commit`,
- wykonaj refaktor kodu, ponownie zrób `commit` itd.

W ten sposób będzie widać, jakie kolejne kroki wykonywałeś.

Postaraj się napisać conajmniej 3 testy dla tej funkcji. Możesz skorzystać z poniższej listy podpowiedzi:

- jeśli losujesz liczbę z przedzialu od 1 do 1, to funkcja zwróci 1,
- jeśli podasz jako argument "nie liczbę", to zostanie rzucony błąd,
- jeśli przedział będzie się wykluczał (podasz, że chcesz liczbę od 4 do 3, a nie od 3 do 4), to również zostanie rzucony błąd,
- jeśli przekazane argumenty będą poprawne, to sprawdzisz, czy wylosowana liczba mieści się w zadanym przedziale.

**Uwaga!** To zadanie specjalnie łamie regułę [Repeatable z zestawu reguł FIRST](https://devszczepaniak.pl/testy-jednostkowe-first/), abyś lepiej zrozumiał, dlaczego jest ona tak istotna. Rozwiązaniem tego problemu (czyli losowania za każdym razem innej wartości) byłoby użycie tzw. [mocków](https://devenv.pl/jest-sposoby-mockowania/). Jednak ten temat zostanie omówiony w następnych materiałach i teraz nie będziemy się nim przejmować.

&nbsp;

Jeśli spojrzysz do pliku `package.json`, to zobaczysz, że uruchomienie testów dla tego zadania będzie możliwe przy pomocy komendy: `npm run test-03`.

PS. Pamiętaj, aby zainstalować niezbędne paczki poprzez `npm i`.

&nbsp;

> :no_entry: _Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-testing/)_

> :arrow_left: [_poprzednie zadanie_](./../02) | [_następne zadanie_](./../04) :arrow_right:
