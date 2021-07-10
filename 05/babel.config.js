// ./babel.config.js

// Plik konfiguracyjny wygląda bardzo prosto.
// Wskazujemy tylko, jaki preset wykorzystujemy
// oraz jaka wersja Node.js ma zostać
// wykorzystana. Wszystko zgodne z tym, co
// znajduje się w dokumentacji Jest.
// Teraz możesz wprowadzić słowa kluczowe
// związane z importem (import … from)
// i eksportem (export default) dla ES6 i wszystko
// będzie działać jak do tej pory.
// Uwaga: od wersji 13 Node.js będzie można
// używać powyższych słów kluczowych bez
// pomocy Babela.

module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};