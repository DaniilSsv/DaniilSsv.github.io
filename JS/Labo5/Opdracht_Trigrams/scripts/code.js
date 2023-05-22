const setup = () => {
    const eenWoord = "onoorbaar";
    wordToTrigram(eenWoord);
}

const wordToTrigram = (word) => {
    //maken een array aan om onze trigrams op te slaan
    let trigrams = [];
    //For lus om eerst volgende 3 letters op te halen en uitprinten
    // en verschuift ieder keer met 1 letter
    for (let i = 0; i < word.length - 2; i++) {
        trigrams.push(word.slice(i, 3));
        console.log("trigram:", word.slice(i, i + 3));
    }
}

window.addEventListener("load", setup);
