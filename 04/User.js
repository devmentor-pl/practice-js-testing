// To zadanie polega na zaimplementowaniu funkcjonalności na podstawie testów, które są przygotowane w pliku User.test.js. Zadanie zostanie wykonane jeśli wszystkie testy będą przechodzić.

// PS. Testy możesz uruchomić przy pomocy komenty npm run test-04



// Jeśli spojrzysz do pliku package.json to zobaczysz, że uruchomienie testów dla tego zadania będzie możliwe przy pomocy komendy: npm run test-03.

// PS. Pamiętaj, aby zainstalować niezbędne paczki poprzez npm i.

export default class User {

    constructor({ email, password }) {

        this.email = email;
        this.password = password;

        this.checkData()
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }


    login() {
        if (this.email.includes('devmentor.pl')) {
            return true;
        }
        else {
            return false;
        }
    }

    checkData() {
        if (!this.email.includes('@')) {
            throw new Error('email is incorrect!');
        }

        if (this.password.length <= 5) {
            throw new Error('password is too short!');
        }

    }
}