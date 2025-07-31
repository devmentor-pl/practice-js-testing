//W pliku app.js znajdziesz funkcję, która nie zawiera żadnych instrukcji. Musisz je dopisać. Sama nazwa funkcji powinna Ci zasugerować co ona robi. Jakie parametry powinna posiadać i jakie dane zwracać.

//Twoim zadaniem będzie napisanie implementacji tej funkcji zgodnie z duchem TDD czyli red-green-refactor.

//Zastanów się jakie testy musisz po kolei zdefiniować. Następnie napisz pierwszy test, potem zrób commit i dopiero wykonaj implementację. W momencie kiedy zadziała robisz kolejny commit. Zastanawiasz się na refaktorem kodu. Jeśli go zrobisz to znów wykonujesz commit itd. W ten sposób będzie widać jakie elementy wykonywałeś po sobie.

//Postaraj się napisać conajmniej 3 testy dla tej funkcji. Możesz skorzystać z poniższej listy podpowiedzi:

//Jeśli losujesz liczbę z przedzialu od 1 do 1 to funkcja zwróci 1
//Jeśli podasz jako argument "nie liczbę" to zostanie wyrzucony błąd
//Jeśli przedział będzie się wykluczał (podasz, że chcesz liczbę od 4 do 3, a nie od 3 do 4) to również zostanie zgłoszony błąd
//Jeśli przekazane argumenty będą poprawne to sprawdzisz czy wylosowana liczba mieści się w zadanym przedziale.


export default function randomNumber(min, max) {

if (min === max) {
return min;
}

if( typeof min !== 'number' || typeof max !=='number') {
 
    throw new Error (
        'Property have to be a number'
    );
}

if (max < min) {
throw new Error (
    'min have to be a lower than max'
);}

const randomMath = Math.floor(Math.random() * (max - min)) + min
return randomMath;
}