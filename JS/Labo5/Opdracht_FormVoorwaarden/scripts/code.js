const setup = () => {
    const btnResultaat = document.getElementById("btnResultaat");
    btnResultaat.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
  //  event.preventDefault();
    const chkRoker = document.getElementById("chkRoker");
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    const favBuurland = document.getElementById("favBuurland");
    const bestellingOptie = document.getElementById("bestellingOptie");


    console.log(`is ${chkRoker.checked ? "een roker" : "geen roker"}`);
    console.log(`moedertaal is ${moedertaal ? moedertaal.value : "nl"}`);
    console.log(`Favoriete buurland is ${favBuurland ? favBuurland.value : "Nederland"}`);
    //Creeren een array van geselecteerde optie, gebruiken ... operand om een nodelist naar array om te zetten
    //map is een methode die een fucntie op ieder element van de array uitvoert.
    console.log(`Bestelling bestaat uit ${[...bestellingOptie.selectedOptions].map(option => option.value).join(", ")}`);
};

window.addEventListener("load", setup);