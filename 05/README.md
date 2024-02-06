> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e10-js-testing` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._

&nbsp;

# `#05` JavaScript: Testowanie

Tym razem implementacja już istnieje. W pliku `DB.js` znajdziesz klasę, która imituje bazę danych. Przykład jej użycia mógłby wyglądać tak:

```
const db = new DB();
db.insert({a: 1, b: 2})
    .then(() => db.insert({a: 3, b: 4}))
    .then(() => db.remove(2))
    .then(() => db.update({id: 1}))
    .then(() => db.getRows())
    .then(rows => console.log(rows)); // [{id: 1}]
```

Poszczególne metody wykonują asynchronicznie operacje: zapisu, odczytu, modyfikacji i usuwania danych z bazy. Przed stworzeniem testów postaraj się zrozumieć kod, który został tutaj zamieszczony.

Napisz testy dla tej klasy – po kilka dla każdej z metod. Pamiętaj, że ten kod jest asynchroniczny. W testach sprawdzaj:

-   poprawność działania implementacji,
-   przypadek, w którym obietnica jest odrzucana.

Zwróć uwagę, że metoda `.async()` tylko udaje kod asynchroniczny. W rzeczywistym rozwiązaniu czegoś takiego byśmy nie implementowali, dlatego tego elementu nie testujemy.
npm run test-05
Testy uruchomisz przez ``.

Jeśli znajdziesz błędy w implementacji, postaraj się je naprawić.

&nbsp;

> :arrow_left: [_poprzednie zadanie_](./../04) | ~~_następne zadanie_~~ :arrow_right:

> :no_entry: _Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)_
