> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e10-js-testing` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` JavaScript: Testowanie


Tym razem implementacja już istnieje. Mamy w pliku `DB.js` klasę o tej samej nazwie, która imituje bazę danych. Przykład jej użycia mógłby wyglądać tak jak poniżej:
```
const db = new DB();
db.insert({a: 1, b: 2})
    .then(() => db.insert({a: 3, b: 4}))
    .then(() => db.remove(2))
    .then(() => db.update({id: 1}))
    .then(() => db.getRows())
    .then(rows => console.log(rows)); // [{id: 1}]
```

Poszczególne metody wykonuja asynchronicznie operację: zapisu, odczytu, modyfikacji i usuwania danych z bazy. Przed napisaniem testów postaraj się zrozumieć kod, którym taj został napisany.

Metoda `.async()` udaje tylko kod aynchroniczny. W rzeczywistym rozwiązaniu czego takiego byśmy nie implementowali. Tego elementu nie testujemy.

Twoim zadaniem jest napisanie testów dla tej klasy. Pamiętaj, że ten kod jest asynchroniczny. Postaraj się do każdej metody napisać kilka testów. Na pewno powinieneś napisać testy, które sprawdzają poprawność działania, ale również moment kiedy obietnica jest odrzucona.

Testy uruchamiasz przez `npm run test-05`.

Jeśli znajdziesz błędy w implementacji postaraj się je naprawić. 


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
