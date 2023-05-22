const setup = () => {
    const text = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    changeWords(text);
}

const changeWords = (text) => {
    //Splitsen het text op de spaties en zetten het een array
    let words = text.split(" ");
    //Doorlopen de array en indien het woord "de" bevat vervangen we die met "het"
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "de") {
            words[i] = "het";
        }
    }
    //Omdat we ons zin hadden gesplits gaan we nu een array terug krijgen,
    //om ons zin terug normaal te tonen voegen we de spaties terug toe
    console.log(words.join(" "));
}

window.addEventListener("load", setup);